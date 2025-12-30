import { Client, Collection, GatewayIntentBits } from 'discord.js';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import type { Command } from './types.js';
import { registerReadyHandler, registerInteractionHandler } from './events/index.js';

declare module 'discord.js' {
  interface Client {
    commands: Collection<string, Command>;
  }
}

export interface BotDependencies {
  token: string;
}

export async function createBot(deps: BotDependencies): Promise<Client> {
  const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
  });

  client.commands = new Collection<string, Command>();

  await loadCommands(client);

  registerReadyHandler(client);
  registerInteractionHandler(client);

  await client.login(deps.token);
  return client;
}

async function loadCommands(client: Client) {
  const commandsPath = join(import.meta.dirname, 'commands');
  const files = readdirSync(commandsPath).filter(f => f.endsWith('.js') || f.endsWith('.ts'));

  for (const file of files) {
    const { command } = (await import(join(commandsPath, file))) as { command: Command };
    if (command?.data?.name) {
      client.commands.set(command.data.name, command);
    }
  }
}
