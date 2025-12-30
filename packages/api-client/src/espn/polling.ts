import { ESPNFantasyClient } from './client.js';
import type { ESPNBoxscore } from '@fantasy/types';

export type ESPNScoreUpdateHandler = (
  boxscores: ESPNBoxscore[],
  leagueId: number,
  week: number
) => Promise<void>;

export interface ESPNLeagueConfig {
  leagueId: number;
  seasonId: number;
  week: number;
}

export class ESPNScorePoller {
  private intervalId: NodeJS.Timeout | null = null;
  private lastScores = new Map<string, Map<number, number>>();

  constructor(
    private clientFactory: (leagueId: number) => ESPNFantasyClient,
    private handler: ESPNScoreUpdateHandler,
    private pollIntervalMs: number = 30_000
  ) {}

  async start(leagues: ESPNLeagueConfig[]): Promise<void> {
    if (this.intervalId) throw new Error('Poller already running');

    this.intervalId = setInterval(() => {
      void this.pollAllLeagues(leagues);
    }, this.pollIntervalMs);

    // Initial poll
    await this.pollAllLeagues(leagues);
  }

  stop(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  private async pollAllLeagues(leagues: ESPNLeagueConfig[]): Promise<void> {
    for (const league of leagues) {
      await this.pollLeague(league);
    }
  }

  private async pollLeague(config: ESPNLeagueConfig): Promise<void> {
    try {
      const client = this.clientFactory(config.leagueId);
      const boxscores = await client.getBoxscoreForWeek(config.seasonId, config.week, config.week);

      if (this.hasScoreChanges(config.leagueId, boxscores)) {
        await this.handler(boxscores, config.leagueId, config.week);
      }
    } catch (error) {
      console.error(`ESPN polling error for league ${config.leagueId}:`, error);
    }
  }

  private hasScoreChanges(leagueId: number, boxscores: ESPNBoxscore[]): boolean {
    const key = String(leagueId);
    const lastScoreMap = this.lastScores.get(key) || new Map();
    let changed = false;

    for (const box of boxscores) {
      if (
        lastScoreMap.get(box.homeTeamId) !== box.homeScore ||
        lastScoreMap.get(box.awayTeamId) !== box.awayScore
      ) {
        changed = true;
      }
      lastScoreMap.set(box.homeTeamId, box.homeScore);
      lastScoreMap.set(box.awayTeamId, box.awayScore);
    }

    this.lastScores.set(key, lastScoreMap);
    return changed && lastScoreMap.size > 0;
  }
}
