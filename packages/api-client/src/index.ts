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

// KTC (KeepTradeCut)
export { KTCClient, ktcClient } from './ktc/client.js';
export { CachedKTCClient } from './ktc/cached-client.js';
export {
  KTCPlayerValueSchema,
  KTCScrapedDataSchema,
  type KTCPlayerValue,
  type KTCScrapedData,
} from './ktc/schemas.js';

// NFLverse Mapping
export { NFLVerseMapper, nflverseMapper } from './mapping/nflverse-mapper.js';
export { NFLVersePlayerMappingSchema, type NFLVersePlayerMapping } from './mapping/schemas.js';

// Valuation
export {
  calculateAdjustedValue,
  type LeagueContext,
  type AdjustedValue,
} from './valuation/adjustments.js';
export {
  calculateMarginalUtility,
  type RosterPlayer,
  type RosterContext,
  type MarginalUtilityResult,
} from './valuation/marginal-utility.js';

// Shared
export { CacheService } from './cache/redis.js';
export { RateLimiter } from './utils/rate-limiter.js';
