import { prisma, type Position } from '@fantasy/database';
import { STRICT_BASELINES, WAIVER_BASELINES, scaleBaseline } from '@fantasy/analytics';

export async function handleVorpUpdate(): Promise<void> {
  console.log('Starting VORP update job...');

  const currentYear = new Date().getFullYear();
  const positions: Position[] = ['QB', 'RB', 'WR', 'TE'];
  const teamCounts = [10, 12, 14];

  // Update position baselines for each league size
  for (const teamCount of teamCounts) {
    for (const position of positions) {
      const strictRank = scaleBaseline(STRICT_BASELINES[position], teamCount);
      const waiverRank = scaleBaseline(WAIVER_BASELINES[position], teamCount);

      // Get baseline player values from season stats
      const baselineStats = await prisma.playerSeasonStats.findMany({
        where: {
          season: currentYear,
          player: { position },
        },
        orderBy: { avgPoints: 'desc' },
        skip: strictRank - 1,
        take: 1,
      });

      const strictStat = baselineStats[0];
      const strictValue = strictStat ? Number(strictStat.avgPoints) : 0;

      const waiverStats = await prisma.playerSeasonStats.findMany({
        where: {
          season: currentYear,
          player: { position },
        },
        orderBy: { avgPoints: 'desc' },
        skip: waiverRank - 1,
        take: 1,
      });

      const waiverStat = waiverStats[0];
      const waiverValue = waiverStat ? Number(waiverStat.avgPoints) : 0;

      // Upsert baselines
      await prisma.positionBaseline.upsert({
        where: {
          season_position_baselineType_teamCount: {
            season: currentYear,
            position,
            baselineType: 'STRICT',
            teamCount,
          },
        },
        update: { baselineValue: strictValue, baselineRank: strictRank },
        create: {
          season: currentYear,
          position,
          baselineType: 'STRICT',
          teamCount,
          baselineRank: strictRank,
          baselineValue: strictValue,
        },
      });

      await prisma.positionBaseline.upsert({
        where: {
          season_position_baselineType_teamCount: {
            season: currentYear,
            position,
            baselineType: 'WAIVER',
            teamCount,
          },
        },
        update: { baselineValue: waiverValue, baselineRank: waiverRank },
        create: {
          season: currentYear,
          position,
          baselineType: 'WAIVER',
          teamCount,
          baselineRank: waiverRank,
          baselineValue: waiverValue,
        },
      });
    }
  }

  // Fetch all baselines once for O(1) lookup
  const baselines = await prisma.positionBaseline.findMany({
    where: { season: currentYear, teamCount: 12 },
  });

  const baselineMap = new Map<string, number>();
  for (const b of baselines) {
    baselineMap.set(`${b.position}_${b.baselineType}`, Number(b.baselineValue));
  }

  // Calculate VORP for all players with season stats
  const allStats = await prisma.playerSeasonStats.findMany({
    where: { season: currentYear },
    include: { player: true },
  });

  // Prepare batch updates
  const updates: { id: string; vorpStrict: number | null; vorpWaiver: number | null }[] = [];

  for (const stats of allStats) {
    const position = stats.player.position;
    if (!positions.includes(position)) continue;

    const strictValue = baselineMap.get(`${position}_STRICT`);
    const waiverValue = baselineMap.get(`${position}_WAIVER`);

    const vorpStrict = strictValue !== undefined ? Number(stats.avgPoints) - strictValue : null;
    const vorpWaiver = waiverValue !== undefined ? Number(stats.avgPoints) - waiverValue : null;

    updates.push({ id: stats.id, vorpStrict, vorpWaiver });
  }

  // Batch updates in chunks of 50
  const BATCH_SIZE = 50;
  for (let i = 0; i < updates.length; i += BATCH_SIZE) {
    const chunk = updates.slice(i, i + BATCH_SIZE);
    await Promise.all(
      chunk.map(u =>
        prisma.playerSeasonStats.update({
          where: { id: u.id },
          data: { vorpStrict: u.vorpStrict, vorpWaiver: u.vorpWaiver },
        })
      )
    );
  }

  console.log(`Updated VORP for ${allStats.length} players`);
  console.log('VORP update job completed');
}
