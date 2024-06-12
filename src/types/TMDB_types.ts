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
  genres: InfoGenre[];
}

interface InfoGenre {
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

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: InfoGenre[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number | null;
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  credits: Credits;
}

interface CastMember {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

interface Credits {
  cast: CastMember[];
}

export interface PersonDetails {
  id: number;
  profile_path: string;
  biography: string;
  birthday: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  movie_credits: CreditsPerson;
}

interface CreditsPerson {
  cast: Cast[];
}

interface Cast {
  id: number;
  title: string;
}
