import { prisma } from '@fantasy/database';
import { calculateWeeklyAllPlay, calculateSeasonAllPlay } from './all-play.js';
import { calculateWeeklyLineupEfficiency } from './lineup-efficiency.js';
import { calculateLuckIndex } from './luck-index.js';
import {
  calculateSeasonSuperlatives,
  calculateWeeklySuperlatives,
  type Superlative,
} from './superlatives.js';
import { standardDeviation } from '../utils/statistics.js';

export interface WeeklyReportCard {
  leagueId: string;
  leagueName: string;
  season: number;
  week: number;
  teams: WeeklyTeamReport[];
  superlatives: Superlative[];
}

export interface WeeklyTeamReport {
  memberId: string;
  teamName: string;
  actualScore: number;
  optimalScore: number;
  lineupEfficiency: number;
  allPlayRecord: { wins: number; losses: number; ties: number };
  weeklyRank: number;
}

export interface SeasonReportCard {
  leagueId: string;
  leagueName: string;
  season: number;
  throughWeek: number;
  teams: SeasonTeamReport[];
  superlatives: Superlative[];
}

export interface SeasonTeamReport {
  memberId: string;
  teamName: string;
  record: { wins: number; losses: number; ties: number };
  totalPoints: number;
  allPlayRecord: { wins: number; losses: number; ties: number };
  allPlayWinPct: number;
  avgLineupEfficiency: number;
  luckIndex: number;
  powerRank: number;
}

export class ReportCardGenerator {
  async generateWeeklyReport(
    leagueId: string,
    season: number,
    week: number
  ): Promise<WeeklyReportCard> {
    const league = await prisma.league.findUnique({ where: { id: leagueId } });
    if (!league) throw new Error(`League not found: ${leagueId}`);

    // Run independent calculations in parallel
    const [allPlay, efficiency, superlatives] = await Promise.all([
      calculateWeeklyAllPlay(leagueId, season, week),
      calculateWeeklyLineupEfficiency(leagueId, season, week),
      calculateWeeklySuperlatives(leagueId, season, week),
    ]);

    const members = await prisma.leagueMember.findMany({ where: { leagueId } });
    const memberMap = new Map(members.map(m => [m.id, m]));

    const teams: WeeklyTeamReport[] = [];

    for (const ap of allPlay) {
      const eff = efficiency.find(e => e.memberId === ap.memberId);
      const member = memberMap.get(ap.memberId);

      teams.push({
        memberId: ap.memberId,
        teamName: member?.teamName || 'Unknown',
        actualScore: eff?.actualScore || ap.score,
        optimalScore: eff?.optimalScore || ap.score,
        lineupEfficiency: eff?.efficiency || 100,
        allPlayRecord: { wins: ap.wins, losses: ap.losses, ties: ap.ties },
        weeklyRank: 0, // Will be set after sorting
      });
    }

    // Sort by score and assign ranks
    teams.sort((a, b) => b.actualScore - a.actualScore);
    teams.forEach((t, i) => (t.weeklyRank = i + 1));

    // Store weekly analytics
    for (const team of teams) {
      await prisma.teamWeeklyAnalytics.upsert({
        where: { memberId_season_week: { memberId: team.memberId, season, week } },
        update: {
          actualScore: team.actualScore,
          optimalScore: team.optimalScore,
          lineupEfficiency: team.lineupEfficiency,
          allPlayWins: team.allPlayRecord.wins,
          allPlayLosses: team.allPlayRecord.losses,
          allPlayTies: team.allPlayRecord.ties,
          weeklyRank: team.weeklyRank,
        },
        create: {
          leagueId,
          memberId: team.memberId,
          season,
          week,
          actualScore: team.actualScore,
          optimalScore: team.optimalScore,
          lineupEfficiency: team.lineupEfficiency,
          allPlayWins: team.allPlayRecord.wins,
          allPlayLosses: team.allPlayRecord.losses,
          allPlayTies: team.allPlayRecord.ties,
          weeklyRank: team.weeklyRank,
        },
      });
    }

    return {
      leagueId,
      leagueName: league.name,
      season,
      week,
      teams,
      superlatives,
    };
  }

