# Phase 2: Discord Bot & Real-Time Notifications

**Goal**: Build the "League Pulse" Discord bot for automated updates and engagement.

---

## Tech Stack & Dependencies

| Package        | Version  | Purpose                                                       |
| -------------- | -------- | ------------------------------------------------------------- |
| discord.js     | ^14.19.3 | Discord API wrapper with slash commands, embeds, interactions |
| bullmq         | ^5.34.x  | Redis-based job queue with scheduling, retries, concurrency   |
| ioredis        | ^5.4.x   | Redis client (shared with existing CacheService)              |
| @prisma/client | ^6.x     | Database ORM for guild configs and preferences                |
| zod            | ^3.x     | Runtime validation (already in @fantasy/types)                |

### Install Commands

```bash
pnpm --filter discord-bot add bullmq
# discord.js and ioredis already installed
```

---

## 2.1 Discord.js v14 Setup

### 2.1.1 Gateway Intents Configuration

Discord.js v14 requires explicit intent declaration. For the League Pulse bot:

```typescript
// services/discord-bot/src/index.ts
import { Client, Collection, GatewayIntentBits } from 'discord.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds, // Required for guild events
    GatewayIntentBits.GuildMessages, // Required to read messages in channels
    GatewayIntentBits.MessageContent, // Required to read message content (privileged)
  ],
});
```

> **Note**: `MessageContent` is a privileged intent requiring approval in the Discord Developer Portal for bots in 100+ servers.

### 2.1.2 Module Augmentation for Type-Safe Commands

Extend the Discord.js Client type to include a commands collection:

```typescript
// services/discord-bot/src/types.ts
import type { ChatInputCommandInteraction, Collection, SlashCommandBuilder } from 'discord.js';

export interface Command {
  data: SlashCommandBuilder;
  execute: (interaction: ChatInputCommandInteraction) => Promise<void>;
}

declare module 'discord.js' {
  interface Client {
    commands: Collection<string, Command>;
  }
}
```

### 2.1.3 Slash Command Structure

Commands follow the `SlashCommandBuilder` pattern:

```typescript
// services/discord-bot/src/commands/setup-league.ts
import { SlashCommandBuilder, ChatInputCommandInteraction, PermissionFlagsBits } from 'discord.js';
import type { Command } from '../types.js';

export const command: Command = {
  data: new SlashCommandBuilder()
    .setName('setup-league')
    .setDescription('Configure a Sleeper league for this channel')
    .addStringOption(option =>
      option.setName('league_id').setDescription('Your Sleeper league ID').setRequired(true)
    )
    .addChannelOption(option =>
      option
        .setName('notification_channel')
        .setDescription('Channel for transaction notifications')
        .setRequired(false)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild) as SlashCommandBuilder,

  async execute(interaction: ChatInputCommandInteraction) {
    const leagueId = interaction.options.getString('league_id', true);
    const channel = interaction.options.getChannel('notification_channel') ?? interaction.channel;

    // Validate league exists via Sleeper API
    // Store guild configuration in database
    // Register league for polling

    await interaction.reply({
      content: `League \`${leagueId}\` configured! Notifications will be sent to ${channel}.`,
      ephemeral: true,
    });
  },
};
```

```typescript
// services/discord-bot/src/commands/standings.ts
import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import type { Command } from '../types.js';

export const command: Command = {
  data: new SlashCommandBuilder()
    .setName('standings')
    .setDescription('Display current league standings'),

  async execute(interaction) {
    await interaction.deferReply();

    // Fetch standings from database/API
    const embed = new EmbedBuilder()
      .setColor(0x00ae86)
      .setTitle('League Standings')
      .setDescription('Current standings for Week 14')
      .addFields(
        { name: '1. Team Alpha', value: '10-3 | 1,542.8 PF', inline: true },
        { name: '2. Team Beta', value: '9-4 | 1,498.2 PF', inline: true },
        { name: '3. Team Gamma', value: '8-5 | 1,456.1 PF', inline: true }
      )
      .setTimestamp();

    await interaction.editReply({ embeds: [embed] });
  },
};
```

```typescript
// services/discord-bot/src/commands/matchups.ts
import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import type { Command } from '../types.js';

