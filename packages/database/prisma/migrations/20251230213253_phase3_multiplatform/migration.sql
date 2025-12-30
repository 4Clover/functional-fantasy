-- CreateEnum
CREATE TYPE "Platform" AS ENUM ('SLEEPER', 'YAHOO', 'ESPN');

-- CreateEnum
CREATE TYPE "LeagueType" AS ENUM ('REDRAFT', 'KEEPER', 'DYNASTY');

-- CreateEnum
CREATE TYPE "ScoringFormat" AS ENUM ('STANDARD', 'HALF_PPR', 'PPR', 'CUSTOM');

-- CreateEnum
CREATE TYPE "Position" AS ENUM ('QB', 'RB', 'WR', 'TE', 'K', 'DEF', 'DL', 'LB', 'DB', 'IDP');

-- CreateEnum
CREATE TYPE "PlayerStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'INJURED_RESERVE', 'PRACTICE_SQUAD', 'FREE_AGENT', 'RETIRED');

-- CreateEnum
CREATE TYPE "RosterSlot" AS ENUM ('QB', 'RB', 'WR', 'TE', 'FLEX', 'SUPER_FLEX', 'K', 'DEF', 'DL', 'LB', 'DB', 'IDP', 'BN', 'IR', 'TAXI');

-- CreateEnum
CREATE TYPE "MatchupType" AS ENUM ('REGULAR', 'PLAYOFF', 'CONSOLATION', 'CHAMPIONSHIP', 'TOILET_BOWL');

-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('TRADE', 'WAIVER', 'FREE_AGENT', 'COMMISSIONER');