  async generateSeasonReport(
    leagueId: string,
    season: number,
    throughWeek: number
  ): Promise<SeasonReportCard> {
    const league = await prisma.league.findUnique({ where: { id: leagueId } });
    if (!league) throw new Error(`League not found: ${leagueId}`);

    // Run independent calculations in parallel
    const [members, allPlayTotals, luckResults] = await Promise.all([
      prisma.leagueMember.findMany({ where: { leagueId } }),
      calculateSeasonAllPlay(leagueId, season, throughWeek),
      calculateLuckIndex(leagueId, season, throughWeek),
    ]);

    // Get all weekly analytics for lineup efficiency calculation
    const weeklyAnalytics = await prisma.teamWeeklyAnalytics.findMany({
      where: { leagueId, season, week: { lte: throughWeek } },
    });

    const teams: SeasonTeamReport[] = [];

    for (const member of members) {
      const allPlay = allPlayTotals.get(member.id) || { wins: 0, losses: 0, ties: 0 };
      const luck = luckResults.find(l => l.memberId === member.id);
      const memberWeekly = weeklyAnalytics.filter(w => w.memberId === member.id);

      const totalAllPlay = allPlay.wins + allPlay.losses + allPlay.ties;
      const allPlayWinPct = totalAllPlay > 0 ? allPlay.wins / totalAllPlay : 0;

      const avgEfficiency =
        memberWeekly.length > 0
          ? memberWeekly.reduce((sum, w) => sum + Number(w.lineupEfficiency), 0) /
            memberWeekly.length
          : 100;

      const totalPoints = memberWeekly.reduce((sum, w) => sum + Number(w.actualScore), 0);

      teams.push({
        memberId: member.id,
        teamName: member.teamName || 'Unknown',
        record: { wins: member.wins, losses: member.losses, ties: member.ties },
        totalPoints,
        allPlayRecord: allPlay,
        allPlayWinPct: Math.round(allPlayWinPct * 10000) / 10000,
        avgLineupEfficiency: Math.round(avgEfficiency * 100) / 100,
        luckIndex: luck?.luckIndex || 0,
        powerRank: 0, // Will be set after calculation
      });
    }

    // Calculate power rank based on all-play win percentage
    teams.sort((a, b) => b.allPlayWinPct - a.allPlayWinPct);
    teams.forEach((t, i) => (t.powerRank = i + 1));

    // Store season analytics
    for (const team of teams) {
      const memberWeekly = weeklyAnalytics.filter(w => w.memberId === team.memberId);
      const scores = memberWeekly.map(w => Number(w.actualScore));
      const pointsStdDev = standardDeviation(scores);
      const totalOptimal = memberWeekly.reduce((sum, w) => sum + Number(w.optimalScore), 0);

      // Calculate expected wins from all-play percentage
      const weeksPlayed = memberWeekly.length;
      const expectedWins = team.allPlayWinPct * weeksPlayed;

      await prisma.teamSeasonAnalytics.upsert({
        where: { memberId_season: { memberId: team.memberId, season } },
        update: {
          totalActualScore: team.totalPoints,
          totalOptimalScore: totalOptimal,
          avgLineupEfficiency: team.avgLineupEfficiency,
          allPlayWins: team.allPlayRecord.wins,
          allPlayLosses: team.allPlayRecord.losses,
          allPlayTies: team.allPlayRecord.ties,
          allPlayWinPct: team.allPlayWinPct,
          expectedWins,
          actualWins: team.record.wins,
          luckIndex: team.luckIndex,
          pointsStdDev,
        },
        create: {
          leagueId,
          memberId: team.memberId,
          season,
          totalActualScore: team.totalPoints,
          totalOptimalScore: totalOptimal,
          avgLineupEfficiency: team.avgLineupEfficiency,
          allPlayWins: team.allPlayRecord.wins,
          allPlayLosses: team.allPlayRecord.losses,
          allPlayTies: team.allPlayRecord.ties,
          allPlayWinPct: team.allPlayWinPct,
          expectedWins,
          actualWins: team.record.wins,
          luckIndex: team.luckIndex,
          pointsStdDev,
        },
      });
    }

    const superlatives = await calculateSeasonSuperlatives(leagueId, season);

    return {
      leagueId,
      leagueName: league.name,
      season,
      throughWeek,
      teams,
      superlatives,
    };
  }
}
