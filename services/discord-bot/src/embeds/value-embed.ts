import { EmbedBuilder } from 'discord.js';
import type { KTCPlayerValue } from '@fantasy/api-client';

interface ValueEmbedData {
  player: KTCPlayerValue;
  format: 'dynasty' | 'redraft';
}

const TREND_EMOJI: Record<string, string> = {
  rising: '\u2191',
  stable: '\u2194',
  falling: '\u2193',
};

export function buildValueEmbed(data: ValueEmbedData): EmbedBuilder {
  const { player, format } = data;
  const trendEmoji = TREND_EMOJI[player.trend] || '';

  const color =
    player.trend === 'rising' ? 0x00ff00 : player.trend === 'falling' ? 0xff0000 : 0x3498db;

  const embed = new EmbedBuilder()
    .setColor(color)
    .setTitle(`${player.playerName} (${player.position})`)
    .setDescription(`${format.charAt(0).toUpperCase() + format.slice(1)} Value`)
    .addFields(
      { name: 'Value', value: player.value.toLocaleString(), inline: true },
      { name: 'Team', value: player.team || 'FA', inline: true },
      { name: 'Trend', value: `${trendEmoji} ${player.trend}`, inline: true }
    )
    .setFooter({ text: 'Source: KeepTradeCut' })
    .setTimestamp();

  if (player.tier) {
    embed.addFields({ name: 'Tier', value: `Tier ${player.tier}`, inline: true });
  }

  return embed;
}
