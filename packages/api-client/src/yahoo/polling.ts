import { YahooClient } from './client.js';
import type { YahooTransaction } from '@fantasy/types';

export type YahooTransactionHandler = (
  transactions: YahooTransaction[],
  leagueKey: string
) => Promise<void>;

export class YahooTransactionPoller {
  private intervalId: NodeJS.Timeout | null = null;
  private lastTransactionIds = new Map<string, Set<string>>();

  constructor(
    private client: YahooClient,
    private handler: YahooTransactionHandler,
    private pollIntervalMs: number = 60_000
  ) {}

  async start(leagueKeys: string[]): Promise<void> {
    if (this.intervalId) throw new Error('Poller already running');

    for (const leagueKey of leagueKeys) {
      await this.initializeLeague(leagueKey);
    }

    this.intervalId = setInterval(() => {
      void this.pollAllLeagues(leagueKeys);
    }, this.pollIntervalMs);
  }

  stop(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  private async initializeLeague(leagueKey: string): Promise<void> {
    try {
      const transactions = await this.client.getLeagueTransactions(leagueKey);
      this.lastTransactionIds.set(leagueKey, new Set(transactions.map(t => t.transaction_id)));
    } catch (error) {
      console.error(`Failed to initialize Yahoo polling for ${leagueKey}:`, error);
      this.lastTransactionIds.set(leagueKey, new Set());
    }
  }

  private async pollAllLeagues(leagueKeys: string[]): Promise<void> {
    for (const leagueKey of leagueKeys) {
      await this.pollLeague(leagueKey);
    }
  }

  private async pollLeague(leagueKey: string): Promise<void> {
    try {
      const transactions = await this.client.getLeagueTransactions(leagueKey);
      const knownIds = this.lastTransactionIds.get(leagueKey) ?? new Set();
      const newTransactions = transactions.filter(t => !knownIds.has(t.transaction_id));

      if (newTransactions.length > 0) {
        await this.handler(newTransactions, leagueKey);
        for (const t of newTransactions) {
          knownIds.add(t.transaction_id);
        }
        this.lastTransactionIds.set(leagueKey, knownIds);
      }
    } catch (error) {
      console.error(`Yahoo polling error for ${leagueKey}:`, error);
    }
  }
}