export const command: Command = {
  data: new SlashCommandBuilder()
    .setName('matchups')
    .setDescription("Show this week's matchups")
    .addIntegerOption(option =>
      option.setName('week').setDescription('Week number (default: current)').setRequired(false)
    ),

  async execute(interaction) {
    await interaction.deferReply();
    const week = interaction.options.getInteger('week') ?? /* getCurrentWeek() */ 14;

    const embed = new EmbedBuilder()
      .setColor(0x5865f2)
      .setTitle(`Week ${week} Matchups`)
      .addFields(
        { name: 'Matchup 1', value: 'Team Alpha (proj: 142.5)\nvs\nTeam Beta (proj: 138.2)' },
        { name: 'Matchup 2', value: 'Team Gamma (proj: 151.0)\nvs\nTeam Delta (proj: 145.8)' }
      )
      .setFooter({ text: 'Projections update hourly' });

    await interaction.editReply({ embeds: [embed] });
  },
};
```

### 2.1.4 Command Deployment Script

Deploy commands to Discord's API:

```typescript
// services/discord-bot/src/deploy-commands.ts
import { REST, Routes } from 'discord.js';
import { readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function deployCommands() {
  const commands: unknown[] = [];
  const commandsPath = join(__dirname, 'commands');
  const commandFiles = readdirSync(commandsPath).filter(
    f => f.endsWith('.ts') || f.endsWith('.js')
  );

  for (const file of commandFiles) {
    const { command } = await import(join(commandsPath, file));
    if (command?.data && command?.execute) {
      commands.push(command.data.toJSON());
    }
  }

  const rest = new REST().setToken(process.env.DISCORD_BOT_TOKEN!);

  // Guild-specific deployment (instant, for development)
  if (process.env.DISCORD_GUILD_ID) {
    await rest.put(
      Routes.applicationGuildCommands(process.env.DISCORD_CLIENT_ID!, process.env.DISCORD_GUILD_ID),
      { body: commands }
    );
    console.log(`Deployed ${commands.length} commands to guild`);
  } else {
    // Global deployment (takes up to 1 hour to propagate)
    await rest.put(Routes.applicationCommands(process.env.DISCORD_CLIENT_ID!), { body: commands });
    console.log(`Deployed ${commands.length} commands globally`);
  }
}

deployCommands().catch(console.error);
```

### 2.1.5 Event Handlers with Dependency Injection

Structure event handlers for testability:

```typescript
// services/discord-bot/src/events/interaction-create.ts
import { Events, type Client, type Interaction, MessageFlags } from 'discord.js';

export function registerInteractionHandler(client: Client) {
  client.on(Events.InteractionCreate, async (interaction: Interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command) {
      console.error(`Command not found: ${interaction.commandName}`);
      return;
    }

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(`Error executing ${interaction.commandName}:`, error);

      const errorMessage = { content: 'An error occurred.', flags: MessageFlags.Ephemeral };
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp(errorMessage);
      } else {
        await interaction.reply(errorMessage);
      }
    }
  });
}
```

```typescript
// services/discord-bot/src/events/ready.ts
import { Events, type Client } from 'discord.js';

export function registerReadyHandler(client: Client) {
  client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
    console.log(`Serving ${readyClient.guilds.cache.size} guilds`);
  });
}
```

### 2.1.6 Dependency-Injected Bot Initialization

```typescript
// services/discord-bot/src/bot.ts
import { Client, Collection, GatewayIntentBits } from 'discord.js';
import type { Command } from './types.js';
import { registerReadyHandler } from './events/ready.js';
import { registerInteractionHandler } from './events/interaction-create.js';

export interface BotDependencies {
  token: string;
  // Add other dependencies: database, cache, queue, etc.
}

export async function createBot(deps: BotDependencies): Promise<Client> {
  const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
  });

  client.commands = new Collection<string, Command>();

  // Load commands dynamically
  await loadCommands(client);

  // Register event handlers
  registerReadyHandler(client);
  registerInteractionHandler(client);

  await client.login(deps.token);
  return client;
}

