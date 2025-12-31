import { EmbedBuilder } from 'discord.js';

interface TradePlayer {
  name: string;
  position: string;
  baseValue: number;
  adjustedValue: number;
}

interface TradeCalcEmbedData {
  sending: TradePlayer[];
  receiving: TradePlayer[];
  sendingTotal: number;
  receivingTotal: number;
  verdict: 'FAVORABLE' | 'EVEN' | 'UNFAVORABLE';
  netValue: number;
}

export function buildTradeCalcEmbed(data: TradeCalcEmbedData): EmbedBuilder {
  const color = data.netValue > 0 ? 0x00ff00 : data.netValue < 0 ? 0xff0000 : 0xffff00;

  const embed = new EmbedBuilder().setColor(color).setTitle('Trade Analysis').setTimestamp();

  const sendingField =
    data.sending
      .map(p => `${p.name} (${p.position}): ${p.adjustedValue.toLocaleString()}`)
      .join('\n') || 'No players';

  const receivingField =
    data.receiving
      .map(p => `${p.name} (${p.position}): ${p.adjustedValue.toLocaleString()}`)
      .join('\n') || 'No players';

  embed.addFields(
    { name: `Sending (${data.sendingTotal.toLocaleString()})`, value: sendingField, inline: true },
    {
      name: `Receiving (${data.receivingTotal.toLocaleString()})`,
      value: receivingField,
      inline: true,
    },
    {
      name: 'Verdict',
      value: `**${data.verdict}** (${data.netValue > 0 ? '+' : ''}${data.netValue.toLocaleString()})`,
      inline: false,
    }
  );

  embed.setFooter({ text: 'Values from KeepTradeCut' });

  return embed;
}
