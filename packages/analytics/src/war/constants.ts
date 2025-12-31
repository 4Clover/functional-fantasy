/**
 * Position-specific replacement values for WAR calculations.
 * These represent the average weekly points a replacement-level player
 * (waiver wire pickup) would score at each position.
 */
export const REPLACEMENT_VALUES: Record<string, number> = {
  QB: 12, // Replacement QBs score more due to position scarcity
  RB: 6, // Standard replacement RB
  WR: 5, // Standard replacement WR
  TE: 4, // Lower TE production at replacement level
  K: 7, // Kickers are highly replaceable
  DEF: 6, // Defenses average ~6
};

export const DEFAULT_REPLACEMENT_VALUE = 5;
