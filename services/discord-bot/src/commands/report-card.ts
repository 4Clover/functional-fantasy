import { SlashCommandBuilder, type ChatInputCommandInteraction } from 'discord.js';
import { prisma } from '@fantasy/database';
import { ReportCardGenerator } from '@fantasy/analytics';
import type { Command } from '../types.js';
import {
  buildWeeklyReportCardEmbed,
  buildSeasonReportCardEmbed,
} from '../embeds/report-card-embed.js';

export const command: Command = {
  data: new SlashCommandBuilder()
    .setName('report-card')
    .setDescription('Generate a league report card')
    .addIntegerOption(opt =>
      opt
        .setName('week')
        .setDescription('Specific week (omit for season summary)')
        .setMinValue(1)
        .setMaxValue(18)
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
      const week = interaction.options.getInteger('week');
      const currentYear = new Date().getFullYear();

      // Find the league
      const league = await prisma.league.findFirst({
        where: { platformLeagueId: config.platformLeagueId },
      });

      if (!league) {
        await interaction.editReply('League not found in database.');
        return;
      }

      const generator = new ReportCardGenerator();

      if (week) {
        // Generate weekly report
        const report = await generator.generateWeeklyReport(league.id, currentYear, week);
        const embed = buildWeeklyReportCardEmbed(report);
        await interaction.editReply({ embeds: [embed] });
      } else {
        // Generate season report - determine current week from matchups
        const latestMatchup = await prisma.matchup.findFirst({
          where: { leagueId: league.id, season: currentYear },
          orderBy: { week: 'desc' },
        });

        const throughWeek = latestMatchup?.week ?? 1;
        const report = await generator.generateSeasonReport(league.id, currentYear, throughWeek);
        const embed = buildSeasonReportCardEmbed(report);
        await interaction.editReply({ embeds: [embed] });
      }
    } catch (error) {
      console.error('Report card error:', error);
      await interaction.editReply('Failed to generate report card. Please try again.');
    }
  },
};
