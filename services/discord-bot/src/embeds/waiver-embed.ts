import { EmbedBuilder } from 'discord.js';
import type { SleeperTransaction, SleeperPlayer } from '@fantasy/types';

interface WaiverEmbedData {
  transaction: SleeperTransaction;
  players: Map<string, SleeperPlayer>;
  teamName: string;
}

export function buildWaiverEmbed({
  transaction,
  players,
  teamName,
}: WaiverEmbedData): EmbedBuilder {
  const embed = new EmbedBuilder()
    .setColor(0x3498db)
    .setTitle('Waiver Claim Processed')
    .setTimestamp(new Date(transaction.created));

  const adds = Object.keys(transaction.adds ?? {});
  const drops = Object.keys(transaction.drops ?? {});

  if (adds.length > 0) {
    const addedPlayer = players.get(adds[0]!);
    const playerName = addedPlayer ? `${addedPlayer.first_name} ${addedPlayer.last_name}` : adds[0];
    embed.addFields({
      name: 'Added',
      value: `${playerName} (${addedPlayer?.position ?? 'UNK'} - ${addedPlayer?.team ?? 'FA'})`,
      inline: true,
    });
  }

  if (drops.length > 0) {
    const droppedPlayer = players.get(drops[0]!);
    const playerName = droppedPlayer
      ? `${droppedPlayer.first_name} ${droppedPlayer.last_name}`
      : drops[0];
    embed.addFields({
      name: 'Dropped',
      value: `${playerName} (${droppedPlayer?.position ?? 'UNK'})`,
      inline: true,
    });
  }

  const faabSpent = transaction.waiver_budget?.find(w => w.sender === transaction.roster_ids[0]);
  if (faabSpent) {
    embed.addFields({ name: 'FAAB Spent', value: `$${faabSpent.amount}`, inline: true });
  }

  embed.setFooter({ text: teamName });

  return embed;
}
