import { useIsFetching } from "@tanstack/react-query";

const LoadingSpinner = () => {
  const isFetching = useIsFetching();
  return isFetching ? (
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  ) : null;
};

export default LoadingSpinner;
