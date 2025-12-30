import axios, { type AxiosInstance, type AxiosError } from 'axios';
import { z } from 'zod';
import {
  SleeperUserSchema,
  SleeperLeagueSchema,
  SleeperRosterSchema,
  SleeperMatchupSchema,
  SleeperTransactionSchema,
  SleeperPlayerSchema,
  SleeperNFLStateSchema,
  type SleeperUser,
  type SleeperLeague,
  type SleeperRoster,
  type SleeperMatchup,
  type SleeperTransaction,
  type SleeperPlayer,
  type SleeperNFLState,
} from '@fantasy/types';

export class SleeperAPIError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public endpoint?: string
  ) {
    super(message);
    this.name = 'SleeperAPIError';
  }
}

export class SleeperClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: 'https://api.sleeper.app/v1',
      timeout: 10000,
      headers: { 'Content-Type': 'application/json' },
    });

    this.client.interceptors.response.use(
      response => response,
      (error: AxiosError) => {
        const message = error.response?.data ? JSON.stringify(error.response.data) : error.message;
        throw new SleeperAPIError(message, error.response?.status, error.config?.url);
      }
    );
  }

  async getUser(usernameOrId: string): Promise<SleeperUser> {
    const { data } = await this.client.get(`/user/${usernameOrId}`);
    return SleeperUserSchema.parse(data);
  }

  async getUserLeagues(userId: string, season: string): Promise<SleeperLeague[]> {
    const { data } = await this.client.get(`/user/${userId}/leagues/nfl/${season}`);
    return z.array(SleeperLeagueSchema).parse(data);
  }

  async getLeague(leagueId: string): Promise<SleeperLeague> {
    const { data } = await this.client.get(`/league/${leagueId}`);
    return SleeperLeagueSchema.parse(data);
  }

  async getLeagueRosters(leagueId: string): Promise<SleeperRoster[]> {
    const { data } = await this.client.get(`/league/${leagueId}/rosters`);
    return z.array(SleeperRosterSchema).parse(data);
  }

  async getLeagueUsers(leagueId: string): Promise<SleeperUser[]> {
    const { data } = await this.client.get(`/league/${leagueId}/users`);
    return z.array(SleeperUserSchema).parse(data);
  }

  async getLeagueMatchups(leagueId: string, week: number): Promise<SleeperMatchup[]> {
    const { data } = await this.client.get(`/league/${leagueId}/matchups/${week}`);
    return z.array(SleeperMatchupSchema).parse(data);
  }

  async getLeagueTransactions(leagueId: string, week: number): Promise<SleeperTransaction[]> {
    const { data } = await this.client.get(`/league/${leagueId}/transactions/${week}`);
    return z.array(SleeperTransactionSchema).parse(data);
  }

  async getAllPlayers(): Promise<Record<string, SleeperPlayer>> {
    const { data } = await this.client.get('/players/nfl');
    return z.record(SleeperPlayerSchema).parse(data);
  }

  async getNFLState(): Promise<SleeperNFLState> {
    const { data } = await this.client.get('/state/nfl');
    return SleeperNFLStateSchema.parse(data);
  }
}

export const sleeperClient = new SleeperClient();
