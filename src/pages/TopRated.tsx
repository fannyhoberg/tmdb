import { useQuery } from "@tanstack/react-query";
import { getTopRated } from "../services/TMDB_API";

const TopRated = () => {
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
    queryKey: ["toprated"],
    queryFn: getTopRated,
  });

  return (
    <>
      <div className="center-container">
        <h1>Top rated</h1>
        {isSuccess && (
          <div className="container-cards">
            {data.results.map((res) => (
              <div className="custom-card" key={res.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${res.poster_path}`}
                  alt={res.title}
                />
                <h2>{res.title}</h2>
                <p>Release date: {res.release_date}</p>
                <p>Vote average: {res.vote_average}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default TopRated;
