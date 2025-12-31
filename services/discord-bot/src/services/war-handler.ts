import { prisma } from '@fantasy/database';
import { WARCalculator } from '@fantasy/analytics';

export async function handleWarCalculation(): Promise<void> {
  console.log('Starting WAR calculation job...');

  const currentYear = new Date().getFullYear();
  const calculator = new WARCalculator(10_000);

  // Get all leagues
  const leagues = await prisma.league.findMany({
    where: { season: currentYear },
    include: {
      members: {
        include: {
          rosters: {
            where: { season: currentYear },
            include: {
              players: {
                include: {
                  player: true,
                },
              },
            },
          },
        },
      },
    },
  });

  for (const league of leagues) {
    console.log(`Calculating WAR for league: ${league.name}`);

    // Get all player IDs in the league
    const playerIds = new Set<string>();
    for (const member of league.members) {
      for (const roster of member.rosters) {
        for (const rp of roster.players) {
          playerIds.add(rp.player.id);
        }
      }
    }

    // Calculate WAR for each player
    for (const playerId of playerIds) {
      try {
        const result = await calculator.calculatePlayerWAR(playerId, league.id, currentYear);

        if (result) {
          // Update the player's season stats with WAR
          await prisma.playerSeasonStats.updateMany({
            where: { playerId, season: currentYear },
            data: { war: result.war },
          });
        }
      } catch (error) {
        console.error(`Failed to calculate WAR for player ${playerId}:`, error);
      }
    }

    console.log(`Completed WAR calculations for ${playerIds.size} players in ${league.name}`);
  }

  console.log('WAR calculation job completed');
}
