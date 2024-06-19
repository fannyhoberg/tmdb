import { useQuery } from "@tanstack/react-query";
import { getTrending } from "../services/TMDB_API";
import MovieCard from "../components/MovieCard";

const TrendingPage = () => {
  const { data, error, isError, isSuccess } = useQuery({
    queryKey: ["trending"],
    queryFn: getTrending,
  });

  return (
    <>
      {isError && (
        <div className="d-flex justify-content-center">{error.message}</div>
      )}

      {isSuccess && (
        <>
          <div className="center-container">
            <h1>Trending</h1>
            <MovieCard data={data} />
          </div>
        </>
      )}
    </>
  );
};

export default TrendingPage;