-- CreateEnum
CREATE TYPE "TransactionStatus" AS ENUM ('PENDING', 'COMPLETE', 'FAILED', 'VETOED');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "displayName" TEXT,
    "email" TEXT,
    "avatarUrl" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "platform_accounts" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "platform" "Platform" NOT NULL,
    "platformId" TEXT NOT NULL,
    "username" TEXT,
    "avatarUrl" TEXT,
    "accessToken" TEXT,
    "refreshToken" TEXT,
    "expiresAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "platform_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leagues" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "platform" "Platform" NOT NULL,
    "platformLeagueId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "season" INTEGER NOT NULL,
    "leagueType" "LeagueType" NOT NULL DEFAULT 'REDRAFT',
    "scoringFormat" "ScoringFormat" NOT NULL DEFAULT 'PPR',
    "rosterSize" INTEGER NOT NULL DEFAULT 15,
    "teamCount" INTEGER NOT NULL,

    CONSTRAINT "leagues_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "league_members" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "leagueId" TEXT NOT NULL,
    "teamName" TEXT,
    "teamAvatar" TEXT,
    "rosterSlot" INTEGER NOT NULL,
    "wins" INTEGER NOT NULL DEFAULT 0,
    "losses" INTEGER NOT NULL DEFAULT 0,
    "ties" INTEGER NOT NULL DEFAULT 0,
    "pointsFor" DECIMAL(10,2) NOT NULL DEFAULT 0,
    "pointsAgainst" DECIMAL(10,2) NOT NULL DEFAULT 0,

    CONSTRAINT "league_members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "players" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nflverseId" TEXT,
    "sleeperId" TEXT,
    "yahooId" TEXT,
    "espnId" TEXT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "position" "Position" NOT NULL,
    "team" TEXT,
    "jerseyNumber" INTEGER,
    "status" "PlayerStatus" NOT NULL DEFAULT 'ACTIVE',
    "injuryStatus" TEXT,
    "byeWeek" INTEGER,

    CONSTRAINT "players_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rosters" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "leagueId" TEXT NOT NULL,
    "memberId" TEXT NOT NULL,
    "week" INTEGER NOT NULL,
    "season" INTEGER NOT NULL,

    CONSTRAINT "rosters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roster_players" (
    "id" TEXT NOT NULL,
    "rosterId" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,
    "slot" "RosterSlot" NOT NULL,

    CONSTRAINT "roster_players_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "matchups" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "leagueId" TEXT NOT NULL,
    "week" INTEGER NOT NULL,
    "season" INTEGER NOT NULL,
    "homeTeamSlot" INTEGER NOT NULL,
    "awayTeamSlot" INTEGER NOT NULL,
    "homeScore" DECIMAL(10,2),
    "awayScore" DECIMAL(10,2),
    "homeProjected" DECIMAL(10,2),
    "awayProjected" DECIMAL(10,2),
    "isPlayoffs" BOOLEAN NOT NULL DEFAULT false,
    "matchupType" "MatchupType" NOT NULL DEFAULT 'REGULAR',

    CONSTRAINT "matchups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transactions" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "leagueId" TEXT NOT NULL,
    "type" "TransactionType" NOT NULL,
    "status" "TransactionStatus" NOT NULL DEFAULT 'COMPLETE',
    "processedAt" TIMESTAMP(3),
    "faabBid" INTEGER,
    "metadata" JSONB,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transaction_adds" (
    "id" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,
    "teamSlot" INTEGER NOT NULL,
    "playerId" TEXT,
    "pickInfo" JSONB,

    CONSTRAINT "transaction_adds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transaction_drops" (
    "id" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,
    "teamSlot" INTEGER NOT NULL,
    "playerId" TEXT,
    "pickInfo" JSONB,

    CONSTRAINT "transaction_drops_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "guild_configs" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "guildId" TEXT NOT NULL,
    "guildName" TEXT,
    "notificationChannelId" TEXT NOT NULL,
    "platform" "Platform" NOT NULL DEFAULT 'SLEEPER',
    "platformLeagueId" TEXT NOT NULL,
    "tradeAlerts" BOOLEAN NOT NULL DEFAULT true,
    "waiverAlerts" BOOLEAN NOT NULL DEFAULT true,
    "injuryAlerts" BOOLEAN NOT NULL DEFAULT true,
    "lineupReminders" BOOLEAN NOT NULL DEFAULT true,
    "timezone" TEXT NOT NULL DEFAULT 'America/New_York',

    CONSTRAINT "guild_configs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_notification_preferences" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "discordUserId" TEXT NOT NULL,
    "dmTradeAlerts" BOOLEAN NOT NULL DEFAULT false,
    "dmLineupReminders" BOOLEAN NOT NULL DEFAULT true,
    "dmInjuryAlerts" BOOLEAN NOT NULL DEFAULT false,
    "sleeperUserId" TEXT,
    "yahooUserId" TEXT,
    "espnUserId" TEXT,

    CONSTRAINT "user_notification_preferences_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "platform_accounts_platform_platformId_key" ON "platform_accounts"("platform", "platformId");

-- CreateIndex
CREATE UNIQUE INDEX "leagues_platform_platformLeagueId_season_key" ON "leagues"("platform", "platformLeagueId", "season");

-- CreateIndex
CREATE UNIQUE INDEX "league_members_leagueId_rosterSlot_key" ON "league_members"("leagueId", "rosterSlot");

-- CreateIndex
CREATE UNIQUE INDEX "league_members_leagueId_userId_key" ON "league_members"("leagueId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "players_nflverseId_key" ON "players"("nflverseId");

-- CreateIndex
CREATE UNIQUE INDEX "players_sleeperId_key" ON "players"("sleeperId");

-- CreateIndex
CREATE UNIQUE INDEX "players_yahooId_key" ON "players"("yahooId");

-- CreateIndex
CREATE UNIQUE INDEX "players_espnId_key" ON "players"("espnId");

-- CreateIndex
CREATE INDEX "players_position_team_idx" ON "players"("position", "team");

-- CreateIndex
CREATE UNIQUE INDEX "rosters_memberId_week_season_key" ON "rosters"("memberId", "week", "season");

-- CreateIndex
CREATE UNIQUE INDEX "roster_players_rosterId_playerId_key" ON "roster_players"("rosterId", "playerId");

-- CreateIndex
CREATE UNIQUE INDEX "matchups_leagueId_week_season_homeTeamSlot_awayTeamSlot_key" ON "matchups"("leagueId", "week", "season", "homeTeamSlot", "awayTeamSlot");

-- CreateIndex
CREATE INDEX "transactions_leagueId_createdAt_idx" ON "transactions"("leagueId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "guild_configs_guildId_key" ON "guild_configs"("guildId");

-- CreateIndex
CREATE INDEX "guild_configs_platformLeagueId_idx" ON "guild_configs"("platformLeagueId");

-- CreateIndex
CREATE UNIQUE INDEX "user_notification_preferences_discordUserId_key" ON "user_notification_preferences"("discordUserId");

-- AddForeignKey
ALTER TABLE "platform_accounts" ADD CONSTRAINT "platform_accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "league_members" ADD CONSTRAINT "league_members_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "league_members" ADD CONSTRAINT "league_members_leagueId_fkey" FOREIGN KEY ("leagueId") REFERENCES "leagues"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rosters" ADD CONSTRAINT "rosters_leagueId_fkey" FOREIGN KEY ("leagueId") REFERENCES "leagues"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rosters" ADD CONSTRAINT "rosters_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "league_members"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roster_players" ADD CONSTRAINT "roster_players_rosterId_fkey" FOREIGN KEY ("rosterId") REFERENCES "rosters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roster_players" ADD CONSTRAINT "roster_players_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matchups" ADD CONSTRAINT "matchups_leagueId_fkey" FOREIGN KEY ("leagueId") REFERENCES "leagues"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_leagueId_fkey" FOREIGN KEY ("leagueId") REFERENCES "leagues"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction_adds" ADD CONSTRAINT "transaction_adds_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "transactions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction_drops" ADD CONSTRAINT "transaction_drops_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "transactions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
