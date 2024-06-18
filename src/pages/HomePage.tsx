import { useQuery } from "@tanstack/react-query";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import useTheme from "../hooks/useTheme";

import { getGenres } from "../services/TMDB_API";

const HomePage = () => {
  const { data, error, isError, isSuccess } = useQuery({
    queryKey: ["genres"],
    queryFn: getGenres,
  });

  const navigate = useNavigate();

  const { darkMode } = useTheme();

  return (
    <>
      <div className="button-container mt-4">
        <div>
          <div className="mt-5">
            <h2>Categories</h2>
          </div>
          <div>
            <Button
              onClick={() => navigate("/now-playing")}
              className={
                darkMode
                  ? "custom-button-homepage-darkmode"
                  : "custom-button-homepage-lightmode"
              }
            >
              Now playing
            </Button>
            <Button
              onClick={() => navigate("/trending")}
              className={
                darkMode
                  ? "custom-button-homepage-darkmode"
                  : "custom-button-homepage-lightmode"
              }
            >
              Trending
            </Button>
            <Button
              onClick={() => navigate("/top-rated")}
              className={
                darkMode
                  ? "custom-button-homepage-darkmode"
                  : "custom-button-homepage-lightmode"
              }
            >
              Top rated
            </Button>
          </div>
        </div>
        <div className="mt-5">
          <h2>All genres</h2>
        </div>
        {isError && (
          <div className="d-flex justify-content-center">{error.message}</div>
        )}

        {isSuccess && (
          <>
            <div>
              {data.genres.map((res) => (
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
