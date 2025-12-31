# Phase 4: Analytics & Trade Tools

**Goal**: Build data-driven analytics features including trade calculators, power rankings, and historical analysis.

---

## 4.1 Trade Calculator Integration

Integrate crowdsourced valuations from KeepTradeCut and DynastyProcess:

1. Daily value scraping from KTC (23M+ crowdsourced data points)
2. Map player IDs using nflverse player mapping CSV
3. Context-aware adjustments for league settings (Superflex, TE Premium, PPR)
4. Marginal utility algorithm applying diminishing returns for roster fit

## 4.2 Statistical Methodologies

### Value Over Replacement Player (VORP)

VORP quantifies advantage over the "replacement level" baseline:

- **Strict Baseline**: 13th QB, 25th RB, 25th WR, 13th TE (12-team)
- **Waiver Baseline**: Typical waiver wire quality (QB18, RB36)
- **Formula**: `VORP = P(projected) - P(baseline)`

### Wins Above Replacement (WAR)

Monte Carlo simulation for win probability impact:

- Generate 10,000 schedule simulations
- Calculate win probability delta with/without player
- Account for week-to-week variance and consistency

## 4.3 Report Card Generator

Weekly and season-long performance analysis:

- **All-Play Record**: Compare scores against all teams each week
- **Lineup Efficiency**: Actual score vs. optimal lineup percentage
- **Luck Index**: Points For vs. Points Against differential
- **Superlatives**: Best Manager, Luckiest Team, etc.

---

# Implementation Details

## Tech Stack & Dependencies

### New Dependencies

```bash
# packages/api-client
pnpm --filter @fantasy/api-client add cheerio

# packages/analytics (new package)
pnpm --filter @fantasy/analytics add @fantasy/database @fantasy/types @fantasy/api-client
```

### Library References

| Library        | Version  | Purpose                           | Key APIs                                          |
| -------------- | -------- | --------------------------------- | ------------------------------------------------- |
| **Cheerio**    | ^1.0.0   | HTML scraping for KTC values      | `cheerio.fromURL()`, `$.extract()`                |
| **BullMQ**     | existing | Scheduled jobs for daily scraping | `queue.upsertJobScheduler()` with cron            |
| **Prisma**     | existing | Store valuations & analytics      | `Decimal` for precision, `Json` for flexible data |
| **Discord.js** | existing | Commands & embeds                 | `EmbedBuilder`, `SlashCommandBuilder`             |

---

## Database Schema Extensions

### File: `packages/database/prisma/schema.prisma`

