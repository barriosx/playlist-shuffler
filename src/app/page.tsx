'use client';

import { Session } from "next-auth";
import { signIn, useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  console.log(session);
  
  return (
    <>
      <header className="flex items-center justify-between px-24 py-3">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Spotify Playlist Shuffler</h2>       
        <FtuxHeaderItem session={session}></FtuxHeaderItem>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1></h1>
        <p>Play your music and keep your playlists organized.</p>
      </main>
    </>
  );
}

function FtuxHeaderItem({session}: { session: {data: Session | undefined | null; status: "loading" | "authenticated" | "unauthenticated"}} ) {
  if ((!session.data) || session.status !== "authenticated") {
    return (
      <button type="button" className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
      "
      onClick={() => signIn("spotify")}
      >Sign in with Spotify</button>
    );
  } else {
    return (
      <div className="flex overflow-hidden sm:text-2xl">
        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src={(session.data.user?.image ?? '') as string} alt=""></img>
        <span>{session.data.user?.name}</span>
      </div>
    );
  }
}
