// Sleeper
export { SleeperClient, sleeperClient, SleeperAPIError } from './sleeper/client.js';
export { CachedSleeperClient } from './sleeper/cached-client.js';
export { TransactionPoller, type TransactionHandler } from './sleeper/polling.js';

// Yahoo
export { YahooClient, YahooAPIError } from './yahoo/client.js';
export { YahooAuthService, type YahooTokens, type TokenRefreshCallback } from './yahoo/auth.js';
export { CachedYahooClient } from './yahoo/cached-client.js';
export { YahooTransactionPoller, type YahooTransactionHandler } from './yahoo/polling.js';

// ESPN
export {
  ESPNFantasyClient,
  ESPNAPIError,
  createESPNClient,
  type ESPNCredentials,
} from './espn/client.js';
export { CachedESPNClient } from './espn/cached-client.js';
export {
  ESPNScorePoller,
  type ESPNScoreUpdateHandler,
  type ESPNLeagueConfig,
} from './espn/polling.js';

// Shared
export { CacheService } from './cache/redis.js';
export { RateLimiter } from './utils/rate-limiter.js';