```prisma
// ============================================
// PLAYER VALUATIONS (Phase 4.1)
// ============================================

model PlayerValuation {
  id        String   @id @default(cuid())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  playerId String
  player   Player @relation(fields: [playerId], references: [id], onDelete: Cascade)

  source      ValuationSource
  scrapedAt   DateTime
  baseValue   Int              // KTC value (0-9999 scale)
  tier        Int?             // Tier ranking (1-10)
  trend       ValueTrend @default(STABLE)
  weeklyDelta Int        @default(0)

  @@unique([playerId, source])
  @@index([source, scrapedAt])
  @@map("player_valuations")
}

enum ValuationSource {
  KTC_DYNASTY
  KTC_REDRAFT
  DYNASTY_PROCESS
}

enum ValueTrend {
  RISING
  STABLE
  FALLING
}

model ValuationHistory {
  id         String   @id @default(cuid())
  createdAt  DateTime @default(now())
  playerId   String
  source     ValuationSource
  value      Int
  recordedAt DateTime

  @@index([playerId, source, recordedAt])
  @@map("valuation_history")
}

model LeagueSettings {
  id        String   @id @default(cuid())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  leagueId String @unique
  league   League @relation(fields: [leagueId], references: [id], onDelete: Cascade)

  isSuperFlex   Boolean @default(false)
  tePremium     Decimal @default(0) @db.Decimal(3, 2)
  pprValue      Decimal @default(1) @db.Decimal(3, 2)
  rosterSize    Int     @default(15)
  benchSpots    Int     @default(6)
  startingSlots Json    @default("{\"QB\": 1, \"RB\": 2, \"WR\": 2, \"TE\": 1, \"FLEX\": 1}")

  @@map("league_settings")
}

// ============================================
// PLAYER STATISTICS (Phase 4.2)
// ============================================

model PlayerWeeklyStats {
  id        String   @id @default(cuid())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  playerId  String
  player    Player @relation(fields: [playerId], references: [id], onDelete: Cascade)
  season    Int
  week      Int
  points    Decimal  @db.Decimal(10, 2)
  projected Decimal? @db.Decimal(10, 2)

  @@unique([playerId, season, week])
  @@map("player_weekly_stats")
}

model PlayerSeasonStats {
  id        String   @id @default(cuid())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  playerId     String
  player       Player @relation(fields: [playerId], references: [id], onDelete: Cascade)
  season       Int
  totalPoints  Decimal @db.Decimal(10, 2)
  gamesPlayed  Int     @default(0)
  avgPoints    Decimal @db.Decimal(10, 2)
  stdDeviation Decimal @db.Decimal(10, 4)
  vorpStrict   Decimal? @db.Decimal(10, 2)
  vorpWaiver   Decimal? @db.Decimal(10, 2)
  war          Decimal? @db.Decimal(10, 4)

  @@unique([playerId, season])
  @@map("player_season_stats")
}

model PositionBaseline {
  id            String   @id @default(cuid())
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt

  season        Int
  position      Position
  baselineType  BaselineType
  teamCount     Int
  baselineRank  Int
  baselineValue Decimal  @db.Decimal(10, 2)

  @@unique([season, position, baselineType, teamCount])
  @@map("position_baselines")
}

enum BaselineType {
  STRICT
  WAIVER
}

// ============================================
// TEAM ANALYTICS (Phase 4.3)
// ============================================

model TeamWeeklyAnalytics {
  id        String   @id @default(cuid())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  leagueId String
  league   League @relation(fields: [leagueId], references: [id], onDelete: Cascade)
  memberId String
  member   LeagueMember @relation(fields: [memberId], references: [id], onDelete: Cascade)

  season           Int
  week             Int
  actualScore      Decimal @db.Decimal(10, 2)
  optimalScore     Decimal @db.Decimal(10, 2)
  lineupEfficiency Decimal @db.Decimal(5, 2)
  allPlayWins      Int @default(0)
  allPlayLosses    Int @default(0)
  allPlayTies      Int @default(0)
  weeklyRank       Int

  @@unique([memberId, season, week])
  @@map("team_weekly_analytics")
}

model TeamSeasonAnalytics {
  id        String   @id @default(cuid())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  leagueId String
  league   League @relation(fields: [leagueId], references: [id], onDelete: Cascade)
  memberId String @unique
  member   LeagueMember @relation(fields: [memberId], references: [id], onDelete: Cascade)

  season              Int
  totalActualScore    Decimal @db.Decimal(10, 2)
  totalOptimalScore   Decimal @db.Decimal(10, 2)
  avgLineupEfficiency Decimal @db.Decimal(5, 2)
  allPlayWins         Int @default(0)
  allPlayLosses       Int @default(0)
  allPlayTies         Int @default(0)
  allPlayWinPct       Decimal @db.Decimal(5, 4)
  expectedWins        Decimal @db.Decimal(5, 2)
  actualWins          Int
  luckIndex           Decimal @db.Decimal(6, 4)
  pointsStdDev        Decimal @db.Decimal(10, 2)

  @@unique([memberId, season])
  @@map("team_season_analytics")
}

model LeagueSuperlative {
  id        String   @id @default(cuid())
  createdAt DateTime @default(now())

  leagueId        String
  league          League @relation(fields: [leagueId], references: [id], onDelete: Cascade)
  season          Int
  week            Int?
  superlativeType SuperlativeType
  memberId        String
  member          LeagueMember @relation(fields: [memberId], references: [id], onDelete: Cascade)
  value           Decimal @db.Decimal(10, 2)
  metadata        Json?

  @@unique([leagueId, season, week, superlativeType])
  @@map("league_superlatives")
}

enum SuperlativeType {
  BEST_MANAGER
  WORST_MANAGER
  LUCKIEST_TEAM
  UNLUCKIEST_TEAM
  MOST_CONSISTENT
  BOOM_BUST
  HIGHEST_SCORER
  WEEKLY_MVP
  WEEKLY_LVP
}
```

### Model Relations to Add

```prisma
model Player {
  // ... existing fields
  valuations   PlayerValuation[]
  weeklyStats  PlayerWeeklyStats[]
  seasonStats  PlayerSeasonStats[]
}

model League {
  // ... existing fields
  settings         LeagueSettings?
  weeklyAnalytics  TeamWeeklyAnalytics[]
  seasonAnalytics  TeamSeasonAnalytics[]
  superlatives     LeagueSuperlative[]
}

model LeagueMember {
  // ... existing fields
  weeklyAnalytics  TeamWeeklyAnalytics[]
  seasonAnalytics  TeamSeasonAnalytics?
  superlatives     LeagueSuperlative[]
}
```

