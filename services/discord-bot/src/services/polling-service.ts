import { TransactionPoller, sleeperClient } from '@fantasy/api-client';
import { transactionQueue } from '../queues/index.js';
import { prisma } from '@fantasy/database';

export class PollingService {
  private poller: TransactionPoller;

  constructor(pollIntervalMs = 60_000) {
    this.poller = new TransactionPoller(
      sleeperClient,
      async (transactions, leagueId) => {
        await transactionQueue.add(
          `txn-${leagueId}-${Date.now()}`,
          { leagueId, transactions },
          { priority: 1 }
        );
      },
      pollIntervalMs
    );
  }

  async start(): Promise<void> {
    const configs = await prisma.guildConfig.findMany({
      select: { platformLeagueId: true },
      distinct: ['platformLeagueId'],
    });

    const leagueIds = configs.map(c => c.platformLeagueId);

    if (leagueIds.length > 0) {
      await this.poller.start(leagueIds);
      console.log(`Polling ${leagueIds.length} leagues`);
    }
  }

  stop(): void {
    this.poller.stop();
  }

  async addLeague(_leagueId: string): Promise<void> {
    this.stop();
    await this.start();
  }
}
