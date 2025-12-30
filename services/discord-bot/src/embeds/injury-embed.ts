import { EmbedBuilder } from 'discord.js';
import type { SleeperPlayer } from '@fantasy/types';

interface InjuryUpdate {
  player: SleeperPlayer;
  previousStatus: string | null;
  newStatus: string | null;
}

const STATUS_COLORS: Record<string, number> = {
  Out: 0xe74c3c,
  Doubtful: 0xe67e22,
  Questionable: 0xf1c40f,
  Probable: 0x2ecc71,
  IR: 0x9b59b6,
};

export function buildInjuryEmbed(update: InjuryUpdate): EmbedBuilder {
  const { player, previousStatus, newStatus } = update;
  const color = STATUS_COLORS[newStatus ?? 'Questionable'] ?? 0x95a5a6;

  return new EmbedBuilder()
    .setColor(color)
    .setTitle('Injury Status Update')
    .addFields(
      {
        name: 'Player',
        value: `${player.first_name} ${player.last_name} (${player.position} - ${player.team})`,
      },
      { name: 'Previous Status', value: previousStatus ?? 'Healthy', inline: true },
      { name: 'New Status', value: newStatus ?? 'Healthy', inline: true }
    )
    .setTimestamp();
}
