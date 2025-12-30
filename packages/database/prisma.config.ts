import { config } from 'dotenv';
import { defineConfig, env } from 'prisma/config';

// Load .env from project root
config({ path: '../../.env' });

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    url: env('DATABASE_URL'),
  },
});
