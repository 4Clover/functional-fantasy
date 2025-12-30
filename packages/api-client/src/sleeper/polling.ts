import { SleeperClient } from './client.js';
import type { SleeperTransaction } from '@fantasy/types';

export type TransactionHandler = (
  transactions: SleeperTransaction[],
  leagueId: string
) => Promise<void>;

export class TransactionPoller {
  private intervalId: NodeJS.Timeout | null = null;
  private lastTransactionIds = new Map<string, Set<string>>();

  constructor(
    private client: SleeperClient,
    private handler: TransactionHandler,
    private pollIntervalMs: number = 60_000
  ) {}

  async start(leagueIds: string[]): Promise<void> {
    if (this.intervalId) throw new Error('Poller already running');

    for (const leagueId of leagueIds) {
      await this.initializeLeague(leagueId);
    }

    this.intervalId = setInterval(() => {
      void this.pollAllLeagues(leagueIds);
    }, this.pollIntervalMs);
  }

  stop(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  private async initializeLeague(leagueId: string): Promise<void> {
    const state = await this.client.getNFLState();
    const transactions = await this.client.getLeagueTransactions(leagueId, state.week);
    this.lastTransactionIds.set(leagueId, new Set(transactions.map(t => t.transaction_id)));
  }

  private async pollAllLeagues(leagueIds: string[]): Promise<void> {
    for (const leagueId of leagueIds) {
      await this.pollLeague(leagueId);
    }
  }

  private async pollLeague(leagueId: string): Promise<void> {
    try {
      const state = await this.client.getNFLState();
      const transactions = await this.client.getLeagueTransactions(leagueId, state.week);

      const knownIds = this.lastTransactionIds.get(leagueId) ?? new Set();
      const newTransactions = transactions.filter(t => !knownIds.has(t.transaction_id));

      if (newTransactions.length > 0) {
        await this.handler(newTransactions, leagueId);
        for (const t of newTransactions) {
          knownIds.add(t.transaction_id);
        }
        this.lastTransactionIds.set(leagueId, knownIds);
      }
    } catch (error) {
      console.error(`Polling error for league ${leagueId}:`, error);
    }
  }
}