async function loadCommands(client: Client) {
  const { readdirSync } = await import('node:fs');
  const { join, dirname } = await import('node:path');
  const { fileURLToPath } = await import('node:url');

  const __dirname = dirname(fileURLToPath(import.meta.url));
  const commandsPath = join(__dirname, 'commands');
  const files = readdirSync(commandsPath).filter(f => f.endsWith('.js') || f.endsWith('.ts'));

  for (const file of files) {
    const { command } = await import(join(commandsPath, file));
    if (command?.data?.name) {
      client.commands.set(command.data.name, command);
    }
  }
}
```

---

## 2.2 Transaction Notification System

### 2.2.1 Notification Embed Types

#### Trade Alert Embed

```typescript
// services/discord-bot/src/embeds/trade-embed.ts
import { EmbedBuilder } from 'discord.js';
import type { SleeperTransaction, SleeperPlayer } from '@fantasy/types';

interface TradeEmbedData {
  transaction: SleeperTransaction;
  players: Map<string, SleeperPlayer>;
  teamNames: Map<number, string>;
}

export function buildTradeEmbed({ transaction, players, teamNames }: TradeEmbedData): EmbedBuilder {
  const embed = new EmbedBuilder()
    .setColor(0xf1c40f) // Gold for trades
    .setTitle('Trade Completed')
    .setTimestamp(new Date(transaction.status_updated ?? Date.now()));

  // Group adds by roster_id
  const tradesByTeam = new Map<number, { adds: string[]; drops: string[] }>();

  for (const [playerId, rosterId] of Object.entries(transaction.adds ?? {})) {
    const player = players.get(playerId);
    const playerName = player ? `${player.first_name} ${player.last_name}` : playerId;
    const team = tradesByTeam.get(rosterId) ?? { adds: [], drops: [] };
    team.adds.push(`+ ${playerName} (${player?.position ?? 'UNK'})`);
    tradesByTeam.set(rosterId, team);
  }

  for (const [playerId, rosterId] of Object.entries(transaction.drops ?? {})) {
    const player = players.get(playerId);
    const playerName = player ? `${player.first_name} ${player.last_name}` : playerId;
    const team = tradesByTeam.get(rosterId) ?? { adds: [], drops: [] };
    team.drops.push(`- ${playerName} (${player?.position ?? 'UNK'})`);
    tradesByTeam.set(rosterId, team);
  }

  for (const [rosterId, moves] of tradesByTeam) {
    const teamName = teamNames.get(rosterId) ?? `Team ${rosterId}`;
    const value = [...moves.adds, ...moves.drops].join('\n') || 'No players';
    embed.addFields({ name: teamName, value, inline: true });
  }

  // Include draft picks if present
  if (transaction.draft_picks?.length) {
    const picks = transaction.draft_picks.map(p => `Round ${p.round} (${p.season})`).join(', ');
    embed.addFields({ name: 'Draft Picks Included', value: picks });
  }

  return embed;
}
```

#### Waiver Claim Embed

```typescript
// services/discord-bot/src/embeds/waiver-embed.ts
import { EmbedBuilder } from 'discord.js';
import type { SleeperTransaction, SleeperPlayer } from '@fantasy/types';

interface WaiverEmbedData {
  transaction: SleeperTransaction;
  players: Map<string, SleeperPlayer>;
  teamName: string;
}

