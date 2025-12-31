import { EmbedBuilder } from 'discord.js';
import type { WeeklyReportCard, SeasonReportCard } from '@fantasy/analytics';

export function buildWeeklyReportCardEmbed(report: WeeklyReportCard): EmbedBuilder {
  const embed = new EmbedBuilder()
    .setColor(0xe74c3c)
    .setTitle(`Week ${report.week} Report Card`)
    .setDescription(report.leagueName)
    .setTimestamp();

  const rankings = report.teams
    .sort((a, b) => a.weeklyRank - b.weeklyRank)
    .slice(0, 10)
    .map(t => {
      const allPlay = `${t.allPlayRecord.wins}-${t.allPlayRecord.losses}`;
      return `**${t.weeklyRank}.** ${t.teamName}\n${t.actualScore.toFixed(1)} pts | ${t.lineupEfficiency.toFixed(0)}% eff | AP: ${allPlay}`;
    })
    .join('\n\n');

  embed.addFields({ name: 'Rankings', value: rankings || 'No data' });

  if (report.superlatives.length > 0) {
    const awards = report.superlatives
      .map(s => `**${formatSuperlativeType(s.type)}**: ${s.teamName}`)
      .join('\n');
    embed.addFields({ name: 'Awards', value: awards });
  }

  return embed;
}

export function buildSeasonReportCardEmbed(report: SeasonReportCard): EmbedBuilder {
  const embed = new EmbedBuilder()
    .setColor(0x3498db)
    .setTitle(`Season Report Card`)
    .setDescription(`${report.leagueName} - Through Week ${report.throughWeek}`)
    .setTimestamp();

  const powerRankings = report.teams
    .sort((a, b) => a.powerRank - b.powerRank)
    .slice(0, 10)
    .map(t => {
      const record = `${t.record.wins}-${t.record.losses}`;
      const allPlay = `${t.allPlayRecord.wins}-${t.allPlayRecord.losses}`;
      const luck = t.luckIndex >= 0 ? `+${t.luckIndex.toFixed(1)}` : t.luckIndex.toFixed(1);
      return `**${t.powerRank}.** ${t.teamName}\n${record} | AP: ${allPlay} | Luck: ${luck}`;
    })
    .join('\n\n');

  embed.addFields({ name: 'Power Rankings', value: powerRankings || 'No data' });

  if (report.superlatives.length > 0) {
    const awards = report.superlatives
      .slice(0, 5)
      .map(s => `**${formatSuperlativeType(s.type)}**: ${s.teamName}\n${s.description}`)
      .join('\n\n');
    embed.addFields({ name: 'Season Awards', value: awards });
  }

  return embed;
}

function formatSuperlativeType(type: string): string {
  return type
    .split('_')
    .map(word => word.charAt(0) + word.slice(1).toLowerCase())
    .join(' ');
}
