import { Button } from "react-bootstrap";
import { getGenres, getMovies } from "../services/TMDB_API";
import { useState } from "react";

const HomePage = () => {
  const [page, setPage] = useState(1);

  const allMovies = async () => {
    const data = await getMovies();
    console.log("movies", data);
  };

  const genres = async () => {
    const data = await getGenres();
    console.log("genres", data);
  };

  allMovies();
  genres();

  return (
    <>
      <div className="center-container">
        <div>
          <h1>Home Page</h1>
        </div>
        <div>
          <h2>Categories</h2>
          <div className="home-buttons">
            <Button className="custom-button-homepage">Now playing</Button>
            <Button className="custom-button-homepage">Trending</Button>
            <Button className="custom-button-homepage">Top rated</Button>
            <Button className="custom-button-homepage">Genres</Button>
            <Button className="custom-button-homepage">All films</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
