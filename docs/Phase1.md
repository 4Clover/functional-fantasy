# Phase 1: Foundation & Core Infrastructure

**Goal**: Establish the monorepo foundation, database schema, and Sleeper API integration as the primary data source.

---

## Table of Contents

1. [Monorepo Setup & Configuration](#11-monorepo-setup--configuration)
2. [Database Schema Design](#12-database-schema-design-prisma)
3. [Sleeper API Integration](#13-sleeper-api-integration)
4. [Discord Bot Foundation](#14-discord-bot-foundation)

---

## 1.1 Monorepo Setup & Configuration

### Package Manager: pnpm 10.26+

The monorepo uses pnpm workspaces for dependency management. The workspace configuration is defined in `pnpm-workspace.yaml`:

```yaml
packages:
  - 'apps/*'
  - 'packages/*'
  - 'services/*'
```

### Build Orchestration: Turborepo

Turborepo handles build caching and task orchestration across all packages.

**Configuration (`turbo.json`):**

```json
{
  "$schema": "https://turborepo.org/schema.json",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "dist/**", "build/**"],
      "cache": true
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {
      "outputs": [],
      "cache": true
    },
    "test": {
      "dependsOn": ["build"],
      "outputs": ["coverage/**"],
      "cache": true
    },
    "typecheck": {
      "outputs": [],
      "cache": true
    }
  },
  "globalEnv": ["NODE_ENV", "DATABASE_URL", "REDIS_URL"]
}
```

**Key Features:**

- `^build` dependency ensures packages build in correct order
- Caching enabled for build, lint, test, and typecheck tasks
- `dev` task runs persistently without caching
- Global environment variables shared across tasks

### TypeScript Configuration

Shared TypeScript configs in `packages/typescript-config/`:

**Base Configuration (`base.json`):**

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noEmit": true,
    "declaration": true,
    "declarationMap": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "verbatimModuleSyntax": true
  }
}
```

**Next.js Configuration (`nextjs.json`):**

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "./base.json",
  "compilerOptions": {
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "jsx": "preserve",
    "plugins": [{ "name": "next" }]
  }
}
```

### ESLint + Prettier Configuration

**ESLint (`eslint.config.mjs`):**

- TypeScript strict mode with `@typescript-eslint/strict`
- Unused variables must be prefixed with `_`
- React/React Hooks plugins for web applications
- Next.js core-web-vitals integration

**Prettier (`prettier.config.mjs`):**

```javascript
export default {
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'es5',
  plugins: ['prettier-plugin-tailwindcss'],
};
```

### Docker Compose: Local Development

**Configuration (`docker/docker-compose.yml`):**

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:18-alpine
    container_name: fantasy-postgres
    restart: unless-stopped
    ports:
      - '5432:5432'
    environment:
      POSTGRES_USER: ${POSTGRES_USER:-fantasy}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD:-fantasy_dev_password}
      POSTGRES_DB: ${POSTGRES_DB:-fantasy_football}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ['CMD-SHELL', 'pg_isready -U fantasy -d fantasy_football']
      interval: 10s
      timeout: 5s
      retries: 5

  redis:
    image: redis:8-alpine
    container_name: fantasy-redis
    restart: unless-stopped
    ports:
      - '6379:6379'
    command: redis-server --appendonly yes --maxmemory 256mb --maxmemory-policy allkeys-lru
    volumes:
      - redis_data:/data
    healthcheck:
      test: ['CMD', 'redis-cli', 'ping']
      interval: 10s
      timeout: 5s
      retries: 5

volumes:
  postgres_data:
  redis_data:
```

**Services:**

| Service    | Version     | Port | Purpose                   |
| ---------- | ----------- | ---- | ------------------------- |
| PostgreSQL | 18 (alpine) | 5432 | Primary database          |
| Redis      | 8 (alpine)  | 6379 | Caching layer (256MB LRU) |

---

## 1.2 Database Schema Design (Prisma)

### Dependencies

```bash
pnpm --filter @fantasy/database add @prisma/client
pnpm --filter @fantasy/database add -D prisma
```

### Prisma Schema

**File: `packages/database/prisma/schema.prisma`**

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
  output   = "../src/generated/client"
}

// ============================================
// USER & AUTHENTICATION
// ============================================

model User {
  id        String   @id @default(cuid())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  displayName String?
  email       String?  @unique
  avatarUrl   String?

  platformAccounts  PlatformAccount[]
  leagueMemberships LeagueMember[]

  @@map("users")
}

model PlatformAccount {
  id         String   @id @default(cuid())
  userId     String
  user       User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  platform   Platform
  platformId String
  username   String?
  avatarUrl  String?

  accessToken  String?
  refreshToken String?
  expiresAt    DateTime?

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@unique([platform, platformId])
  @@map("platform_accounts")
}

enum Platform {
  SLEEPER
  YAHOO
  ESPN
}

// ============================================
// LEAGUES
// ============================================

model League {
  id        String   @id @default(cuid())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  platform         Platform
  platformLeagueId String
  name             String
  season           Int
  leagueType       LeagueType    @default(REDRAFT)
  scoringFormat    ScoringFormat @default(PPR)
  rosterSize       Int           @default(15)
  teamCount        Int

  members      LeagueMember[]
  rosters      Roster[]
  matchups     Matchup[]
  transactions Transaction[]

  @@unique([platform, platformLeagueId, season])
  @@map("leagues")
}

enum LeagueType {
  REDRAFT
  KEEPER
  DYNASTY
}

enum ScoringFormat {
  STANDARD
  HALF_PPR
  PPR
  CUSTOM
}

model LeagueMember {
  id       String @id @default(cuid())

  userId   String
  user     User   @relation(fields: [userId], references: [id], onDelete: Cascade)

  leagueId String
  league   League @relation(fields: [leagueId], references: [id], onDelete: Cascade)

  teamName      String?
  teamAvatar    String?
  rosterSlot    Int
  wins          Int     @default(0)
  losses        Int     @default(0)
  ties          Int     @default(0)
  pointsFor     Decimal @default(0) @db.Decimal(10, 2)
  pointsAgainst Decimal @default(0) @db.Decimal(10, 2)

  rosters Roster[]

  @@unique([leagueId, rosterSlot])
  @@unique([leagueId, userId])
  @@map("league_members")
}

// ============================================
// PLAYERS
// ============================================

model Player {
  id        String   @id @default(cuid())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  nflverseId   String? @unique
  sleeperId    String? @unique
  yahooId      String? @unique
  espnId       String? @unique

  firstName    String
  lastName     String
  fullName     String
  position     Position
  team         String?
  jerseyNumber Int?
  status       PlayerStatus @default(ACTIVE)
  injuryStatus String?
  byeWeek      Int?

  rosterPlayers RosterPlayer[]

  @@index([position, team])
  @@map("players")
}

enum Position {
  QB
  RB
  WR
  TE
  K
  DEF
  DL
  LB
  DB
  IDP
}

enum PlayerStatus {
  ACTIVE
  INACTIVE
  INJURED_RESERVE
  PRACTICE_SQUAD
  FREE_AGENT
  RETIRED
}

// ============================================
// ROSTERS
// ============================================

model Roster {
  id        String   @id @default(cuid())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  leagueId String
  league   League @relation(fields: [leagueId], references: [id], onDelete: Cascade)

  memberId String
  member   LeagueMember @relation(fields: [memberId], references: [id], onDelete: Cascade)

  week    Int
  season  Int
  players RosterPlayer[]

  @@unique([memberId, week, season])
  @@map("rosters")
}

model RosterPlayer {
  id       String @id @default(cuid())

  rosterId String
  roster   Roster @relation(fields: [rosterId], references: [id], onDelete: Cascade)

  playerId String
  player   Player @relation(fields: [playerId], references: [id])

  slot RosterSlot

  @@unique([rosterId, playerId])
  @@map("roster_players")
}

enum RosterSlot {
  QB
  RB
  WR
  TE
  FLEX
  SUPER_FLEX
  K
  DEF
  DL
  LB
  DB
  IDP
  BN
  IR
  TAXI
}

// ============================================
// MATCHUPS
// ============================================

model Matchup {
  id        String   @id @default(cuid())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  leagueId String
  league   League @relation(fields: [leagueId], references: [id], onDelete: Cascade)

  week          Int
  season        Int
  homeTeamSlot  Int
  awayTeamSlot  Int
  homeScore     Decimal? @db.Decimal(10, 2)
  awayScore     Decimal? @db.Decimal(10, 2)
  homeProjected Decimal? @db.Decimal(10, 2)
  awayProjected Decimal? @db.Decimal(10, 2)
  isPlayoffs    Boolean  @default(false)
  matchupType   MatchupType @default(REGULAR)

  @@unique([leagueId, week, season, homeTeamSlot, awayTeamSlot])
  @@map("matchups")
}

enum MatchupType {
  REGULAR
  PLAYOFF
  CONSOLATION
  CHAMPIONSHIP
  TOILET_BOWL
}

// ============================================
// TRANSACTIONS
// ============================================

model Transaction {
  id        String   @id @default(cuid())
  createdAt DateTime @default(now())

  leagueId String
  league   League @relation(fields: [leagueId], references: [id], onDelete: Cascade)

  type        TransactionType
  status      TransactionStatus @default(COMPLETE)
  processedAt DateTime?
  faabBid     Int?
  metadata    Json?

  adds  TransactionAdd[]
  drops TransactionDrop[]

  @@index([leagueId, createdAt])
  @@map("transactions")
}

enum TransactionType {
  TRADE
  WAIVER
  FREE_AGENT
  COMMISSIONER
}

enum TransactionStatus {
  PENDING
  COMPLETE
  FAILED
  VETOED
}

model TransactionAdd {
  id            String      @id @default(cuid())
  transactionId String
  transaction   Transaction @relation(fields: [transactionId], references: [id], onDelete: Cascade)

  teamSlot Int
  playerId String?
  pickInfo Json?

  @@map("transaction_adds")
}

model TransactionDrop {
  id            String      @id @default(cuid())
  transactionId String
  transaction   Transaction @relation(fields: [transactionId], references: [id], onDelete: Cascade)

  teamSlot Int
  playerId String?
  pickInfo Json?

  @@map("transaction_drops")
}
```

### Prisma Client Export

**File: `packages/database/src/index.ts`**

```typescript
import { PrismaClient } from './generated/client';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export * from './generated/client';
export type { PrismaClient };
```

### Migration Commands

```bash
# Initialize Prisma in the database package
pnpm --filter @fantasy/database exec prisma init

# Create and apply migrations
pnpm --filter @fantasy/database exec prisma migrate dev --name init

# Generate client after schema changes
pnpm --filter @fantasy/database exec prisma generate

# Reset database (dev only)
pnpm --filter @fantasy/database exec prisma migrate reset
```

---

## 1.3 Sleeper API Integration

Sleeper provides the most developer-friendly API with no authentication required for public leagues.

### API Reference

| Endpoint                                      | Description             | Rate Limit |
| --------------------------------------------- | ----------------------- | ---------- |
| `GET /user/{username}`                        | Get user by username/ID | 1000/min   |
| `GET /user/{user_id}/leagues/nfl/{season}`    | Get user's leagues      | 1000/min   |
| `GET /league/{league_id}`                     | Get league details      | 1000/min   |
| `GET /league/{league_id}/rosters`             | Get all rosters         | 1000/min   |
| `GET /league/{league_id}/matchups/{week}`     | Get week matchups       | 1000/min   |
| `GET /league/{league_id}/transactions/{week}` | Get transactions        | 1000/min   |
| `GET /players/nfl`                            | Bulk player data (~5MB) | 1000/min   |

**Base URL:** `https://api.sleeper.app/v1`

### Dependencies

```bash
pnpm --filter @fantasy/api-client add axios zod ioredis
pnpm --filter @fantasy/types add zod
```

### Zod Validation Schemas

**File: `packages/types/src/sleeper.ts`**

```typescript
import { z } from 'zod';

// ============================================
// USER
// ============================================

export const SleeperUserSchema = z.object({
  user_id: z.string(),
  username: z.string(),
  display_name: z.string().nullable(),
  avatar: z.string().nullable(),
});

export type SleeperUser = z.infer<typeof SleeperUserSchema>;

// ============================================
// LEAGUE
// ============================================

export const SleeperLeagueSettingsSchema = z.object({
  wins: z.number().optional(),
  waiver_type: z.number().optional(),
  waiver_budget: z.number().optional(),
  type: z.number(),
  trade_deadline: z.number().optional(),
  taxi_slots: z.number().optional(),
  reserve_slots: z.number().optional(),
  rec: z.number().optional(),
  playoff_week_start: z.number().optional(),
  playoff_teams: z.number().optional(),
  num_teams: z.number(),
  leg: z.number().optional(),
});

export const SleeperLeagueSchema = z.object({
  league_id: z.string(),
  name: z.string(),
  status: z.enum(['pre_draft', 'drafting', 'in_season', 'complete']),
  sport: z.literal('nfl'),
  season: z.string(),
  season_type: z.string(),
  total_rosters: z.number(),
  roster_positions: z.array(z.string()),
  settings: SleeperLeagueSettingsSchema,
  scoring_settings: z.record(z.number()),
  avatar: z.string().nullable(),
  draft_id: z.string().nullable(),
  previous_league_id: z.string().nullable(),
});

export type SleeperLeague = z.infer<typeof SleeperLeagueSchema>;

// ============================================
// ROSTER
// ============================================

export const SleeperRosterSettingsSchema = z.object({
  wins: z.number(),
  losses: z.number(),
  ties: z.number(),
  fpts: z.number().optional(),
  fpts_decimal: z.number().optional(),
  fpts_against: z.number().optional(),
  fpts_against_decimal: z.number().optional(),
  waiver_position: z.number().optional(),
  waiver_budget_used: z.number().optional(),
});

export const SleeperRosterSchema = z.object({
  roster_id: z.number(),
  owner_id: z.string().nullable(),
  league_id: z.string(),
  players: z.array(z.string()).nullable(),
  starters: z.array(z.string()).nullable(),
  reserve: z.array(z.string()).nullable(),
  taxi: z.array(z.string()).nullable(),
  settings: SleeperRosterSettingsSchema,
  co_owners: z.array(z.string()).nullable(),
});

export type SleeperRoster = z.infer<typeof SleeperRosterSchema>;

// ============================================
// MATCHUP
// ============================================

export const SleeperMatchupSchema = z.object({
  roster_id: z.number(),
  matchup_id: z.number(),
  points: z.number().nullable(),
  custom_points: z.number().nullable(),
  starters: z.array(z.string()).nullable(),
  starters_points: z.array(z.number()).nullable(),
  players: z.array(z.string()).nullable(),
  players_points: z.record(z.number()).nullable(),
});

export type SleeperMatchup = z.infer<typeof SleeperMatchupSchema>;

// ============================================
// TRANSACTION
// ============================================

export const SleeperTransactionSchema = z.object({
  transaction_id: z.string(),
  type: z.enum(['trade', 'waiver', 'free_agent', 'commissioner']),
  status: z.enum(['complete', 'pending', 'failed']),
  leg: z.number(),
  adds: z.record(z.number()).nullable(),
  drops: z.record(z.number()).nullable(),
  draft_picks: z
    .array(
      z.object({
        season: z.string(),
        round: z.number(),
        roster_id: z.number(),
        previous_owner_id: z.number(),
        owner_id: z.number(),
      })
    )
    .nullable(),
  waiver_budget: z
    .array(
      z.object({
        sender: z.number(),
        receiver: z.number(),
        amount: z.number(),
      })
    )
    .nullable(),
  roster_ids: z.array(z.number()),
  consenter_ids: z.array(z.number()).nullable(),
  created: z.number(),
  creator: z.string(),
  settings: z
    .object({
      waiver_bid: z.number().optional(),
      seq: z.number().optional(),
    })
    .nullable(),
  metadata: z.record(z.unknown()).nullable(),
});

export type SleeperTransaction = z.infer<typeof SleeperTransactionSchema>;

// ============================================
// PLAYER
// ============================================

export const SleeperPlayerSchema = z.object({
  player_id: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  full_name: z.string().nullable(),
  position: z.string().nullable(),
  team: z.string().nullable(),
  age: z.number().nullable(),
  years_exp: z.number().nullable(),
  status: z.string().nullable(),
  injury_status: z.string().nullable(),
  number: z.number().nullable(),
  fantasy_positions: z.array(z.string()).nullable(),
  sport: z.string(),
  active: z.boolean(),
});

export type SleeperPlayer = z.infer<typeof SleeperPlayerSchema>;

// ============================================
// NFL STATE
// ============================================

export const SleeperNFLStateSchema = z.object({
  week: z.number(),
  season: z.string(),
  season_type: z.string(),
  display_week: z.number(),
});

export type SleeperNFLState = z.infer<typeof SleeperNFLStateSchema>;
```

### Sleeper API Client

**File: `packages/api-client/src/sleeper/client.ts`**

```typescript
import axios, { AxiosInstance, AxiosError } from 'axios';
import { z } from 'zod';
import {
  SleeperUserSchema,
  SleeperLeagueSchema,
  SleeperRosterSchema,
  SleeperMatchupSchema,
  SleeperTransactionSchema,
  SleeperPlayerSchema,
  SleeperNFLStateSchema,
  type SleeperUser,
  type SleeperLeague,
  type SleeperRoster,
  type SleeperMatchup,
  type SleeperTransaction,
  type SleeperPlayer,
  type SleeperNFLState,
} from '@fantasy/types';

export class SleeperAPIError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public endpoint?: string
  ) {
    super(message);
    this.name = 'SleeperAPIError';
  }
}

export class SleeperClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: 'https://api.sleeper.app/v1',
      timeout: 10000,
      headers: { 'Content-Type': 'application/json' },
    });

    this.client.interceptors.response.use(
      response => response,
      (error: AxiosError) => {
        const message = error.response?.data ? JSON.stringify(error.response.data) : error.message;
        throw new SleeperAPIError(message, error.response?.status, error.config?.url);
      }
    );
  }

  async getUser(usernameOrId: string): Promise<SleeperUser> {
    const { data } = await this.client.get(`/user/${usernameOrId}`);
    return SleeperUserSchema.parse(data);
  }

  async getUserLeagues(userId: string, season: string): Promise<SleeperLeague[]> {
    const { data } = await this.client.get(`/user/${userId}/leagues/nfl/${season}`);
    return z.array(SleeperLeagueSchema).parse(data);
  }

  async getLeague(leagueId: string): Promise<SleeperLeague> {
    const { data } = await this.client.get(`/league/${leagueId}`);
    return SleeperLeagueSchema.parse(data);
  }

  async getLeagueRosters(leagueId: string): Promise<SleeperRoster[]> {
    const { data } = await this.client.get(`/league/${leagueId}/rosters`);
    return z.array(SleeperRosterSchema).parse(data);
  }

  async getLeagueUsers(leagueId: string): Promise<SleeperUser[]> {
    const { data } = await this.client.get(`/league/${leagueId}/users`);
    return z.array(SleeperUserSchema).parse(data);
  }

  async getLeagueMatchups(leagueId: string, week: number): Promise<SleeperMatchup[]> {
    const { data } = await this.client.get(`/league/${leagueId}/matchups/${week}`);
    return z.array(SleeperMatchupSchema).parse(data);
  }

  async getLeagueTransactions(leagueId: string, week: number): Promise<SleeperTransaction[]> {
    const { data } = await this.client.get(`/league/${leagueId}/transactions/${week}`);
    return z.array(SleeperTransactionSchema).parse(data);
  }

  async getAllPlayers(): Promise<Record<string, SleeperPlayer>> {
    const { data } = await this.client.get('/players/nfl');
    return z.record(SleeperPlayerSchema).parse(data);
  }

  async getNFLState(): Promise<SleeperNFLState> {
    const { data } = await this.client.get('/state/nfl');
    return SleeperNFLStateSchema.parse(data);
  }
}

export const sleeperClient = new SleeperClient();
```

### Redis Caching Layer

**File: `packages/api-client/src/cache/redis.ts`**

```typescript
import Redis from 'ioredis';

export class CacheService {
  private redis: Redis;
  private prefix: string;

  constructor(redisUrl: string, prefix: string = 'fantasy') {
    this.redis = new Redis(redisUrl, {
      maxRetriesPerRequest: 3,
      retryDelayOnFailover: 100,
    });
    this.prefix = prefix;
  }

  private key(namespace: string, id: string): string {
    return `${this.prefix}:${namespace}:${id}`;
  }

  async get<T>(namespace: string, id: string): Promise<T | null> {
    const data = await this.redis.get(this.key(namespace, id));
    return data ? JSON.parse(data) : null;
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
```

### Cached Sleeper Client

**File: `packages/api-client/src/sleeper/cached-client.ts`**

```typescript
import { SleeperClient, sleeperClient } from './client';
import { CacheService } from '../cache/redis';
import type { SleeperPlayer, SleeperLeague, SleeperRoster } from '@fantasy/types';

const TTL = {
  PLAYERS: 24 * 60 * 60, // 24 hours
  LEAGUE: 5 * 60, // 5 minutes
  ROSTERS: 60, // 1 minute
  MATCHUPS: 30, // 30 seconds
  NFL_STATE: 5 * 60, // 5 minutes
} as const;

export class CachedSleeperClient {
  constructor(
    private client: SleeperClient = sleeperClient,
    private cache: CacheService
  ) {}

  async getAllPlayers(): Promise<Record<string, SleeperPlayer>> {
    const cached = await this.cache.get<Record<string, SleeperPlayer>>('sleeper:players', 'all');
    if (cached) return cached;

    const players = await this.client.getAllPlayers();
    await this.cache.set('sleeper:players', 'all', players, TTL.PLAYERS);
    return players;
  }

  async getLeague(leagueId: string): Promise<SleeperLeague> {
    const cached = await this.cache.get<SleeperLeague>('sleeper:league', leagueId);
    if (cached) return cached;

    const league = await this.client.getLeague(leagueId);
    await this.cache.set('sleeper:league', leagueId, league, TTL.LEAGUE);
    return league;
  }

  async getLeagueRosters(leagueId: string): Promise<SleeperRoster[]> {
    const cached = await this.cache.get<SleeperRoster[]>('sleeper:rosters', leagueId);
    if (cached) return cached;

    const rosters = await this.client.getLeagueRosters(leagueId);
    await this.cache.set('sleeper:rosters', leagueId, rosters, TTL.ROSTERS);
    return rosters;
  }

  async refreshPlayers(): Promise<Record<string, SleeperPlayer>> {
    await this.cache.delete('sleeper:players', 'all');
    return this.getAllPlayers();
  }
}
```

### Transaction Polling Service

**File: `packages/api-client/src/sleeper/polling.ts`**

```typescript
import { SleeperClient } from './client';
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

    this.intervalId = setInterval(async () => {
      for (const leagueId of leagueIds) {
        await this.pollLeague(leagueId);
      }
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
```

### Rate Limiter

**File: `packages/api-client/src/utils/rate-limiter.ts`**

```typescript
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
      const waitTime = this.windowMs - (now - this.timestamps[0]);
      await new Promise(resolve => setTimeout(resolve, waitTime));
      return this.acquire();
    }

    this.timestamps.push(now);
  }
}
```

### Package Exports

**File: `packages/api-client/src/index.ts`**

```typescript
export { SleeperClient, sleeperClient, SleeperAPIError } from './sleeper/client';
export { CachedSleeperClient } from './sleeper/cached-client';
export { TransactionPoller, type TransactionHandler } from './sleeper/polling';
export { CacheService } from './cache/redis';
export { RateLimiter } from './utils/rate-limiter';
```

**File: `packages/types/src/index.ts`**

```typescript
export * from './sleeper';
```

---

## 1.4 Discord Bot Foundation

The Discord bot is built with Discord.js v14 in TypeScript, integrated into the monorepo.

### Dependencies

```bash
pnpm --filter discord-bot add discord.js @fantasy/api-client @fantasy/types @fantasy/database
pnpm --filter discord-bot add -D typescript @types/node tsx
```

### Bot Client Setup

**File: `services/discord-bot/src/index.ts`**

```typescript
import { Client, Collection, Events, GatewayIntentBits } from 'discord.js';
import { loadCommands, loadEvents } from './loaders';
import type { Command } from './types';

declare module 'discord.js' {
  interface Client {
    commands: Collection<string, Command>;
  }
}

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.commands = new Collection();

async function main() {
  await loadCommands(client);
  await loadEvents(client);

  await client.login(process.env.DISCORD_BOT_TOKEN);
}

main().catch(console.error);
```

### Command Structure

**File: `services/discord-bot/src/types.ts`**

```typescript
import type { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';

export interface Command {
  data: SlashCommandBuilder;
  execute: (interaction: ChatInputCommandInteraction) => Promise<void>;
}
```

**File: `services/discord-bot/src/commands/ping.ts`**

```typescript
import { SlashCommandBuilder } from 'discord.js';
import type { Command } from '../types';

export const command: Command = {
  data: new SlashCommandBuilder().setName('ping').setDescription('Replies with Pong!'),
  async execute(interaction) {
    const latency = Date.now() - interaction.createdTimestamp;
    await interaction.reply(`Pong! Latency: ${latency}ms`);
  },
};
```

### Command Loader

**File: `services/discord-bot/src/loaders.ts`**

```typescript
import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { Client, Events, MessageFlags } from 'discord.js';
import type { Command } from './types';

export async function loadCommands(client: Client): Promise<void> {
  const commandsPath = join(import.meta.dirname, 'commands');
  const commandFiles = readdirSync(commandsPath).filter(f => f.endsWith('.ts'));

  for (const file of commandFiles) {
    const { command } = (await import(join(commandsPath, file))) as { command: Command };
    client.commands.set(command.data.name, command);
  }
}

export async function loadEvents(client: Client): Promise<void> {
  client.once(Events.ClientReady, c => {
    console.log(`Logged in as ${c.user.tag}`);
  });

  client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      const content = 'There was an error executing this command.';
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({ content, flags: MessageFlags.Ephemeral });
      } else {
        await interaction.reply({ content, flags: MessageFlags.Ephemeral });
      }
    }
  });
}
```

### Deploy Commands Script

**File: `services/discord-bot/src/deploy-commands.ts`**

```typescript
import { REST, Routes } from 'discord.js';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import type { Command } from './types';

async function deploy() {
  const commands: object[] = [];
  const commandsPath = join(import.meta.dirname, 'commands');
  const commandFiles = readdirSync(commandsPath).filter(f => f.endsWith('.ts'));

  for (const file of commandFiles) {
    const { command } = (await import(join(commandsPath, file))) as { command: Command };
    commands.push(command.data.toJSON());
  }

  const rest = new REST().setToken(process.env.DISCORD_BOT_TOKEN!);

  console.log(`Deploying ${commands.length} commands...`);

  await rest.put(
    Routes.applicationGuildCommands(process.env.DISCORD_CLIENT_ID!, process.env.DISCORD_GUILD_ID!),
    { body: commands }
  );

  console.log('Commands deployed successfully.');
}

deploy().catch(console.error);
```

### Package.json Scripts

**File: `services/discord-bot/package.json`**

```json
{
  "name": "discord-bot",
  "type": "module",
  "scripts": {
    "dev": "tsx watch src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js",
    "deploy": "tsx src/deploy-commands.ts"
  }
}
```

---

## Implementation Checklist

- [ ] Update `docker/docker-compose.yml` to PostgreSQL 18 / Redis 8
- [ ] Create Prisma schema at `packages/database/prisma/schema.prisma`
- [ ] Create database client at `packages/database/src/index.ts`
- [ ] Add Sleeper types at `packages/types/src/sleeper.ts`
- [ ] Export types from `packages/types/src/index.ts`
- [ ] Create Sleeper client at `packages/api-client/src/sleeper/client.ts`
- [ ] Create cached client at `packages/api-client/src/sleeper/cached-client.ts`
- [ ] Create polling service at `packages/api-client/src/sleeper/polling.ts`
- [ ] Create Redis cache at `packages/api-client/src/cache/redis.ts`
- [ ] Create rate limiter at `packages/api-client/src/utils/rate-limiter.ts`
- [ ] Export API client from `packages/api-client/src/index.ts`
- [ ] Create Discord bot structure in `services/discord-bot/src/`
- [ ] Run migrations and verify database
- [ ] Test Sleeper API integration
- [ ] Deploy Discord bot commands
