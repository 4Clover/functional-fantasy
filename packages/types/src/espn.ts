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
