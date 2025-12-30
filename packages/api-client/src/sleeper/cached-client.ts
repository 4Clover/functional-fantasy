import { SleeperClient, sleeperClient } from './client.js';
import { CacheService } from '../cache/redis.js';
import type { SleeperPlayer, SleeperLeague, SleeperRoster } from '@fantasy/types';

const TTL = {
  PLAYERS: 24 * 60 * 60, // 24 hours
  LEAGUE: 5 * 60, // 5 minutes
  ROSTERS: 60, // 1 minute
  MATCHUPS: 30, // 30 seconds
  NFL_STATE: 5 * 60, // 5 minutes
} as const;

export class CachedSleeperClient {
  constructor(
    private client: SleeperClient = sleeperClient,
    private cache: CacheService
  ) {}

  async getAllPlayers(): Promise<Record<string, SleeperPlayer>> {
    const cached = await this.cache.get<Record<string, SleeperPlayer>>('sleeper:players', 'all');
    if (cached) return cached;

    const players = await this.client.getAllPlayers();
    await this.cache.set('sleeper:players', 'all', players, TTL.PLAYERS);
    return players;
  }

  async getLeague(leagueId: string): Promise<SleeperLeague> {
    const cached = await this.cache.get<SleeperLeague>('sleeper:league', leagueId);
    if (cached) return cached;

    const league = await this.client.getLeague(leagueId);
    await this.cache.set('sleeper:league', leagueId, league, TTL.LEAGUE);
    return league;
  }

  async getLeagueRosters(leagueId: string): Promise<SleeperRoster[]> {
    const cached = await this.cache.get<SleeperRoster[]>('sleeper:rosters', leagueId);
    if (cached) return cached;

    const rosters = await this.client.getLeagueRosters(leagueId);
    await this.cache.set('sleeper:rosters', leagueId, rosters, TTL.ROSTERS);
    return rosters;
  }

  async refreshPlayers(): Promise<Record<string, SleeperPlayer>> {
    await this.cache.delete('sleeper:players', 'all');
    return this.getAllPlayers();
  }
}
