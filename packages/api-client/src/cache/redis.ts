import Redis from 'ioredis';

export class CacheService {
  private redis: Redis;
  private prefix: string;

  constructor(redisUrl: string, prefix: string = 'fantasy') {
    this.redis = new Redis(redisUrl, {
      maxRetriesPerRequest: 3,
      retryStrategy: times => Math.min(times * 100, 3000),
    });
    this.prefix = prefix;
  }

  private key(namespace: string, id: string): string {
    return `${this.prefix}:${namespace}:${id}`;
  }

  async get<T>(namespace: string, id: string): Promise<T | null> {
    const data = await this.redis.get(this.key(namespace, id));
    return data ? (JSON.parse(data) as T) : null;
  }

  async set<T>(namespace: string, id: string, value: T, ttlSeconds?: number): Promise<void> {
    const key = this.key(namespace, id);
    const json = JSON.stringify(value);
    if (ttlSeconds) {
      await this.redis.set(key, json, 'EX', ttlSeconds);
    } else {
      await this.redis.set(key, json);
    }
  }

  async delete(namespace: string, id: string): Promise<void> {
    await this.redis.del(this.key(namespace, id));
  }

  async ping(): Promise<boolean> {
    return (await this.redis.ping()) === 'PONG';
  }

  async disconnect(): Promise<void> {
    await this.redis.quit();
  }
}