---

## Package Structure

### New Package: `packages/analytics/`

```
packages/analytics/
├── package.json
├── tsconfig.json
└── src/
    ├── index.ts
    ├── vorp/
    │   ├── baselines.ts      # Position baseline constants
    │   └── calculator.ts     # VORP calculation service
    ├── war/
    │   ├── monte-carlo.ts    # Monte Carlo simulation (10K iterations)
    │   └── calculator.ts     # WAR calculation service
    ├── report-card/
    │   ├── all-play.ts       # All-play record calculations
    │   ├── lineup-efficiency.ts
    │   ├── luck-index.ts
    │   ├── superlatives.ts
    │   └── generator.ts      # Main report card generator
    └── utils/
        └── statistics.ts     # mean, stdDev, variance helpers
```

### API Client Extensions: `packages/api-client/src/`

```
packages/api-client/src/
├── ktc/                      # NEW
│   ├── client.ts             # KTC scraper using Cheerio
│   ├── cached-client.ts      # Cached wrapper (6hr TTL)
│   └── schemas.ts            # Zod schemas for KTC data
├── mapping/                  # NEW
│   ├── nflverse-mapper.ts    # Player ID mapping service
│   └── schemas.ts            # Zod schemas for CSV data
├── valuation/                # NEW
│   ├── adjustments.ts        # Context-aware value adjustments
│   └── marginal-utility.ts   # Diminishing returns algorithm
└── index.ts                  # Update exports
```

---

## Code Examples

### KTC Scraper (Cheerio)

```typescript
// packages/api-client/src/ktc/client.ts
import * as cheerio from 'cheerio';
import { z } from 'zod';

export const KTCPlayerValueSchema = z.object({
  playerName: z.string(),
  position: z.enum(['QB', 'RB', 'WR', 'TE']),
  team: z.string().nullable(),
  value: z.number().int().min(0).max(9999),
  tier: z.number().int().min(1).max(10).optional(),
  trend: z.enum(['rising', 'stable', 'falling']).default('stable'),
});

export type KTCPlayerValue = z.infer<typeof KTCPlayerValueSchema>;

export class KTCClient {
  private userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36';

  async scrapeValues(format: 'dynasty' | 'redraft'): Promise<KTCScrapedData> {
    const url =
      format === 'dynasty'
        ? 'https://keeptradecut.com/dynasty-rankings'
        : 'https://keeptradecut.com/rankings';

    const $ = await cheerio.fromURL(url, {
      requestOptions: { headers: { 'User-Agent': this.userAgent } },
    });

    const data = $.extract({
      players: [
        {
          selector: '.player-card, [data-player]',
          value: {
            name: '.player-name, [data-name]',
            position: '.player-position, [data-position]',
            team: '.player-team, [data-team]',
            value: {
              selector: '.player-value, [data-value]',
              value: el => parseInt($(el).text().replace(/,/g, ''), 10) || 0,
            },
            trend: {
              selector: '.trend-indicator, [data-trend]',
              value: el => {
                const classes = $(el).attr('class') || '';
                if (classes.includes('up')) return 'rising';
                if (classes.includes('down')) return 'falling';
                return 'stable';
              },
            },
          },
        },
      ],
    });

    return { scrapedAt: new Date(), format, players: data.players };
  }
}

export const ktcClient = new KTCClient();
```

### NFLverse Player ID Mapping

