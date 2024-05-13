import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Spotify Playlist Shuffler</h2>       
        </div>
    </header>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1></h1>
      <p>Play your music and keep your playlists organized.</p>
    </main>
    </>
  );
}
