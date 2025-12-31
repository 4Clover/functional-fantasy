import { prisma } from '@fantasy/database';
import { CacheService, CachedKTCClient, ktcClient, nflverseMapper } from '@fantasy/api-client';

export async function handleKtcScrape(): Promise<void> {
  console.log('Starting KTC scrape job...');

  const cache = new CacheService(process.env.REDIS_URL!);
  const ktc = new CachedKTCClient(ktcClient, cache);

  try {
    // Load player mappings
    await nflverseMapper.loadMappings();

    // Scrape both dynasty and redraft
    const [dynastyData, redraftData] = await Promise.all([
      ktc.refreshValues('dynasty'),
      ktc.refreshValues('redraft'),
    ]);

    console.log(`Scraped ${dynastyData.players.length} dynasty values`);
    console.log(`Scraped ${redraftData.players.length} redraft values`);

    // Update player valuations in database
    for (const ktcPlayer of dynastyData.players) {
      const mapping = nflverseMapper.findByName(ktcPlayer.playerName);
      if (!mapping?.sleeper_id) continue;

      const player = await prisma.player.findUnique({
        where: { sleeperId: mapping.sleeper_id },
      });

      if (!player) continue;

      // Get previous value for trend calculation
      const previous = await prisma.playerValuation.findUnique({
        where: { playerId_source: { playerId: player.id, source: 'KTC_DYNASTY' } },
      });

      const weeklyDelta = previous ? ktcPlayer.value - previous.baseValue : 0;
      const trend =
        weeklyDelta > 50 ? 'RISING' : weeklyDelta < -50 ? 'FALLING' : ('STABLE' as const);

      await prisma.playerValuation.upsert({
        where: { playerId_source: { playerId: player.id, source: 'KTC_DYNASTY' } },
        update: {
          baseValue: ktcPlayer.value,
          scrapedAt: dynastyData.scrapedAt,
          trend,
          weeklyDelta,
          tier: ktcPlayer.tier ?? null,
        },
        create: {
          playerId: player.id,
          source: 'KTC_DYNASTY',
          baseValue: ktcPlayer.value,
          scrapedAt: dynastyData.scrapedAt,
          trend,
          weeklyDelta,
          tier: ktcPlayer.tier ?? null,
        },
      });

      // Store history
      await prisma.valuationHistory.create({
        data: {
          playerId: player.id,
          source: 'KTC_DYNASTY',
          value: ktcPlayer.value,
          recordedAt: dynastyData.scrapedAt,
        },
      });
    }

    // Similarly for redraft
    for (const ktcPlayer of redraftData.players) {
      const mapping = nflverseMapper.findByName(ktcPlayer.playerName);
      if (!mapping?.sleeper_id) continue;

      const player = await prisma.player.findUnique({
        where: { sleeperId: mapping.sleeper_id },
      });

      if (!player) continue;

      const previous = await prisma.playerValuation.findUnique({
        where: { playerId_source: { playerId: player.id, source: 'KTC_REDRAFT' } },
      });

      const weeklyDelta = previous ? ktcPlayer.value - previous.baseValue : 0;
      const trend =
        weeklyDelta > 50 ? 'RISING' : weeklyDelta < -50 ? 'FALLING' : ('STABLE' as const);

      await prisma.playerValuation.upsert({
        where: { playerId_source: { playerId: player.id, source: 'KTC_REDRAFT' } },
        update: {
          baseValue: ktcPlayer.value,
          scrapedAt: redraftData.scrapedAt,
          trend,
          weeklyDelta,
          tier: ktcPlayer.tier ?? null,
        },
        create: {
          playerId: player.id,
          source: 'KTC_REDRAFT',
          baseValue: ktcPlayer.value,
          scrapedAt: redraftData.scrapedAt,
          trend,
          weeklyDelta,
          tier: ktcPlayer.tier ?? null,
        },
      });
    }

    console.log('KTC scrape job completed');
  } finally {
    await cache.disconnect();
  }
}