export function buildWaiverEmbed({
  transaction,
  players,
  teamName,
}: WaiverEmbedData): EmbedBuilder {
  const embed = new EmbedBuilder()
    .setColor(0x3498db) // Blue for waivers
    .setTitle('Waiver Claim Processed')
    .setTimestamp();

  const adds = Object.keys(transaction.adds ?? {});
  const drops = Object.keys(transaction.drops ?? {});

  if (adds.length > 0) {
    const addedPlayer = players.get(adds[0]!);
    const playerName = addedPlayer ? `${addedPlayer.first_name} ${addedPlayer.last_name}` : adds[0];
    embed.addFields({
      name: 'Added',
      value: `${playerName} (${addedPlayer?.position ?? 'UNK'} - ${addedPlayer?.team ?? 'FA'})`,
      inline: true,
    });
  }

  if (drops.length > 0) {
    const droppedPlayer = players.get(drops[0]!);
    const playerName = droppedPlayer
      ? `${droppedPlayer.first_name} ${droppedPlayer.last_name}`
      : drops[0];
    embed.addFields({
      name: 'Dropped',
      value: `${playerName} (${droppedPlayer?.position ?? 'UNK'})`,
      inline: true,
    });
  }

  // FAAB tracking
  const faabSpent = transaction.waiver_budget?.find(w => w.sender === transaction.roster_ids?.[0]);
  if (faabSpent) {
    embed.addFields({ name: 'FAAB Spent', value: `$${faabSpent.amount}`, inline: true });
  }

  embed.setFooter({ text: teamName });

  return embed;
}
```

#### Injury Update Embed

```typescript
// services/discord-bot/src/embeds/injury-embed.ts
import { EmbedBuilder } from 'discord.js';
import type { SleeperPlayer } from '@fantasy/types';

interface InjuryUpdate {
  player: SleeperPlayer;
  previousStatus: string | null;
  newStatus: string | null;
}

const STATUS_COLORS: Record<string, number> = {
  Out: 0xe74c3c, // Red
  Doubtful: 0xe67e22, // Orange
  Questionable: 0xf1c40f, // Yellow
  Probable: 0x2ecc71, // Green
  IR: 0x9b59b6, // Purple
};

export function buildInjuryEmbed(update: InjuryUpdate): EmbedBuilder {
  const { player, previousStatus, newStatus } = update;
  const color = STATUS_COLORS[newStatus ?? 'Questionable'] ?? 0x95a5a6;

  return new EmbedBuilder()
    .setColor(color)
    .setTitle('Injury Status Update')
    .addFields(
      {
        name: 'Player',
        value: `${player.first_name} ${player.last_name} (${player.position} - ${player.team})`,
      },
      { name: 'Previous Status', value: previousStatus ?? 'Healthy', inline: true },
      { name: 'New Status', value: newStatus ?? 'Healthy', inline: true }
    )
    .setTimestamp();
}
```

#### Lineup Reminder Embed

```typescript
// services/discord-bot/src/embeds/lineup-reminder-embed.ts
import { EmbedBuilder } from 'discord.js';

interface LineupReminderData {
  week: number;
  gameTime: Date;
  playersOnBye: string[];
  injuredStarters: string[];
}

export function buildLineupReminderEmbed(data: LineupReminderData): EmbedBuilder {
  const embed = new EmbedBuilder()
    .setColor(0xe74c3c) // Red for urgency
    .setTitle(`Set Your Lineups! Week ${data.week}`)
    .setDescription(`Games start <t:${Math.floor(data.gameTime.getTime() / 1000)}:R>`);

  if (data.playersOnBye.length > 0) {
    embed.addFields({
      name: 'Players on BYE',
      value: data.playersOnBye.join(', '),
    });
  }

  if (data.injuredStarters.length > 0) {
    embed.addFields({
      name: 'Injured Starters',
      value: data.injuredStarters.join(', '),
    });
  }

  embed.setFooter({ text: 'Check your lineup before kickoff!' });

  return embed;
}
```

### 2.2.2 Notification Dispatcher

```typescript
// services/discord-bot/src/notifications/dispatcher.ts
import { Client, TextChannel, EmbedBuilder } from 'discord.js';
import { prisma } from '@fantasy/database';

export class NotificationDispatcher {
  constructor(private client: Client) {}

  async sendToLeague(leagueId: string, embed: EmbedBuilder): Promise<void> {
    // Find all guilds configured for this league
    const configs = await prisma.guildConfig.findMany({
      where: { sleeperLeagueId: leagueId },
    });

    for (const config of configs) {
      try {
        const channel = await this.client.channels.fetch(config.notificationChannelId);
        if (channel?.isTextBased() && channel instanceof TextChannel) {
          await channel.send({ embeds: [embed] });
        }
      } catch (error) {
        console.error(`Failed to send to channel ${config.notificationChannelId}:`, error);
      }
    }
  }

