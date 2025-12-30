import { SlashCommandBuilder, EmbedBuilder, type ChatInputCommandInteraction } from 'discord.js';
import { sleeperClient, CacheService, CachedSleeperClient } from '@fantasy/api-client';
import { prisma } from '@fantasy/database';
import type { Command } from '../types.js';

export const command: Command = {
  data: new SlashCommandBuilder()
    .setName('standings')
    .setDescription('Display current league standings'),

  async execute(interaction: ChatInputCommandInteraction) {
    await interaction.deferReply();

    const guildId = interaction.guildId;
    if (!guildId) {
      await interaction.editReply('This command must be used in a server.');
      return;
    }

    const config = await prisma.guildConfig.findUnique({
      where: { guildId },
    });

    if (!config) {
      await interaction.editReply(
        'No league configured. Use `/setup-league` to configure a league first.'
      );
      return;
    }

    try {
      const cache = new CacheService(process.env.REDIS_URL!);
      const cachedClient = new CachedSleeperClient(sleeperClient, cache);

      const [league, rosters, users] = await Promise.all([
        cachedClient.getLeague(config.platformLeagueId),
        cachedClient.getLeagueRosters(config.platformLeagueId),
        sleeperClient.getLeagueUsers(config.platformLeagueId),
      ]);

      await cache.disconnect();

      const userMap = new Map(users.map(u => [u.user_id, u]));

      const standings = rosters
        .map(roster => {
          const user = roster.owner_id ? userMap.get(roster.owner_id) : null;
          const teamName = user?.display_name ?? user?.username ?? `Team ${roster.roster_id}`;
          const fpts = (roster.settings.fpts ?? 0) + (roster.settings.fpts_decimal ?? 0) / 100;

          return {
            name: teamName,
            wins: roster.settings.wins,
            losses: roster.settings.losses,
            ties: roster.settings.ties,
            pointsFor: fpts,
          };
        })
        .sort((a, b) => {
          if (b.wins !== a.wins) return b.wins - a.wins;
          if (a.losses !== b.losses) return a.losses - b.losses;
          return b.pointsFor - a.pointsFor;
        });

      const embed = new EmbedBuilder()
        .setColor(0x00ae86)
        .setTitle(`${league.name} Standings`)
        .setDescription(league.season)
        .setTimestamp();

      const description = standings
        .map((team, i) => {
          const record = `${team.wins}-${team.losses}${team.ties > 0 ? `-${team.ties}` : ''}`;
          return `**${i + 1}.** ${team.name}\n${record} | ${team.pointsFor.toFixed(1)} PF`;
        })
        .join('\n\n');

      embed.setDescription(description);

      await interaction.editReply({ embeds: [embed] });
    } catch (error) {
      console.error('Standings error:', error);
      await interaction.editReply('Failed to fetch standings. Please try again.');
    }
  },
};