```typescript
// packages/api-client/src/mapping/nflverse-mapper.ts
import axios from 'axios';
import { z } from 'zod';
import type { CacheService } from '../cache/redis.js';

const NFLVERSE_URL =
  'https://github.com/nflverse/nflverse-data/releases/download/player_ids/player_ids.csv';

export const NFLVersePlayerMappingSchema = z.object({
  gsis_id: z.string().optional(),
  nflverse_id: z.string(),
  sleeper_id: z.string().optional(),
  yahoo_id: z.string().optional(),
  espn_id: z.string().optional(),
  name: z.string(),
  position: z.string().optional(),
  team: z.string().optional(),
});

export type NFLVersePlayerMapping = z.infer<typeof NFLVersePlayerMappingSchema>;

export class NFLVerseMapper {
  private mappings: Map<string, NFLVersePlayerMapping> | null = null;

  constructor(private cache?: CacheService) {}

  async loadMappings(): Promise<Map<string, NFLVersePlayerMapping>> {
    if (this.mappings) return this.mappings;

    // Check cache first
    if (this.cache) {
      const cached = await this.cache.get<NFLVersePlayerMapping[]>('nflverse', 'mappings');
      if (cached) {
        this.mappings = this.buildMappingIndex(cached);
        return this.mappings;
      }
    }

    const response = await axios.get(NFLVERSE_URL, { responseType: 'text' });
    const parsed = this.parseCSV(response.data);

    if (this.cache) {
      await this.cache.set('nflverse', 'mappings', parsed, 24 * 60 * 60); // 24hr TTL
    }

    this.mappings = this.buildMappingIndex(parsed);
    return this.mappings;
  }

  private buildMappingIndex(mappings: NFLVersePlayerMapping[]): Map<string, NFLVersePlayerMapping> {
    const index = new Map<string, NFLVersePlayerMapping>();
    for (const mapping of mappings) {
      index.set(`nflverse:${mapping.nflverse_id}`, mapping);
      if (mapping.sleeper_id) index.set(`sleeper:${mapping.sleeper_id}`, mapping);
      if (mapping.yahoo_id) index.set(`yahoo:${mapping.yahoo_id}`, mapping);
      if (mapping.espn_id) index.set(`espn:${mapping.espn_id}`, mapping);
      index.set(`name:${this.normalizeName(mapping.name)}`, mapping);
    }
    return index;
  }

  private normalizeName(name: string): string {
    return name.toLowerCase().replace(/[^a-z]/g, '');
  }

  findBySleeperId(sleeperId: string): NFLVersePlayerMapping | undefined {
    return this.mappings?.get(`sleeper:${sleeperId}`);
  }

  findByName(name: string): NFLVersePlayerMapping | undefined {
    return this.mappings?.get(`name:${this.normalizeName(name)}`);
  }
}

export const nflverseMapper = new NFLVerseMapper();
```

### Context-Aware Value Adjustments

```typescript
// packages/api-client/src/valuation/adjustments.ts
import type { Position } from '@fantasy/database';

export interface LeagueContext {
  isSuperFlex: boolean;
  tePremium: number; // 0, 0.5, 1.0, 1.5
  pprValue: number; // 0, 0.5, 1.0
  teamCount: number;
  startingSlots: Record<string, number>;
}

export interface AdjustedValue {
  baseValue: number;
  adjustedValue: number;
  adjustments: {
    superflex: number;
    tePremium: number;
    ppr: number;
    scarcity: number;
    total: number;
  };
}

const ADJUSTMENTS = {
  SUPERFLEX: { QB: 1.35, RB: 0.95, WR: 0.95, TE: 0.95 },
  TE_PREMIUM: { 0: 1.0, 0.5: 1.1, 1.0: 1.2, 1.5: 1.3 },
  PPR: {
    RB: { 0: 0.85, 0.5: 0.95, 1.0: 1.05 },
    WR: { 0: 0.9, 0.5: 1.0, 1.0: 1.1 },
    TE: { 0: 0.95, 0.5: 1.0, 1.0: 1.05 },
  },
};

export function calculateAdjustedValue(
  baseValue: number,
  position: Position,
  context: LeagueContext
): AdjustedValue {
  let adjustedValue = baseValue;
  const adjustments = { superflex: 0, tePremium: 0, ppr: 0, scarcity: 0, total: 0 };

  if (!['QB', 'RB', 'WR', 'TE'].includes(position)) {
    return { baseValue, adjustedValue, adjustments };
  }

  const pos = position as 'QB' | 'RB' | 'WR' | 'TE';

  // Superflex adjustment
  if (context.isSuperFlex) {
    const sfMultiplier = ADJUSTMENTS.SUPERFLEX[pos] ?? 1;
    adjustments.superflex = baseValue * (sfMultiplier - 1);
    adjustedValue += adjustments.superflex;
  }

  // TE Premium adjustment
  if (position === 'TE' && context.tePremium > 0) {
    const tepMultiplier =
      ADJUSTMENTS.TE_PREMIUM[context.tePremium as keyof typeof ADJUSTMENTS.TE_PREMIUM] ?? 1;
    adjustments.tePremium = baseValue * (tepMultiplier - 1);
    adjustedValue += adjustments.tePremium;
  }

  // PPR adjustment
  if (pos !== 'QB' && pos in ADJUSTMENTS.PPR) {
    const pprSettings = ADJUSTMENTS.PPR[pos as 'RB' | 'WR' | 'TE'];
    const pprMultiplier = pprSettings[context.pprValue as keyof typeof pprSettings] ?? 1;
    adjustments.ppr = baseValue * (pprMultiplier - 1);
    adjustedValue += adjustments.ppr;
  }

  // Scarcity adjustment for larger leagues
  if (context.teamCount > 14) {
    const scarcityBoost = 1 + (context.teamCount - 14) * 0.02;
    adjustments.scarcity = baseValue * (scarcityBoost - 1);
    adjustedValue += adjustments.scarcity;
  }

  adjustments.total = adjustedValue - baseValue;
  return { baseValue, adjustedValue: Math.round(adjustedValue), adjustments };
}
```

