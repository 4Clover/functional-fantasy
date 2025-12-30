import { Events, type Client } from 'discord.js';

export function registerReadyHandler(client: Client) {
  client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
    console.log(`Serving ${readyClient.guilds.cache.size} guilds`);
  });
}
