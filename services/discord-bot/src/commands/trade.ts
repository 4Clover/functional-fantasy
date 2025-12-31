import { SlashCommandBuilder, type ChatInputCommandInteraction } from 'discord.js';
import {
  CacheService,
  CachedKTCClient,
  ktcClient,
  calculateAdjustedValue,
} from '@fantasy/api-client';
import { prisma, type Position } from '@fantasy/database';
import { fuzzyFindPlayer } from '@fantasy/analytics';
import type { Command } from '../types.js';
import { buildTradeCalcEmbed } from '../embeds/trade-calc-embed.js';

export const command: Command = {
  data: new SlashCommandBuilder()
    .setName('trade')
    .setDescription('Analyze a trade for value and roster fit')
    .addStringOption(opt =>
      opt
        .setName('sending')
        .setDescription('Players you are sending (comma-separated)')
        .setRequired(true)
    )
    .addStringOption(opt =>
      opt
        .setName('receiving')
        .setDescription('Players you are receiving (comma-separated)')
        .setRequired(true)
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
      const cache = new CacheService(process.env.REDIS_URL!);
      const ktc = new CachedKTCClient(ktcClient, cache);

      const sendingNames = interaction.options
        .getString('sending', true)
        .split(',')
        .map(s => s.trim().toLowerCase());
      const receivingNames = interaction.options
        .getString('receiving', true)
        .split(',')
        .map(s => s.trim().toLowerCase());

      // Get KTC values
      const ktcData = await ktc.getValues('dynasty');
      await cache.disconnect();

      // Get league settings for context
      const settings = await prisma.leagueSettings.findUnique({
        where: { leagueId: config.platformLeagueId },
      });

      const context = {
        isSuperFlex: settings?.isSuperFlex ?? false,
        tePremium: settings ? Number(settings.tePremium) : 0,
        pprValue: settings ? Number(settings.pprValue) : 1,
        teamCount: 12,
        startingSlots: (settings?.startingSlots as Record<string, number>) ?? {},
      };

      // Calculate values for sending players (using fuzzy matching)
      const sending = sendingNames
        .map(name => {
          const player = fuzzyFindPlayer(name, ktcData.players);
          if (!player) return null;
          const adjusted = calculateAdjustedValue(
            player.value,
            player.position as Position,
            context
          );
          return {
            name: player.playerName,
            position: player.position,
            baseValue: player.value,
            adjustedValue: adjusted.adjustedValue,
          };
        })
        .filter((p): p is NonNullable<typeof p> => p !== null);

      // Calculate values for receiving players (using fuzzy matching)
      const receiving = receivingNames
        .map(name => {
          const player = fuzzyFindPlayer(name, ktcData.players);
          if (!player) return null;
          const adjusted = calculateAdjustedValue(
            player.value,
            player.position as Position,
            context
          );
          return {
            name: player.playerName,
            position: player.position,
            baseValue: player.value,
            adjustedValue: adjusted.adjustedValue,
          };
        })
        .filter((p): p is NonNullable<typeof p> => p !== null);

      if (sending.length === 0 && receiving.length === 0) {
        await interaction.editReply('Could not find any of the specified players. Check spelling.');
        return;
      }

      const sendingTotal = sending.reduce((sum, p) => sum + p.adjustedValue, 0);
      const receivingTotal = receiving.reduce((sum, p) => sum + p.adjustedValue, 0);
      const netValue = receivingTotal - sendingTotal;

      const verdict =
        netValue > sendingTotal * 0.1
          ? 'FAVORABLE'
          : netValue < -sendingTotal * 0.1
            ? 'UNFAVORABLE'
            : 'EVEN';

      const embed = buildTradeCalcEmbed({
        sending,
        receiving,
        sendingTotal,
        receivingTotal,
        verdict,
        netValue,
      });

      await interaction.editReply({ embeds: [embed] });
    } catch (error) {
      console.error('Trade calc error:', error);
      await interaction.editReply('Failed to analyze trade. Please try again.');
    }
  },
};
