import type { CacheService } from '../cache/redis.js';
import { KTCClient, ktcClient } from './client.js';
import type { KTCScrapedData } from './schemas.js';

const TTL_HOURS = 6;
const TTL_SECONDS = TTL_HOURS * 60 * 60;

export class CachedKTCClient {
  constructor(
    private client: KTCClient = ktcClient,
    private cache: CacheService
  ) {}

  async getValues(format: 'dynasty' | 'redraft'): Promise<KTCScrapedData> {
    const cached = await this.cache.get<KTCScrapedData>('ktc', format);
    if (cached) {
      return {
        ...cached,
        scrapedAt: new Date(cached.scrapedAt),
      };
    }

    const data = await this.client.scrapeValues(format);
    await this.cache.set('ktc', format, data, TTL_SECONDS);
    return data;
  }

  async refreshValues(format: 'dynasty' | 'redraft'): Promise<KTCScrapedData> {
    await this.cache.delete('ktc', format);
    return this.getValues(format);
  }
}