### Marginal Utility (Diminishing Returns)

```typescript
// packages/api-client/src/valuation/marginal-utility.ts
import type { Position } from '@fantasy/database';

export interface RosterPlayer {
  playerId: string;
  position: Position;
  value: number;
}

export interface RosterContext {
  players: RosterPlayer[];
  startingSlots: Record<string, number>;
}

export interface MarginalUtilityResult {
  rawValue: number;
  marginalValue: number;
  utilityMultiplier: number;
  positionDepth: number;
  role: 'upgrade' | 'depth' | 'redundant';
  reasoning: string;
}

const DIMINISHING_RETURNS = {
  QB: [1.0, 0.4, 0.15, 0.05], // QB2 = 40% value, QB3 = 15%
  RB: [1.0, 0.85, 0.55, 0.35, 0.2, 0.1],
  WR: [1.0, 0.9, 0.7, 0.45, 0.3, 0.15, 0.08],
  TE: [1.0, 0.35, 0.12, 0.05],
} as const;

const FLEX_BONUS = { RB: 1.08, WR: 1.08, TE: 1.03 } as const;

export function calculateMarginalUtility(
  incomingPlayer: { position: Position; value: number },
  roster: RosterContext
): MarginalUtilityResult {
  const position = incomingPlayer.position;

  if (!['QB', 'RB', 'WR', 'TE'].includes(position)) {
    return {
      rawValue: incomingPlayer.value,
      marginalValue: incomingPlayer.value,
      utilityMultiplier: 1.0,
      positionDepth: 0,
      role: 'depth',
      reasoning: 'Non-skill position',
    };
  }

  const pos = position as 'QB' | 'RB' | 'WR' | 'TE';

  // Get current players at position, sorted by value descending
  const currentAtPosition = roster.players
    .filter(p => p.position === position)
    .sort((a, b) => b.value - a.value);

  // Find insertion index
  const insertionIndex = currentAtPosition.findIndex(p => incomingPlayer.value > p.value);
  const effectiveIndex = insertionIndex === -1 ? currentAtPosition.length : insertionIndex;

  const requiredStarters = roster.startingSlots[position] || 0;

  // Determine role
  let role: 'upgrade' | 'depth' | 'redundant';
  let reasoning: string;

  if (effectiveIndex < requiredStarters) {
    role = 'upgrade';
    reasoning = `Would become starter #${effectiveIndex + 1} at ${position}`;
  } else if (effectiveIndex < requiredStarters + 2) {
    role = 'depth';
    reasoning = `Would provide key depth as ${position}${effectiveIndex + 1}`;
  } else {
    role = 'redundant';
    reasoning = `Would be ${position}${effectiveIndex + 1} - diminished roster impact`;
  }

  // Apply diminishing returns
  const dimReturns = DIMINISHING_RETURNS[pos];
  const depthMultiplier = dimReturns[Math.min(effectiveIndex, dimReturns.length - 1)] ?? 0.05;

  // Flex bonus
  let flexMultiplier = 1.0;
  if (pos in FLEX_BONUS && (roster.startingSlots['FLEX'] ?? 0) > 0) {
    flexMultiplier = FLEX_BONUS[pos as keyof typeof FLEX_BONUS];
  }

  const utilityMultiplier = depthMultiplier * flexMultiplier;
  const marginalValue = Math.round(incomingPlayer.value * utilityMultiplier);

  return {
    rawValue: incomingPlayer.value,
    marginalValue,
    utilityMultiplier,
    positionDepth: effectiveIndex,
    role,
    reasoning,
  };
}
```

### VORP Calculation

```typescript
// packages/analytics/src/vorp/baselines.ts
import type { Position } from '@fantasy/database';

export const STRICT_BASELINES: Record<Position, number> = {
  QB: 13,
  RB: 25,
  WR: 25,
  TE: 13,
  K: 13,
  DEF: 13,
  DL: 25,
  LB: 37,
  DB: 25,
  IDP: 37,
};

export const WAIVER_BASELINES: Record<Position, number> = {
  QB: 18,
  RB: 36,
  WR: 36,
  TE: 18,
  K: 16,
  DEF: 16,
  DL: 36,
  LB: 48,
  DB: 36,
  IDP: 48,
};

