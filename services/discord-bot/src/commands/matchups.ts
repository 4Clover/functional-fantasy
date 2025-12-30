import { SlashCommandBuilder, EmbedBuilder, type ChatInputCommandInteraction } from 'discord.js';
import { sleeperClient } from '@fantasy/api-client';
import { prisma } from '@fantasy/database';
import type { Command } from '../types.js';

export const command: Command = {
  data: new SlashCommandBuilder()
    .setName('matchups')
    .setDescription("Show this week's matchups")
    .addIntegerOption(option =>
      option.setName('week').setDescription('Week number (default: current)').setRequired(false)
    ) as SlashCommandBuilder,

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
      const state = await sleeperClient.getNFLState();
      const week = interaction.options.getInteger('week') ?? state.week;

      const [matchups, rosters, users] = await Promise.all([
        sleeperClient.getLeagueMatchups(config.sleeperLeagueId, week),
        sleeperClient.getLeagueRosters(config.sleeperLeagueId),
        sleeperClient.getLeagueUsers(config.sleeperLeagueId),
      ]);

      const userMap = new Map(users.map(u => [u.user_id, u]));
      const rosterMap = new Map(
        rosters.map(r => {
          const user = r.owner_id ? userMap.get(r.owner_id) : null;
          const name = user?.display_name ?? user?.username ?? `Team ${r.roster_id}`;
          return [r.roster_id, name];
        })
      );

      const matchupGroups = new Map<number, typeof matchups>();
      for (const m of matchups) {
        const group = matchupGroups.get(m.matchup_id) ?? [];
        group.push(m);
        matchupGroups.set(m.matchup_id, group);
      }

      const embed = new EmbedBuilder()
        .setColor(0x5865f2)
        .setTitle(`Week ${week} Matchups`)
        .setTimestamp();

      const fields: { name: string; value: string }[] = [];

      for (const [matchupId, teams] of matchupGroups) {
        if (teams.length !== 2) continue;

        const [team1, team2] = teams;
        if (!team1 || !team2) continue;

        const name1 = rosterMap.get(team1.roster_id) ?? `Team ${team1.roster_id}`;
        const name2 = rosterMap.get(team2.roster_id) ?? `Team ${team2.roster_id}`;
        const score1 = team1.points?.toFixed(1) ?? '0.0';
        const score2 = team2.points?.toFixed(1) ?? '0.0';

        fields.push({
          name: `Matchup ${matchupId}`,
          value: `${name1}: **${score1}**\nvs\n${name2}: **${score2}**`,
        });
      }

      if (fields.length === 0) {
        embed.setDescription('No matchups found for this week.');
      } else {
        embed.addFields(fields.slice(0, 25));
      }

      await interaction.editReply({ embeds: [embed] });
    } catch (error) {
      console.error('Matchups error:', error);
      await interaction.editReply('Failed to fetch matchups. Please try again.');
    }
  },
};
