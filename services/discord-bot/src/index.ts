import { Client, Collection, GatewayIntentBits } from 'discord.js';
import { loadCommands, loadEvents } from './loaders.js';
import type { Command } from './types.js';

declare module 'discord.js' {
  interface Client {
    commands: Collection<string, Command>;
  }
}

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.commands = new Collection();

async function main() {
  await loadCommands(client);
  await loadEvents(client);

  await client.login(process.env.DISCORD_BOT_TOKEN);
}

main().catch(console.error);
