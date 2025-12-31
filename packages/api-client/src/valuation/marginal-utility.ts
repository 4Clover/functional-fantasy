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

const DIMINISHING_RETURNS: Record<string, number[]> = {
  QB: [1.0, 0.4, 0.15, 0.05],
  RB: [1.0, 0.85, 0.55, 0.35, 0.2, 0.1],
  WR: [1.0, 0.9, 0.7, 0.45, 0.3, 0.15, 0.08],
  TE: [1.0, 0.35, 0.12, 0.05],
};

const FLEX_BONUS: Record<string, number> = { RB: 1.08, WR: 1.08, TE: 1.03 };

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

  const currentAtPosition = roster.players
    .filter(p => p.position === position)
    .sort((a, b) => b.value - a.value);

  const insertionIndex = currentAtPosition.findIndex(p => incomingPlayer.value > p.value);
  const effectiveIndex = insertionIndex === -1 ? currentAtPosition.length : insertionIndex;

  const requiredStarters = roster.startingSlots[position] || 0;

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

  const dimReturns = DIMINISHING_RETURNS[position] ?? [1.0];
  const depthMultiplier = dimReturns[Math.min(effectiveIndex, dimReturns.length - 1)] ?? 0.05;

  let flexMultiplier = 1.0;
  if (position in FLEX_BONUS && (roster.startingSlots['FLEX'] ?? 0) > 0) {
    flexMultiplier = FLEX_BONUS[position] ?? 1.0;
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
