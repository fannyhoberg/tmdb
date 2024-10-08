import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect } from "react";

import defaultImage from "../assets/images/imagenotfound.png";
import { getMovie } from "../services/TMDB_API";

const MovieDetailPage = () => {
  const { id } = useParams();
  const movieId = Number(id);

  const navigate = useNavigate();

  const { data, error, isError, isSuccess } = useQuery({
    queryKey: ["movie-details", movieId],
    queryFn: () => getMovie(movieId),
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
            <Button className="pagination-button" onClick={() => navigate(-1)}>
              &laquo; Go back
            </Button>
          </div>

          <div className="container-cards-details">
            <div className="custom-card-details" key={data.id}>
              {data.poster_path && (
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                    alt={data.title}
                  />
                </div>
              )}
              <h1>{data.title}</h1>
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
              <span>
                <strong>Genres: </strong>
              </span>
              {data.genres.map((res) => (
                <span
                  className="custom-link"
                  onClick={() => navigate(`/genre/${res.id}`)}
                  key={res.id}
                >
                  {res.name}{" "}
                </span>
              ))}
              <h2 className="mt-5">Cast</h2>
              <div className="reference-container">
                {data.credits.cast
                  .filter((res) => res.known_for_department === "Acting")
                  .map((res) => (
                    <div className="reference-card" key={res.id}>
                      <img
                        src={
                          res.profile_path !== null
                            ? `https://image.tmdb.org/t/p/w500/${res.profile_path}`
                            : defaultImage
                        }
                        alt={res.name}
                      />
                      <p
                        className="custom-link"
                        onClick={() => navigate(`/person/${res.id}`)}
                        key={res.id}
                      >
                        {res.name}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetailPage;
