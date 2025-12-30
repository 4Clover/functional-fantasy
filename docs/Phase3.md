# Phase 3: Yahoo & ESPN Platform Integration

**Goal**: Extend platform support to Yahoo (OAuth 2.0) and ESPN (cookie-based auth).

---

## 1. Yahoo Fantasy API Integration

### 1.1 Library Selection

**Primary Library**: `yahoo-fantasy` (npm: `yahoo-fantasy-sports-api`)

- GitHub: [whatadewitt/yahoo-fantasy-sports-api](https://github.com/whatadewitt/yahoo-fantasy-sports-api)
- Actively maintained with OAuth 2.0 support
- Built-in token refresh handling
- Handles Yahoo's mixed XML/JSON responses

```bash
pnpm --filter @fantasy/api-client add yahoo-fantasy
```

### 1.2 OAuth 2.0 Authentication Flow

**Prerequisites**: Register app at [Yahoo Developer Network](https://developer.yahoo.com/) with Fantasy Sports scope.

**Environment Variables** (add to `.env.example`):

```env
YAHOO_CLIENT_ID=your_client_id
YAHOO_CLIENT_SECRET=your_client_secret
YAHOO_REDIRECT_URI=http://localhost:3000/api/auth/yahoo/callback
```

**Authentication Implementation** (`packages/api-client/src/yahoo/auth.ts`):

```typescript
import YahooFantasy from 'yahoo-fantasy';

export class YahooAuthService {
  private yf: YahooFantasy;

  constructor(
    clientId: string,
    clientSecret: string,
    private onTokenRefresh?: (tokens: {
      accessToken: string;
      refreshToken: string;
    }) => Promise<void>,
    redirectUri?: string
  ) {
    this.yf = new YahooFantasy(
      clientId,
      clientSecret,
      this.handleTokenRefresh.bind(this),
      redirectUri
    );
  }

  private async handleTokenRefresh(tokens: { access_token: string; refresh_token: string }) {
    if (this.onTokenRefresh) {
      await this.onTokenRefresh({
        accessToken: tokens.access_token,
        refreshToken: tokens.refresh_token,
      });
    }
  }

  getAuthUrl(): string {
    return `https://api.login.yahoo.com/oauth2/request_auth?client_id=${process.env.YAHOO_CLIENT_ID}&redirect_uri=${encodeURIComponent(process.env.YAHOO_REDIRECT_URI!)}&response_type=code&scope=openid%20fspt-r`;
  }

  async handleCallback(code: string): Promise<{ accessToken: string; refreshToken: string }> {
    const tokenEndpoint = 'https://api.login.yahoo.com/oauth2/get_token';
    const params = new URLSearchParams({
      client_id: process.env.YAHOO_CLIENT_ID!,
      client_secret: process.env.YAHOO_CLIENT_SECRET!,
      redirect_uri: process.env.YAHOO_REDIRECT_URI!,
      code,
      grant_type: 'authorization_code',
    });

    const response = await fetch(tokenEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params,
    });

    const data = await response.json();
    return {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
    };
  }

  setTokens(accessToken: string, refreshToken: string) {
    this.yf.setUserToken(accessToken);
    this.yf.setRefreshToken(refreshToken);
  }

  getClient(): YahooFantasy {
    return this.yf;
  }
}
```

### 1.3 Yahoo Client Implementation

**File**: `packages/api-client/src/yahoo/client.ts`

```typescript
import axios, { type AxiosInstance, type AxiosError } from 'axios';
import { z } from 'zod';
import {
  YahooLeagueSchema,
  YahooTeamSchema,
  YahooRosterSchema,
  YahooTransactionSchema,
  YahooPlayerSchema,
  type YahooLeague,
  type YahooTeam,
  type YahooRoster,
  type YahooTransaction,
  type YahooPlayer,
} from '@fantasy/types';

export class YahooAPIError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public endpoint?: string
  ) {
    super(message);
    this.name = 'YahooAPIError';
  }
}

export class YahooClient {
  private client: AxiosInstance;

  constructor(private accessToken: string) {
    this.client = axios.create({
      baseURL: 'https://fantasysports.yahooapis.com/fantasy/v2',
      timeout: 15000,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      params: { format: 'json' },
    });

    this.client.interceptors.response.use(
      response => response,
      (error: AxiosError) => {
        const message = error.response?.data ? JSON.stringify(error.response.data) : error.message;
        throw new YahooAPIError(message, error.response?.status, error.config?.url);
      }
    );
  }

  setAccessToken(token: string) {
    this.accessToken = token;
    this.client.defaults.headers.Authorization = `Bearer ${token}`;
  }

