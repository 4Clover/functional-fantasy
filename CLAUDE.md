# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Fantasy football platform monorepo integrating multiple fantasy platforms (Sleeper, Yahoo, ESPN) with a Discord bot for notifications.

## Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS 4
- **Database**: PostgreSQL 18 with Prisma ORM, Redis 8 for caching
- **Package Manager**: pnpm 10.26+ with workspaces
- **Build Orchestration**: Turbo
- **Node**: 24+

## Code Conventions

- All code MUST follow KISS and YAGNI principles.
- Readability and simplicity, while functionally robust, are the primary principles you MUST follow.
- Ensure tests are written for systems rather than for a given implementation.
- Only add dependencies as a last resort.
- All packages use ES modules (`"type": "module"`)
- Packages export from `src/` directory
- Internal packages are prefixed with `@fantasy/`
- Unused variables must be prefixed with `_` (ESLint rule)
- Prettier uses 100-char line width with Tailwind class sorting

## Common Commands

```bash
pnpm install          # Install all dependencies
pnpm dev              # Start all dev servers
pnpm build            # Build all packages
pnpm lint             # Run ESLint
pnpm typecheck        # Run TypeScript checks
pnpm test             # Run tests
pnpm format           # Format all files with Prettier
```

Run commands for specific workspace:

```bash
pnpm --filter @fantasy/web dev
pnpm --filter @fantasy/api-client build
pnpm --filter discord-bot dev     # Note: discord-bot is not @fantasy/ prefixed
```

Database commands (from packages/database):

```bash
pnpm --filter @fantasy/database db:generate   # Generate Prisma client
pnpm --filter @fantasy/database db:migrate    # Run migrations
pnpm --filter @fantasy/database db:push       # Push schema changes
```

Discord bot commands:

```bash
pnpm --filter discord-bot deploy  # Deploy slash commands to Discord
```

## Architecture

### Data Flow

```
Fantasy Platforms (Sleeper/Yahoo/ESPN)
           ↓
    @fantasy/api-client (fetch + cache via Redis)
           ↓
    @fantasy/database (Prisma → PostgreSQL)
           ↓
    ┌──────┴──────┐
    ↓             ↓
discord-bot   @fantasy/web
(BullMQ jobs) (Next.js frontend)
```

### Key Patterns

**API Clients** (`packages/api-client/src/`):

- Raw clients (e.g., `SleeperClient`) fetch from platform APIs with Zod validation
- Cached clients (e.g., `CachedSleeperClient`) wrap raw clients with Redis TTL caching
- Pollers (e.g., `TransactionPoller`) detect new transactions for notifications

**Discord Bot** (`services/discord-bot/src/`):

- Uses BullMQ for job queues (transaction processing, scheduled jobs)
- `PollingService` polls Sleeper API for new transactions
- `NotificationDispatcher` sends embeds to configured Discord channels
- Slash commands in `commands/`, event handlers in `events/`

**Types** (`packages/types/src/`):

- Zod schemas define and validate all external API responses
- Types are inferred from schemas (e.g., `type SleeperUser = z.infer<typeof SleeperUserSchema>`)

**Database** (`packages/database/`):

- Prisma client generated to `src/generated/client`
- Schema supports multi-platform: `Platform` enum (SLEEPER, YAHOO, ESPN)
- `GuildConfig` stores Discord server settings per league

## Environment Variables

Copy `.env.example` to `.env`. Key variables:

- `DATABASE_URL` - PostgreSQL connection string
- `REDIS_URL` - Redis connection string
- `SLEEPER_LEAGUE_ID` - Sleeper fantasy league
- `YAHOO_CLIENT_ID/SECRET` - Yahoo OAuth credentials
- `ESPN_SWID/S2` - ESPN cookie-based auth tokens
- `DISCORD_BOT_TOKEN` - Discord bot authentication

## Local Development

Start infrastructure:

```bash
docker compose -f docker/docker-compose.yml up -d
```

Generate Prisma client after schema changes:

```bash
pnpm --filter @fantasy/database db:generate
```
