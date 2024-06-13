import React from "react";
import { Button } from "react-bootstrap";

type PaginationProps = {
  onPrevPage: () => void;
  onNextPage: () => void;
  page: number;
  totalPages: number;
  isPrevPage: boolean;
  isNextPage: boolean;
};

const Pagination: React.FC<PaginationProps> = ({
  onPrevPage,
  onNextPage,
  page,
  totalPages,
  isPrevPage,
  isNextPage,
}) => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-4 mb-4">
      <div>
        <Button
          className="pagination-button"
          onClick={onPrevPage}
          disabled={!isPrevPage}
        >
          &laquo; <span className="visually-hidden">Previous page</span>
        </Button>
      </div>

      <div>
        {page} of {totalPages}
      </div>

      <div>
        <Button
          className="pagination-button"
          onClick={onNextPage}
          disabled={!isNextPage}
        >
          &raquo; <span className="visually-hidden">Next page</span>
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
