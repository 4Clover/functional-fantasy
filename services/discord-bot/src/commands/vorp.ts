import { SlashCommandBuilder, type ChatInputCommandInteraction } from 'discord.js';
import { prisma, type Position } from '@fantasy/database';
import { VORPCalculator } from '@fantasy/analytics';
import type { Command } from '../types.js';
import { buildVORPEmbed } from '../embeds/vorp-embed.js';

export const command: Command = {
  data: new SlashCommandBuilder()
    .setName('vorp')
    .setDescription('Show VORP leaderboard by position')
    .addStringOption(opt =>
      opt
        .setName('position')
        .setDescription('Position to show')
        .setRequired(true)
        .addChoices(
          { name: 'QB', value: 'QB' },
          { name: 'RB', value: 'RB' },
          { name: 'WR', value: 'WR' },
          { name: 'TE', value: 'TE' }
        )
    )
    .addIntegerOption(opt =>
      opt
        .setName('limit')
        .setDescription('Number of players to show (default: 10)')
        .setMinValue(5)
        .setMaxValue(25)
    ) as SlashCommandBuilder,

  async execute(interaction: ChatInputCommandInteraction) {
    await interaction.deferReply();

    const guildId = interaction.guildId;
    if (!guildId) {
      await interaction.editReply('This command must be used in a server.');
      return;
    }

    const config = await prisma.guildConfig.findUnique({ where: { guildId } });
    if (!config) {
      await interaction.editReply('No league configured. Use `/setup-league` first.');
      return;
    }

    try {
      const position = interaction.options.getString('position', true) as Position;
      const limit = interaction.options.getInteger('limit') ?? 10;

      // Get current season
      const currentYear = new Date().getFullYear();

      // Get league team count
      const league = await prisma.league.findFirst({
        where: { platformLeagueId: config.platformLeagueId },
      });

      const teamCount = league?.teamCount ?? 12;
      const calculator = new VORPCalculator(teamCount);

      const vorpResults = await calculator.calculatePositionVORP(currentYear, position, limit);

      if (vorpResults.length === 0) {
        await interaction.editReply(
          `No VORP data available for ${position}. Data may not be populated yet.`
        );
        return;
      }

      // Get player names
      const playerIds = vorpResults.map(r => r.playerId);
      const players = await prisma.player.findMany({
        where: { id: { in: playerIds } },
      });
      const playerMap = new Map(players.map(p => [p.id, p.fullName]));

      const playersWithNames = vorpResults.map(r => ({
        ...r,
        playerName: playerMap.get(r.playerId) || 'Unknown',
      }));

      const embed = buildVORPEmbed({
        position,
        season: currentYear,
        players: playersWithNames,
        limit,
      });

      await interaction.editReply({ embeds: [embed] });
    } catch (error) {
      console.error('VORP command error:', error);
      await interaction.editReply('Failed to fetch VORP data. Please try again.');
    }
  },
};
