import { EmbedBuilder } from 'discord.js';
import type { SleeperTransaction, SleeperPlayer } from '@fantasy/types';

interface TradeEmbedData {
  transaction: SleeperTransaction;
  players: Map<string, SleeperPlayer>;
  teamNames: Map<number, string>;
}

export function buildTradeEmbed({ transaction, players, teamNames }: TradeEmbedData): EmbedBuilder {
  const embed = new EmbedBuilder()
    .setColor(0xf1c40f)
    .setTitle('Trade Completed')
    .setTimestamp(new Date(transaction.created));

  const tradesByTeam = new Map<number, { adds: string[]; drops: string[] }>();

  for (const [playerId, rosterId] of Object.entries(transaction.adds ?? {})) {
    const player = players.get(playerId);
    const playerName = player ? `${player.first_name} ${player.last_name}` : playerId;
    const team = tradesByTeam.get(rosterId) ?? { adds: [], drops: [] };
    team.adds.push(`+ ${playerName} (${player?.position ?? 'UNK'})`);
    tradesByTeam.set(rosterId, team);
  }

  for (const [playerId, rosterId] of Object.entries(transaction.drops ?? {})) {
    const player = players.get(playerId);
    const playerName = player ? `${player.first_name} ${player.last_name}` : playerId;
    const team = tradesByTeam.get(rosterId) ?? { adds: [], drops: [] };
    team.drops.push(`- ${playerName} (${player?.position ?? 'UNK'})`);
    tradesByTeam.set(rosterId, team);
  }

  for (const [rosterId, moves] of tradesByTeam) {
    const teamName = teamNames.get(rosterId) ?? `Team ${rosterId}`;
    const value = [...moves.adds, ...moves.drops].join('\n') || 'No players';
    embed.addFields({ name: teamName, value, inline: true });
  }

  if (transaction.draft_picks?.length) {
    const picks = transaction.draft_picks.map(p => `Round ${p.round} (${p.season})`).join(', ');
    embed.addFields({ name: 'Draft Picks Included', value: picks });
  }

  return embed;
}