  async sendToChannel(channelId: string, embed: EmbedBuilder): Promise<void> {
    const channel = await this.client.channels.fetch(channelId);
    if (channel?.isTextBased() && channel instanceof TextChannel) {
      await channel.send({ embeds: [embed] });
    }
  }
}
```

---

## 2.3 State Management Architecture

### 2.3.1 BullMQ Queue Setup

```typescript
// services/discord-bot/src/queues/connection.ts
import IORedis from 'ioredis';

// Shared Redis connection for all queues
// IMPORTANT: maxRetriesPerRequest must be null for BullMQ
export function createQueueConnection() {
  return new IORedis(process.env.REDIS_URL!, {
    maxRetriesPerRequest: null, // Required by BullMQ
    enableReadyCheck: false,
    retryStrategy: times => Math.min(times * 100, 3000),
  });
}
```

```typescript
// services/discord-bot/src/queues/transaction-queue.ts
import { Queue, Worker, QueueEvents } from 'bullmq';
import { createQueueConnection } from './connection.js';
import type { SleeperTransaction } from '@fantasy/types';

interface TransactionJobData {
  leagueId: string;
  transactions: SleeperTransaction[];
}

const connection = createQueueConnection();

// Queue for processing new transactions
export const transactionQueue = new Queue<TransactionJobData>('transactions', {
  connection,
  defaultJobOptions: {
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 1000, // 1s, 2s, 4s
    },
    removeOnComplete: { count: 1000 },
    removeOnFail: { count: 5000 },
  },
});

// Worker to process transaction notifications
export function createTransactionWorker(
  processTransaction: (data: TransactionJobData) => Promise<void>
) {
  return new Worker<TransactionJobData>(
    'transactions',
    async job => {
      console.log(
        `Processing ${job.data.transactions.length} transactions for ${job.data.leagueId}`
      );
      await processTransaction(job.data);
    },
    {
      connection,
      concurrency: 5, // Process up to 5 jobs simultaneously
    }
  );
}

// Queue events for monitoring
export const transactionQueueEvents = new QueueEvents('transactions', { connection });

transactionQueueEvents.on('completed', ({ jobId }) => {
  console.log(`Job ${jobId} completed`);
});

transactionQueueEvents.on('failed', ({ jobId, failedReason }) => {
  console.error(`Job ${jobId} failed: ${failedReason}`);
});
```

### 2.3.2 Scheduled Jobs with Cron

```typescript
// services/discord-bot/src/queues/scheduler.ts
import { Queue, Worker } from 'bullmq';
import { createQueueConnection } from './connection.js';

interface ScheduledJobData {
  type: 'lineup_reminder' | 'injury_check' | 'standings_update';
  leagueIds?: string[];
}

const connection = createQueueConnection();

export const schedulerQueue = new Queue<ScheduledJobData>('scheduler', { connection });

// Schedule recurring jobs
export async function initializeScheduledJobs() {
  // Lineup reminders: Sunday 10 AM ET, Thursday 6 PM ET
  await schedulerQueue.upsertJobScheduler(
    'sunday-lineup-reminder',
    { pattern: '0 10 * * 0', tz: 'America/New_York' }, // Sunday 10 AM ET
    { name: 'lineup-reminder', data: { type: 'lineup_reminder' } }
  );

  await schedulerQueue.upsertJobScheduler(
    'thursday-lineup-reminder',
    { pattern: '0 18 * * 4', tz: 'America/New_York' }, // Thursday 6 PM ET
    { name: 'lineup-reminder', data: { type: 'lineup_reminder' } }
  );

  // Injury status check: Every 30 minutes during game days
  await schedulerQueue.upsertJobScheduler(
    'injury-check',
    { pattern: '*/30 * * * 0,1,4', tz: 'America/New_York' }, // Sun, Mon, Thu
    { name: 'injury-check', data: { type: 'injury_check' } }
  );

  // Weekly standings update: Monday 6 AM ET
  await schedulerQueue.upsertJobScheduler(
    'standings-update',
    { pattern: '0 6 * * 1', tz: 'America/New_York' },
    { name: 'standings-update', data: { type: 'standings_update' } }
  );

  console.log('Scheduled jobs initialized');
}

