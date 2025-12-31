import { mean } from '../utils/statistics.js';
import { REPLACEMENT_VALUES, DEFAULT_REPLACEMENT_VALUE } from './constants.js';

export interface PlayerProfile {
  playerId: string;
  position: string;
  avgPoints: number;
  stdDev: number;
}

export interface WARSimulationResult {
  warValue: number;
  winProbWithPlayer: number;
  winProbWithout: number;
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
    opponents: PlayerProfile[][],
    replacementValue?: number
  ): WARSimulationResult {
    // Use position-specific replacement value if not explicitly provided
    const replacement =
      replacementValue ?? REPLACEMENT_VALUES[targetPlayer.position] ?? DEFAULT_REPLACEMENT_VALUE;
    const winsWithPlayer: number[] = [];
    const winsWithoutPlayer: number[] = [];

    for (let i = 0; i < this.iterations; i++) {
      let seasonWinsWithPlayer = 0;
      let seasonWinsWithoutPlayer = 0;

      for (let week = 0; week < 14; week++) {
        // Generate teammate scores ONCE per week for consistency
        let teammateTotal = 0;
        let targetScore = 0;

        for (const p of teamPlayers) {
          const score = this.generateScore(p);
          if (p.playerId === targetPlayer.playerId) {
            targetScore = score;
          } else {
            teammateTotal += score;
          }
        }

        // Team scores using cached values
        const teamScoreWith = teammateTotal + targetScore;
        const teamScoreWithout = teammateTotal + replacement;

        // Pick random opponent for this week
        const weekOpponent = opponents[Math.floor(Math.random() * opponents.length)] ?? [];
        const opponentScore = weekOpponent.reduce((s, p) => s + this.generateScore(p), 0);

        // Compare both scenarios against same opponent
        seasonWinsWithPlayer += teamScoreWith > opponentScore ? 1 : 0;
        seasonWinsWithoutPlayer += teamScoreWithout > opponentScore ? 1 : 0;
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
