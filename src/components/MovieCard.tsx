import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MovieResults } from "../types/TMDB_types";
import defaultImage from "../assets/images/imagenotfound.png";

interface MovieCardProps {
  data: MovieResults;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="container-cards">
      {data.results.map((res) => (
        <div className="custom-card" key={res.id}>
          {res.poster_path && (
            <img
              src={
                res.poster_path !== null
                  ? `https://image.tmdb.org/t/p/w500/${res.poster_path}`
                  : defaultImage
              }
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
  );
};

export default MovieCard;
