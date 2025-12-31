import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { genericOAuth } from 'better-auth/plugins';
import { prisma } from '@fantasy/database';

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),

  trustedOrigins: [process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'],

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },

  plugins: [
    genericOAuth({
      config: [
        {
          providerId: 'yahoo',
          clientId: process.env.YAHOO_CLIENT_ID!,
          clientSecret: process.env.YAHOO_CLIENT_SECRET!,
          authorizationUrl: 'https://api.login.yahoo.com/oauth2/request_auth',
          tokenUrl: 'https://api.login.yahoo.com/oauth2/get_token',
          scopes: ['openid', 'profile', 'email', 'fspt-r'],
          getUserInfo: async tokens => {
            const response = await fetch('https://api.login.yahoo.com/openid/v1/userinfo', {
              headers: {
                Authorization: `Bearer ${tokens.accessToken}`,
              },
            });
            const profile = await response.json();
            return {
              id: profile.sub,
              email: profile.email,
              name: profile.name,
              image: profile.picture,
              emailVerified: profile.email_verified ?? false,
            };
          },
        },
      ],
    }),
  ],

  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // Update session if older than 1 day
  },
});

export type Auth = typeof auth;