// Worker for scheduled jobs
export function createSchedulerWorker(handlers: {
  lineupReminder: () => Promise<void>;
  injuryCheck: () => Promise<void>;
  standingsUpdate: () => Promise<void>;
}) {
  return new Worker<ScheduledJobData>(
    'scheduler',
    async job => {
      switch (job.data.type) {
        case 'lineup_reminder':
          await handlers.lineupReminder();
          break;
        case 'injury_check':
          await handlers.injuryCheck();
          break;
        case 'standings_update':
          await handlers.standingsUpdate();
          break;
      }
    },
    { connection }
  );
}
```

### 2.3.3 Transaction Polling Integration

Integrate the existing `TransactionPoller` with BullMQ:

```typescript
// services/discord-bot/src/services/polling-service.ts
import { TransactionPoller, sleeperClient, CacheService } from '@fantasy/api-client';
import { transactionQueue } from '../queues/transaction-queue.js';
import { prisma } from '@fantasy/database';

export class PollingService {
  private poller: TransactionPoller;

  constructor(pollIntervalMs = 60_000) {
    this.poller = new TransactionPoller(
      sleeperClient,
      async (transactions, leagueId) => {
        // Queue transactions for processing instead of handling inline
        await transactionQueue.add(
          `txn-${leagueId}-${Date.now()}`,
          { leagueId, transactions },
          { priority: 1 } // High priority for real-time notifications
        );
      },
      pollIntervalMs
    );
  }

  async start(): Promise<void> {
    // Get all configured leagues from database
    const configs = await prisma.guildConfig.findMany({
      select: { sleeperLeagueId: true },
      distinct: ['sleeperLeagueId'],
    });

    const leagueIds = configs.map(c => c.sleeperLeagueId);

    if (leagueIds.length > 0) {
      await this.poller.start(leagueIds);
      console.log(`Polling ${leagueIds.length} leagues`);
    }
  }

  stop(): void {
    this.poller.stop();
  }

  async addLeague(leagueId: string): Promise<void> {
    // Restart poller with new league (simple approach)
    this.stop();
    await this.start();
  }
}
```

### 2.3.4 Redis State Tracking

Use the existing `CacheService` pattern for tracking last-seen transaction IDs:

```typescript
// services/discord-bot/src/services/state-service.ts
import { CacheService } from '@fantasy/api-client';

export class StateService {
  private cache: CacheService;

  constructor(redisUrl: string) {
    this.cache = new CacheService(redisUrl, 'discord-bot');
  }

  async getLastTransactionId(leagueId: string): Promise<string | null> {
    return this.cache.get<string>('last-txn', leagueId);
  }

  async setLastTransactionId(leagueId: string, txnId: string): Promise<void> {
    await this.cache.set('last-txn', leagueId, txnId);
  }

  async getPlayerCache(): Promise<Map<string, unknown> | null> {
    return this.cache.get('players', 'all');
  }

  async setPlayerCache(players: Map<string, unknown>): Promise<void> {
    // Cache players for 24 hours
    await this.cache.set('players', 'all', Object.fromEntries(players), 86400);
  }
}
```

---

## 2.4 Database Schema Extensions

Add to `packages/database/prisma/schema.prisma`:

```prisma
// ============================================
// DISCORD BOT CONFIGURATION
// ============================================

model GuildConfig {
  id        String   @id @default(cuid())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  guildId               String  @unique
  guildName             String?
  notificationChannelId String
  sleeperLeagueId       String

  // Notification preferences
  tradeAlerts     Boolean @default(true)
  waiverAlerts    Boolean @default(true)
  injuryAlerts    Boolean @default(true)
  lineupReminders Boolean @default(true)

  // Timezone for scheduled notifications
  timezone String @default("America/New_York")

  @@index([sleeperLeagueId])
  @@map("guild_configs")
}

