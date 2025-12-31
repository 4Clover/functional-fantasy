import type { Position } from '@fantasy/database';

export interface LeagueContext {
  isSuperFlex: boolean;
  tePremium: number;
  pprValue: number;
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
  TE_PREMIUM: { 0: 1.0, 0.5: 1.1, 1.0: 1.2, 1.5: 1.3 } as Record<number, number>,
  PPR: {
    RB: { 0: 0.85, 0.5: 0.95, 1.0: 1.05 } as Record<number, number>,
    WR: { 0: 0.9, 0.5: 1.0, 1.0: 1.1 } as Record<number, number>,
    TE: { 0: 0.95, 0.5: 1.0, 1.0: 1.05 } as Record<number, number>,
  },
} as const;

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

  if (context.isSuperFlex) {
    const sfMultiplier = ADJUSTMENTS.SUPERFLEX[pos] ?? 1;
    adjustments.superflex = baseValue * (sfMultiplier - 1);
    adjustedValue += adjustments.superflex;
  }

  if (position === 'TE' && context.tePremium > 0) {
    const tepMultiplier = ADJUSTMENTS.TE_PREMIUM[context.tePremium] ?? 1;
    adjustments.tePremium = baseValue * (tepMultiplier - 1);
    adjustedValue += adjustments.tePremium;
  }

  if (pos !== 'QB' && pos in ADJUSTMENTS.PPR) {
    const pprSettings = ADJUSTMENTS.PPR[pos as 'RB' | 'WR' | 'TE'];
    const pprMultiplier = pprSettings[context.pprValue] ?? 1;
    adjustments.ppr = baseValue * (pprMultiplier - 1);
    adjustedValue += adjustments.ppr;
  }

  if (context.teamCount > 14) {
    const scarcityBoost = 1 + (context.teamCount - 14) * 0.02;
    adjustments.scarcity = baseValue * (scarcityBoost - 1);
    adjustedValue += adjustments.scarcity;
  }

  adjustments.total = adjustedValue - baseValue;
  return { baseValue, adjustedValue: Math.round(adjustedValue), adjustments };
}
