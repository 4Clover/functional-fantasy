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
