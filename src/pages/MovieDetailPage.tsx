import { useQuery } from "@tanstack/react-query";
import { getMovie } from "../services/TMDB_API";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect } from "react";

const MovieDetailPage = () => {
  const { id } = useParams();
  const movieId = Number(id);

  const navigate = useNavigate();

  const { data, error, isError, isSuccess } = useQuery({
    queryKey: ["movie-details"],
    queryFn: () => getMovie(movieId),
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
        <>
          <div>
            <Button variant="secondary" onClick={() => navigate(-1)}>
              Back to previous page
            </Button>
          </div>

          <div className="container-cards-details">
            <div className="custom-card-details" key={data.id}>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                  alt={data.title}
                />
              </div>
              <h2>{data.title}</h2>
              <p>
                <strong>Release date:</strong> {data.release_date}
              </p>
              <p>
                <strong>Overview:</strong> {data.overview}
              </p>
              <p>
                <strong>Origin country:</strong> {data.origin_country}
              </p>
              <p>
                <strong>Original language:</strong> {data.original_language}
              </p>
              <p>
                <strong>Runtime:</strong> {data.runtime}
              </p>
              <p>
                <strong>Genres:</strong>
              </p>
              {data.genres.map((res) => (
                <p key={res.id}>{res.name}</p>
              ))}
              <p>
                <strong>Actors:</strong>
              </p>
              {data.credits.cast
                .filter((res) => res.known_for_department === "Acting")
                .map((res) => (
                  <p
                    className="custom-link"
                    onClick={() => navigate(`/person/${res.id}`)}
                    key={res.id}
                  >
                    {res.name}
                  </p>
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetailPage;
