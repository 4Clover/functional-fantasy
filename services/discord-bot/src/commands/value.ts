import { SlashCommandBuilder, type ChatInputCommandInteraction } from 'discord.js';
import { CacheService, CachedKTCClient, ktcClient } from '@fantasy/api-client';
import type { Command } from '../types.js';
import { buildValueEmbed } from '../embeds/value-embed.js';

export const command: Command = {
  data: new SlashCommandBuilder()
    .setName('value')
    .setDescription('Look up a player trade value')
    .addStringOption(opt =>
      opt.setName('player').setDescription('Player name to look up').setRequired(true)
    )
    .addStringOption(opt =>
      opt
        .setName('format')
        .setDescription('Value format')
        .addChoices({ name: 'Dynasty', value: 'dynasty' }, { name: 'Redraft', value: 'redraft' })
    ) as SlashCommandBuilder,

  async execute(interaction: ChatInputCommandInteraction) {
    await interaction.deferReply();

    try {
      const cache = new CacheService(process.env.REDIS_URL!);
      const ktc = new CachedKTCClient(ktcClient, cache);

      const playerName = interaction.options.getString('player', true).toLowerCase();
      const format =
        (interaction.options.getString('format') as 'dynasty' | 'redraft') ?? 'dynasty';

      const ktcData = await ktc.getValues(format);
      await cache.disconnect();

      // Find player by fuzzy match
      const player = ktcData.players.find(
        p =>
          p.playerName.toLowerCase() === playerName ||
          p.playerName.toLowerCase().includes(playerName)
      );

      if (!player) {
        // Try to find similar names
        const similar = ktcData.players
          .filter(p =>
            p.playerName
              .toLowerCase()
              .split(' ')
              .some(w => playerName.includes(w))
          )
          .slice(0, 5);

        if (similar.length > 0) {
          const suggestions = similar.map(p => p.playerName).join(', ');
          await interaction.editReply(`Player not found. Did you mean: ${suggestions}?`);
        } else {
          await interaction.editReply(`Player "${playerName}" not found.`);
        }
        return;
      }

      const embed = buildValueEmbed({ player, format });
      await interaction.editReply({ embeds: [embed] });
    } catch (error) {
      console.error('Value lookup error:', error);
      await interaction.editReply('Failed to look up player value. Please try again.');
    }
  },
};