  async getUserTeams(gameKey: string = 'nfl'): Promise<YahooTeam[]> {
    const { data } = await this.client.get(`/users;use_login=1/games;game_keys=${gameKey}/teams`);
    return z.array(YahooTeamSchema).parse(this.extractTeams(data));
  }

  async getLeague(leagueKey: string): Promise<YahooLeague> {
    const { data } = await this.client.get(`/league/${leagueKey}`);
    return YahooLeagueSchema.parse(this.extractLeague(data));
  }

  async getLeagueStandings(leagueKey: string): Promise<YahooTeam[]> {
    const { data } = await this.client.get(`/league/${leagueKey}/standings`);
    return z.array(YahooTeamSchema).parse(this.extractStandings(data));
  }

  async getTeamRoster(teamKey: string, week?: number): Promise<YahooRoster> {
    const url = week ? `/team/${teamKey}/roster;week=${week}` : `/team/${teamKey}/roster`;
    const { data } = await this.client.get(url);
    return YahooRosterSchema.parse(this.extractRoster(data));
  }

  async getLeagueTransactions(leagueKey: string): Promise<YahooTransaction[]> {
    const { data } = await this.client.get(`/league/${leagueKey}/transactions`);
    return z.array(YahooTransactionSchema).parse(this.extractTransactions(data));
  }

  async getPlayer(playerKey: string): Promise<YahooPlayer> {
    const { data } = await this.client.get(`/player/${playerKey}`);
    return YahooPlayerSchema.parse(this.extractPlayer(data));
  }

  // Yahoo API returns deeply nested structures - helper methods to extract
  private extractTeams(data: unknown): unknown[] {
    return (
      (data as any)?.fantasy_content?.users?.[0]?.user?.[1]?.games?.[0]?.game?.[1]?.teams || []
    );
  }

  private extractLeague(data: unknown): unknown {
    return (data as any)?.fantasy_content?.league?.[0] || {};
  }

  private extractStandings(data: unknown): unknown[] {
    return (data as any)?.fantasy_content?.league?.[1]?.standings?.[0]?.teams || [];
  }

  private extractRoster(data: unknown): unknown {
    return (data as any)?.fantasy_content?.team?.[1]?.roster || {};
  }

  private extractTransactions(data: unknown): unknown[] {
    return (data as any)?.fantasy_content?.league?.[1]?.transactions || [];
  }

  private extractPlayer(data: unknown): unknown {
    return (data as any)?.fantasy_content?.player?.[0] || {};
  }
}
```

### 1.4 Yahoo Zod Schemas

**File**: `packages/types/src/yahoo.ts`

```typescript
import { z } from 'zod';

// ============================================
// LEAGUE
// ============================================

export const YahooLeagueSchema = z.object({
  league_key: z.string(),
  league_id: z.string(),
  name: z.string(),
  num_teams: z.number(),
  league_type: z.string(),
  season: z.string(),
  current_week: z.number().optional(),
  start_week: z.number().optional(),
  end_week: z.number().optional(),
  is_finished: z.boolean().optional(),
  scoring_type: z.string().optional(),
});

export type YahooLeague = z.infer<typeof YahooLeagueSchema>;

// ============================================
// TEAM
// ============================================

export const YahooTeamSchema = z.object({
  team_key: z.string(),
  team_id: z.string(),
  name: z.string(),
  team_logo: z.string().nullable().optional(),
  waiver_priority: z.number().optional(),
  number_of_moves: z.number().optional(),
  number_of_trades: z.number().optional(),
  standings: z
    .object({
      rank: z.number(),
      outcome_totals: z
        .object({
          wins: z.number(),
          losses: z.number(),
          ties: z.number(),
        })
        .optional(),
      points_for: z.string().optional(),
      points_against: z.string().optional(),
    })
    .optional(),
  managers: z
    .array(
      z.object({
        manager_id: z.string(),
        nickname: z.string().optional(),
        email: z.string().optional(),
      })
    )
    .optional(),
});

export type YahooTeam = z.infer<typeof YahooTeamSchema>;

// ============================================
// ROSTER
// ============================================

export const YahooRosterPlayerSchema = z.object({
  player_key: z.string(),
  player_id: z.string(),
  name: z.object({
    full: z.string(),
    first: z.string(),
    last: z.string(),
  }),
  position_type: z.string(),
  primary_position: z.string(),
  eligible_positions: z.array(z.string()),
  selected_position: z.string(),
  is_editable: z.boolean().optional(),
});

export const YahooRosterSchema = z.object({
  coverage_type: z.string(),
  week: z.number().optional(),
  players: z.array(YahooRosterPlayerSchema),
});

