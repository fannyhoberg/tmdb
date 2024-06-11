import axios from "axios";
import {
  Genre,
  MovieResults,
  NowPlayingResults,
  TopRatedResults,
  TrendingResults,
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

// get all movies
export const getMovies = async () => {
  const res = await instance.get<MovieResults>(
    `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity`
  );
  return res.data;
};

// get all genres
export const getGenres = async () => {
  const res = await instance.get<Genre>(`/genre/movie/list`);
  return res.data;
};

// get now playing
export const getNowPlaying = async () => {
  const res = await instance.get<NowPlayingResults>(`/movie/now_playing`);
  return res.data;
};

// get top rated
export const getTopRated = async () => {
  const res = await instance.get<TopRatedResults>(`/movie/top_rated`);
  return res.data;
};

// get trending movies
export const getTrending = async () => {
  const res = await instance.get<TrendingResults>(`/trending/movie/day`);
  return res.data;
};
