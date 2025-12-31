import axios from 'axios';
import type { CacheService } from '../cache/redis.js';
import type { NFLVersePlayerMapping } from './schemas.js';

const NFLVERSE_URL =
  'https://github.com/nflverse/nflverse-data/releases/download/player_ids/player_ids.csv';

const TTL_HOURS = 24;
const TTL_SECONDS = TTL_HOURS * 60 * 60;

export class NFLVerseMapper {
  private mappings: Map<string, NFLVersePlayerMapping> | null = null;

  constructor(private cache?: CacheService) {}

  async loadMappings(): Promise<Map<string, NFLVersePlayerMapping>> {
    if (this.mappings) return this.mappings;

    if (this.cache) {
      const cached = await this.cache.get<NFLVersePlayerMapping[]>('nflverse', 'mappings');
      if (cached) {
        this.mappings = this.buildMappingIndex(cached);
        return this.mappings;
      }
    }

    const response = await axios.get(NFLVERSE_URL, { responseType: 'text' });
    const parsed = this.parseCSV(response.data);

    if (this.cache) {
      await this.cache.set('nflverse', 'mappings', parsed, TTL_SECONDS);
    }

    this.mappings = this.buildMappingIndex(parsed);
    return this.mappings;
  }

  private parseCSV(csvText: string): NFLVersePlayerMapping[] {
    const lines = csvText.split('\n');
    const headerLine = lines[0];
    if (lines.length < 2 || !headerLine) return [];

    const headers = headerLine.split(',').map(h => h.trim().replace(/"/g, ''));
    const mappings: NFLVersePlayerMapping[] = [];

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];
      if (!line) continue;
      const values = this.parseCSVLine(line);
      if (values.length !== headers.length) continue;

      const row: Record<string, string> = {};
      headers.forEach((header, idx) => {
        row[header] = values[idx] ?? '';
      });

      const nflverseId = row['nflverse_id'] || row['mfl_id'] || row['gsis_id'];
      const name = row['name'] || row['full_name'] || '';

      if (!nflverseId || !name) continue;

      mappings.push({
        nflverse_id: nflverseId,
        gsis_id: row['gsis_id'] || undefined,
        sleeper_id: row['sleeper_id'] || undefined,
        yahoo_id: row['yahoo_id'] || undefined,
        espn_id: row['espn_id'] || undefined,
        name,
        position: row['position'] || undefined,
        team: row['team'] || undefined,
      });
    }

    return mappings;
  }

  private parseCSVLine(line: string): string[] {
    const values: string[] = [];
    let current = '';
    let inQuotes = false;

    for (const char of line) {
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    values.push(current.trim());
    return values;
  }

  private buildMappingIndex(mappings: NFLVersePlayerMapping[]): Map<string, NFLVersePlayerMapping> {
    const index = new Map<string, NFLVersePlayerMapping>();

    for (const mapping of mappings) {
      index.set(`nflverse:${mapping.nflverse_id}`, mapping);
      if (mapping.sleeper_id) index.set(`sleeper:${mapping.sleeper_id}`, mapping);
      if (mapping.yahoo_id) index.set(`yahoo:${mapping.yahoo_id}`, mapping);
      if (mapping.espn_id) index.set(`espn:${mapping.espn_id}`, mapping);
      index.set(`name:${this.normalizeName(mapping.name)}`, mapping);
    }

    return index;
  }

  private normalizeName(name: string): string {
    return name.toLowerCase().replace(/[^a-z]/g, '');
  }

  findBySleeperId(sleeperId: string): NFLVersePlayerMapping | undefined {
    return this.mappings?.get(`sleeper:${sleeperId}`);
  }

  findByYahooId(yahooId: string): NFLVersePlayerMapping | undefined {
    return this.mappings?.get(`yahoo:${yahooId}`);
  }

  findByEspnId(espnId: string): NFLVersePlayerMapping | undefined {
    return this.mappings?.get(`espn:${espnId}`);
  }

  findByName(name: string): NFLVersePlayerMapping | undefined {
    return this.mappings?.get(`name:${this.normalizeName(name)}`);
  }
}

export const nflverseMapper = new NFLVerseMapper();
