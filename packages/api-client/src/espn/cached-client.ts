import { ESPNFantasyClient } from './client.js';
import { CacheService } from '../cache/redis.js';
import type { ESPNLeague, ESPNTeam, ESPNBoxscore } from '@fantasy/types';

const TTL = {
  LEAGUE: 5 * 60, // 5 minutes
  TEAMS: 2 * 60, // 2 minutes
  BOXSCORE: 30, // 30 seconds (live scoring)
  FREE_AGENTS: 60, // 1 minute
} as const;

export class CachedESPNClient {
  constructor(
    private client: ESPNFantasyClient,
    private cache: CacheService,
    private leagueId: number
  ) {}

  async getLeagueInfo(seasonId: number): Promise<ESPNLeague> {
    const cacheKey = `${this.leagueId}:${seasonId}`;
    const cached = await this.cache.get<ESPNLeague>('espn:league', cacheKey);
    if (cached) return cached;

    const league = await this.client.getLeagueInfo(seasonId);
    await this.cache.set('espn:league', cacheKey, league, TTL.LEAGUE);
    return league;
  }

  async getTeams(seasonId: number, scoringPeriodId: number = 1): Promise<ESPNTeam[]> {
    const cacheKey = `${this.leagueId}:${seasonId}:${scoringPeriodId}`;
    const cached = await this.cache.get<ESPNTeam[]>('espn:teams', cacheKey);
    if (cached) return cached;

    const teams = await this.client.getTeams(seasonId, scoringPeriodId);
    await this.cache.set('espn:teams', cacheKey, teams, TTL.TEAMS);
    return teams;
  }

  async getBoxscoreForWeek(
    seasonId: number,
    matchupPeriodId: number,
    scoringPeriodId: number
  ): Promise<ESPNBoxscore[]> {
    const cacheKey = `${this.leagueId}:${seasonId}:${matchupPeriodId}:${scoringPeriodId}`;
    const cached = await this.cache.get<ESPNBoxscore[]>('espn:boxscore', cacheKey);
    if (cached) return cached;

    const boxscores = await this.client.getBoxscoreForWeek(
      seasonId,
      matchupPeriodId,
      scoringPeriodId
    );
    await this.cache.set('espn:boxscore', cacheKey, boxscores, TTL.BOXSCORE);
    return boxscores;
  }
}
