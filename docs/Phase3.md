Phase 3: Yahoo & ESPN Platform Integration (Weeks 9-14)
Goal: Extend platform support to Yahoo (OAuth 2.0) and ESPN (cookie-based auth).
3.1 Yahoo Fantasy API Integration
Yahoo uses OAuth 2.0 authentication with read/write access capabilities.
Implementation Steps

1. Register application on Yahoo Developer Network with Fantasy Sports scope
2. Implement OAuth 2.0 flow with token refresh handling
3. Use yahoo-fantasy npm package (actively maintained, OAuth 2.0 support)
4. Handle XML/JSON response parsing (Yahoo returns mixed formats)
   Key Endpoints
   • /fantasy/v2/users;use_login=1/games;game_keys=nfl/teams
   • /fantasy/v2/league/{league_key}/standings
   • /fantasy/v2/league/{league_key}/transactions
   3.2 ESPN Fantasy API Integration
   ESPN requires cookie-based authentication (espn_s2 and SWID) for private leagues.
   Authentication Approach
   • Cookie Extraction: Guide users to Chrome DevTools → Application → Cookies
   • Security: Encrypt cookies at rest, use ephemeral sessions
   • Recommended Library: espn-fantasy-football-api (supports v3 API)
   API Views for Rich Data
   • mMatchup - Weekly matchup details
   • mRoster - Current roster configurations
   • mTeam - Team metadata and standings
   • kona_player_info - Player statistics
