import { Game, RequestResponse } from "@/types";
import Image from "next/image";

export async function getGame(id: string): Promise<Game> {
  const { API_URL, API_KEY } = process.env;
  const searchParams = new URLSearchParams();
  searchParams.set("api_key", API_KEY || "");
  searchParams.set("format", "json");
  searchParams.set("filter", `id:${id}`);

  const res = await fetch(`${API_URL}/games?${searchParams}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`${res.status}`);
  }

  const data: RequestResponse<Game> = await res.json();

  return data.results[0];
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const game = await getGame(params.id);
  const { deck, name } = game;

  return {
    title: name,
    description: `${deck} - Play ${name} now!`,
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const game = await getGame(params.id);
  const { image, description, site_detail_url, name } = game;
  const genres = game.genres.map((genre, i) => {
    return (
      <span key={i} className="text-xs rounded-xl px-2 py-1 bg-zinc-800">
        {genre.name}
      </span>
    );
  });
  return (
    <main className="flex sm:flex-row flex-col gap-10 mx-5 items-center sm:items-start">
      <Image
        className="w-96 aspect-auto"
        width={800}
        height={600}
        src={image.original}
        alt={`${name} cover`}
      />
      <figure className="flex flex-col gap-2">
        <h2 className="font-bold text-4xl">{name}</h2>
        <p className="max-w-[600px] text-sm text-zinc-300 mt-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-1">{genres}</div>
        <a
          className="bg-orange-600 self-start px-4 py-2 rounded-lg mt-10 hover:brightness-75 transition"
          href={site_detail_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to official website
        </a>
      </figure>
    </main>
  );
}
