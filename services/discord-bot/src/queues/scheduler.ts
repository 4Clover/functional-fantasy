import { Queue, Worker } from 'bullmq';
import { createQueueConnection } from './connection.js';

interface ScheduledJobData {
  type: 'lineup_reminder' | 'injury_check' | 'standings_update';
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

  console.log('Scheduled jobs initialized');
}

export function createSchedulerWorker(handlers: {
  lineupReminder: () => Promise<void>;
  injuryCheck: () => Promise<void>;
  standingsUpdate: () => Promise<void>;
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
      }
    },
    { connection: createQueueConnection() }
  );
}
