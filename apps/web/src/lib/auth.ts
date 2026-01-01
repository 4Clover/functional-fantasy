import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { genericOAuth } from 'better-auth/plugins';
import { prisma } from '@fantasy/database';
import type { GenericOAuthConfig } from 'better-auth/plugins/generic-oauth';

// Build social providers config conditionally
const socialProviders: Record<string, { clientId: string; clientSecret: string }> = {};

if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  socialProviders.google = {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  };
}

// Build generic OAuth providers conditionally
const genericOAuthProviders: GenericOAuthConfig[] = [];

if (process.env.YAHOO_CLIENT_ID && process.env.YAHOO_CLIENT_SECRET) {
  genericOAuthProviders.push({
    providerId: 'yahoo',
    clientId: process.env.YAHOO_CLIENT_ID,
    clientSecret: process.env.YAHOO_CLIENT_SECRET,
    discoveryUrl: 'https://api.login.yahoo.com/.well-known/openid-configuration',
    scopes: ['openid', 'profile', 'email', 'fspt-r'],
  });
}

if (process.env.DISCORD_CLIENT_ID && process.env.DISCORD_CLIENT_SECRET) {
  genericOAuthProviders.push({
    providerId: 'discord',
    clientId: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    authorizationUrl: 'https://discord.com/api/oauth2/authorize',
    tokenUrl: 'https://discord.com/api/oauth2/token',
    scopes: ['identify', 'email'],
    getUserInfo: async (tokens) => {
      const response = await fetch('https://discord.com/api/users/@me', {
        headers: {
          Authorization: `Bearer ${tokens.accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Discord profile fetch failed: ${response.status}`);
      }

      const profile = await response.json();

      return {
        id: profile.id,
        email: profile.email,
        name: profile.username,
        image: profile.avatar
          ? `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png`
          : undefined,
        emailVerified: profile.verified ?? false,
      };
    },
  });
}

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),

  trustedOrigins: [process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'],

  socialProviders,

  plugins: genericOAuthProviders.length > 0 ? [genericOAuth({ config: genericOAuthProviders })] : [],

  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // Update session if older than 1 day
  },
});

export type Auth = typeof auth;
