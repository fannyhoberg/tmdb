import { useQuery } from "@tanstack/react-query";
import { getGenres } from "../services/TMDB_API";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const OverviewGenresPage = () => {
  const { data, error, isError, isSuccess } = useQuery({
    queryKey: ["genres"],
    queryFn: getGenres,
  });

  const navigate = useNavigate();

  return (
    <>
      {isError && (
        <div className="d-flex justify-content-center">{error.message}</div>
      )}

      {isSuccess && (
        <>
          <h1>All genres</h1>
          <div>
            {data.genres.map((res) => (
              <Button
                key={res.id}
                className="custom-button-homepage"
                onClick={() => navigate(`/genre/${res.id}`)}
              >
                {res.name}
              </Button>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default OverviewGenresPage;
