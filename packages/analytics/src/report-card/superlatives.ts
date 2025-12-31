import { prisma, type SuperlativeType } from '@fantasy/database';

export interface Superlative {
  type: SuperlativeType;
  memberId: string;
  teamName: string;
  value: number;
  description: string;
}

export async function calculateSeasonSuperlatives(
  leagueId: string,
  season: number
): Promise<Superlative[]> {
  const analytics = await prisma.teamSeasonAnalytics.findMany({
    where: { leagueId, season },
    include: { member: true },
  });

  if (analytics.length === 0) return [];

  const superlatives: Superlative[] = [];

  // Best Manager - highest lineup efficiency
  const bestManager = analytics.reduce((best, curr) =>
    Number(curr.avgLineupEfficiency) > Number(best.avgLineupEfficiency) ? curr : best
  );
  superlatives.push({
    type: 'BEST_MANAGER',
    memberId: bestManager.memberId,
    teamName: bestManager.member.teamName || 'Unknown',
    value: Number(bestManager.avgLineupEfficiency),
    description: `${Number(bestManager.avgLineupEfficiency).toFixed(1)}% lineup efficiency`,
  });

  // Worst Manager - lowest lineup efficiency
  const worstManager = analytics.reduce((worst, curr) =>
    Number(curr.avgLineupEfficiency) < Number(worst.avgLineupEfficiency) ? curr : worst
  );
  superlatives.push({
    type: 'WORST_MANAGER',
    memberId: worstManager.memberId,
    teamName: worstManager.member.teamName || 'Unknown',
    value: Number(worstManager.avgLineupEfficiency),
    description: `${Number(worstManager.avgLineupEfficiency).toFixed(1)}% lineup efficiency`,
  });

  // Luckiest Team - highest luck index
  const luckiest = analytics.reduce((best, curr) =>
    Number(curr.luckIndex) > Number(best.luckIndex) ? curr : best
  );
  superlatives.push({
    type: 'LUCKIEST_TEAM',
    memberId: luckiest.memberId,
    teamName: luckiest.member.teamName || 'Unknown',
    value: Number(luckiest.luckIndex),
    description: `+${Number(luckiest.luckIndex).toFixed(2)} wins above expected`,
  });

  // Unluckiest Team - lowest luck index
  const unluckiest = analytics.reduce((worst, curr) =>
    Number(curr.luckIndex) < Number(worst.luckIndex) ? curr : worst
  );
  superlatives.push({
    type: 'UNLUCKIEST_TEAM',
    memberId: unluckiest.memberId,
    teamName: unluckiest.member.teamName || 'Unknown',
    value: Number(unluckiest.luckIndex),
    description: `${Number(unluckiest.luckIndex).toFixed(2)} wins below expected`,
  });

  // Most Consistent - lowest standard deviation
  const mostConsistent = analytics.reduce((best, curr) =>
    Number(curr.pointsStdDev) < Number(best.pointsStdDev) ? curr : best
  );
  superlatives.push({
    type: 'MOST_CONSISTENT',
    memberId: mostConsistent.memberId,
    teamName: mostConsistent.member.teamName || 'Unknown',
    value: Number(mostConsistent.pointsStdDev),
    description: `${Number(mostConsistent.pointsStdDev).toFixed(1)} pts std dev`,
  });

  // Boom/Bust - highest standard deviation
  const boomBust = analytics.reduce((best, curr) =>
    Number(curr.pointsStdDev) > Number(best.pointsStdDev) ? curr : best
  );
  superlatives.push({
    type: 'BOOM_BUST',
    memberId: boomBust.memberId,
    teamName: boomBust.member.teamName || 'Unknown',
    value: Number(boomBust.pointsStdDev),
    description: `${Number(boomBust.pointsStdDev).toFixed(1)} pts std dev`,
  });

  // Highest Scorer
  const highestScorer = analytics.reduce((best, curr) =>
    Number(curr.totalActualScore) > Number(best.totalActualScore) ? curr : best
  );
  superlatives.push({
    type: 'HIGHEST_SCORER',
    memberId: highestScorer.memberId,
    teamName: highestScorer.member.teamName || 'Unknown',
    value: Number(highestScorer.totalActualScore),
    description: `${Number(highestScorer.totalActualScore).toFixed(1)} total points`,
  });

  return superlatives;
}

export async function calculateWeeklySuperlatives(
  leagueId: string,
  season: number,
  week: number
): Promise<Superlative[]> {
  const weeklyAnalytics = await prisma.teamWeeklyAnalytics.findMany({
    where: { leagueId, season, week },
    include: { member: true },
  });

  if (weeklyAnalytics.length === 0) return [];

  const superlatives: Superlative[] = [];

  // Weekly MVP - highest scorer
  const mvp = weeklyAnalytics.reduce((best, curr) =>
    Number(curr.actualScore) > Number(best.actualScore) ? curr : best
  );
  superlatives.push({
    type: 'WEEKLY_MVP',
    memberId: mvp.memberId,
    teamName: mvp.member.teamName || 'Unknown',
    value: Number(mvp.actualScore),
    description: `${Number(mvp.actualScore).toFixed(1)} pts in Week ${week}`,
  });

  // Weekly LVP - lowest scorer
  const lvp = weeklyAnalytics.reduce((worst, curr) =>
    Number(curr.actualScore) < Number(worst.actualScore) ? curr : worst
  );
  superlatives.push({
    type: 'WEEKLY_LVP',
    memberId: lvp.memberId,
    teamName: lvp.member.teamName || 'Unknown',
    value: Number(lvp.actualScore),
    description: `${Number(lvp.actualScore).toFixed(1)} pts in Week ${week}`,
  });

  return superlatives;
}
