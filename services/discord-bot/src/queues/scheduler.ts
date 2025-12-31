import { Queue, Worker } from 'bullmq';
import { createQueueConnection } from './connection.js';

interface ScheduledJobData {
  type:
    | 'lineup_reminder'
    | 'injury_check'
    | 'standings_update'
    | 'ktc_scrape'
    | 'weekly_report_card'
    | 'vorp_update'
    | 'war_calculation';
  leagueIds?: string[];
}

export const schedulerQueue = new Queue<ScheduledJobData>('scheduler', {
  connection: createQueueConnection(),
});

export async function initializeScheduledJobs() {
  await schedulerQueue.upsertJobScheduler(
    'sunday-lineup-reminder',
    { pattern: '0 10 * * 0', tz: 'America/New_York' },
    { name: 'lineup-reminder', data: { type: 'lineup_reminder' } }
  );

  await schedulerQueue.upsertJobScheduler(
    'thursday-lineup-reminder',
    { pattern: '0 18 * * 4', tz: 'America/New_York' },
    { name: 'lineup-reminder', data: { type: 'lineup_reminder' } }
  );

  await schedulerQueue.upsertJobScheduler(
    'injury-check',
    { pattern: '*/30 * * * 0,1,4', tz: 'America/New_York' },
    { name: 'injury-check', data: { type: 'injury_check' } }
  );

  await schedulerQueue.upsertJobScheduler(
    'standings-update',
    { pattern: '0 6 * * 1', tz: 'America/New_York' },
    { name: 'standings-update', data: { type: 'standings_update' } }
  );

  // Phase 4: Analytics jobs
  await schedulerQueue.upsertJobScheduler(
    'ktc-daily-scrape',
    { pattern: '0 5 * * *', tz: 'America/New_York' },
    { name: 'ktc-scrape', data: { type: 'ktc_scrape' } }
  );

  await schedulerQueue.upsertJobScheduler(
    'weekly-report-card',
    { pattern: '0 8 * * 2', tz: 'America/New_York' },
    { name: 'weekly-report-card', data: { type: 'weekly_report_card' } }
  );

  await schedulerQueue.upsertJobScheduler(
    'vorp-update',
    { pattern: '0 4 * * *', tz: 'America/New_York' },
    { name: 'vorp-update', data: { type: 'vorp_update' } }
  );

  await schedulerQueue.upsertJobScheduler(
    'war-calculation',
    { pattern: '0 3 * * 3', tz: 'America/New_York' },
    { name: 'war-calculation', data: { type: 'war_calculation' } }
  );

  console.log('Scheduled jobs initialized');
}

export function createSchedulerWorker(handlers: {
  lineupReminder: () => Promise<void>;
  injuryCheck: () => Promise<void>;
  standingsUpdate: () => Promise<void>;
  ktcScrape: () => Promise<void>;
  weeklyReportCard: () => Promise<void>;
  vorpUpdate: () => Promise<void>;
  warCalculation: () => Promise<void>;
}) {
  return new Worker<ScheduledJobData>(
    'scheduler',
    async job => {
      switch (job.data.type) {
        case 'lineup_reminder':
          await handlers.lineupReminder();
          break;
        case 'injury_check':
          await handlers.injuryCheck();
          break;
        case 'standings_update':
          await handlers.standingsUpdate();
          break;
        case 'ktc_scrape':
          await handlers.ktcScrape();
          break;
        case 'weekly_report_card':
          await handlers.weeklyReportCard();
          break;
        case 'vorp_update':
          await handlers.vorpUpdate();
          break;
        case 'war_calculation':
          await handlers.warCalculation();
          break;
      }
    },
    { connection: createQueueConnection() }
  );
}
