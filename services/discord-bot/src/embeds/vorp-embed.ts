import { EmbedBuilder } from 'discord.js';
import type { VORPResult } from '@fantasy/analytics';

interface VORPEmbedData {
  position: string;
  season: number;
  players: Array<VORPResult & { playerName: string }>;
  limit: number;
}

export function buildVORPEmbed(data: VORPEmbedData): EmbedBuilder {
  const embed = new EmbedBuilder()
    .setColor(0x9b59b6)
    .setTitle(`${data.position} VORP Leaderboard`)
    .setDescription(`${data.season} Season - Top ${data.limit}`)
    .setTimestamp();

  const leaderboard = data.players
    .slice(0, data.limit)
    .map((p, i) => {
      const vorpDisplay =
        p.vorpStrict >= 0 ? `+${p.vorpStrict.toFixed(1)}` : p.vorpStrict.toFixed(1);
      return `**${i + 1}.** ${p.playerName}\n${p.projectedPoints.toFixed(1)} PPG | VORP: ${vorpDisplay}`;
    })
    .join('\n\n');

  embed.setDescription(leaderboard || 'No data available');
  embed.setFooter({ text: 'VORP = Points above replacement level' });

  return embed;
}
