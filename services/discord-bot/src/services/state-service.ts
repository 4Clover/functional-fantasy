import { CacheService } from '@fantasy/api-client';

export class StateService {
  private cache: CacheService;

  constructor(redisUrl: string) {
    this.cache = new CacheService(redisUrl, 'discord-bot');
  }

  async getLastTransactionId(leagueId: string): Promise<string | null> {
    return this.cache.get<string>('last-txn', leagueId);
  }

  async setLastTransactionId(leagueId: string, txnId: string): Promise<void> {
    await this.cache.set('last-txn', leagueId, txnId);
  }

  async getPlayerCache(): Promise<Map<string, unknown> | null> {
    return this.cache.get('players', 'all');
  }

  async setPlayerCache(players: Map<string, unknown>): Promise<void> {
    await this.cache.set('players', 'all', Object.fromEntries(players), 86400);
  }

  async disconnect(): Promise<void> {
    await this.cache.disconnect();
  }
}
