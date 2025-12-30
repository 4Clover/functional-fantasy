import { EmbedBuilder } from 'discord.js';

interface LineupReminderData {
  week: number;
  gameTime: Date;
  playersOnBye: string[];
  injuredStarters: string[];
}

export function buildLineupReminderEmbed(data: LineupReminderData): EmbedBuilder {
  const embed = new EmbedBuilder()
    .setColor(0xe74c3c)
    .setTitle(`Set Your Lineups! Week ${data.week}`)
    .setDescription(`Games start <t:${Math.floor(data.gameTime.getTime() / 1000)}:R>`);

  if (data.playersOnBye.length > 0) {
    embed.addFields({
      name: 'Players on BYE',
      value: data.playersOnBye.join(', '),
    });
  }

  if (data.injuredStarters.length > 0) {
    embed.addFields({
      name: 'Injured Starters',
      value: data.injuredStarters.join(', '),
    });
  }

  embed.setFooter({ text: 'Check your lineup before kickoff!' });

  return embed;
}
