import IORedis from 'ioredis';

export function createQueueConnection() {
  return new IORedis(process.env.REDIS_URL!, {
    maxRetriesPerRequest: null,
    enableReadyCheck: false,
    retryStrategy: times => Math.min(times * 100, 3000),
  });
}
