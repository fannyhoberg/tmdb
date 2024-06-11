import { useQuery } from "@tanstack/react-query";
import { getMovie } from "../services/TMDB_API";
import { useParams } from "react-router-dom";

const MovieDetailPage = () => {
  const { id } = useParams();
  const movieId = Number(id);

  const {
    data,
    error,
    isError,
    isFetching,
    isLoading,
    isPending,
    isRefetching,
    isStale,
    isSuccess,
    status,
  } = useQuery({
    queryKey: ["movie-details"],
    queryFn: () => getMovie(movieId),
    staleTime: 1000 * 1,
  });
  return (
    <>
      <div className="container-cards-details">
        {isSuccess && (
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
            <div>
              <strong>Genres:</strong>
            </div>
            {data.genres.map((res) => (
              <div key={res.id}>{res.name}</div>
            ))}
            <div>
              <strong>Actors:</strong>
            </div>
            {data.credits.cast
              .filter((res) => res.known_for_department === "Acting")
              .map((res) => (
                <div key={res.id}>{res.name}</div>
              ))}{" "}
          </div>
        )}
      </div>
    </>
  );
};

export default MovieDetailPage;
