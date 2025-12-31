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
