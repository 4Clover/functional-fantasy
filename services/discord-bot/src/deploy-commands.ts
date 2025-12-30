import { REST, Routes } from 'discord.js';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import type { Command } from './types.js';

async function deploy() {
  const commands: object[] = [];
  const commandsPath = join(import.meta.dirname, 'commands');
  const commandFiles = readdirSync(commandsPath).filter(
    f => f.endsWith('.ts') || f.endsWith('.js')
  );

  for (const file of commandFiles) {
    const { command } = (await import(join(commandsPath, file))) as { command: Command };
    commands.push(command.data.toJSON());
  }

  const token = process.env.DISCORD_BOT_TOKEN;
  const clientId = process.env.DISCORD_CLIENT_ID;
  const guildId = process.env.DISCORD_GUILD_ID;

  if (!token || !clientId || !guildId) {
    throw new Error('Missing DISCORD_BOT_TOKEN, DISCORD_CLIENT_ID, or DISCORD_GUILD_ID');
  }

  const rest = new REST().setToken(token);

  console.log(`Deploying ${commands.length} commands...`);

  await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands });

  console.log('Commands deployed successfully.');
}

deploy().catch(console.error);
