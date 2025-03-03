import React from 'react'
import './PaginationComponent.css'

export default function PaginationComponent ({ itemsPerPage, totalItems, currentPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`${currentPage === i ? 'active' : ''} text-btn-18`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="AA-pagination">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="text-btn-18"
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="text-btn-18"
      >
        Next
      </button>
    </div>
  );
};

