import Header from "@/components/header";
import Playlists from "@/components/playlists";

export default function Home() {

  return (
    <>
      <Header></Header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Playlists></Playlists>
        <p>Play your music and keep your playlists organized.</p>
      </main>
    </>
  );
}
