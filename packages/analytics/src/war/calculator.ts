import { prisma } from '@fantasy/database';
import {
  MonteCarloSimulator,
  type PlayerProfile,
  type WARSimulationResult,
} from './monte-carlo.js';

export interface WARResult {
  playerId: string;
  playerName: string;
  war: number;
  winProbWithPlayer: number;
  winProbWithout: number;
}

export class WARCalculator {
  private simulator: MonteCarloSimulator;

  constructor(iterations: number = 10_000) {
    this.simulator = new MonteCarloSimulator(iterations);
  }

  async calculatePlayerWAR(
    playerId: string,
    leagueId: string,
    season: number
  ): Promise<WARResult | null> {
    const player = await prisma.player.findUnique({
      where: { id: playerId },
      include: {
        seasonStats: { where: { season } },
      },
    });

    const stats = player?.seasonStats[0];
    if (!player || !stats) return null;

    const targetProfile: PlayerProfile = {
      playerId,
      position: player.position,
      avgPoints: Number(stats.avgPoints),
      stdDev: Number(stats.stdDeviation),
    };

    // Get all league members and their rosters
    const members = await prisma.leagueMember.findMany({
      where: { leagueId },
      include: {
        rosters: {
          where: { season },
          include: {
            players: {
              include: {
                player: {
                  include: { seasonStats: { where: { season } } },
                },
              },
            },
          },
        },
      },
    });

    // Build team profiles
    const teamProfiles: PlayerProfile[][] = [];
    let ownerTeamPlayers: PlayerProfile[] = [];

    for (const member of members) {
      const roster = member.rosters[0];
      if (!roster) continue;

      const teamPlayers: PlayerProfile[] = roster.players
        .filter(rp => rp.player.seasonStats.length > 0)
        .map(rp => {
          const playerStats = rp.player.seasonStats[0]!;
          return {
            playerId: rp.player.id,
            position: rp.player.position,
            avgPoints: Number(playerStats.avgPoints),
            stdDev: Number(playerStats.stdDeviation),
          };
        });

      if (teamPlayers.some(p => p.playerId === playerId)) {
        ownerTeamPlayers = teamPlayers;
      } else {
        teamProfiles.push(teamPlayers);
      }
    }

    if (ownerTeamPlayers.length === 0 || teamProfiles.length === 0) return null;

    const result: WARSimulationResult = this.simulator.simulateWAR(
      ownerTeamPlayers,
      targetProfile,
      teamProfiles
    );

    return {
      playerId,
      playerName: player.fullName,
      war: result.warValue,
      winProbWithPlayer: result.winProbWithPlayer,
      winProbWithout: result.winProbWithout,
    };
  }
}
