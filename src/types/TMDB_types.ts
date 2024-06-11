export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieResults {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Genre {
  id: number;
  name: string;
}

interface MovieDates {
  maximum: string;
  minimum: string;
}

export interface NowPlayingResults {
  dates: MovieDates;
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface TopRatedResults {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface TrendingResults {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