export type YahooRoster = z.infer<typeof YahooRosterSchema>;
export type YahooRosterPlayer = z.infer<typeof YahooRosterPlayerSchema>;

// ============================================
// TRANSACTION
// ============================================

export const YahooTransactionSchema = z.object({
  transaction_key: z.string(),
  transaction_id: z.string(),
  type: z.enum(['add', 'drop', 'add/drop', 'trade', 'commish']),
  status: z.enum(['successful', 'pending', 'vetoed']),
  timestamp: z.string(),
  players: z
    .array(
      z.object({
        player_key: z.string(),
        player_id: z.string(),
        name: z.string(),
        transaction_data: z.object({
          type: z.enum(['add', 'drop']),
          source_type: z.string().optional(),
          destination_type: z.string().optional(),
          destination_team_key: z.string().optional(),
        }),
      })
    )
    .optional(),
});

export type YahooTransaction = z.infer<typeof YahooTransactionSchema>;

// ============================================
// PLAYER
// ============================================

export const YahooPlayerSchema = z.object({
  player_key: z.string(),
  player_id: z.string(),
  name: z.object({
    full: z.string(),
    first: z.string(),
    last: z.string(),
  }),
  editorial_team_abbr: z.string().nullable(),
  display_position: z.string(),
  position_type: z.string(),
  primary_position: z.string(),
  eligible_positions: z.array(z.string()),
  status: z.string().nullable().optional(),
  injury_note: z.string().nullable().optional(),
  bye_week: z.number().optional(),
});

export type YahooPlayer = z.infer<typeof YahooPlayerSchema>;
```

### 1.5 Yahoo Key Endpoints Reference

| Resource     | Endpoint                                       | Description          |
| ------------ | ---------------------------------------------- | -------------------- |
| User Teams   | `/users;use_login=1/games;game_keys=nfl/teams` | Get user's NFL teams |
| League Info  | `/league/{league_key}`                         | League metadata      |
| Standings    | `/league/{league_key}/standings`               | Current standings    |
| Transactions | `/league/{league_key}/transactions`            | All transactions     |
| Roster       | `/team/{team_key}/roster;week={week}`          | Team roster for week |
| Scoreboard   | `/league/{league_key}/scoreboard;week={week}`  | Weekly matchups      |

**League Key Format**: `{game_key}.l.{league_id}` (e.g., `449.l.12345` for 2024 NFL)

### 1.6 Next.js OAuth Routes

**File**: `apps/web/app/api/auth/yahoo/route.ts`

```typescript
import { redirect } from 'next/navigation';

export async function GET() {
  const authUrl = new URL('https://api.login.yahoo.com/oauth2/request_auth');
  authUrl.searchParams.set('client_id', process.env.YAHOO_CLIENT_ID!);
  authUrl.searchParams.set('redirect_uri', process.env.YAHOO_REDIRECT_URI!);
  authUrl.searchParams.set('response_type', 'code');
  authUrl.searchParams.set('scope', 'openid fspt-r');

  redirect(authUrl.toString());
}
```

**File**: `apps/web/app/api/auth/yahoo/callback/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@fantasy/database';

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get('code');
  if (!code) {
    return NextResponse.json({ error: 'Missing code' }, { status: 400 });
  }

  const tokenResponse = await fetch('https://api.login.yahoo.com/oauth2/get_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: process.env.YAHOO_CLIENT_ID!,
      client_secret: process.env.YAHOO_CLIENT_SECRET!,
      redirect_uri: process.env.YAHOO_REDIRECT_URI!,
      code,
      grant_type: 'authorization_code',
    }),
  });

  const tokens = await tokenResponse.json();

  // Store tokens in PlatformAccount (implement user session logic)
  // await prisma.platformAccount.upsert({ ... });

  return NextResponse.redirect(new URL('/dashboard', request.url));
}
```

---

## 2. ESPN Fantasy API Integration

### 2.1 Library Selection

**Primary Library**: `espn-fantasy-football-api`

- GitHub: [mkreiser/espn-fantasy-football-api](https://github.com/mkreiser/espn-fantasy-football-api)
- Supports ESPN v3 API
- Built-in private league authentication
- Well-documented with TypeScript support

```bash
pnpm --filter @fantasy/api-client add espn-fantasy-football-api
```

### 2.2 Cookie-Based Authentication

**Prerequisites**: Users must extract cookies from Chrome DevTools:

1. Log into ESPN Fantasy Football
2. Open DevTools → Application → Cookies → espn.com
3. Copy `espn_s2` and `SWID` values

**Environment Variables** (add to `.env.example`):

```env
ESPN_S2=your_espn_s2_cookie
ESPN_SWID=your_swid_cookie
ENCRYPTION_KEY=your_32_byte_hex_key
```

**Security Considerations**:

- Cookies are encrypted at rest using AES-256-GCM
- Warn users about cookie expiration (typically 1 year)

### 2.3 ESPN Cookie Encryption

**File**: `packages/utils/src/crypto.ts`

```typescript
import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';

