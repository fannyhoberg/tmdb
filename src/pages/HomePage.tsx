import { useQuery } from "@tanstack/react-query";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import useTheme from "../hooks/useTheme";

import {
  getGenres,
  getNowPlaying,
  getTopRated,
  getTrending,
} from "../services/TMDB_API";

const HomePage = () => {
  const {
    data: nowplayingData,
    error: nowplayingError,
    isError: nowplayingisError,
    isSuccess: nowplayingisSuccess,
  } = useQuery({
    queryKey: ["nowplaying"],
    queryFn: getNowPlaying,
  });

  const {
    data: trendingData,
    error: trendingError,
    isError: trendingisError,
    isSuccess: trendingisSuccess,
  } = useQuery({
    queryKey: ["trending"],
    queryFn: getTrending,
  });

  const {
    data: topratedData,
    error: topratedError,
    isError: topratedisError,
    isSuccess: topratedisSuccess,
  } = useQuery({
    queryKey: ["toprated"],
    queryFn: getTopRated,
  });

  const {
    data: genresData,
    error: genresError,
    isError: genresisError,
    isSuccess: genresisSuccess,
  } = useQuery({
    queryKey: ["genres"],
    queryFn: getGenres,
  });

  const navigate = useNavigate();

  const { darkMode } = useTheme();

  return (
    <>
      <div>
        <h1>Welcome to The Movie Database</h1>
        <p>
          Explore the latest releases in cinema or get your old classics. <br />{" "}
          Find out which films your favourite actor stars in and browse films
          based on genre!
        </p>
      </div>
      <div>
        {nowplayingisError && (
          <div className="d-flex justify-content-center">
            {nowplayingError.message}
          </div>
        )}

        {nowplayingisSuccess && (
          <>
            <h2 className="mt-5">Now Playing</h2>
            <div className="scrollmenu">
              <div className="scroll-card-container">
                {nowplayingData.results.slice(0, 10).map((res) => (
                  <div className="scroll-custom-card" key={res.id}>
                    {res.poster_path && (
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${res.poster_path}`}
                        alt={res.title}
                      />
                    )}
                    <h2>{res.title}</h2>
                    <p>Release date: {res.release_date}</p>
                    <Button onClick={() => navigate(`/movie/${res.id}`)}>
                      Read more
                    </Button>
                  </div>
                ))}
                <div className="scroll-custom-card d-flex justify-content-center align-items-center">
                  <Button
                    className="custom-button-homepage-lightmode"
                    onClick={() => navigate("/now-playing")}
                  >
                    See all
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}

        {trendingisError && (
          <div className="d-flex justify-content-center">
            {trendingError.message}
          </div>
        )}

        {trendingisSuccess && (
          <>
            <h2 className="mt-5">Trending this week</h2>
            <div className="scrollmenu">
              <div className="scroll-card-container">
                {trendingData.results.slice(0, 10).map((res) => (
                  <div className="scroll-custom-card" key={res.id}>
                    {res.poster_path && (
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${res.poster_path}`}
                        alt={res.title}
                      />
                    )}
                    <h2>{res.title}</h2>
                    <p>Release date: {res.release_date}</p>
                    <p>Popularity: {res.popularity}</p>
                    <Button onClick={() => navigate(`/movie/${res.id}`)}>
                      Read more
                    </Button>
                  </div>
                ))}
                <div className="scroll-custom-card d-flex justify-content-center align-items-center">
                  <Button
                    className="custom-button-homepage-lightmode"
                    onClick={() => navigate("/trending")}
                  >
                    See all
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}

        {topratedisError && (
          <div className="d-flex justify-content-center">
            {topratedError.message}
          </div>
        )}

        {topratedisSuccess && (
          <>
            <h2 className="mt-5">Top rated</h2>
            <div className="scrollmenu">
              <div className="scroll-card-container">
                {topratedData.results.slice(0, 10).map((res) => (
                  <div className="scroll-custom-card" key={res.id}>
                    {res.poster_path && (
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${res.poster_path}`}
                        alt={res.title}
                      />
                    )}
                    <h2>{res.title}</h2>
                    <p>Release date: {res.release_date}</p>
                    <p>Vote average: {res.vote_average}</p>
                    <Button onClick={() => navigate(`/movie/${res.id}`)}>
                      Read more
                    </Button>
                  </div>
                ))}
                <div className="scroll-custom-card d-flex justify-content-center align-items-center">
                  <Button
                    className="custom-button-homepage-lightmode"
                    onClick={() => navigate("/top-rated")}
                  >
                    See all
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}

        {genresisError && (
          <div className="d-flex justify-content-center">
            {genresError.message}
          </div>
        )}

        {genresisSuccess && (
          <>
            <h2 className="mt-5">All genres</h2>
            <div>
              {genresData.genres.map((res) => (
                <Button
                  key={res.id}
                  className={
                    darkMode
                      ? "custom-button-homepage-darkmode"
                      : "custom-button-homepage-lightmode"
                  }
                  onClick={() => navigate(`/genre/${res.id}`)}
                >
                  {res.name}
                </Button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default HomePage;
