import type { NextAuthOptions } from "next-auth";
import SpotifyProvider from 'next-auth/providers/spotify'; 
// Using OAuth Client Credentials flow 

if (!process.env.SPOTIFY_CLIENT_ID) {
  throw new Error("SPOTIFY_CLIENT_ID is missing");
}

if (!process.env.SPOTIFY_CLIENT_SECRET) {
  throw new Error("Missing SPOTIFY_CLIENT_SECRET is missing");
}

// Need to init Spotify Provider first, then import it inside providers array
const spotifyProvider = SpotifyProvider({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET
});
const authURL = new URL("https://accounts.spotify.com/authorize");

const scopes = [
  "user-read-email",
  "user-read-private",
  "user-read-playback-state",
  "user-modify-playback-state",
  "playlist-read-private",
];

authURL.searchParams.append("scope", scopes.join(" "));
spotifyProvider.authorization = authURL.toString();

export const authOptions: NextAuthOptions = {
  providers: [
    spotifyProvider
  ],
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET,
}
