import { useState } from 'react';
import { Item } from '../types';
const usePagination = (items: Item[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const currentItems = items.slice(currentPage * itemsPerPage, (1 + currentPage) * itemsPerPage);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevClick = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  return {
    currentPage,
    totalPages,
    currentItems,
    handleClick,
    handlePrevClick,
    handleNextClick,
  };
};

export default usePagination;
