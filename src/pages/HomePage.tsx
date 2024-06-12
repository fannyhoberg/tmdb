import { useQuery } from "@tanstack/react-query";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getGenres } from "../services/TMDB_API";

const HomePage = () => {
  const { data, error, isError, isSuccess } = useQuery({
    queryKey: ["genres"],
    queryFn: getGenres,
  });

  const navigate = useNavigate();

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
              className="custom-button-homepage"
            >
              Now playing
            </Button>
            <Button
              onClick={() => navigate("/trending")}
              className="custom-button-homepage"
            >
              Trending
            </Button>
            <Button
              onClick={() => navigate("/top-rated")}
              className="custom-button-homepage"
            >
              Top rated
            </Button>
          </div>
        </div>
        <div className="mt-5">
          <h2>Genres</h2>
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
                  className="custom-button-homepage"
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
