import { z } from 'zod';

export const KTCPlayerValueSchema = z.object({
  playerName: z.string(),
  position: z.enum(['QB', 'RB', 'WR', 'TE']),
  team: z.string().nullable(),
  value: z.number().int().min(0).max(9999),
  tier: z.number().int().min(1).max(10).optional(),
  trend: z.enum(['rising', 'stable', 'falling']).default('stable'),
});

export type KTCPlayerValue = z.infer<typeof KTCPlayerValueSchema>;

export const KTCScrapedDataSchema = z.object({
  scrapedAt: z.date(),
  format: z.enum(['dynasty', 'redraft']),
  players: z.array(KTCPlayerValueSchema),
});

export type KTCScrapedData = z.infer<typeof KTCScrapedDataSchema>;
