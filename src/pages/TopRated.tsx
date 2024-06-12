import { useQuery } from "@tanstack/react-query";
import { getTopRated } from "../services/TMDB_API";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const TopRated = () => {
  const { data, error, isError, isSuccess } = useQuery({
    queryKey: ["toprated"],
    queryFn: getTopRated,
  });

  const navigate = useNavigate();

  return (
    <>
      {isError && (
        <div className="d-flex justify-content-center">{error.message}</div>
      )}

      {isSuccess && (
        <div className="center-container">
          <h1>Top rated</h1>
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
                <p>Vote average: {res.vote_average}</p>
                <Button onClick={() => navigate(`/movie/${res.id}`)}>
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

export default TopRated;
