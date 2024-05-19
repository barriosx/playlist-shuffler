'use client';

import { Session } from "next-auth";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";

export default function Header() {
  const session = useSession();
  console.log(`%cHEADER ${session.data?.expires}`, 'color: blue');

  return (
    <header className="flex items-center justify-between px-8 py-3">
      <h2 className="text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight">Spotify Playlist Shuffler</h2>
      <FtuxHeaderItem session={session}></FtuxHeaderItem>
    </header>
  )
}

function FtuxHeaderItem({session}: { session: {data: Session | undefined | null; status: "loading" | "authenticated" | "unauthenticated"}} ) {
  if ((!session.data) || session.status !== "authenticated") {
    return (
      <button type="button" className="rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600
      "
      onClick={() => signIn("spotify")}
      >Sign in with Spotify</button>
    );
  } else {
    return (
      <div className="flex overflow-hidden sm:text-2xl items-center">
        <div className="inline-block relative h-7 w-7">
          <Image className="rounded-full" src={(session.data.user?.image ?? '') as string} fill={true} alt="Profile Picture" />
        </div>
        <span className="ml-1 text-sm font-bold">{session.data.user?.name}</span>
      </div>
    );
  }
}