const ALGORITHM = 'aes-256-gcm';
const KEY = Buffer.from(process.env.ENCRYPTION_KEY!, 'hex');

export function encrypt(text: string): string {
  const iv = randomBytes(16);
  const cipher = createCipheriv(ALGORITHM, KEY, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  const authTag = cipher.getAuthTag();
  return `${iv.toString('hex')}:${authTag.toString('hex')}:${encrypted}`;
}

export function decrypt(encryptedText: string): string {
  const [ivHex, authTagHex, encrypted] = encryptedText.split(':');
  const iv = Buffer.from(ivHex, 'hex');
  const authTag = Buffer.from(authTagHex, 'hex');
  const decipher = createDecipheriv(ALGORITHM, KEY, iv);
  decipher.setAuthTag(authTag);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}
```

Store ESPN cookies encrypted:

```typescript
await prisma.platformAccount.create({
  data: {
    platform: 'ESPN',
    platformId: espnUserId,
    accessToken: encrypt(JSON.stringify({ espnS2, SWID })),
  },
});
```

### 2.4 ESPN Client Implementation

**File**: `packages/api-client/src/espn/client.ts`

```typescript
import { Client as ESPNClient } from 'espn-fantasy-football-api/node';
import { z } from 'zod';
import {
  ESPNLeagueSchema,
  ESPNTeamSchema,
  ESPNBoxscoreSchema,
  ESPNPlayerSchema,
  type ESPNLeague,
  type ESPNTeam,
  type ESPNBoxscore,
  type ESPNPlayer,
} from '@fantasy/types';

export class ESPNAPIError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public endpoint?: string
  ) {
    super(message);
    this.name = 'ESPNAPIError';
  }
}

interface ESPNCredentials {
  espnS2: string;
  SWID: string;
}

export class ESPNFantasyClient {
  private client: ESPNClient;

  constructor(
    private leagueId: number,
    credentials?: ESPNCredentials
  ) {
    this.client = new ESPNClient({ leagueId });
    if (credentials) {
      this.setCookies(credentials);
    }
  }

  setCookies(credentials: ESPNCredentials) {
    this.client.setCookies({
      espnS2: credentials.espnS2,
      SWID: credentials.SWID,
    });
  }

  setLeagueId(leagueId: number) {
    this.leagueId = leagueId;
    this.client = new ESPNClient({ leagueId });
  }

  async getLeagueInfo(seasonId: number): Promise<ESPNLeague> {
    try {
      const info = await this.client.getLeagueInfo({ seasonId });
      return ESPNLeagueSchema.parse(info);
    } catch (error) {
      throw new ESPNAPIError(
        error instanceof Error ? error.message : 'Failed to get league info',
        undefined,
        `league/${this.leagueId}`
      );
    }
  }

  async getTeams(seasonId: number): Promise<ESPNTeam[]> {
    try {
      const teams = await this.client.getTeamsAtWeek({
        seasonId,
        scoringPeriodId: 1,
      });
      return z.array(ESPNTeamSchema).parse(teams);
    } catch (error) {
      throw new ESPNAPIError(
        error instanceof Error ? error.message : 'Failed to get teams',
        undefined,
        `league/${this.leagueId}/teams`
      );
    }
  }

  async getBoxscoreForWeek(
    seasonId: number,
    matchupPeriodId: number,
    scoringPeriodId: number
  ): Promise<ESPNBoxscore[]> {
    try {
      const boxscores = await this.client.getBoxscoreForWeek({
        seasonId,
        matchupPeriodId,
        scoringPeriodId,
      });
      return z.array(ESPNBoxscoreSchema).parse(boxscores);
    } catch (error) {
      throw new ESPNAPIError(
        error instanceof Error ? error.message : 'Failed to get boxscore',
        undefined,
        `league/${this.leagueId}/boxscore`
      );
    }
  }

  async getFreeAgents(seasonId: number, scoringPeriodId: number): Promise<ESPNPlayer[]> {
    try {
      const freeAgents = await this.client.getFreeAgents({
        seasonId,
        scoringPeriodId,
      });
      return z.array(ESPNPlayerSchema).parse(freeAgents);
    } catch (error) {
      throw new ESPNAPIError(
        error instanceof Error ? error.message : 'Failed to get free agents',
        undefined,
        `league/${this.leagueId}/freeagents`
      );
    }
  }
}

