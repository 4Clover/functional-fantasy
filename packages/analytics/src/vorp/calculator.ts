import { prisma, type Position, type BaselineType } from '@fantasy/database';

export interface VORPResult {
  playerId: string;
  position: Position;
  projectedPoints: number;
  vorpStrict: number;
  vorpWaiver: number;
}

export class VORPCalculator {
  constructor(private teamCount: number = 12) {}

  async calculatePlayerVORP(playerId: string, season: number): Promise<VORPResult | null> {
    const stats = await prisma.playerSeasonStats.findUnique({
      where: { playerId_season: { playerId, season } },
      include: { player: true },
    });

    if (!stats) return null;

    const position = stats.player.position;
    const projectedPoints = Number(stats.avgPoints);

    const strictBaseline = await this.getBaselineValue(season, position, 'STRICT');
    const waiverBaseline = await this.getBaselineValue(season, position, 'WAIVER');

    return {
      playerId,
      position,
      projectedPoints,
      vorpStrict: projectedPoints - strictBaseline,
      vorpWaiver: projectedPoints - waiverBaseline,
    };
  }

  async calculatePositionVORP(
    season: number,
    position: Position,
    limit: number = 50
  ): Promise<VORPResult[]> {
    const stats = await prisma.playerSeasonStats.findMany({
      where: {
        season,
        player: { position },
      },
      include: { player: true },
      orderBy: { avgPoints: 'desc' },
      take: limit,
    });

    const strictBaseline = await this.getBaselineValue(season, position, 'STRICT');
    const waiverBaseline = await this.getBaselineValue(season, position, 'WAIVER');

    return stats.map(stat => ({
      playerId: stat.playerId,
      position,
      projectedPoints: Number(stat.avgPoints),
      vorpStrict: Number(stat.avgPoints) - strictBaseline,
      vorpWaiver: Number(stat.avgPoints) - waiverBaseline,
    }));
  }

  private async getBaselineValue(
    season: number,
    position: Position,
    type: BaselineType
  ): Promise<number> {
    const baseline = await prisma.positionBaseline.findUnique({
      where: {
        season_position_baselineType_teamCount: {
          season,
          position,
          baselineType: type,
          teamCount: this.teamCount,
        },
      },
    });
    return baseline ? Number(baseline.baselineValue) : 0;
  }
}
