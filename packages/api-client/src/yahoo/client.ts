import axios, { type AxiosInstance, type AxiosError } from 'axios';
import { z } from 'zod';
import {
  YahooLeagueSchema,
  YahooTeamSchema,
  YahooRosterSchema,
  YahooTransactionSchema,
  YahooPlayerSchema,
  type YahooLeague,
  type YahooTeam,
  type YahooRoster,
  type YahooTransaction,
  type YahooPlayer,
} from '@fantasy/types';

export class YahooAPIError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public endpoint?: string
  ) {
    super(message);
    this.name = 'YahooAPIError';
  }
}

export class YahooClient {
  private client: AxiosInstance;

  constructor(private accessToken: string) {
    this.client = axios.create({
      baseURL: 'https://fantasysports.yahooapis.com/fantasy/v2',
      timeout: 15000,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      params: { format: 'json' },
    });

    this.client.interceptors.response.use(
      response => response,
      (error: AxiosError) => {
        const message = error.response?.data ? JSON.stringify(error.response.data) : error.message;
        throw new YahooAPIError(message, error.response?.status, error.config?.url);
      }
    );
  }

  setAccessToken(token: string) {
    this.accessToken = token;
    this.client.defaults.headers.Authorization = `Bearer ${token}`;
  }

  async getUserTeams(gameKey: string = 'nfl'): Promise<YahooTeam[]> {
    const { data } = await this.client.get(`/users;use_login=1/games;game_keys=${gameKey}/teams`);
    return z.array(YahooTeamSchema).parse(this.extractTeams(data));
  }

  async getLeague(leagueKey: string): Promise<YahooLeague> {
    const { data } = await this.client.get(`/league/${leagueKey}`);
    return YahooLeagueSchema.parse(this.extractLeague(data));
  }

  async getLeagueStandings(leagueKey: string): Promise<YahooTeam[]> {
    const { data } = await this.client.get(`/league/${leagueKey}/standings`);
    return z.array(YahooTeamSchema).parse(this.extractStandings(data));
  }

  async getTeamRoster(teamKey: string, week?: number): Promise<YahooRoster> {
    const url = week ? `/team/${teamKey}/roster;week=${week}` : `/team/${teamKey}/roster`;
    const { data } = await this.client.get(url);
    return YahooRosterSchema.parse(this.extractRoster(data));
  }

  async getLeagueTransactions(leagueKey: string): Promise<YahooTransaction[]> {
    const { data } = await this.client.get(`/league/${leagueKey}/transactions`);
    return z.array(YahooTransactionSchema).parse(this.extractTransactions(data));
  }

  async getPlayer(playerKey: string): Promise<YahooPlayer> {
    const { data } = await this.client.get(`/player/${playerKey}`);
    return YahooPlayerSchema.parse(this.extractPlayer(data));
  }

  /* eslint-disable @typescript-eslint/no-explicit-any */
  // Yahoo API returns deeply nested structures with mixed array/object access patterns
  // Using 'any' is necessary here as the Yahoo API response format is dynamic
  private extractTeams(data: unknown): unknown[] {
    const content = (data as Record<string, unknown>)?.fantasy_content as Record<string, any>;
    return content?.users?.[0]?.user?.[1]?.games?.[0]?.game?.[1]?.teams || [];
  }

  private extractLeague(data: unknown): unknown {
    const content = (data as Record<string, unknown>)?.fantasy_content as Record<string, any>;
    return content?.league?.[0] || {};
  }

  private extractStandings(data: unknown): unknown[] {
    const content = (data as Record<string, unknown>)?.fantasy_content as Record<string, any>;
    return content?.league?.[1]?.standings?.[0]?.teams || [];
  }

  private extractRoster(data: unknown): unknown {
    const content = (data as Record<string, unknown>)?.fantasy_content as Record<string, any>;
    return content?.team?.[1]?.roster || {};
  }

  private extractTransactions(data: unknown): unknown[] {
    const content = (data as Record<string, unknown>)?.fantasy_content as Record<string, any>;
    return content?.league?.[1]?.transactions || [];
  }

  private extractPlayer(data: unknown): unknown {
    const content = (data as Record<string, unknown>)?.fantasy_content as Record<string, any>;
    return content?.player?.[0] || {};
  }
  /* eslint-enable @typescript-eslint/no-explicit-any */
}
