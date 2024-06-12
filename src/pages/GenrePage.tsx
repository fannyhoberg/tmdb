import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getGenre } from "../services/TMDB_API";
import { useEffect } from "react";
import { Button } from "react-bootstrap";

const GenrePage = () => {
  const { id } = useParams();
  const genreId = Number(id);

  const navigate = useNavigate();

  const { data, error, isError, isSuccess } = useQuery({
    queryKey: ["genre"],
    queryFn: () => getGenre(genreId),
    staleTime: 1000 * 1,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {isError && (
        <div className="d-flex justify-content-center">{error.message}</div>
      )}

      {isSuccess && (
        <div className="center-container">
          <h1>Genre</h1>
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

export default GenrePage;
