import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { Client, Events, MessageFlags } from 'discord.js';
import type { Command } from './types.js';

export async function loadCommands(client: Client): Promise<void> {
  const commandsPath = join(import.meta.dirname, 'commands');
  const commandFiles = readdirSync(commandsPath).filter(
    f => f.endsWith('.ts') || f.endsWith('.js')
  );

  for (const file of commandFiles) {
    const { command } = (await import(join(commandsPath, file))) as { command: Command };
    client.commands.set(command.data.name, command);
  }
}

export async function loadEvents(client: Client): Promise<void> {
  client.once(Events.ClientReady, c => {
    console.log(`Logged in as ${c.user.tag}`);
  });

  client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      const content = 'There was an error executing this command.';
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({ content, flags: MessageFlags.Ephemeral });
      } else {
        await interaction.reply({ content, flags: MessageFlags.Ephemeral });
      }
    }
  });
}
