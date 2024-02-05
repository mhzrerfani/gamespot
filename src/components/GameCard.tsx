import Link from "next/link";
import { Game } from "../types";
import Image from "next/image";

export default function GameCard(game: Game, key: number | string) {
  const { image, name, description, release_date, id } = game;
  const genres = game.genres.map((genre) => {
    return (
      <span
        key={self.crypto.randomUUID()}
        className="text-xs rounded-xl px-2 py-1 bg-zinc-800"
      >
        {genre.name}
      </span>
    );
  });

  return (
    <Link href={`/games/${id}`}>
      <article
        className="w-full hover:brightness-75 transition flex items-center flex-col p-3 rounded-md"
        key={key}
      >
        <figure>
          <Image
            className="aspect-auto object-cover rounded-md"
            width={400}
            height={400}
            src={image?.square_small || "/game-cover-placeholder.jpg"}
            alt="Game cover"
          />
          <figcaption className="flex flex-col gap-1 mt-2">
            <span className="font-semibold text-sm">{name}</span>
            <p className="text-xs text-zinc-5">
              {release_date.split(" ")[0] || ""}
            </p>
            <p className="text-xs text-zinc-500 line-clamp-3">
              {description || "No description"}
            </p>
            <div className="flex flex-wrap items-center gap-1 justify-self-end">
              {genres}
            </div>
          </figcaption>
        </figure>
      </article>
    </Link>
  );
}