export function scaleBaseline(
  baselineRank: number,
  targetTeamCount: number,
  sourceTeamCount: number = 12
): number {
  return Math.round(baselineRank * (targetTeamCount / sourceTeamCount));
}

// packages/analytics/src/vorp/calculator.ts
import { prisma, type Position, type BaselineType } from '@fantasy/database';
import { STRICT_BASELINES, WAIVER_BASELINES, scaleBaseline } from './baselines.js';

export interface VORPResult {
  playerId: string;
  position: Position;
  projectedPoints: number;
  vorpStrict: number;
  vorpWaiver: number;
}

export class VORPCalculator {
  constructor(private teamCount: number = 12) {}

  async calculatePlayerVORP(playerId: string, season: number): Promise<VORPResult | null> {
    const stats = await prisma.playerSeasonStats.findUnique({
      where: { playerId_season: { playerId, season } },
      include: { player: true },
    });

    if (!stats) return null;

    const position = stats.player.position;
    const projectedPoints = Number(stats.avgPoints);

    const strictBaseline = await this.getBaselineValue(season, position, 'STRICT');
    const waiverBaseline = await this.getBaselineValue(season, position, 'WAIVER');

    return {
      playerId,
      position,
      projectedPoints,
      vorpStrict: projectedPoints - strictBaseline,
      vorpWaiver: projectedPoints - waiverBaseline,
    };
  }

  private async getBaselineValue(
    season: number,
    position: Position,
    type: BaselineType
  ): Promise<number> {
    const baseline = await prisma.positionBaseline.findUnique({
      where: {
        season_position_baselineType_teamCount: {
          season,
          position,
          baselineType: type,
          teamCount: this.teamCount,
        },
      },
    });
    return baseline ? Number(baseline.baselineValue) : 0;
  }
}
```

### Monte Carlo WAR Simulation

```typescript
// packages/analytics/src/war/monte-carlo.ts
import { mean, standardDeviation } from '../utils/statistics.js';

export interface PlayerProfile {
  playerId: string;
  avgPoints: number;
  stdDev: number;
}

export class MonteCarloSimulator {
  constructor(private iterations: number = 10_000) {}

  private generateScore(profile: PlayerProfile): number {
    // Box-Muller transform for normal distribution
    const u1 = Math.random();
    const u2 = Math.random();
    const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
    return Math.max(0, profile.avgPoints + z * profile.stdDev);
  }

  simulateWAR(
    teamPlayers: PlayerProfile[],
    targetPlayer: PlayerProfile,
    opponents: PlayerProfile[][]
  ): { warValue: number; winProbWithPlayer: number; winProbWithout: number } {
    const winsWithPlayer: number[] = [];
    const winsWithoutPlayer: number[] = [];

    for (let i = 0; i < this.iterations; i++) {
      let seasonWinsWithPlayer = 0;
      let seasonWinsWithoutPlayer = 0;

      for (let week = 0; week < 14; week++) {
        // Team score WITH player
        const teamScoreWith = teamPlayers.reduce((sum, p) => sum + this.generateScore(p), 0);

        // Team score WITHOUT player (replacement = 5 pts)
        const teamScoreWithout = teamPlayers.reduce(
          (sum, p) =>
            p.playerId === targetPlayer.playerId ? sum + 5 : sum + this.generateScore(p),
          0
        );

        // Opponent average
        const opponentAvg = mean(
          opponents.map(r => r.reduce((s, p) => s + this.generateScore(p), 0))
        );

        seasonWinsWithPlayer += teamScoreWith > opponentAvg ? 1 : 0;
        seasonWinsWithoutPlayer += teamScoreWithout > opponentAvg ? 1 : 0;
      }

      winsWithPlayer.push(seasonWinsWithPlayer);
      winsWithoutPlayer.push(seasonWinsWithoutPlayer);
    }

    const avgWithPlayer = mean(winsWithPlayer);
    const avgWithoutPlayer = mean(winsWithoutPlayer);

    return {
      warValue: avgWithPlayer - avgWithoutPlayer,
      winProbWithPlayer: avgWithPlayer / 14,
      winProbWithout: avgWithoutPlayer / 14,
    };
  }
}

// packages/analytics/src/utils/statistics.ts
export function mean(values: number[]): number {
  if (values.length === 0) return 0;
  return values.reduce((sum, v) => sum + v, 0) / values.length;
}

