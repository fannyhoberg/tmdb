import axios from "axios";
import { Genre, MovieResults } from "../types/TMDB_types";

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
