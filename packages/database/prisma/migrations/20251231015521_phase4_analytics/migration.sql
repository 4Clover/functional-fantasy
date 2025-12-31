-- CreateEnum
CREATE TYPE "ValuationSource" AS ENUM ('KTC_DYNASTY', 'KTC_REDRAFT', 'DYNASTY_PROCESS');

-- CreateEnum
CREATE TYPE "ValueTrend" AS ENUM ('RISING', 'STABLE', 'FALLING');

-- CreateEnum
CREATE TYPE "BaselineType" AS ENUM ('STRICT', 'WAIVER');

-- CreateEnum
CREATE TYPE "SuperlativeType" AS ENUM ('BEST_MANAGER', 'WORST_MANAGER', 'LUCKIEST_TEAM', 'UNLUCKIEST_TEAM', 'MOST_CONSISTENT', 'BOOM_BUST', 'HIGHEST_SCORER', 'WEEKLY_MVP', 'WEEKLY_LVP');

-- CreateTable
CREATE TABLE "player_valuations" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "playerId" TEXT NOT NULL,
    "source" "ValuationSource" NOT NULL,
    "scrapedAt" TIMESTAMP(3) NOT NULL,
    "baseValue" INTEGER NOT NULL,
    "tier" INTEGER,
    "trend" "ValueTrend" NOT NULL DEFAULT 'STABLE',
    "weeklyDelta" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "player_valuations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "valuation_history" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "playerId" TEXT NOT NULL,
    "source" "ValuationSource" NOT NULL,
    "value" INTEGER NOT NULL,
    "recordedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "valuation_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "league_settings" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "leagueId" TEXT NOT NULL,
    "isSuperFlex" BOOLEAN NOT NULL DEFAULT false,
    "tePremium" DECIMAL(3,2) NOT NULL DEFAULT 0,
    "pprValue" DECIMAL(3,2) NOT NULL DEFAULT 1,
    "rosterSize" INTEGER NOT NULL DEFAULT 15,
    "benchSpots" INTEGER NOT NULL DEFAULT 6,
    "startingSlots" JSONB NOT NULL DEFAULT '{"QB": 1, "RB": 2, "WR": 2, "TE": 1, "FLEX": 1}',

    CONSTRAINT "league_settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "player_weekly_stats" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "playerId" TEXT NOT NULL,
    "season" INTEGER NOT NULL,
    "week" INTEGER NOT NULL,
    "points" DECIMAL(10,2) NOT NULL,
    "projected" DECIMAL(10,2),

    CONSTRAINT "player_weekly_stats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "player_season_stats" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "playerId" TEXT NOT NULL,
    "season" INTEGER NOT NULL,
    "totalPoints" DECIMAL(10,2) NOT NULL,
    "gamesPlayed" INTEGER NOT NULL DEFAULT 0,
    "avgPoints" DECIMAL(10,2) NOT NULL,
    "stdDeviation" DECIMAL(10,4) NOT NULL,
    "vorpStrict" DECIMAL(10,2),
    "vorpWaiver" DECIMAL(10,2),
    "war" DECIMAL(10,4),

    CONSTRAINT "player_season_stats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "position_baselines" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "season" INTEGER NOT NULL,
    "position" "Position" NOT NULL,
    "baselineType" "BaselineType" NOT NULL,
    "teamCount" INTEGER NOT NULL,
    "baselineRank" INTEGER NOT NULL,
    "baselineValue" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "position_baselines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "team_weekly_analytics" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "leagueId" TEXT NOT NULL,
    "memberId" TEXT NOT NULL,
    "season" INTEGER NOT NULL,
    "week" INTEGER NOT NULL,
    "actualScore" DECIMAL(10,2) NOT NULL,
    "optimalScore" DECIMAL(10,2) NOT NULL,
    "lineupEfficiency" DECIMAL(5,2) NOT NULL,
    "allPlayWins" INTEGER NOT NULL DEFAULT 0,
    "allPlayLosses" INTEGER NOT NULL DEFAULT 0,
    "allPlayTies" INTEGER NOT NULL DEFAULT 0,
    "weeklyRank" INTEGER NOT NULL,

    CONSTRAINT "team_weekly_analytics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "team_season_analytics" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "leagueId" TEXT NOT NULL,
    "memberId" TEXT NOT NULL,
    "season" INTEGER NOT NULL,
    "totalActualScore" DECIMAL(10,2) NOT NULL,
    "totalOptimalScore" DECIMAL(10,2) NOT NULL,
    "avgLineupEfficiency" DECIMAL(5,2) NOT NULL,
    "allPlayWins" INTEGER NOT NULL DEFAULT 0,
    "allPlayLosses" INTEGER NOT NULL DEFAULT 0,
    "allPlayTies" INTEGER NOT NULL DEFAULT 0,
    "allPlayWinPct" DECIMAL(5,4) NOT NULL,
    "expectedWins" DECIMAL(5,2) NOT NULL,
    "actualWins" INTEGER NOT NULL,
    "luckIndex" DECIMAL(6,4) NOT NULL,
    "pointsStdDev" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "team_season_analytics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "league_superlatives" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "leagueId" TEXT NOT NULL,
    "season" INTEGER NOT NULL,
    "week" INTEGER,
    "superlativeType" "SuperlativeType" NOT NULL,
    "memberId" TEXT NOT NULL,
    "value" DECIMAL(10,2) NOT NULL,
    "metadata" JSONB,

    CONSTRAINT "league_superlatives_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "player_valuations_source_scrapedAt_idx" ON "player_valuations"("source", "scrapedAt");

