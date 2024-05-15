import { AuthUser } from "@/interfaces/user";
import type { NextAuthOptions } from "next-auth";
import { Account } from "next-auth";
import { JWT } from "next-auth/jwt";
import SpotifyProvider from 'next-auth/providers/spotify'; 
// Using OAuth Client Credentials flow 

if (!process.env.SPOTIFY_CLIENT_ID) {
  throw new Error("SPOTIFY_CLIENT_ID is missing");
}

if (!process.env.SPOTIFY_CLIENT_SECRET) {
  throw new Error("Missing SPOTIFY_CLIENT_SECRET is missing");
}

// Need to init Spotify Provider first, then import it inside providers array
export const spotifyProvider = SpotifyProvider({
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
  callbacks: {
    async jwt({ token, account }: { token: JWT; account: Account | null }) {
      /*
        Callback fires whenever a session is accessed in the client or at sign in
      */

      if (!account) {
        return token;
      }

      const updatedToken = {
        ...token,
        access_token: account?.access_token,
        token_type: account?.token_type,
        expires_at: account?.expires_at ?? Date.now() / 1000,
        expires_in: (account?.expires_at ?? 0) - Date.now() / 1000,
        refresh_token: account?.refresh_token,
        scope: account?.scope,
        id: account?.providerAccountId,
      };


      return updatedToken;
    },
    async session({ session, token }: { session: any; token: any }) {
      /*
        Callback fires whenever a session is checked. 
        /api/session endpoint, using useSession or getSession
      */

      const user: AuthUser = {
        ...session.user,
        access_token: token.access_token,
        token_type: token.token_type,
        expires_at: token.expires_at,
        expires_in: token.expires_in,
        refresh_token: token.refresh_token,
        scope: token.scope,
        id: token.id,
      };
      session.user = user;
      session.error = token.error;
      
      return session;
    },
  },
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET,
}
