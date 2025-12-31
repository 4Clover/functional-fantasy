import { z } from 'zod';

export const NFLVersePlayerMappingSchema = z.object({
  gsis_id: z.string().optional(),
  nflverse_id: z.string(),
  sleeper_id: z.string().optional(),
  yahoo_id: z.string().optional(),
  espn_id: z.string().optional(),
  name: z.string(),
  position: z.string().optional(),
  team: z.string().optional(),
});

export type NFLVersePlayerMapping = z.infer<typeof NFLVersePlayerMappingSchema>;