export function createESPNClient(
  leagueId: number,
  espnS2?: string,
  swid?: string
): ESPNFantasyClient {
  const credentials = espnS2 && swid ? { espnS2, SWID: swid } : undefined;
  return new ESPNFantasyClient(leagueId, credentials);
}
```

### 2.5 ESPN Zod Schemas

**File**: `packages/types/src/espn.ts`

```typescript
import { z } from 'zod';

// ============================================
// LEAGUE
// ============================================

export const ESPNLeagueSchema = z.object({
  id: z.number(),
  name: z.string(),
  size: z.number(),
  isPublic: z.boolean(),
  scoringPeriodId: z.number(),
  firstScoringPeriod: z.number(),
  finalScoringPeriod: z.number(),
  currentMatchupPeriod: z.number(),
  seasonId: z.number(),
});

export type ESPNLeague = z.infer<typeof ESPNLeagueSchema>;

// ============================================
// TEAM
// ============================================

export const ESPNTeamSchema = z.object({
  id: z.number(),
  name: z.string(),
  abbreviation: z.string(),
  logoUrl: z.string().nullable().optional(),
  wins: z.number().optional(),
  losses: z.number().optional(),
  ties: z.number().optional(),
  pointsFor: z.number().optional(),
  pointsAgainst: z.number().optional(),
  playoffSeed: z.number().optional(),
  finalStandingsPosition: z.number().optional(),
});

export type ESPNTeam = z.infer<typeof ESPNTeamSchema>;

// ============================================
// BOXSCORE (Matchup)
// ============================================

export const ESPNBoxscorePlayerSchema = z.object({
  playerId: z.number(),
  playerPoolEntry: z
    .object({
      player: z.object({
        id: z.number(),
        fullName: z.string(),
        defaultPositionId: z.number(),
        proTeamId: z.number(),
        eligibleSlots: z.array(z.number()),
        injured: z.boolean().optional(),
        injuryStatus: z.string().optional(),
      }),
    })
    .optional(),
  position: z.string(),
  totalPoints: z.number(),
  projectedPoints: z.number().optional(),
});

export const ESPNBoxscoreSchema = z.object({
  homeTeamId: z.number(),
  awayTeamId: z.number(),
  homeScore: z.number(),
  awayScore: z.number(),
  homeRoster: z.array(ESPNBoxscorePlayerSchema).optional(),
  awayRoster: z.array(ESPNBoxscorePlayerSchema).optional(),
  homeProjectedScore: z.number().optional(),
  awayProjectedScore: z.number().optional(),
});

export type ESPNBoxscore = z.infer<typeof ESPNBoxscoreSchema>;
export type ESPNBoxscorePlayer = z.infer<typeof ESPNBoxscorePlayerSchema>;

// ============================================
// PLAYER
// ============================================

