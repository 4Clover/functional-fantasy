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
