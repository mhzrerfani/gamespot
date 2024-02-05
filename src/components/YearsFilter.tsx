"use client";

import { useState } from "react";

export default function Genres({
  onSelectYear,
}: {
  onSelectYear: (genre: number) => void;
}) {
  const [selectedYear, setYear] = useState(0);
  const YEARS = new Array(30).fill(0).map((_, i) => {
    const currentYear = new Date().getFullYear();
    return currentYear - i;
  });

  const years = YEARS.map((year) => {
    return (
      <button
        className={`px-2 py-1 rounded-lg  text-orange-200 transition ${
          selectedYear === year
            ? "bg-orange-700"
            : "border border-orange-700 hover:bg-orange-900"
        }`}
        key={year}
        onClick={() => {
          onSelectYear(year);
          setYear(year);
        }}
      >
        {year}
      </button>
    );
  });

  return <div className="flex items-center gap-1 flex-wrap">{years}</div>;
}
