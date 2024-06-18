import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import defaultImage from "../assets/images/imagenotfound.png";

import { getPerson } from "../services/TMDB_API";

const PersonDetailPage = () => {
  const { id } = useParams();
  const personId = Number(id);

  const navigate = useNavigate();

  const { data, error, isError, isSuccess } = useQuery({
    queryKey: ["person-details", personId],
    queryFn: () => getPerson(personId),
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {isError && (
        <div className="d-flex justify-content-center">{error.message}</div>
      )}

      {isSuccess && (
        <>
          <div>
            <Button
              className="mb-2 mt-2"
              variant="secondary"
              onClick={() => navigate(-1)}
            >
              &laquo; Go back
            </Button>
          </div>

          <div className="container-cards-details">
            <div className="custom-card-details" key={data.id}>
              {data.profile_path && (
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${data.profile_path}`}
                    alt={data.name}
                  />
                </div>
              )}
              <h1>{data.name}</h1>
              <p>
                <strong>Known for:</strong> {data.known_for_department}
              </p>
              <p>
                <strong>Birthday:</strong> {data.birthday}
              </p>
              <p>
                <strong>Place of birth:</strong> {data.place_of_birth}
              </p>
              <p>
                <strong>Overview:</strong> {data.biography}
              </p>

              <h2 className="mt-5">Films</h2>
              <div className="reference-container">
                {data.movie_credits.cast.map((res) => (
                  <div className="reference-card" key={res.id}>
                    <img
                      src={
                        res.poster_path !== null
                          ? `https://image.tmdb.org/t/p/w500/${res.poster_path}`
                          : defaultImage
                      }
                      alt={res.title}
                    />

                    <p
                      className="custom-link"
                      onClick={() => navigate(`/movie/${res.id}`)}
                      key={res.id}
                    >
                      {res.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PersonDetailPage;
