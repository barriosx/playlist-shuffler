'use client';

import { Page, SimplifiedPlaylist, SpotifyApi } from "@spotify/web-api-ts-sdk";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import sdk from '@/context/spotify-client-provider';

export default function Playlists() {
  console.log("Playlists Component");
  
  return (
    <article className="h-96">
      <UserPlaylists sdk={sdk} />
    </article>
  )  
} 

function UserPlaylists({ sdk }: { sdk: SpotifyApi }) {
  const session = useSession();
  console.log(session);
  const [userPlaylists, setUserPlaylists] = useState<SimplifiedPlaylist[]>([] as SimplifiedPlaylist[])
  useEffect(() => {
    (async () => {      
      if (session.status == 'authenticated') {
        const {items} = await sdk.currentUser.playlists.playlists(10); 
        setUserPlaylists(items);
      }
    })();
  }, [session, sdk])

  const playlists = userPlaylists.map((playlist, index) => (
    <div className="flex mt-2 items-center rounded-lg bg-white dark:bg-slate-700 p-2" key={index}>
      <img src={playlist.images[0].url} className="w-10 h-10 " alt="Playlist Image" />
      <div className="flex-col ml-4">
        <p className="font-bold text-sm">{playlist.name}</p>
      </div>
    </div>
  ));

  return (
    <>
      {playlists}
    </>
  )
}