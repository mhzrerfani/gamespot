import { Game, RequestResponse } from "@/types";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { API_URL, API_KEY } = process.env;
  const searchParams = request.nextUrl.searchParams;

  searchParams.set("api_key", API_KEY || "");
  searchParams.set("format", "json");

  const res = await fetch(`${API_URL}/games?${searchParams}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`${res.status}`);
  }

  let gamesResponse: RequestResponse<Game> = await res.json();

  return Response.json(gamesResponse);
}
