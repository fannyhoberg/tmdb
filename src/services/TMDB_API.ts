import axios from "axios";
import {
  Genre,
  MovieDetails,
  MovieResults,
  PersonDetails,
} from "../types/TMDB_types";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    language: "en-US",
  },
});

// get movie by ID
export const getMovie = async (id: number) => {
  const res = await instance.get<MovieDetails>(
    `/movie/${id}?include_adult=false&append_to_response=credits`
  );
  return res.data;
};

// get all genres
export const getGenres = async () => {
  const res = await instance.get<Genre>(`/genre/movie/list`);
  return res.data;
};

// get genre by ID
export const getGenre = async (id: number, page: number) => {
  const res = await instance.get<MovieResults>(
    `/discover/movie?with_genres=${id}&page=${page}&include_adult=false`
  );
  return res.data;
};

// get now playing
export const getNowPlaying = async () => {
  const res = await instance.get<MovieResults>(
    `/movie/now_playing?include_adult=false&sort_by=popularity.desc&region=US`
  );
  return res.data;
};

// get top rated
export const getTopRated = async () => {
  const res = await instance.get<MovieResults>(
    `/movie/top_rated?include_adult=false&region=US`
  );
  return res.data;
};

// get trending movies
export const getTrending = async () => {
  const res = await instance.get<MovieResults>(
    `/trending/movie/week?include_adult=false&region=US`
  );
  return res.data;
};

// get person by ID
export const getPerson = async (id: number) => {
  const res = await instance.get<PersonDetails>(
    `/person/${id}?append_to_response=movie_credits`
  );
  return res.data;
};
