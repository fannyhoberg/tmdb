import { useQuery } from "@tanstack/react-query";
import { getNowPlaying } from "../services/TMDB_API";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NowPlayingPage = () => {
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
    queryKey: ["nowplaying"],
    queryFn: getNowPlaying,
  });

  const navigate = useNavigate();

  return (
    <>
      <div className="center-container">
        <h1>Now Playing</h1>
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
                <Button
                  className="custom-button"
                  onClick={() => navigate(`/movie/${res.id}`)}
                >
                  Read more
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default NowPlayingPage;
