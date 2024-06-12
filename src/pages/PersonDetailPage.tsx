import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getPerson } from "../services/TMDB_API";
import { Button } from "react-bootstrap";
import { useEffect } from "react";

const PersonDetailPage = () => {
  const { id } = useParams();
  const personId = Number(id);

  const navigate = useNavigate();

  const { data, error, isError, isSuccess } = useQuery({
    queryKey: ["person-details"],
    queryFn: () => getPerson(personId),
    staleTime: 1000 * 1,
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
              Previous page
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
              <h2>{data.name}</h2>
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

              <p>
                <strong>Movies:</strong>
              </p>
              {data.movie_credits.cast.map((res) => (
                <p
                  className="custom-link"
                  onClick={() => navigate(`/movie/${res.id}`)}
                  key={res.id}
                >
                  {res.title}
                </p>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PersonDetailPage;
