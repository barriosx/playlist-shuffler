import Header from "@/components/header";
import Playlists from "@/components/playlists";

export default function Home() {

  return (
    <div className="h-dvh flex-col">
      <Header></Header>
      <main className="flex items-center justify-between px-8">
        <Playlists></Playlists>
        <p>Play your music and keep your playlists organized.</p>
      </main>
    </div>
  );
}
