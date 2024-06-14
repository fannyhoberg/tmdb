import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { getGenre, getGenres } from "../services/TMDB_API";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Pagination from "../components/Pagination";

const GenrePage = () => {
  const { id } = useParams();
  const genreId = Number(id);

  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = parseInt(searchParams.get("page") || "1");

  const navigate = useNavigate();

  const { data, error, isError, isSuccess } = useQuery({
    queryKey: ["genre", page, genreId],
    queryFn: () => getGenre(genreId, page),
  });

  const {
    data: genreData,
    error: genreError,
    isError: genreIsError,
    isSuccess: genreIsSuccess,
  } = useQuery({
    queryKey: ["genres"],
    queryFn: getGenres,
  });

  const prevPage = () => {
    const newPage = page - 1;
    setSearchParams({ page: newPage.toString() });
    setPage(newPage);
  };

  const nextPage = () => {
    const newPage = page + 1;
    setSearchParams({ page: newPage.toString() });
    setPage(newPage);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  return (
    <>
      {isError && (
        <div className="d-flex justify-content-center">{error.message}</div>
      )}

      {genreIsError && (
        <div className="d-flex justify-content-center">
          {genreError.message}
        </div>
      )}

      {genreIsSuccess && (
        <h1 className="d-flex justify-content-center">
          {genreData.genres.find((genre) => genre.id === genreId)?.name ||
            "Genre not found"}
        </h1>
      )}

      {isSuccess && (
        <>
          <div className="center-container">
            <div className="container-cards">
              {data.results.map((res) => (
                <div className="custom-card" key={res.id}>
                  {res.poster_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${res.poster_path}`}
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
          </div>
          <Pagination
            onNextPage={nextPage}
            onPrevPage={prevPage}
            page={data.page}
            totalPages={data.total_pages}
            isPrevPage={data.page > 1}
            isNextPage={data.page <= data.total_pages}
          />
        </>
      )}
    </>
  );
};

export default GenrePage;
