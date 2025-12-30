import { YahooClient } from './client.js';
import { CacheService } from '../cache/redis.js';
import type { YahooLeague, YahooTeam, YahooRoster } from '@fantasy/types';

const TTL = {
  LEAGUE: 5 * 60, // 5 minutes
  STANDINGS: 2 * 60, // 2 minutes
  ROSTER: 60, // 1 minute
  TRANSACTIONS: 30, // 30 seconds
} as const;

export class CachedYahooClient {
  constructor(
    private client: YahooClient,
    private cache: CacheService
  ) {}

  async getLeague(leagueKey: string): Promise<YahooLeague> {
    const cached = await this.cache.get<YahooLeague>('yahoo:league', leagueKey);
    if (cached) return cached;

    const league = await this.client.getLeague(leagueKey);
    await this.cache.set('yahoo:league', leagueKey, league, TTL.LEAGUE);
    return league;
  }

  async getLeagueStandings(leagueKey: string): Promise<YahooTeam[]> {
    const cached = await this.cache.get<YahooTeam[]>('yahoo:standings', leagueKey);
    if (cached) return cached;

    const standings = await this.client.getLeagueStandings(leagueKey);
    await this.cache.set('yahoo:standings', leagueKey, standings, TTL.STANDINGS);
    return standings;
  }

  async getTeamRoster(teamKey: string, week?: number): Promise<YahooRoster> {
    const cacheKey = week ? `${teamKey}:${week}` : teamKey;
    const cached = await this.cache.get<YahooRoster>('yahoo:roster', cacheKey);
    if (cached) return cached;

    const roster = await this.client.getTeamRoster(teamKey, week);
    await this.cache.set('yahoo:roster', cacheKey, roster, TTL.ROSTER);
    return roster;
  }
}
