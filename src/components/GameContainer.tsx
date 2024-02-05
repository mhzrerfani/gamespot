"use client";

import GameCard from "@/components/GameCard";
import { Game, RequestResponse } from "@/types";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Years from "@/components/YearsFilter";

export default function GameContainer() {
  const [games, setGames] = useState<Game[]>([]);
  const [year, setYear] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30;

  function selectYear(year: number) {
    setYear(year);
    setGames([]);
    setCurrentPage(1);
  }

  useEffect(() => {
    const fetchData = async () => {
      const searchParams = new URLSearchParams();
      searchParams.set("page", currentPage.toString());
      searchParams.set("limit", itemsPerPage.toString());

      if (year) {
        searchParams.set(
          "filter",
          `release_date:${year}/01/01|${year + 1}/01/01`
        );
      }

      const res = await fetch(`./api?${searchParams}`);
      const data: RequestResponse<Game> = await res.json();

      setGames((prevGames) => [...prevGames, ...data.results]);
    };

    fetchData();
  }, [currentPage, year]);

  useEffect(() => {
    const checkScrollPosition = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return;
      setCurrentPage((prevPage) => prevPage + 1);
    };

    window.addEventListener("scroll", checkScrollPosition);
    return () => window.removeEventListener("scroll", checkScrollPosition);
  }, []);

  return (
    <div>
      <Years onSelectYear={selectYear} />
      <div
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(208px, 1fr))" }}
        className="grid max-w-[1950px] w-full grid-flow-row place-items-start items-stretch justify-start gap-y-8 gap-x-3 px-0 pb-4 xs:px-5 sm:gap-5 pt-4"
      >
        {games.map((game) => {
          return <GameCard {...game} key={self.crypto.randomUUID()} />;
        })}
      </div>
      <Loading />
    </div>
  );
}
