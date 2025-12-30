import {
  SlashCommandBuilder,
  PermissionFlagsBits,
  ChannelType,
  type ChatInputCommandInteraction,
} from 'discord.js';
import { sleeperClient } from '@fantasy/api-client';
import { prisma } from '@fantasy/database';
import type { Command } from '../types.js';

export const command: Command = {
  data: new SlashCommandBuilder()
    .setName('setup-league')
    .setDescription('Configure a Sleeper league for this channel')
    .addStringOption(option =>
      option.setName('league_id').setDescription('Your Sleeper league ID').setRequired(true)
    )
    .addChannelOption(option =>
      option
        .setName('notification_channel')
        .setDescription('Channel for transaction notifications')
        .addChannelTypes(ChannelType.GuildText)
        .setRequired(false)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild) as SlashCommandBuilder,

  async execute(interaction: ChatInputCommandInteraction) {
    await interaction.deferReply({ ephemeral: true });

    const leagueId = interaction.options.getString('league_id', true);
    const channel = interaction.options.getChannel('notification_channel') ?? interaction.channel;
    const guildId = interaction.guildId;

    if (!guildId || !channel) {
      await interaction.editReply('This command must be used in a server channel.');
      return;
    }

    try {
      const league = await sleeperClient.getLeague(leagueId);

      await prisma.guildConfig.upsert({
        where: { guildId },
        create: {
          guildId,
          guildName: interaction.guild?.name,
          notificationChannelId: channel.id,
          platformLeagueId: leagueId,
        },
        update: {
          guildName: interaction.guild?.name,
          notificationChannelId: channel.id,
          platformLeagueId: leagueId,
        },
      });

      await interaction.editReply(
        `League **${league.name}** configured! Notifications will be sent to <#${channel.id}>.`
      );
    } catch (error) {
      if (error instanceof Error && error.message.includes('404')) {
        await interaction.editReply(`League \`${leagueId}\` not found. Please check the ID.`);
        return;
      }
      console.error('Setup league error:', error);
      await interaction.editReply('Failed to configure league. Please try again.');
    }
  },
};
