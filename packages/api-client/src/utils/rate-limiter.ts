export class RateLimiter {
  private timestamps: number[] = [];

  constructor(
    private maxRequests: number = 1000,
    private windowMs: number = 60_000
  ) {}

  async acquire(): Promise<void> {
    const now = Date.now();
    this.timestamps = this.timestamps.filter(t => now - t < this.windowMs);

    if (this.timestamps.length >= this.maxRequests) {
      const oldestTimestamp = this.timestamps[0];
      if (oldestTimestamp !== undefined) {
        const waitTime = this.windowMs - (now - oldestTimestamp);
        await new Promise(resolve => setTimeout(resolve, waitTime));
        return this.acquire();
      }
    }

    this.timestamps.push(now);
  }
}
