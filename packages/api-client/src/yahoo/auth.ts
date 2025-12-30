export interface YahooTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn?: number;
}

interface YahooTokenResponse {
  access_token: string;
  refresh_token: string;
  expires_in?: number;
}

export type TokenRefreshCallback = (tokens: YahooTokens) => Promise<void>;

export class YahooAuthService {
  constructor(
    private clientId: string,
    private clientSecret: string,
    private redirectUri: string,
    private onTokenRefresh?: TokenRefreshCallback
  ) {}

  getAuthUrl(): string {
    const params = new URLSearchParams({
      client_id: this.clientId,
      redirect_uri: this.redirectUri,
      response_type: 'code',
      scope: 'openid fspt-r',
    });
    return `https://api.login.yahoo.com/oauth2/request_auth?${params.toString()}`;
  }

  async exchangeCodeForTokens(code: string): Promise<YahooTokens> {
    const params = new URLSearchParams({
      client_id: this.clientId,
      client_secret: this.clientSecret,
      redirect_uri: this.redirectUri,
      code,
      grant_type: 'authorization_code',
    });

    const response = await fetch('https://api.login.yahoo.com/oauth2/get_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params,
    });

    if (!response.ok) {
      throw new Error(`Yahoo token exchange failed: ${response.status}`);
    }

    const data = (await response.json()) as YahooTokenResponse;
    return {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      expiresIn: data.expires_in,
    };
  }

  async refreshAccessToken(refreshToken: string): Promise<YahooTokens> {
    const params = new URLSearchParams({
      client_id: this.clientId,
      client_secret: this.clientSecret,
      refresh_token: refreshToken,
      grant_type: 'refresh_token',
    });

    const response = await fetch('https://api.login.yahoo.com/oauth2/get_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params,
    });

    if (!response.ok) {
      throw new Error(`Yahoo token refresh failed: ${response.status}`);
    }

    const data = (await response.json()) as YahooTokenResponse;
    const tokens: YahooTokens = {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      expiresIn: data.expires_in,
    };

    if (this.onTokenRefresh) {
      await this.onTokenRefresh(tokens);
    }

    return tokens;
  }
}
