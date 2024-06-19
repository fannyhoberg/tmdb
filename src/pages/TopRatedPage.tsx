import { useQuery } from "@tanstack/react-query";

import { getTopRated } from "../services/TMDB_API";
import MovieCard from "../components/MovieCard";

const TopRatedPage = () => {
  const { data, error, isError, isSuccess } = useQuery({
    queryKey: ["toprated"],
    queryFn: getTopRated,
  });

  return (
    <>
      {isError && (
        <div className="d-flex justify-content-center">{error.message}</div>
      )}

      {isSuccess && (
        <>
          <div className="center-container">
            <h1>Top rated</h1>
            <MovieCard data={data} />
          </div>
        </>
      )}
    </>
  );
};

export default TopRatedPage;
