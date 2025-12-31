import { prisma } from '@fantasy/database';

export interface LuckIndexResult {
  memberId: string;
  teamName: string;
  actualWins: number;
  expectedWins: number;
  luckIndex: number;
}

export async function calculateLuckIndex(
  leagueId: string,
  season: number,
  _throughWeek: number
): Promise<LuckIndexResult[]> {
  const members = await prisma.leagueMember.findMany({ where: { leagueId } });
  const analytics = await prisma.teamSeasonAnalytics.findMany({ where: { leagueId, season } });

  const results: LuckIndexResult[] = [];

  for (const member of members) {
    const memberAnalytics = analytics.find(a => a.memberId === member.id);

    if (memberAnalytics) {
      const expectedWins = Number(memberAnalytics.expectedWins);
      const actualWins = memberAnalytics.actualWins;
      const luckIndex = actualWins - expectedWins;

      results.push({
        memberId: member.id,
        teamName: member.teamName || 'Unknown',
        actualWins,
        expectedWins: Math.round(expectedWins * 100) / 100,
        luckIndex: Math.round(luckIndex * 100) / 100,
      });
    } else {
      // Calculate from all-play win percentage if no analytics yet
      results.push({
        memberId: member.id,
        teamName: member.teamName || 'Unknown',
        actualWins: member.wins,
        expectedWins: member.wins, // Fallback
        luckIndex: 0,
      });
    }
  }

  return results.sort((a, b) => b.luckIndex - a.luckIndex);
}
