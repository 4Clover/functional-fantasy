import { prisma } from '@fantasy/database';
import { ReportCardGenerator } from '@fantasy/analytics';
import type { NotificationDispatcher } from './notification-dispatcher.js';
import { buildWeeklyReportCardEmbed } from '../embeds/report-card-embed.js';

export function createReportCardHandler(dispatcher: NotificationDispatcher) {
  return async function handleWeeklyReportCard(): Promise<void> {
    console.log('Starting weekly report card job...');

    const currentYear = new Date().getFullYear();
    const generator = new ReportCardGenerator();

    // Get all configured guilds
    const configs = await prisma.guildConfig.findMany();

    for (const config of configs) {
      try {
        const league = await prisma.league.findFirst({
          where: { platformLeagueId: config.platformLeagueId },
        });

        if (!league) continue;

        // Get the most recent completed week
        const latestMatchup = await prisma.matchup.findFirst({
          where: { leagueId: league.id, season: currentYear },
          orderBy: { week: 'desc' },
        });

        const week = latestMatchup?.week ?? 1;

        // Generate report
        const report = await generator.generateWeeklyReport(league.id, currentYear, week);

        // Send to Discord
        const embed = buildWeeklyReportCardEmbed(report);
        await dispatcher.sendToChannel(config.notificationChannelId, embed);

        console.log(`Sent Week ${week} report card for ${league.name}`);
      } catch (error) {
        console.error(`Failed to generate report card for guild ${config.guildId}:`, error);
      }
    }

    console.log('Weekly report card job completed');
  };
}
