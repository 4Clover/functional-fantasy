import axios, { type AxiosInstance, type AxiosError } from 'axios';
import { z } from 'zod';
import {
  ESPNLeagueSchema,
  ESPNTeamSchema,
  ESPNBoxscoreSchema,
  ESPNPlayerSchema,
  type ESPNLeague,
  type ESPNTeam,
  type ESPNBoxscore,
  type ESPNPlayer,
} from '@fantasy/types';

export class ESPNAPIError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public endpoint?: string
  ) {
    super(message);
    this.name = 'ESPNAPIError';
  }
}

export interface ESPNCredentials {
  espnS2: string;
  SWID: string;
}

export class ESPNFantasyClient {
  private client: AxiosInstance;

  constructor(
    private leagueId: number,
    credentials?: ESPNCredentials
  ) {
    this.client = axios.create({
      baseURL: 'https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl',
      timeout: 15000,
      headers: { 'Content-Type': 'application/json' },
    });

    if (credentials) {
      this.setCookies(credentials);
    }

    this.client.interceptors.response.use(
      response => response,
      (error: AxiosError) => {
        const message = error.response?.data ? JSON.stringify(error.response.data) : error.message;
        throw new ESPNAPIError(message, error.response?.status, error.config?.url);
      }
    );
  }

  setCookies(credentials: ESPNCredentials) {
    this.client.defaults.headers.Cookie = `espn_s2=${credentials.espnS2}; SWID=${credentials.SWID}`;
  }

  setLeagueId(leagueId: number) {
    this.leagueId = leagueId;
  }

  async getLeagueInfo(seasonId: number): Promise<ESPNLeague> {
    try {
      const { data } = await this.client.get(
        `/seasons/${seasonId}/segments/0/leagues/${this.leagueId}`,
        {
          params: { view: 'mSettings' },
        }
      );
      return ESPNLeagueSchema.parse(this.transformLeague(data));
    } catch (error) {
      throw new ESPNAPIError(
        error instanceof Error ? error.message : 'Failed to get league info',
        undefined,
        `league/${this.leagueId}`
      );
    }
  }

  async getTeams(seasonId: number, scoringPeriodId: number = 1): Promise<ESPNTeam[]> {
    try {
      const { data } = await this.client.get(
        `/seasons/${seasonId}/segments/0/leagues/${this.leagueId}`,
        {
          params: { view: 'mTeam', scoringPeriodId },
        }
      );
      return z.array(ESPNTeamSchema).parse(this.transformTeams(data.teams || []));
    } catch (error) {
      throw new ESPNAPIError(
        error instanceof Error ? error.message : 'Failed to get teams',
        undefined,
        `league/${this.leagueId}/teams`
      );
    }
  }

  async getBoxscoreForWeek(
    seasonId: number,
    matchupPeriodId: number,
    scoringPeriodId: number
  ): Promise<ESPNBoxscore[]> {
    try {
      const { data } = await this.client.get(
        `/seasons/${seasonId}/segments/0/leagues/${this.leagueId}`,
        {
          params: { view: 'mMatchup', scoringPeriodId, matchupPeriodId },
        }
      );
      return z.array(ESPNBoxscoreSchema).parse(this.transformBoxscores(data.schedule || []));
    } catch (error) {
      throw new ESPNAPIError(
        error instanceof Error ? error.message : 'Failed to get boxscore',
        undefined,
        `league/${this.leagueId}/boxscore`
      );
    }
  }

  async getFreeAgents(seasonId: number, scoringPeriodId: number): Promise<ESPNPlayer[]> {
    try {
      const { data } = await this.client.get(
        `/seasons/${seasonId}/segments/0/leagues/${this.leagueId}`,
        {
          params: { view: 'kona_player_info', scoringPeriodId },
        }
      );
      return z.array(ESPNPlayerSchema).parse(this.transformPlayers(data.players || []));
    } catch (error) {
      throw new ESPNAPIError(
        error instanceof Error ? error.message : 'Failed to get free agents',
        undefined,
        `league/${this.leagueId}/freeagents`
      );
    }
  }

  private transformLeague(data: Record<string, unknown>): Record<string, unknown> {
    const settings = data.settings as Record<string, unknown> | undefined;
    return {
      id: data.id,
      name: settings?.name || '',
      size: settings?.size || 0,
      isPublic: data.isPublic ?? false,
      scoringPeriodId: data.scoringPeriodId || 0,
      firstScoringPeriod:
        (settings?.scheduleSettings as Record<string, unknown>)?.firstScoringPeriod || 1,
      finalScoringPeriod:
        (settings?.scheduleSettings as Record<string, unknown>)?.finalScoringPeriod || 17,
      currentMatchupPeriod: data.matchupPeriodId || 0,
      seasonId: data.seasonId || 0,
    };
  }

  private transformTeams(teams: Record<string, unknown>[]): Record<string, unknown>[] {
    return teams.map(team => {
      const record = team.record as Record<string, unknown> | undefined;
      const overall = record?.overall as Record<string, unknown> | undefined;
      return {
        id: team.id,
        name: team.name || team.nickname || '',
        abbreviation: team.abbrev || '',
        logoUrl: team.logo || null,
        wins: overall?.wins,
        losses: overall?.losses,
        ties: overall?.ties,
        pointsFor: overall?.pointsFor,
        pointsAgainst: overall?.pointsAgainst,
        playoffSeed: team.playoffSeed,
        finalStandingsPosition: team.rankCalculatedFinal,
      };
    });
  }

  private transformBoxscores(schedule: Record<string, unknown>[]): Record<string, unknown>[] {
    return schedule.map(matchup => ({
      homeTeamId: (matchup.home as Record<string, unknown>)?.teamId || 0,
      awayTeamId: (matchup.away as Record<string, unknown>)?.teamId || 0,
      homeScore: (matchup.home as Record<string, unknown>)?.totalPoints || 0,
      awayScore: (matchup.away as Record<string, unknown>)?.totalPoints || 0,
      homeProjectedScore: (matchup.home as Record<string, unknown>)?.totalProjectedPointsLive,
      awayProjectedScore: (matchup.away as Record<string, unknown>)?.totalProjectedPointsLive,
    }));
  }

  private transformPlayers(players: Record<string, unknown>[]): Record<string, unknown>[] {
    return players.map(entry => {
      const player = entry.player as Record<string, unknown>;
      return {
        id: player?.id,
        firstName: player?.firstName,
        lastName: player?.lastName,
        fullName: player?.fullName,
        proTeamId: player?.proTeamId,
        defaultPositionId: player?.defaultPositionId,
        injured: player?.injured,
        injuryStatus: player?.injuryStatus,
        percentOwned: (entry.ownership as Record<string, unknown>)?.percentOwned,
        percentStarted: (entry.ownership as Record<string, unknown>)?.percentStarted,
      };
    });
  }
}

export function createESPNClient(
  leagueId: number,
  espnS2?: string,
  swid?: string
): ESPNFantasyClient {
  const credentials = espnS2 && swid ? { espnS2, SWID: swid } : undefined;
  return new ESPNFantasyClient(leagueId, credentials);
}
