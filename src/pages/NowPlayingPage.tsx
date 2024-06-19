import { useQuery } from "@tanstack/react-query";

import { getNowPlaying } from "../services/TMDB_API";
import MovieCard from "../components/MovieCard";

const NowPlayingPage = () => {
  const { data, error, isError, isSuccess } = useQuery({
    queryKey: ["nowplaying"],
    queryFn: getNowPlaying,
  });

  return (
    <>
      {isError && (
        <div className="d-flex justify-content-center">{error.message}</div>
      )}

      {isSuccess && (
        <>
          <div className="center-container">
            <h1>Now playing</h1>
            <MovieCard data={data} />
          </div>
        </>
      )}
    </>
  );
};

export default NowPlayingPage;
