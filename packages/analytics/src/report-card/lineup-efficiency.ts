import { prisma } from '@fantasy/database';

export interface LineupEfficiencyResult {
  memberId: string;
  week: number;
  actualScore: number;
  optimalScore: number;
  efficiency: number;
  missedPoints: number;
}

export async function calculateWeeklyLineupEfficiency(
  leagueId: string,
  season: number,
  week: number
): Promise<LineupEfficiencyResult[]> {
  const rosters = await prisma.roster.findMany({
    where: { league: { id: leagueId }, season, week },
    include: {
      member: true,
      players: {
        include: {
          player: {
            include: {
              weeklyStats: { where: { season, week } },
            },
          },
        },
      },
    },
  });

  const results: LineupEfficiencyResult[] = [];

  for (const roster of rosters) {
    // Calculate actual score (starters only)
    let actualScore = 0;
    const allPlayerPoints: {
      playerId: string;
      position: string;
      points: number;
      isStarter: boolean;
    }[] = [];

    for (const rp of roster.players) {
      const weekStats = rp.player.weeklyStats[0];
      const points = weekStats ? Number(weekStats.points) : 0;
      const isStarter = rp.slot !== 'BN' && rp.slot !== 'IR' && rp.slot !== 'TAXI';

      allPlayerPoints.push({
        playerId: rp.player.id,
        position: rp.player.position,
        points,
        isStarter,
      });

      if (isStarter) {
        actualScore += points;
      }
    }

    // Calculate optimal score (best possible lineup)
    // This is a simplified version - a full implementation would need to respect slot constraints
    const sortedPlayers = [...allPlayerPoints].sort((a, b) => b.points - a.points);
    const starterCount = allPlayerPoints.filter(p => p.isStarter).length;
    const optimalScore = sortedPlayers.slice(0, starterCount).reduce((sum, p) => sum + p.points, 0);

    const efficiency = optimalScore > 0 ? (actualScore / optimalScore) * 100 : 100;
    const missedPoints = optimalScore - actualScore;

    results.push({
      memberId: roster.memberId,
      week,
      actualScore,
      optimalScore,
      efficiency: Math.round(efficiency * 100) / 100,
      missedPoints: Math.round(missedPoints * 100) / 100,
    });
  }

  return results;
}
