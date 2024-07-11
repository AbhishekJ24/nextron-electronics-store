import React from 'react';
import Pagination from '@mui/material/Pagination';

function PaginationComponent({ currentPage, onPageChange, totalPages }) {
  return (
    <Pagination
      count={totalPages}
      page={currentPage}
      onChange={(event, page) => onPageChange(page)}
      color="primary"
      size="large"
    />
  );
}

export default PaginationComponent;
