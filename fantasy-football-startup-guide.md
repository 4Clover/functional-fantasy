# Fantasy Football Platform: Developer Startup Guide

## WebStorm + WSL2 Development Environment

This comprehensive guide covers the complete setup for building the fantasy football platform described in your project roadmap—from IDE configuration through production-ready project structure.

---

## Table of Contents

1. [Prerequisites & System Requirements](#1-prerequisites--system-requirements)
2. [WSL2 Installation & Configuration](#2-wsl2-installation--configuration)
3. [WebStorm Configuration for WSL](#3-webstorm-configuration-for-wsl)
4. [Package Manager Selection: pnpm](#4-package-manager-selection-pnpm)
5. [Monorepo Architecture with Turborepo](#5-monorepo-architecture-with-turborepo)
6. [Project Structure](#6-project-structure)
7. [Next.js Frontend Setup](#7-nextjs-frontend-setup)
8. [Python Discord Bot Setup](#8-python-discord-bot-setup)
9. [Database Setup (PostgreSQL & Redis)](#9-database-setup-postgresql--redis)
10. [Code Quality: ESLint & Prettier](#10-code-quality-eslint--prettier)
11. [Git Workflow & Husky](#11-git-workflow--husky)
12. [Environment Variables & Secrets](#12-environment-variables--secrets)
13. [Docker Development Environment](#13-docker-development-environment)
14. [Recommended VS Code/WebStorm Extensions](#14-recommended-extensions)
15. [Troubleshooting Common Issues](#15-troubleshooting-common-issues)

---

## 1. Prerequisites & System Requirements

### Minimum System Requirements

| Component | Requirement                                  |
| --------- | -------------------------------------------- |
| Windows   | Windows 10 (Build 19041+) or Windows 11      |
| RAM       | 16GB recommended (8GB minimum)               |
| Storage   | 50GB+ free space (SSD recommended)           |
| CPU       | Virtualization-enabled (Intel VT-x or AMD-V) |

### Software to Install

Before beginning, download and install:

- **WebStorm** (2024.x or later) - [JetBrains Toolbox](https://www.jetbrains.com/toolbox-app/) recommended for version management
- **Docker Desktop** - [Download](https://www.docker.com/products/docker-desktop)
- **Windows Terminal** - Install from Microsoft Store (optional but recommended)

---

## 2. WSL2 Installation & Configuration

### 2.1 Enable WSL2

Open PowerShell as Administrator and run:

```powershell
# Enable WSL and Virtual Machine Platform
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart

# Restart your computer, then set WSL2 as default
wsl --set-default-version 2

# Install Ubuntu (recommended distribution)
wsl --install -d Ubuntu-24.04
```

### 2.2 Configure WSL2 for Development

After Ubuntu installation, open the Ubuntu terminal and run:

```bash
# Update package lists
sudo apt update && sudo apt upgrade -y

# Install essential build tools
sudo apt install -y build-essential curl wget git unzip zip \
    libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev \
    libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev \
    libffi-dev liblzma-dev libpq-dev

# Install iproute2 (required for WebStorm WSL integration)
sudo apt install -y iproute2
```

### 2.3 Enable Systemd (Required for Docker & Services)

Create or edit `/etc/wsl.conf`:

```bash
sudo nano /etc/wsl.conf
```

Add the following content:

```ini
[boot]
systemd=true

[interop]
enabled=true
appendWindowsPath=true

[network]
generateResolvConf=true
```

Restart WSL from PowerShell:

```powershell
wsl --shutdown
wsl
```

### 2.4 Optimize WSL2 Memory Usage

Create `.wslconfig` in your Windows user home directory (`C:\Users\<YourUsername>\.wslconfig`):

```ini
[wsl2]
memory=8GB
processors=4
swap=4GB
localhostForwarding=true

[experimental]
sparseVhd=true
autoMemoryReclaim=gradual
```

---

## 3. WebStorm Configuration for WSL

### 3.1 Project Location Strategy

**Critical for Performance**: Store your project files inside WSL, not on Windows drives.

```bash
# Create your projects directory inside WSL
mkdir -p ~/projects/fantasy-football
cd ~/projects/fantasy-football
```

Access from WebStorm using the path: `\\wsl.localhost\Ubuntu-24.04\home\<username>\projects\fantasy-football`

### 3.2 Configure WSL Terminal in WebStorm

1. Open WebStorm → **Settings** (Ctrl+Alt+S)
2. Navigate to **Tools → Terminal**
3. Set **Shell path** to: `wsl.exe`
4. (Optional) For a specific distro: `wsl.exe --distribution Ubuntu-24.04`

### 3.3 Configure Node.js Interpreter for WSL

1. Go to **Settings → Languages & Frameworks → Node.js**
2. Click the `...` button next to Node interpreter
3. Click `+` → **Add WSL...**
4. Select your distribution (Ubuntu-24.04)
5. Set path to Node.js (after installation): `/home/<username>/.nvm/versions/node/v20.x.x/bin/node`

### 3.4 Configure Git for WSL

WebStorm automatically detects Git in WSL2 when projects are opened via `\\wsl$` paths. Verify in **Settings → Version Control → Git** that it shows the WSL Git path.

---

## 4. Package Manager Selection: pnpm

### 4.1 Why pnpm?

Based on 2024/2025 benchmarks and community consensus:

| Feature                 | pnpm                        | npm      | Yarn           |
| ----------------------- | --------------------------- | -------- | -------------- |
| **Install Speed**       | Fastest                     | Moderate | Fast           |
| **Disk Efficiency**     | 70-80% savings              | Baseline | 20-30% savings |
| **Monorepo Support**    | Excellent                   | Good     | Good           |
| **Strict Dependencies** | Yes (prevents phantom deps) | No       | No             |
| **Market Share (2024)** | ~20% (growing rapidly)      | ~57%     | ~21%           |

**Recommendation**: Use pnpm for this project due to its superior monorepo handling, disk efficiency, and strict dependency resolution.

### 4.2 Install Node.js via nvm

```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

# Reload shell configuration
source ~/.bashrc

# Install latest LTS Node.js
nvm install --lts
nvm use --lts

# Verify installation
node --version  # Should show v20.x.x or v22.x.x
npm --version
```

### 4.3 Install pnpm

```bash
# Enable corepack (comes with Node.js 16.13+)
corepack enable

# Install and activate latest pnpm
corepack prepare pnpm@latest --activate

# Verify installation
pnpm --version
```

### 4.4 Configure pnpm

Create `~/.npmrc` for global pnpm settings:

```ini
# Store packages in a single location
store-dir=~/.pnpm-store

# Hoist dependencies for compatibility
shamefully-hoist=true

# Enable strict peer dependencies
strict-peer-dependencies=false

# Auto-install peers
auto-install-peers=true
```

---

## 5. Monorepo Architecture with Turborepo

### 5.1 Why Turborepo?

- **Incremental Builds**: Only rebuilds what changed
- **Remote Caching**: Share build artifacts across team/CI
- **Parallel Execution**: Runs tasks concurrently
- **Simple Configuration**: Less opinionated than Nx
- **pnpm Native**: First-class pnpm workspace support

### 5.2 Initialize Monorepo

```bash
cd ~/projects/fantasy-football

# Initialize with pnpm
pnpm init

# Add Turborepo
pnpm add -D turbo

# Create workspace configuration
cat > pnpm-workspace.yaml << 'EOF'
packages:
  - 'apps/*'
  - 'packages/*'
  - 'services/*'
EOF
```

### 5.3 Configure turbo.json

Create `turbo.json` in the project root:

```json
{
  "$schema": "https://turborepo.org/schema.json",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "dist/**", "build/**"],
      "cache": true
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {
      "outputs": [],
      "cache": true
    },
    "test": {
      "dependsOn": ["build"],
      "outputs": ["coverage/**"],
      "cache": true
    },
    "typecheck": {
      "outputs": [],
      "cache": true
    }
  },
  "globalEnv": ["NODE_ENV", "DATABASE_URL", "REDIS_URL"]
}
```

### 5.4 Root package.json

```json
{
  "name": "fantasy-football-platform",
  "version": "1.0.0",
  "private": true,
  "packageManager": "pnpm@9.15.0",
  "engines": {
    "node": ">=20.0.0",
    "pnpm": ">=9.0.0"
  },
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "lint": "turbo run lint",
    "test": "turbo run test",
    "typecheck": "turbo run typecheck",
    "clean": "turbo run clean && rm -rf node_modules",
    "format": "prettier --write \"**/*.{ts,tsx,js,jsx,json,md}\"",
    "prepare": "husky"
  },
  "devDependencies": {
    "turbo": "^2.3.0",
    "prettier": "^3.4.0",
    "husky": "^9.1.0",
    "lint-staged": "^15.2.0"
  }
}
```

---

## 6. Project Structure

```
fantasy-football-platform/
├── apps/
│   ├── web/                          # Next.js main dashboard
│   │   ├── src/
│   │   │   ├── app/                  # App Router pages
│   │   │   ├── components/
│   │   │   │   ├── ui/               # shadcn/ui primitives
│   │   │   │   ├── features/         # Feature-specific components
│   │   │   │   └── layouts/          # Page layouts
│   │   │   ├── hooks/                # Custom React hooks
│   │   │   ├── lib/                  # Utilities and API clients
│   │   │   ├── services/             # API service functions
│   │   │   └── types/                # TypeScript types
│   │   ├── public/
│   │   ├── next.config.js
│   │   ├── tailwind.config.ts
│   │   ├── tsconfig.json
│   │   └── package.json
│   │
│   └── docs/                         # Documentation site (optional)
│
├── packages/
│   ├── ui/                           # Shared UI component library
│   │   ├── src/
│   │   │   ├── components/
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── api-client/                   # Shared API client (Sleeper, Yahoo, etc.)
│   │   ├── src/
│   │   │   ├── sleeper/
│   │   │   ├── yahoo/
│   │   │   ├── espn/
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── database/                     # Prisma schema and migrations
│   │   ├── prisma/
│   │   │   ├── schema.prisma
│   │   │   └── migrations/
│   │   ├── src/
│   │   │   └── client.ts
│   │   └── package.json
│   │
│   ├── types/                        # Shared TypeScript types
│   │   ├── src/
│   │   │   ├── player.ts
│   │   │   ├── league.ts
│   │   │   ├── trade.ts
│   │   │   └── index.ts
│   │   └── package.json
│   │
│   ├── utils/                        # Shared utilities
│   │   ├── src/
│   │   │   ├── calculations/         # VORP, WAR calculations
│   │   │   ├── formatters/
│   │   │   └── index.ts
│   │   └── package.json
│   │
│   ├── eslint-config/                # Shared ESLint configuration
│   │   ├── base.js
│   │   ├── next.js
│   │   ├── react.js
│   │   └── package.json
│   │
│   └── typescript-config/            # Shared TypeScript configs
│       ├── base.json
│       ├── nextjs.json
│       ├── react-library.json
│       └── package.json
│
├── services/
│   └── discord-bot/                  # Python Discord bot
│       ├── src/
│       │   ├── bot.py
│       │   ├── cogs/
│       │   │   ├── __init__.py
│       │   │   ├── transactions.py
│       │   │   ├── matchups.py
│       │   │   └── standings.py
│       │   ├── services/
│       │   │   ├── sleeper_service.py
│       │   │   └── redis_service.py
│       │   └── utils/
│       │       └── formatters.py
│       ├── tests/
│       ├── pyproject.toml
│       ├── requirements.txt
│       └── .python-version
│
├── docker/
│   ├── docker-compose.yml
│   ├── docker-compose.dev.yml
│   └── Dockerfile.bot
│
├── scripts/
│   ├── setup.sh
│   └── seed-data.ts
│
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
│
├── .husky/
│   └── pre-commit
│
├── turbo.json
├── pnpm-workspace.yaml
├── package.json
├── .prettierrc
├── .prettierignore
├── .gitignore
├── .env.example
└── README.md
```

---

## 7. Next.js Frontend Setup

### 7.1 Create Next.js App

```bash
cd apps

# Create Next.js app with TypeScript and Tailwind
pnpm create next-app@latest web --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

cd web
```

### 7.2 Configure package.json for Monorepo

Update `apps/web/package.json`:

```json
{
  "name": "@fantasy/web",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "next": "^15.1.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "@fantasy/ui": "workspace:*",
    "@fantasy/api-client": "workspace:*",
    "@fantasy/types": "workspace:*",
    "@fantasy/utils": "workspace:*"
  },
  "devDependencies": {
    "@fantasy/eslint-config": "workspace:*",
    "@fantasy/typescript-config": "workspace:*",
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "typescript": "^5.7.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0"
  }
}
```

### 7.3 Configure TypeScript

Update `apps/web/tsconfig.json`:

```json
{
  "extends": "@fantasy/typescript-config/nextjs.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@fantasy/ui": ["../../packages/ui/src"],
      "@fantasy/types": ["../../packages/types/src"],
      "@fantasy/utils": ["../../packages/utils/src"],
      "@fantasy/api-client": ["../../packages/api-client/src"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### 7.4 Install shadcn/ui (Recommended UI Library)

```bash
cd apps/web

# Initialize shadcn/ui
pnpm dlx shadcn@latest init

# Add commonly used components
pnpm dlx shadcn@latest add button card table tabs dialog dropdown-menu
```

### 7.5 Recommended Frontend Libraries

```bash
# State management and data fetching
pnpm add @tanstack/react-query zustand

# Charts and visualization (for Report Cards)
pnpm add recharts

# Forms and validation
pnpm add react-hook-form zod @hookform/resolvers

# Date handling
pnpm add date-fns

# HTTP client
pnpm add axios

# Dev dependencies
pnpm add -D @tanstack/eslint-plugin-query
```

---

## 8. Python Discord Bot Setup

### 8.1 Install Python with pyenv

```bash
# Install pyenv
curl https://pyenv.run | bash

# Add to ~/.bashrc
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
echo 'command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(pyenv init -)"' >> ~/.bashrc

source ~/.bashrc

# Install Python 3.12
pyenv install 3.12.0
pyenv global 3.12.0
```

### 8.2 Configure Bot Project

```bash
cd services/discord-bot

# Create virtual environment
python -m venv .venv
source .venv/bin/activate

# Create pyproject.toml
cat > pyproject.toml << 'EOF'
[project]
name = "fantasy-discord-bot"
version = "1.0.0"
description = "Discord bot for fantasy football league notifications"
requires-python = ">=3.11"
dependencies = [
    "discord.py>=2.4.0",
    "python-dotenv>=1.0.0",
    "aiohttp>=3.9.0",
    "redis>=5.0.0",
    "asyncpg>=0.29.0",
    "pydantic>=2.5.0",
    "pydantic-settings>=2.1.0",
]

[project.optional-dependencies]
dev = [
    "pytest>=8.0.0",
    "pytest-asyncio>=0.23.0",
    "pytest-cov>=4.1.0",
    "ruff>=0.1.0",
    "mypy>=1.8.0",
    "pre-commit>=3.6.0",
]

[tool.ruff]
line-length = 88
target-version = "py311"
select = ["E", "F", "I", "N", "W", "UP", "B", "C4", "SIM"]

[tool.mypy]
python_version = "3.11"
strict = true
warn_return_any = true
warn_unused_ignores = true

[tool.pytest.ini_options]
asyncio_mode = "auto"
testpaths = ["tests"]
EOF

# Install dependencies
pip install -e ".[dev]"
```

### 8.3 Bot Structure with Cogs

Create `services/discord-bot/src/bot.py`:

```python
"""Main Discord bot entry point."""
import os
import asyncio
import logging
from pathlib import Path

import discord
from discord.ext import commands
from dotenv import load_dotenv

load_dotenv()

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)


class FantasyBot(commands.Bot):
    """Fantasy Football Discord Bot."""

    def __init__(self) -> None:
        intents = discord.Intents.default()
        intents.message_content = True
        intents.members = True

        super().__init__(
            command_prefix="!",
            intents=intents,
            description="Fantasy Football League Bot",
        )

    async def setup_hook(self) -> None:
        """Load all cogs on startup."""
        cogs_path = Path(__file__).parent / "cogs"
        for cog_file in cogs_path.glob("*.py"):
            if cog_file.name.startswith("_"):
                continue
            cog_name = f"cogs.{cog_file.stem}"
            try:
                await self.load_extension(cog_name)
                logger.info(f"Loaded cog: {cog_name}")
            except Exception as e:
                logger.error(f"Failed to load cog {cog_name}: {e}")

    async def on_ready(self) -> None:
        """Called when bot is ready."""
        logger.info(f"Logged in as {self.user} (ID: {self.user.id})")
        await self.tree.sync()


async def main() -> None:
    """Main entry point."""
    bot = FantasyBot()
    token = os.getenv("DISCORD_BOT_TOKEN")
    if not token:
        raise ValueError("DISCORD_BOT_TOKEN environment variable not set")
    await bot.start(token)


if __name__ == "__main__":
    asyncio.run(main())
```

### 8.4 Example Cog for Sleeper Integration

Create `services/discord-bot/src/cogs/transactions.py`:

```python
"""Transaction notification cog."""
import asyncio
import aiohttp
from discord.ext import commands, tasks
from discord import Embed, Color


class TransactionsCog(commands.Cog):
    """Handles Sleeper transaction notifications."""

    SLEEPER_API = "https://api.sleeper.app/v1"

    def __init__(self, bot: commands.Bot) -> None:
        self.bot = bot
        self.last_transaction_id: str | None = None
        self.check_transactions.start()

    def cog_unload(self) -> None:
        self.check_transactions.cancel()

    @tasks.loop(seconds=60)
    async def check_transactions(self) -> None:
        """Poll Sleeper API for new transactions."""
        league_id = "YOUR_LEAGUE_ID"  # Configure via env
        week = 1  # Calculate dynamically

        async with aiohttp.ClientSession() as session:
            url = f"{self.SLEEPER_API}/league/{league_id}/transactions/{week}"
            async with session.get(url) as resp:
                if resp.status != 200:
                    return
                transactions = await resp.json()

        # Process new transactions
        for tx in transactions:
            if self.last_transaction_id and tx["transaction_id"] <= self.last_transaction_id:
                continue
            await self._notify_transaction(tx)
            self.last_transaction_id = tx["transaction_id"]

    async def _notify_transaction(self, tx: dict) -> None:
        """Send transaction notification to Discord channel."""
        channel_id = 123456789  # Configure via env
        channel = self.bot.get_channel(channel_id)
        if not channel:
            return

        embed = Embed(
            title="🏈 New Transaction",
            color=Color.green() if tx["type"] == "trade" else Color.blue(),
        )
        embed.add_field(name="Type", value=tx["type"].title())
        await channel.send(embed=embed)

    @check_transactions.before_loop
    async def before_check(self) -> None:
        await self.bot.wait_until_ready()


async def setup(bot: commands.Bot) -> None:
    await bot.add_cog(TransactionsCog(bot))
```

---

## 9. Database Setup (PostgreSQL & Redis)

### 9.1 Docker Compose for Development

Create `docker/docker-compose.dev.yml`:

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:16-alpine
    container_name: fantasy-postgres
    ports:
      - '5432:5432'
    environment:
      POSTGRES_USER: fantasy
      POSTGRES_PASSWORD: fantasy_dev_password
      POSTGRES_DB: fantasy_football
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ['CMD-SHELL', 'pg_isready -U fantasy -d fantasy_football']
      interval: 10s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    container_name: fantasy-redis
    ports:
      - '6379:6379'
    command: redis-server --appendonly yes
    volumes:
      - redis_data:/data
    healthcheck:
      test: ['CMD', 'redis-cli', 'ping']
      interval: 10s
      timeout: 5s
      retries: 5

  redis-commander:
    image: rediscommander/redis-commander:latest
    container_name: fantasy-redis-ui
    ports:
      - '8081:8081'
    environment:
      REDIS_HOST: redis
      REDIS_PORT: 6379
    depends_on:
      - redis

volumes:
  postgres_data:
  redis_data:
```

### 9.2 Start Development Databases

```bash
cd docker
docker compose -f docker-compose.dev.yml up -d

# Verify containers are running
docker compose -f docker-compose.dev.yml ps
```

### 9.3 Prisma Setup

Create `packages/database/package.json`:

```json
{
  "name": "@fantasy/database",
  "version": "1.0.0",
  "main": "./src/client.ts",
  "scripts": {
    "db:generate": "prisma generate",
    "db:push": "prisma db push",
    "db:migrate": "prisma migrate dev",
    "db:seed": "tsx prisma/seed.ts",
    "db:studio": "prisma studio"
  },
  "dependencies": {
    "@prisma/client": "^5.22.0"
  },
  "devDependencies": {
    "prisma": "^5.22.0",
    "tsx": "^4.7.0"
  }
}
```

Create `packages/database/prisma/schema.prisma`:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id          String   @id @default(cuid())
  email       String   @unique
  sleeperUserId String? @unique @map("sleeper_user_id")
  yahooUserId   String? @unique @map("yahoo_user_id")
  espnUserId    String? @unique @map("espn_user_id")
  createdAt   DateTime @default(now()) @map("created_at")
  updatedAt   DateTime @updatedAt @map("updated_at")

  leagues     LeagueMembership[]
  teams       Team[]

  @@map("users")
}

model League {
  id          String   @id @default(cuid())
  externalId  String   @map("external_id")
  platform    Platform
  name        String
  seasonYear  Int      @map("season_year")
  settings    Json?
  createdAt   DateTime @default(now()) @map("created_at")
  updatedAt   DateTime @updatedAt @map("updated_at")

  members     LeagueMembership[]
  teams       Team[]
  transactions Transaction[]

  @@unique([externalId, platform])
  @@map("leagues")
}

model LeagueMembership {
  id        String   @id @default(cuid())
  userId    String   @map("user_id")
  leagueId  String   @map("league_id")
  role      Role     @default(MEMBER)
  joinedAt  DateTime @default(now()) @map("joined_at")

  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  league    League   @relation(fields: [leagueId], references: [id], onDelete: Cascade)

  @@unique([userId, leagueId])
  @@map("league_memberships")
}

model Team {
  id          String   @id @default(cuid())
  externalId  String   @map("external_id")
  name        String
  userId      String   @map("user_id")
  leagueId    String   @map("league_id")

  user        User     @relation(fields: [userId], references: [id])
  league      League   @relation(fields: [leagueId], references: [id])
  rosters     Roster[]

  @@unique([externalId, leagueId])
  @@map("teams")
}

model Player {
  id          String   @id @default(cuid())
  sleeperId   String?  @unique @map("sleeper_id")
  yahooId     String?  @unique @map("yahoo_id")
  espnId      String?  @unique @map("espn_id")
  name        String
  position    String
  team        String?
  ktcValue    Int?     @map("ktc_value")
  updatedAt   DateTime @updatedAt @map("updated_at")

  rosterSpots RosterSpot[]

  @@map("players")
}

model Roster {
  id        String   @id @default(cuid())
  teamId    String   @map("team_id")
  week      Int
  year      Int

  team      Team     @relation(fields: [teamId], references: [id])
  spots     RosterSpot[]

  @@unique([teamId, week, year])
  @@map("rosters")
}

model RosterSpot {
  id        String   @id @default(cuid())
  rosterId  String   @map("roster_id")
  playerId  String   @map("player_id")
  slot      String   // "QB", "RB1", "FLEX", "BN1", etc.
  isStarter Boolean  @default(false) @map("is_starter")

  roster    Roster   @relation(fields: [rosterId], references: [id])
  player    Player   @relation(fields: [playerId], references: [id])

  @@map("roster_spots")
}

model Transaction {
  id          String          @id @default(cuid())
  externalId  String          @map("external_id")
  leagueId    String          @map("league_id")
  type        TransactionType
  status      String
  data        Json
  createdAt   DateTime        @default(now()) @map("created_at")

  league      League          @relation(fields: [leagueId], references: [id])

  @@unique([externalId, leagueId])
  @@map("transactions")
}

enum Platform {
  SLEEPER
  YAHOO
  ESPN
  MFL
}

enum Role {
  OWNER
  COMMISSIONER
  MEMBER
}

enum TransactionType {
  TRADE
  WAIVER
  FREE_AGENT
  COMMISSIONER
}
```

---

## 10. Code Quality: ESLint & Prettier

### 10.1 Shared ESLint Config

Create `packages/eslint-config/package.json`:

```json
{
  "name": "@fantasy/eslint-config",
  "version": "1.0.0",
  "main": "base.js",
  "dependencies": {
    "@typescript-eslint/eslint-plugin": "^8.18.0",
    "@typescript-eslint/parser": "^8.18.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-import": "^2.31.0"
  },
  "peerDependencies": {
    "eslint": ">=9.0.0"
  }
}
```

Create `packages/eslint-config/base.js`:

```javascript
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      'prefer-const': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/.next/**', '**/coverage/**'],
  }
);
```

### 10.2 Root Prettier Config

Create `.prettierrc` in project root:

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "endOfLine": "lf",
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

Create `.prettierignore`:

```
node_modules
.next
dist
build
coverage
pnpm-lock.yaml
*.min.js
```

### 10.3 Install Prettier Plugins

```bash
# From project root
pnpm add -D prettier prettier-plugin-tailwindcss
```

---

## 11. Git Workflow & Husky

### 11.1 Initialize Husky

```bash
pnpm add -D husky lint-staged
pnpm exec husky init
```

### 11.2 Configure Pre-commit Hook

Update `.husky/pre-commit`:

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

pnpm lint-staged
```

### 11.3 Configure lint-staged

Add to root `package.json`:

```json
{
  "lint-staged": {
    "*.{ts,tsx,js,jsx}": ["eslint --fix", "prettier --write"],
    "*.{json,md,yml,yaml}": ["prettier --write"],
    "*.py": ["ruff format", "ruff check --fix"]
  }
}
```

### 11.4 Recommended .gitignore

```gitignore
# Dependencies
node_modules/
.pnpm-store/

# Build outputs
dist/
build/
.next/
out/

# Environment
.env
.env.local
.env.*.local

# IDE
.idea/
.vscode/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Python
__pycache__/
*.py[cod]
.venv/
*.egg-info/

# Testing
coverage/
.nyc_output/

# Logs
*.log
npm-debug.log*
yarn-debug.log*
pnpm-debug.log*

# Turborepo
.turbo/

# Database
*.db
*.sqlite
```

---

## 12. Environment Variables & Secrets

### 12.1 Environment File Structure

Create `.env.example` in project root:

```bash
# ===========================================
# DATABASE
# ===========================================
DATABASE_URL="postgresql://fantasy:fantasy_dev_password@localhost:5432/fantasy_football"
REDIS_URL="redis://localhost:6379"

# ===========================================
# DISCORD BOT
# ===========================================
DISCORD_BOT_TOKEN=""
DISCORD_GUILD_ID=""
DISCORD_NOTIFICATION_CHANNEL_ID=""

# ===========================================
# FANTASY PLATFORMS
# ===========================================
# Sleeper (no auth required for public data)
SLEEPER_LEAGUE_ID=""

# Yahoo OAuth 2.0
YAHOO_CLIENT_ID=""
YAHOO_CLIENT_SECRET=""
YAHOO_REDIRECT_URI="http://localhost:3000/api/auth/callback/yahoo"

# ESPN (cookie-based auth)
# Users must extract these from browser DevTools
ESPN_SWID=""
ESPN_S2=""

# ===========================================
# APPLICATION
# ===========================================
NODE_ENV="development"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# ===========================================
# EXTERNAL APIS
# ===========================================
# KeepTradeCut (if using their API)
KTC_API_KEY=""
```

### 12.2 Environment Validation with Zod

Create `packages/utils/src/env.ts`:

```typescript
import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  REDIS_URL: z.string().url(),
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  DISCORD_BOT_TOKEN: z.string().optional(),
  SLEEPER_LEAGUE_ID: z.string().optional(),
});

export const env = envSchema.parse(process.env);
export type Env = z.infer<typeof envSchema>;
```

---

## 13. Docker Development Environment

### 13.1 Full Development Stack

Create `docker/docker-compose.yml`:

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:16-alpine
    container_name: fantasy-postgres
    restart: unless-stopped
    ports:
      - '5432:5432'
    environment:
      POSTGRES_USER: ${POSTGRES_USER:-fantasy}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD:-fantasy_dev_password}
      POSTGRES_DB: ${POSTGRES_DB:-fantasy_football}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ['CMD-SHELL', 'pg_isready -U fantasy -d fantasy_football']
      interval: 10s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    container_name: fantasy-redis
    restart: unless-stopped
    ports:
      - '6379:6379'
    command: redis-server --appendonly yes --maxmemory 256mb --maxmemory-policy allkeys-lru
    volumes:
      - redis_data:/data
    healthcheck:
      test: ['CMD', 'redis-cli', 'ping']
      interval: 10s
      timeout: 5s
      retries: 5

  discord-bot:
    build:
      context: ..
      dockerfile: docker/Dockerfile.bot
    container_name: fantasy-discord-bot
    restart: unless-stopped
    depends_on:
      postgres:
        condition: service_healthy
      redis:
        condition: service_healthy
    environment:
      DATABASE_URL: postgresql://fantasy:fantasy_dev_password@postgres:5432/fantasy_football
      REDIS_URL: redis://redis:6379
      DISCORD_BOT_TOKEN: ${DISCORD_BOT_TOKEN}
    volumes:
      - ../services/discord-bot:/app

volumes:
  postgres_data:
  redis_data:
```

### 13.2 Discord Bot Dockerfile

Create `docker/Dockerfile.bot`:

```dockerfile
FROM python:3.12-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY services/discord-bot/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy source code
COPY services/discord-bot/src ./src

# Run the bot
CMD ["python", "-m", "src.bot"]
```

---

## 14. Recommended Extensions

### 14.1 WebStorm Plugins

- **Prettier** - Built-in, enable format on save
- **ESLint** - Built-in, enable auto-fix on save
- **Tailwind CSS** - Intelligent Tailwind class suggestions
- **Prisma** - Schema syntax highlighting
- **Python** - Full Python support for Discord bot

### 14.2 WebStorm Settings

Enable format on save (**Settings → Languages & Frameworks → JavaScript → Prettier**):

- Check "Run on save"
- Check "Run on Reformat"

Configure ESLint auto-fix (**Settings → Languages & Frameworks → JavaScript → Code Quality Tools → ESLint**):

- Select "Automatic ESLint configuration"
- Check "Run eslint --fix on save"

---

## 15. Troubleshooting Common Issues

### 15.1 WSL File System Performance

**Symptom**: Slow file operations, especially with node_modules

**Solution**: Ensure files are stored in WSL filesystem, not Windows mounts:

```bash
# GOOD - Files in WSL
/home/username/projects/

# BAD - Files on Windows mount (slow!)
/mnt/c/Users/username/projects/
```

### 15.2 pnpm Phantom Dependencies

**Symptom**: Module not found errors for packages not in package.json

**Solution**: pnpm's strict mode prevents this. Explicitly add missing dependencies:

```bash
pnpm add <missing-package>
```

### 15.3 Turborepo Cache Issues

**Symptom**: Changes not reflected after build

**Solution**: Clear Turborepo cache:

```bash
pnpm turbo run build --force
# Or
rm -rf .turbo node_modules/.cache
```

### 15.4 WebStorm WSL Node.js Not Found

**Symptom**: WebStorm can't find Node.js interpreter

**Solution**:

1. Ensure nvm is installed inside WSL
2. Add WSL interpreter via Settings → Languages & Frameworks → Node.js
3. Set path to: `/home/<user>/.nvm/versions/node/v20.x.x/bin/node`

### 15.5 Docker Desktop WSL Integration

**Symptom**: Docker commands not working in WSL

**Solution**:

1. Open Docker Desktop → Settings → Resources → WSL Integration
2. Enable integration for your WSL distro (Ubuntu-24.04)
3. Restart WSL: `wsl --shutdown` then reopen

---

## Quick Start Checklist

```bash
# 1. Clone and enter project
git clone <repo-url>
cd fantasy-football-platform

# 2. Install dependencies
pnpm install

# 3. Start development databases
cd docker && docker compose -f docker-compose.dev.yml up -d && cd ..

# 4. Setup environment
cp .env.example .env
# Edit .env with your values

# 5. Initialize database
pnpm --filter @fantasy/database db:push
pnpm --filter @fantasy/database db:seed

# 6. Start development servers
pnpm dev

# Web app: http://localhost:3000
# Redis Commander: http://localhost:8081
```

---

## Additional Resources

- [Sleeper API Documentation](https://docs.sleeper.app/)
- [Discord.py Documentation](https://discordpy.readthedocs.io/)
- [Turborepo Documentation](https://turbo.build/repo/docs)
- [pnpm Documentation](https://pnpm.io/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [WebStorm WSL Guide](https://www.jetbrains.com/help/webstorm/how-to-use-wsl-development-environment-in-product.html)

---

_Last updated: December 2025_