export const ESPNPlayerSchema = z.object({
  id: z.number(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  fullName: z.string(),
  proTeamId: z.number(),
  defaultPositionId: z.number(),
  eligiblePositions: z.array(z.string()).optional(),
  injured: z.boolean().optional(),
  injuryStatus: z.string().nullable().optional(),
  percentOwned: z.number().optional(),
  percentStarted: z.number().optional(),
});

export type ESPNPlayer = z.infer<typeof ESPNPlayerSchema>;

// ============================================
// POSITION MAPPINGS
// ============================================

export const ESPN_POSITION_MAP: Record<number, string> = {
  1: 'QB',
  2: 'RB',
  3: 'WR',
  4: 'TE',
  5: 'K',
  16: 'D/ST',
  17: 'K',
  20: 'BN',
  21: 'IR',
  23: 'FLEX',
};

export const ESPN_TEAM_MAP: Record<number, string> = {
  0: 'FA',
  1: 'ATL',
  2: 'BUF',
  3: 'CHI',
  4: 'CIN',
  5: 'CLE',
  6: 'DAL',
  7: 'DEN',
  8: 'DET',
  9: 'GB',
  10: 'TEN',
  11: 'IND',
  12: 'KC',
  13: 'LV',
  14: 'LAR',
  15: 'MIA',
  16: 'MIN',
  17: 'NE',
  18: 'NO',
  19: 'NYG',
  20: 'NYJ',
  21: 'PHI',
  22: 'ARI',
  23: 'PIT',
  24: 'LAC',
  25: 'SF',
  26: 'SEA',
  27: 'TB',
  28: 'WAS',
  29: 'CAR',
  30: 'JAX',
  33: 'BAL',
  34: 'HOU',
};
```

### 2.6 ESPN API Views Reference

| View               | Description                   | Use Case                |
| ------------------ | ----------------------------- | ----------------------- |
| `mMatchup`         | Weekly matchup details        | Boxscores, head-to-head |
| `mRoster`          | Current roster configurations | Active/bench players    |
| `mTeam`            | Team metadata and standings   | League overview         |
| `kona_player_info` | Detailed player statistics    | Player research         |
| `mScoreboard`      | Weekly scores                 | Live scoring            |
| `mTransactions2`   | Transaction history           | Trade/waiver tracking   |

### 2.7 ESPN Conventions

- **leagueId**: Integer league identifier (e.g., `387659`)
- **seasonId**: Year of season (e.g., `2024`)
- **matchupPeriod**: Entire matchup (can span multiple weeks in playoffs)
- **scoringPeriod**: Single NFL week (1-18)
- `scoringPeriodId: 0` = preseason, `scoringPeriodId: 18` = end of season

---

## 3. Cached Clients

### 3.1 Cached Yahoo Client

**File**: `packages/api-client/src/yahoo/cached-client.ts`

```typescript
import { YahooClient } from './client.js';
import { CacheService } from '../cache/redis.js';
import type { YahooLeague, YahooTeam, YahooRoster } from '@fantasy/types';

const TTL = {
  LEAGUE: 5 * 60, // 5 minutes
  STANDINGS: 2 * 60, // 2 minutes
  ROSTER: 60, // 1 minute
  TRANSACTIONS: 30, // 30 seconds
} as const;

export class CachedYahooClient {
  constructor(
    private client: YahooClient,
    private cache: CacheService
  ) {}

  async getLeague(leagueKey: string): Promise<YahooLeague> {
    const cached = await this.cache.get<YahooLeague>('yahoo:league', leagueKey);
    if (cached) return cached;

    const league = await this.client.getLeague(leagueKey);
    await this.cache.set('yahoo:league', leagueKey, league, TTL.LEAGUE);
    return league;
  }

  async getLeagueStandings(leagueKey: string): Promise<YahooTeam[]> {
    const cached = await this.cache.get<YahooTeam[]>('yahoo:standings', leagueKey);
    if (cached) return cached;

    const standings = await this.client.getLeagueStandings(leagueKey);
    await this.cache.set('yahoo:standings', leagueKey, standings, TTL.STANDINGS);
    return standings;
  }

  async getTeamRoster(teamKey: string, week?: number): Promise<YahooRoster> {
    const cacheKey = week ? `${teamKey}:${week}` : teamKey;
    const cached = await this.cache.get<YahooRoster>('yahoo:roster', cacheKey);
    if (cached) return cached;

    const roster = await this.client.getTeamRoster(teamKey, week);
    await this.cache.set('yahoo:roster', cacheKey, roster, TTL.ROSTER);
    return roster;
  }
}
```

### 3.2 Cached ESPN Client

**File**: `packages/api-client/src/espn/cached-client.ts`

```typescript
import { ESPNFantasyClient } from './client.js';
import { CacheService } from '../cache/redis.js';
import type { ESPNLeague, ESPNTeam, ESPNBoxscore } from '@fantasy/types';

const TTL = {
  LEAGUE: 5 * 60, // 5 minutes
  TEAMS: 2 * 60, // 2 minutes
  BOXSCORE: 30, // 30 seconds (live scoring)
  FREE_AGENTS: 60, // 1 minute
} as const;

export class CachedESPNClient {
  constructor(
    private client: ESPNFantasyClient,
    private cache: CacheService,
    private leagueId: number
  ) {}

  async getLeagueInfo(seasonId: number): Promise<ESPNLeague> {
    const cacheKey = `${this.leagueId}:${seasonId}`;
    const cached = await this.cache.get<ESPNLeague>('espn:league', cacheKey);
    if (cached) return cached;

    const league = await this.client.getLeagueInfo(seasonId);
    await this.cache.set('espn:league', cacheKey, league, TTL.LEAGUE);
    return league;
  }

  async getTeams(seasonId: number): Promise<ESPNTeam[]> {
    const cacheKey = `${this.leagueId}:${seasonId}`;
    const cached = await this.cache.get<ESPNTeam[]>('espn:teams', cacheKey);
    if (cached) return cached;

    const teams = await this.client.getTeams(seasonId);
    await this.cache.set('espn:teams', cacheKey, teams, TTL.TEAMS);
    return teams;
  }

  async getBoxscoreForWeek(
    seasonId: number,
    matchupPeriodId: number,
    scoringPeriodId: number
  ): Promise<ESPNBoxscore[]> {
    const cacheKey = `${this.leagueId}:${seasonId}:${matchupPeriodId}:${scoringPeriodId}`;
    const cached = await this.cache.get<ESPNBoxscore[]>('espn:boxscore', cacheKey);
    if (cached) return cached;

    const boxscores = await this.client.getBoxscoreForWeek(
      seasonId,
      matchupPeriodId,
      scoringPeriodId
    );
    await this.cache.set('espn:boxscore', cacheKey, boxscores, TTL.BOXSCORE);
    return boxscores;
  }
}
```

---

## 4. Transaction Polling

### 4.1 Yahoo Transaction Poller

**File**: `packages/api-client/src/yahoo/polling.ts`

```typescript
import { YahooClient } from './client.js';
import type { YahooTransaction } from '@fantasy/types';

export type YahooTransactionHandler = (
  transactions: YahooTransaction[],
  leagueKey: string
) => Promise<void>;

export class YahooTransactionPoller {
  private lastTransactionIds: Map<string, string> = new Map();
  private polling = false;

  constructor(
    private client: YahooClient,
    private handler: YahooTransactionHandler,
    private pollIntervalMs: number = 60000
  ) {}

  async start(leagueKeys: string[]) {
    this.polling = true;

    while (this.polling) {
      for (const leagueKey of leagueKeys) {
        try {
          const transactions = await this.client.getLeagueTransactions(leagueKey);
          const newTransactions = this.filterNewTransactions(leagueKey, transactions);

          if (newTransactions.length > 0) {
            await this.handler(newTransactions, leagueKey);
          }
        } catch (error) {
          console.error(`Yahoo polling error for ${leagueKey}:`, error);
        }
      }

      await this.sleep(this.pollIntervalMs);
    }
  }

  stop() {
    this.polling = false;
  }

  private filterNewTransactions(
    leagueKey: string,
    transactions: YahooTransaction[]
  ): YahooTransaction[] {
    const lastId = this.lastTransactionIds.get(leagueKey);
    if (!lastId || transactions.length === 0) {
      if (transactions.length > 0) {
        this.lastTransactionIds.set(leagueKey, transactions[0].transaction_id);
      }
      return lastId ? transactions : [];
    }

    const newTxns: YahooTransaction[] = [];
    for (const txn of transactions) {
      if (txn.transaction_id === lastId) break;
      newTxns.push(txn);
    }

    if (newTxns.length > 0) {
      this.lastTransactionIds.set(leagueKey, newTxns[0].transaction_id);
    }

    return newTxns;
  }

  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
```

### 4.2 ESPN Score Poller

**File**: `packages/api-client/src/espn/polling.ts`

```typescript
import { ESPNFantasyClient } from './client.js';
import type { ESPNBoxscore } from '@fantasy/types';

export type ESPNScoreUpdateHandler = (
  boxscores: ESPNBoxscore[],
  leagueId: number,
  week: number
) => Promise<void>;

export class ESPNScorePoller {
  private lastScores: Map<string, Map<number, number>> = new Map();
  private polling = false;

  constructor(
    private clientFactory: (leagueId: number) => ESPNFantasyClient,
    private handler: ESPNScoreUpdateHandler,
    private pollIntervalMs: number = 30000
  ) {}

  async start(leagues: { leagueId: number; seasonId: number; week: number }[]) {
    this.polling = true;

    while (this.polling) {
      for (const { leagueId, seasonId, week } of leagues) {
        try {
          const client = this.clientFactory(leagueId);
          const boxscores = await client.getBoxscoreForWeek(seasonId, week, week);

          if (this.hasScoreChanges(leagueId, boxscores)) {
            await this.handler(boxscores, leagueId, week);
          }
        } catch (error) {
          console.error(`ESPN polling error for league ${leagueId}:`, error);
        }
      }

      await this.sleep(this.pollIntervalMs);
    }
  }

  stop() {
    this.polling = false;
  }

  private hasScoreChanges(leagueId: number, boxscores: ESPNBoxscore[]): boolean {
    const key = String(leagueId);
    const lastScoreMap = this.lastScores.get(key) || new Map();
    let changed = false;

    for (const box of boxscores) {
      const homeKey = box.homeTeamId;
      const awayKey = box.awayTeamId;

      if (
        lastScoreMap.get(homeKey) !== box.homeScore ||
        lastScoreMap.get(awayKey) !== box.awayScore
      ) {
        changed = true;
      }

      lastScoreMap.set(homeKey, box.homeScore);
      lastScoreMap.set(awayKey, box.awayScore);
    }

    this.lastScores.set(key, lastScoreMap);
    return changed && lastScoreMap.size > 0;
  }

  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
```

---

## 5. Database Schema Updates

> **Prisma 7 Note**: Remember that the `url` property is no longer supported in the datasource block. See Phase 1 for the `prisma.config.ts` configuration.

### 5.1 GuildConfig Enhancement

```prisma
model GuildConfig {
  id        String   @id @default(cuid())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  guildId               String  @unique
  guildName             String?
  notificationChannelId String

  // Multi-platform league support
  platform         Platform @default(SLEEPER)
  platformLeagueId String   // Generic field for any platform

  // Notification preferences
  tradeAlerts     Boolean @default(true)
  waiverAlerts    Boolean @default(true)
  injuryAlerts    Boolean @default(true)
  lineupReminders Boolean @default(true)

  timezone String @default("America/New_York")

  @@index([platformLeagueId])
  @@map("guild_configs")
}
```

### 5.2 UserNotificationPreference Enhancement

```prisma
model UserNotificationPreference {
  id        String   @id @default(cuid())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  discordUserId String @unique

  dmTradeAlerts     Boolean @default(false)
  dmLineupReminders Boolean @default(true)
  dmInjuryAlerts    Boolean @default(false)

  // Multi-platform linked accounts
  sleeperUserId String?
  yahooUserId   String?
  espnUserId    String?

  @@map("user_notification_preferences")
}
```

---

## 6. Files to Create/Modify

### New Files

| Path                                             | Description              |
| ------------------------------------------------ | ------------------------ |
| `packages/api-client/src/yahoo/client.ts`        | Yahoo API client         |
| `packages/api-client/src/yahoo/auth.ts`          | Yahoo OAuth service      |
| `packages/api-client/src/yahoo/cached-client.ts` | Cached Yahoo client      |
| `packages/api-client/src/yahoo/polling.ts`       | Yahoo transaction poller |
| `packages/api-client/src/espn/client.ts`         | ESPN API client          |
| `packages/api-client/src/espn/cached-client.ts`  | Cached ESPN client       |
| `packages/api-client/src/espn/polling.ts`        | ESPN score poller        |
| `packages/types/src/yahoo.ts`                    | Yahoo Zod schemas        |
| `packages/types/src/espn.ts`                     | ESPN Zod schemas         |
| `packages/utils/src/crypto.ts`                   | Encryption utilities     |
| `apps/web/app/api/auth/yahoo/route.ts`           | Yahoo OAuth initiation   |
| `apps/web/app/api/auth/yahoo/callback/route.ts`  | Yahoo OAuth callback     |

### Modified Files

| Path                                     | Change                                         |
| ---------------------------------------- | ---------------------------------------------- |
| `packages/api-client/src/index.ts`       | Export Yahoo/ESPN clients and pollers          |
| `packages/types/src/index.ts`            | Export Yahoo/ESPN types                        |
| `packages/database/prisma/schema.prisma` | Update GuildConfig, UserNotificationPreference |
| `.env.example`                           | Add YAHOO*\*, ESPN*\*, ENCRYPTION_KEY vars     |
| `packages/utils/src/env.ts`              | Add Yahoo/ESPN/encryption env validation       |

---

## 7. Implementation Order

1. **Types First**: Create `yahoo.ts` and `espn.ts` Zod schemas
2. **Core Clients**: Implement `YahooClient` and `ESPNFantasyClient`
3. **Yahoo OAuth**: Implement `YahooAuthService`
4. **Cached Clients**: Add `CachedYahooClient` and `CachedESPNClient`
5. **Database Migration**: Update schema and run migration
6. **Exports**: Update `index.ts` files
7. **Environment**: Update `.env.example` and env validation
8. **Transaction Polling**: Add Yahoo/ESPN pollers
9. **Discord Bot Integration**: Update polling/notification services

---

## 8. Rate Limiting

| Platform | Rate Limit     | Recommendation                              |
| -------- | -------------- | ------------------------------------------- |
| Yahoo    | ~2000 req/hour | Use existing `RateLimiter` with 30 req/min  |
| ESPN     | Undocumented   | Conservative 20 req/min, aggressive caching |
| Sleeper  | Generous       | Current implementation sufficient           |

---

## 9. Testing Strategy

- Unit tests for Zod schema validation
- Integration tests with mock responses (avoid hitting live APIs)
- Manual testing with real credentials during development
- System tests for Discord bot notification flows
- Encryption/decryption round-trip tests
