import type { Metadata } from "next";
import GameContainer from "@/components/GameContainer";

export const metadata: Metadata = {
  title: "Home | Gamespot",
  description: "Here you see all games",
};

export default function Page() {
  return (
    <main className="flex flex-col relative">
      <header className="flex items-center justify-center py-5">
        <h1 className="font-bold text-4xl text-orange-400">Gamespot</h1>
      </header>
      <GameContainer />
    </main>
  );
}
