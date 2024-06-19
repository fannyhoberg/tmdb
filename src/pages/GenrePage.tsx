import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

import Pagination from "../components/Pagination";

import { getGenre, getGenres } from "../services/TMDB_API";
import MovieCard from "../components/MovieCard";

const GenrePage = () => {
  const { id } = useParams();
  const genreId = Number(id);

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1");

  const { data, error, isError, isSuccess } = useQuery({
    queryKey: ["genre", currentPage, genreId],
    queryFn: () => getGenre(genreId, currentPage),
  });

  const {
    data: genreTitleData,
    error: genreTitleError,
    isError: genreTitleIsError,
    isSuccess: genreTitleIsSuccess,
  } = useQuery({
    queryKey: ["genres"],
    queryFn: getGenres,
  });

  const prevPage = () => {
    const newPage = currentPage - 1;
    setSearchParams({ page: newPage.toString() });
  };

  const nextPage = () => {
    const newPage = currentPage + 1;
    setSearchParams({ page: newPage.toString() });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <>
      {isError && (
        <div className="d-flex justify-content-center">{error.message}</div>
      )}

      {genreTitleIsError && (
        <div className="d-flex justify-content-center">
          {genreTitleError.message}
        </div>
      )}

      {genreTitleIsSuccess && (
        <h1 className="d-flex justify-content-center">
          {genreTitleData.genres.find((genre) => genre.id === genreId)?.name ||
            "Genre not found"}
        </h1>
      )}

      {isSuccess && (
        <>
          <div className="center-container">
            <MovieCard data={data} />
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
