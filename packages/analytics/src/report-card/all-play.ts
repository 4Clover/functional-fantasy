import { prisma } from '@fantasy/database';

export interface AllPlayResult {
  memberId: string;
  week: number;
  wins: number;
  losses: number;
  ties: number;
  score: number;
}

export async function calculateWeeklyAllPlay(
  leagueId: string,
  season: number,
  week: number
): Promise<AllPlayResult[]> {
  const matchups = await prisma.matchup.findMany({
    where: { leagueId, season, week },
  });

  const scores = new Map<number, number>();
  for (const m of matchups) {
    if (m.homeScore) scores.set(m.homeTeamSlot, Number(m.homeScore));
    if (m.awayScore) scores.set(m.awayTeamSlot, Number(m.awayScore));
  }

  const members = await prisma.leagueMember.findMany({ where: { leagueId } });
  const slotToMember = new Map(members.map(m => [m.rosterSlot, m.id]));

  const results: AllPlayResult[] = [];
  const allScores = Array.from(scores.values());

  for (const [slot, score] of scores) {
    const memberId = slotToMember.get(slot);
    if (!memberId) continue;

    let wins = 0;
    let losses = 0;
    let ties = 0;

    for (const opponentScore of allScores) {
      if (opponentScore === score && scores.get(slot) === score) {
        // Same team, skip
        continue;
      }
      if (score > opponentScore) wins++;
      else if (score < opponentScore) losses++;
      else ties++;
    }

    // Adjust for comparing against self
    wins = Math.max(0, wins);
    losses = Math.max(0, losses);

    results.push({ memberId, week, wins, losses, ties, score });
  }

  return results;
}

export async function calculateSeasonAllPlay(
  leagueId: string,
  season: number,
  throughWeek: number
): Promise<Map<string, { wins: number; losses: number; ties: number }>> {
  // Fetch all weeks in parallel
  const weekPromises = Array.from({ length: throughWeek }, (_, i) =>
    calculateWeeklyAllPlay(leagueId, season, i + 1)
  );
  const allWeekResults = await Promise.all(weekPromises);

  // Aggregate totals from parallel results
  const totals = new Map<string, { wins: number; losses: number; ties: number }>();

  for (const weekResults of allWeekResults) {
    for (const result of weekResults) {
      const existing = totals.get(result.memberId) || { wins: 0, losses: 0, ties: 0 };
      totals.set(result.memberId, {
        wins: existing.wins + result.wins,
        losses: existing.losses + result.losses,
        ties: existing.ties + result.ties,
      });
    }
  }

  return totals;
}
