import { Client, TextChannel, EmbedBuilder } from 'discord.js';
import { prisma } from '@fantasy/database';

export class NotificationDispatcher {
  constructor(private client: Client) {}

  async sendToLeague(leagueId: string, embed: EmbedBuilder): Promise<void> {
    const configs = await prisma.guildConfig.findMany({
      where: { platformLeagueId: leagueId },
    });

    for (const config of configs) {
      try {
        const channel = await this.client.channels.fetch(config.notificationChannelId);
        if (channel?.isTextBased() && channel instanceof TextChannel) {
          await channel.send({ embeds: [embed] });
        }
      } catch (error) {
        console.error(`Failed to send to channel ${config.notificationChannelId}:`, error);
      }
    }
  }

  async sendToChannel(channelId: string, embed: EmbedBuilder): Promise<void> {
    const channel = await this.client.channels.fetch(channelId);
    if (channel?.isTextBased() && channel instanceof TextChannel) {
      await channel.send({ embeds: [embed] });
    }
  }
}
