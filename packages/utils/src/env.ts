import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  REDIS_URL: z.string().url(),
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  DISCORD_BOT_TOKEN: z.string().optional(),

  // Sleeper
  SLEEPER_LEAGUE_ID: z.string().optional(),

  // Yahoo OAuth 2.0
  YAHOO_CLIENT_ID: z.string().optional(),
  YAHOO_CLIENT_SECRET: z.string().optional(),
  YAHOO_REDIRECT_URI: z.string().optional(),

  // ESPN (cookie-based auth)
  ESPN_S2: z.string().optional(),
  ESPN_SWID: z.string().optional(),

  // Encryption key for ESPN cookies (32-byte hex string)
  ENCRYPTION_KEY: z.string().length(64).optional(),
});

export const env = envSchema.parse(process.env);
export type Env = z.infer<typeof envSchema>;
