import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="center-container">
        <div>
          <h1>Home Page</h1>
        </div>
        <div>
          <h2>Categories</h2>
          <div className="home-buttons">
            <Button
              onClick={() => navigate("/now-playing")}
              className="custom-button-homepage"
            >
              Now playing
            </Button>
            <Button
              onClick={() => navigate("/trending")}
              className="custom-button-homepage"
            >
              Trending
            </Button>
            <Button
              onClick={() => navigate("/top-rated")}
              className="custom-button-homepage"
            >
              Top rated
            </Button>
            <Button className="custom-button-homepage">Genres</Button>
            <Button className="custom-button-homepage">All films</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