export function standardDeviation(values: number[]): number {
  if (values.length < 2) return 0;
  const avg = mean(values);
  const squaredDiffs = values.map(v => Math.pow(v - avg, 2));
  return Math.sqrt(mean(squaredDiffs));
}
```

### Report Card Generator

```typescript
// packages/analytics/src/report-card/all-play.ts
import { prisma } from '@fantasy/database';

export interface AllPlayResult {
  memberId: string;
  week: number;
  wins: number;
  losses: number;
  ties: number;
  score: number;
}

export async function calculateWeeklyAllPlay(
  leagueId: string,
  season: number,
  week: number
): Promise<AllPlayResult[]> {
  const matchups = await prisma.matchup.findMany({ where: { leagueId, season, week } });

  // Build score map
  const scores = new Map<number, number>();
  for (const m of matchups) {
    if (m.homeScore) scores.set(m.homeTeamSlot, Number(m.homeScore));
    if (m.awayScore) scores.set(m.awayTeamSlot, Number(m.awayScore));
  }

  const members = await prisma.leagueMember.findMany({ where: { leagueId } });
  const slotToMember = new Map(members.map(m => [m.rosterSlot, m.id]));

  const results: AllPlayResult[] = [];
  const allScores = Array.from(scores.values());

  for (const [slot, score] of scores) {
    const memberId = slotToMember.get(slot);
    if (!memberId) continue;

    let wins = 0,
      losses = 0,
      ties = 0;
    for (const opponentScore of allScores) {
      if (opponentScore === score) continue;
      if (score > opponentScore) wins++;
      else if (score < opponentScore) losses++;
      else ties++;
    }

    results.push({ memberId, week, wins, losses, ties, score });
  }

  return results;
}

// packages/analytics/src/report-card/luck-index.ts
export interface LuckIndexResult {
  memberId: string;
  actualWins: number;
  expectedWins: number;
  luckIndex: number;
}

export async function calculateLuckIndex(
  leagueId: string,
  season: number,
  throughWeek: number
): Promise<LuckIndexResult[]> {
  const members = await prisma.leagueMember.findMany({ where: { leagueId } });
  const analytics = await prisma.teamSeasonAnalytics.findMany({ where: { leagueId, season } });

  return analytics
    .map(a => {
      const member = members.find(m => m.id === a.memberId);
      const expectedWins = Number(a.allPlayWinPct) * throughWeek;
      return {
        memberId: a.memberId,
        actualWins: member?.wins ?? 0,
        expectedWins,
        luckIndex: (member?.wins ?? 0) - expectedWins,
      };
    })
    .sort((a, b) => b.luckIndex - a.luckIndex);
}
```

### BullMQ Scheduled Jobs

```typescript
// services/discord-bot/src/queues/scheduler.ts
import { Queue, Worker } from 'bullmq';
import { createQueueConnection } from './connection.js';

interface ScheduledJobData {
  type:
    | 'lineup_reminder'
    | 'injury_check'
    | 'standings_update'
    | 'ktc_scrape'
    | 'weekly_report_card'
    | 'vorp_update'
    | 'war_calculation';
}

export const schedulerQueue = new Queue<ScheduledJobData>('scheduler', {
  connection: createQueueConnection(),
});

export async function initializeScheduledJobs() {
  // Existing jobs...
  await schedulerQueue.upsertJobScheduler(
    'sunday-lineup-reminder',
    { pattern: '0 10 * * 0', tz: 'America/New_York' },
    { name: 'lineup-reminder', data: { type: 'lineup_reminder' } }
  );

  await schedulerQueue.upsertJobScheduler(
    'injury-check',
    { pattern: '*/30 * * * 0,1,4', tz: 'America/New_York' },
    { name: 'injury-check', data: { type: 'injury_check' } }
  );

  // Phase 4 jobs
  await schedulerQueue.upsertJobScheduler(
    'ktc-daily-scrape',
    { pattern: '0 5 * * *', tz: 'America/New_York' },
    { name: 'ktc-scrape', data: { type: 'ktc_scrape' } }
  );

  await schedulerQueue.upsertJobScheduler(
    'weekly-report-card',
    { pattern: '0 8 * * 2', tz: 'America/New_York' },
    { name: 'weekly-report-card', data: { type: 'weekly_report_card' } }
  );

  await schedulerQueue.upsertJobScheduler(
    'vorp-update',
    { pattern: '0 4 * * *', tz: 'America/New_York' },
    { name: 'vorp-update', data: { type: 'vorp_update' } }
  );

  await schedulerQueue.upsertJobScheduler(
    'war-calculation',
    { pattern: '0 3 * * 3', tz: 'America/New_York' },
    { name: 'war-calculation', data: { type: 'war_calculation' } }
  );
}
```

### Discord Commands

```typescript
// services/discord-bot/src/commands/trade-calc.ts
import { SlashCommandBuilder, EmbedBuilder, type ChatInputCommandInteraction } from 'discord.js';
import { CacheService, CachedKTCClient, calculateAdjustedValue } from '@fantasy/api-client';
import { prisma } from '@fantasy/database';
import type { Command } from '../types.js';

