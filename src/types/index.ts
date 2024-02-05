/**
 * Games Response
 */
export type RequestResponse<T> = {
  error: string;
  limit: number;
  number_of_page_results: number;
  number_of_total_results: number;
  offset: number;
  results: T[];
  status_code: number;
  version: string;
};

/**
 * Game
 */
export type Game = {
  articles_api_url: string;
  deck: string;
  description: string;
  franchises: Franchise[];
  genres: Genre[];
  id: number;
  image: Image;
  images_api_url: string;
  name: string;
  release_date: string;
  releases_api_url: string;
  reviews_api_url: string;
  site_detail_url: string;
  themes: Theme[];
  videos_api_url: string;
};

/**
 * Franchise
 */
export type Franchise = {
  name: string;
};

/**
 * Genre
 */
export type Genre = {
  name: string;
};

/**
 * Image
 */
export type Image = {
  original: string;
  screen_tiny: string;
  square_small: string;
  square_tiny: string;
};

/**
 * Theme
 */
export type Theme = {
  name: string;
};

export type PageProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
