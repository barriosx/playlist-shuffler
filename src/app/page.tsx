import Header from "@/components/header";
import Player from "@/components/player";
import Playlists from "@/components/playlists";

export default function Home() {

  return (
    <div className="h-dvh flex-col">
      <Header></Header>
      <main className="flex items-center justify-between px-8">
        <Playlists></Playlists>
        <p>Shuffle Play music across your playlist library</p> 
        <Player/>
      </main>
    </div>
  );
}