export const command: Command = {
  data: new SlashCommandBuilder()
    .setName('trade')
    .setDescription('Analyze a trade for value and roster fit')
    .addStringOption(opt =>
      opt
        .setName('sending')
        .setDescription('Players you are sending (comma-separated)')
        .setRequired(true)
    )
    .addStringOption(opt =>
      opt
        .setName('receiving')
        .setDescription('Players you are receiving (comma-separated)')
        .setRequired(true)
    ),

  async execute(interaction: ChatInputCommandInteraction) {
    await interaction.deferReply();

    const sendingNames = interaction.options
      .getString('sending', true)
      .split(',')
      .map(s => s.trim());
    const receivingNames = interaction.options
      .getString('receiving', true)
      .split(',')
      .map(s => s.trim());

    // ... fetch KTC values, calculate adjustments

    const netValue = receivingTotal - sendingTotal;
    const verdict =
      netValue > sendingTotal * 0.1
        ? 'FAVORABLE'
        : netValue < -sendingTotal * 0.1
          ? 'UNFAVORABLE'
          : 'EVEN';

    const embed = new EmbedBuilder()
      .setColor(netValue > 0 ? 0x00ff00 : netValue < 0 ? 0xff0000 : 0xffff00)
      .setTitle('Trade Analysis')
      .addFields(
        { name: `Sending (${sendingTotal.toLocaleString()})`, value: sendingField, inline: true },
        {
          name: `Receiving (${receivingTotal.toLocaleString()})`,
          value: receivingField,
          inline: true,
        },
        {
          name: 'Verdict',
          value: `**${verdict}** (${netValue > 0 ? '+' : ''}${netValue.toLocaleString()})`,
          inline: false,
        }
      )
      .setFooter({ text: 'Values from KeepTradeCut' })
      .setTimestamp();

    await interaction.editReply({ embeds: [embed] });
  },
};
```

---

## Discord Commands Summary

| Command                        | Description                                          |
| ------------------------------ | ---------------------------------------------------- |
| `/trade <sending> <receiving>` | Analyze trade value with league-specific adjustments |
| `/value <player>`              | Look up single player trade value                    |
| `/vorp <position>`             | Show VORP leaderboard by position                    |
| `/report-card [week]`          | Generate weekly report card                          |

---

## Scheduled Jobs Summary

| Job                  | Schedule             | Description                     |
| -------------------- | -------------------- | ------------------------------- |
| `ktc-daily-scrape`   | 5:00 AM ET daily     | Scrape KTC values               |
| `weekly-report-card` | 8:00 AM ET Tuesday   | Generate weekly report cards    |
| `vorp-update`        | 4:00 AM ET daily     | Update VORP calculations        |
| `war-calculation`    | 3:00 AM ET Wednesday | Run Monte Carlo WAR simulations |

---

## Caching Strategy

| Data                       | TTL       | Refresh              |
| -------------------------- | --------- | -------------------- |
| KTC Dynasty/Redraft Values | 6 hours   | Daily job at 5 AM    |
| NFLverse Mappings          | 24 hours  | On-demand            |
| Weekly Analytics           | Persisted | After each week      |
| VORP Calculations          | Persisted | Daily job at 4 AM    |
| WAR Calculations           | Persisted | Weekly job Wednesday |

---

## Implementation Phases

### Phase A: Database Foundation

1. Add models to `schema.prisma`
2. Run migration: `pnpm --filter @fantasy/database db:migrate`
3. Generate client: `pnpm --filter @fantasy/database db:generate`

### Phase B: API Client Extensions

1. Add `cheerio` dependency
2. Create `ktc/`, `mapping/`, `valuation/` modules
3. Update exports

### Phase C: Analytics Package

1. Create `packages/analytics` structure
2. Implement VORP calculator
3. Implement Monte Carlo WAR
4. Implement report card components

### Phase D: Discord Integration

1. Create embed builders
2. Add slash commands
3. Update scheduler with new jobs
4. Implement job handlers

### Phase E: Testing

1. Test KTC scraping
2. Verify ID mapping accuracy
3. Validate calculations
4. Test Discord commands
