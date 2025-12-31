# Fantasy Football Platform

## Project Overview

This is a **monorepo** project for a comprehensive Fantasy Football platform. It integrates with major fantasy providers (Sleeper, Yahoo, ESPN) to provide a unified experience through a Web Dashboard and a Discord Bot.

**Key Features:**

- **Multi-Platform Support:** Connects to Sleeper, Yahoo, and ESPN fantasy leagues.
- **Web Dashboard:** A Next.js application for viewing league data, stats, and managing settings.
- **Discord Bot:** A robust bot for league notifications (trades, injuries, waivers), lineup reminders, and commands.
- **Unified Data Model:** standardized schema for Leagues, Rosters, Players, and Matchups across all platforms.

## Architecture & Tech Stack

The project uses **TurboRepo** and **PNPM** for workspace management.

### **Core Components**

| Component       | Path                   | Description                                            | Tech Stack                                                    |
| :-------------- | :--------------------- | :----------------------------------------------------- | :------------------------------------------------------------ |
| **Web App**     | `apps/web`             | Frontend dashboard for users.                          | Next.js 15 (App Router), React 19, Tailwind CSS v4, Radix UI. |
| **Discord Bot** | `services/discord-bot` | Bot service for Discord interactions.                  | Node.js, discord.js, BullMQ (queues).                         |
| **Database**    | `packages/database`    | ORM and Database Client.                               | Prisma, PostgreSQL.                                           |
| **API Client**  | `packages/api-client`  | Shared logic for fetching data from fantasy providers. | TypeScript, Redis (caching).                                  |
| **UI Lib**      | `packages/ui`          | Shared UI components.                                  | React, Tailwind.                                              |

### **Infrastructure**

- **Database:** PostgreSQL (v18-alpine via Docker).
- **Cache/Queue:** Redis (v8-alpine via Docker).
- **Containerization:** Docker Compose for local development.

## Development Workflow

### **Prerequisites**

- Node.js >= 24.0.0
- PNPM >= 10.0.0
- Docker & Docker Compose

### **Setup**

1.  **Install Dependencies:**

    ```bash
    pnpm install
    ```

2.  **Environment Variables:**
    - Copy `.env.example` to `.env` in the root.
    - Fill in required secrets (Database URL, Discord Token, Platform Credentials).

3.  **Start Infrastructure:**

    ```bash
    docker-compose -f docker/docker-compose.yml up -d
    ```

4.  **Database Setup:**
    ```bash
    # Push schema to the database
    pnpm --filter @fantasy/database db:push
    ```

### **Running the Project**

- **Start All Services (Dev Mode):**

  ```bash
  pnpm dev
  ```

  - Web: http://localhost:3000
  - Bot: Connects to Discord gateway

- **Start Specific Service:**
  ```bash
  pnpm --filter @fantasy/web dev       # Start only Web
  pnpm --filter discord-bot dev        # Start only Bot
  ```

### **Common Commands**

| Command          | Description                             |
| :--------------- | :-------------------------------------- |
| `pnpm build`     | Build all apps and packages.            |
| `pnpm lint`      | Run ESLint across the workspace.        |
| `pnpm typecheck` | Run TypeScript type checking.           |
| `pnpm format`    | Format code with Prettier.              |
| `pnpm clean`     | Clean build artifacts and node_modules. |

## Data Model (Prisma)

The schema (`packages/database/prisma/schema.prisma`) defines the core entities:

- **PlatformAccount:** Links a generic `User` to specific platform credentials (e.g., Sleeper ID).
- **League:** Represents a fantasy league instance (Platform + LeagueID + Season).
- **GuildConfig:** Maps a Discord Server (`guildId`) to a specific `League`.

## Conventions

- **Package Manager:** Strict adherence to `pnpm`.
- **Styling:** Tailwind CSS v4 for all styling needs.
- **Type Safety:** Strict TypeScript everywhere. Shared types in `@fantasy/types`.
- **Code Style:** Prettier + ESLint. Use `pnpm format` before committing.
- **Imports:** Use workspace aliases (e.g., `import { db } from "@fantasy/database"`).
