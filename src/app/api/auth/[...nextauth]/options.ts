import type { NextAuthOptions } from "next-auth";
import SpotifyProvider from 'next-auth/providers/spotify'; 
// Using OAuth Client Credentials flow 

if (!process.env.SPOTIFY_CLIENT_ID) {
  throw new Error("SPOTIFY_CLIENT_ID is missing");
}

if (!process.env.SPOTIFY_CLIENT_SECRET) {
  throw new Error("Missing SPOTIFY_CLIENT_SECRET is missing");
}

export const authOptions: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET
    })
  ],
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET,
}
