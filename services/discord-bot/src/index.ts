import { createBot } from './bot.js';
import {
  createTransactionWorker,
  transactionQueue,
  initializeScheduledJobs,
  createSchedulerWorker,
  schedulerQueue,
} from './queues/index.js';
import {
  PollingService,
  NotificationDispatcher,
  handleKtcScrape,
  createReportCardHandler,
  handleVorpUpdate,
  handleWarCalculation,
} from './services/index.js';
import { sleeperClient, CachedSleeperClient, CacheService } from '@fantasy/api-client';
import { buildTradeEmbed, buildWaiverEmbed } from './embeds/index.js';

async function main() {
  const token = process.env.DISCORD_BOT_TOKEN;
  const redisUrl = process.env.REDIS_URL;

  if (!token) throw new Error('DISCORD_BOT_TOKEN is required');
  if (!redisUrl) throw new Error('REDIS_URL is required');

  const client = await createBot({ token });
  const dispatcher = new NotificationDispatcher(client);

  const cache = new CacheService(redisUrl);
  const cachedClient = new CachedSleeperClient(sleeperClient, cache);

  const txnWorker = createTransactionWorker(async data => {
    const players = await cachedClient.getAllPlayers();
    const playerMap = new Map(Object.entries(players));

    for (const txn of data.transactions) {
      const embed =
        txn.type === 'trade'
          ? buildTradeEmbed({ transaction: txn, players: playerMap, teamNames: new Map() })
          : buildWaiverEmbed({ transaction: txn, players: playerMap, teamName: 'Team' });

      await dispatcher.sendToLeague(data.leagueId, embed);
    }
  });

  await initializeScheduledJobs();

  const reportCardHandler = createReportCardHandler(dispatcher);

  const schedulerWorker = createSchedulerWorker({
    lineupReminder: async () => {
      console.log('Lineup reminder triggered');
    },
    injuryCheck: async () => {
      console.log('Injury check triggered');
    },
    standingsUpdate: async () => {
      console.log('Standings update triggered');
    },
    ktcScrape: handleKtcScrape,
    weeklyReportCard: reportCardHandler,
    vorpUpdate: handleVorpUpdate,
    warCalculation: handleWarCalculation,
  });

  const pollingService = new PollingService();
  await pollingService.start();

  const shutdown = async () => {
    console.log('Shutting down...');
    pollingService.stop();
    await txnWorker.close();
    await schedulerWorker.close();
    await transactionQueue.close();
    await schedulerQueue.close();
    await cache.disconnect();
    client.destroy();
    process.exit(0);
  };

  process.on('SIGTERM', shutdown);
  process.on('SIGINT', shutdown);
}

main().catch(console.error);