-- CreateIndex
CREATE UNIQUE INDEX "player_valuations_playerId_source_key" ON "player_valuations"("playerId", "source");

-- CreateIndex
CREATE INDEX "valuation_history_playerId_source_recordedAt_idx" ON "valuation_history"("playerId", "source", "recordedAt");

-- CreateIndex
CREATE UNIQUE INDEX "league_settings_leagueId_key" ON "league_settings"("leagueId");

-- CreateIndex
CREATE UNIQUE INDEX "player_weekly_stats_playerId_season_week_key" ON "player_weekly_stats"("playerId", "season", "week");

-- CreateIndex
CREATE UNIQUE INDEX "player_season_stats_playerId_season_key" ON "player_season_stats"("playerId", "season");

-- CreateIndex
CREATE UNIQUE INDEX "position_baselines_season_position_baselineType_teamCount_key" ON "position_baselines"("season", "position", "baselineType", "teamCount");

-- CreateIndex
CREATE UNIQUE INDEX "team_weekly_analytics_memberId_season_week_key" ON "team_weekly_analytics"("memberId", "season", "week");

-- CreateIndex
CREATE UNIQUE INDEX "team_season_analytics_memberId_key" ON "team_season_analytics"("memberId");

-- CreateIndex
CREATE UNIQUE INDEX "team_season_analytics_memberId_season_key" ON "team_season_analytics"("memberId", "season");

-- CreateIndex
CREATE UNIQUE INDEX "league_superlatives_leagueId_season_week_superlativeType_key" ON "league_superlatives"("leagueId", "season", "week", "superlativeType");

-- AddForeignKey
ALTER TABLE "player_valuations" ADD CONSTRAINT "player_valuations_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "players"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "league_settings" ADD CONSTRAINT "league_settings_leagueId_fkey" FOREIGN KEY ("leagueId") REFERENCES "leagues"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player_weekly_stats" ADD CONSTRAINT "player_weekly_stats_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "players"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player_season_stats" ADD CONSTRAINT "player_season_stats_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "players"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_weekly_analytics" ADD CONSTRAINT "team_weekly_analytics_leagueId_fkey" FOREIGN KEY ("leagueId") REFERENCES "leagues"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_weekly_analytics" ADD CONSTRAINT "team_weekly_analytics_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "league_members"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_season_analytics" ADD CONSTRAINT "team_season_analytics_leagueId_fkey" FOREIGN KEY ("leagueId") REFERENCES "leagues"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_season_analytics" ADD CONSTRAINT "team_season_analytics_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "league_members"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "league_superlatives" ADD CONSTRAINT "league_superlatives_leagueId_fkey" FOREIGN KEY ("leagueId") REFERENCES "leagues"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "league_superlatives" ADD CONSTRAINT "league_superlatives_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "league_members"("id") ON DELETE CASCADE ON UPDATE CASCADE;