model UserNotificationPreference {
  id        String   @id @default(cuid())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  discordUserId String @unique

  // DM notification preferences
  dmTradeAlerts     Boolean @default(false)
  dmLineupReminders Boolean @default(true)
  dmInjuryAlerts    Boolean @default(false)

  // Linked accounts
  sleeperUserId String?

  @@map("user_notification_preferences")
}
```

---

## 2.5 Project Structure

```
services/discord-bot/
├── src/
│   ├── index.ts              # Entry point
│   ├── bot.ts                # Bot factory with DI
│   ├── deploy-commands.ts    # Slash command deployment
│   ├── types.ts              # Command types, module augmentation
│   │
│   ├── commands/
│   │   ├── setup-league.ts
│   │   ├── standings.ts
│   │   ├── matchups.ts
│   │   └── ping.ts
│   │
│   ├── events/
│   │   ├── ready.ts
│   │   └── interaction-create.ts
│   │
│   ├── embeds/
│   │   ├── trade-embed.ts
│   │   ├── waiver-embed.ts
│   │   ├── injury-embed.ts
│   │   └── lineup-reminder-embed.ts
│   │
│   ├── queues/
│   │   ├── connection.ts
│   │   ├── transaction-queue.ts
│   │   └── scheduler.ts
│   │
│   ├── services/
│   │   ├── polling-service.ts
│   │   ├── state-service.ts
│   │   └── notification-dispatcher.ts
│   │
│   └── notifications/
│       └── dispatcher.ts
│
├── package.json
└── tsconfig.json
```

---

## 2.6 Environment Variables

Add to `.env`:

```bash
# Discord
DISCORD_BOT_TOKEN=your_bot_token
DISCORD_CLIENT_ID=your_client_id
DISCORD_GUILD_ID=your_dev_guild_id  # Optional: for dev command deployment

# Redis (shared with api-client)
REDIS_URL=redis://localhost:6379

# Database (shared)
DATABASE_URL=postgresql://...
```

---

## 2.7 Startup Sequence

```typescript
// services/discord-bot/src/index.ts
import { createBot } from './bot.js';
import { createTransactionWorker, transactionQueue } from './queues/transaction-queue.js';
import { createSchedulerWorker, initializeScheduledJobs } from './queues/scheduler.js';
import { PollingService } from './services/polling-service.js';
import { NotificationDispatcher } from './notifications/dispatcher.js';
import { sleeperClient, CachedSleeperClient, CacheService } from '@fantasy/api-client';
import { buildTradeEmbed } from './embeds/trade-embed.js';
import { buildWaiverEmbed } from './embeds/waiver-embed.js';

async function main() {
  // 1. Initialize bot
  const client = await createBot({ token: process.env.DISCORD_BOT_TOKEN! });
  const dispatcher = new NotificationDispatcher(client);

  // 2. Initialize cached API client
  const cache = new CacheService(process.env.REDIS_URL!);
  const cachedClient = new CachedSleeperClient(sleeperClient, cache);

  // 3. Start transaction worker
  const txnWorker = createTransactionWorker(async data => {
    const players = await cachedClient.getAllPlayers();
    const playerMap = new Map(Object.entries(players));

    for (const txn of data.transactions) {
      const embed =
        txn.type === 'trade'
          ? buildTradeEmbed({ transaction: txn, players: playerMap, teamNames: new Map() })
          : buildWaiverEmbed({ transaction: txn, players: playerMap, teamName: 'Team' });

      await dispatcher.sendToLeague(data.leagueId, embed);
    }
  });

  // 4. Initialize scheduled jobs
  await initializeScheduledJobs();
  const schedulerWorker = createSchedulerWorker({
    lineupReminder: async () => {
      /* ... */
    },
    injuryCheck: async () => {
      /* ... */
    },
    standingsUpdate: async () => {
      /* ... */
    },
  });

  // 5. Start polling
  const pollingService = new PollingService();
  await pollingService.start();

  // Graceful shutdown
  process.on('SIGTERM', async () => {
    pollingService.stop();
    await txnWorker.close();
    await schedulerWorker.close();
    await transactionQueue.close();
    await cache.disconnect();
    client.destroy();
    process.exit(0);
  });
}

main().catch(console.error);
```
