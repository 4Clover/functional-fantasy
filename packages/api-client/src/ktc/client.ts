import * as cheerio from 'cheerio';
import type { KTCPlayerValue, KTCScrapedData } from './schemas.js';

export class KTCClient {
  private userAgent =
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

  async scrapeValues(format: 'dynasty' | 'redraft'): Promise<KTCScrapedData> {
    const url =
      format === 'dynasty'
        ? 'https://keeptradecut.com/dynasty-rankings'
        : 'https://keeptradecut.com/rankings';

    const $ = await cheerio.fromURL(url, {
      requestOptions: { method: 'GET', headers: { 'User-Agent': this.userAgent } },
    });

    const players: KTCPlayerValue[] = [];

    const data = $.extract({
      players: [
        {
          selector: '.player-card, [data-player]',
          value: {
            name: '.player-name, [data-name]',
            position: '.player-position, [data-position]',
            team: '.player-team, [data-team]',
            value: {
              selector: '.player-value, [data-value]',
              value: el => parseInt($(el).text().replace(/,/g, ''), 10) || 0,
            },
            trend: {
              selector: '.trend-indicator, [data-trend]',
              value: el => {
                const classes = $(el).attr('class') || '';
                if (classes.includes('up')) return 'rising';
                if (classes.includes('down')) return 'falling';
                return 'stable';
              },
            },
          },
        },
      ],
    });

    for (const player of data.players) {
      if (!player.name || !player.position) continue;

      const position = player.position?.toUpperCase();
      if (!['QB', 'RB', 'WR', 'TE'].includes(position)) continue;

      players.push({
        playerName: player.name,
        position: position as 'QB' | 'RB' | 'WR' | 'TE',
        team: player.team || null,
        value: player.value || 0,
        trend: (player.trend as 'rising' | 'stable' | 'falling') || 'stable',
      });
    }

    return { scrapedAt: new Date(), format, players };
  }
}

export const ktcClient = new KTCClient();
