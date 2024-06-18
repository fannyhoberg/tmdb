import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

import { getGenres } from "../services/TMDB_API";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContextProvider";

const OverviewGenresPage = () => {
  const { data, error, isError, isSuccess } = useQuery({
    queryKey: ["genres"],
    queryFn: getGenres,
  });

  const navigate = useNavigate();

  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("Can't use ThemeContext");
  }

  const { darkMode } = themeContext;

  return (
    <>
      {isError && (
        <div className="d-flex justify-content-center">{error.message}</div>
      )}

      {isSuccess && (
        <>
          <div className="mt-4">
            <h1>All genres</h1>
            <div>
              {data.genres.map((res) => (
                <Button
                  key={res.id}
                  className={
                    darkMode
                      ? "custom-button-homepage-darkmode"
                      : "custom-button-homepage-lightmode"
                  }
                  onClick={() => navigate(`/genre/${res.id}`)}
                >
                  {res.name}
                </Button>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default OverviewGenresPage;
