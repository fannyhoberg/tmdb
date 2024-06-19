import { useQuery } from "@tanstack/react-query";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { getTrending } from "../services/TMDB_API";

const TrendingPage = () => {
  const { data, error, isError, isSuccess } = useQuery({
    queryKey: ["trending"],
    queryFn: getTrending,
  });

  const navigate = useNavigate();

  return (
    <>
      {isError && (
        <div className="d-flex justify-content-center">{error.message}</div>
      )}

      {isSuccess && (
        <div className="center-container">
          <h1>Trending</h1>
          <div className="container-cards">
            {data.results.map((res) => (
              <div className="custom-card" key={res.id}>
                {res.poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${res.poster_path}`}
                    alt={res.title}
                  />
                )}
                <h2>{res.title}</h2>
                <p>Release date: {res.release_date}</p>
                <p>Popularity: {res.popularity}</p>
                <Button
                  className="custom-button"
                  onClick={() => navigate(`/movie/${res.id}`)}
                >
                  Read more
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default TrendingPage;
