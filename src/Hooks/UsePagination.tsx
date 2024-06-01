import { useState, useEffect, MutableRefObject } from 'react';

const usePagination = <T,>(
  items: T[],
  itemsPerPage: number,
  containerRef?: MutableRefObject<HTMLElement | null>
) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const currentItems = items.slice(currentPage * itemsPerPage, (1 + currentPage) * itemsPerPage);

  const scrollToTop = () => {
    if (containerRef?.current) {
      console.log('Scrolling to top');
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      console.log('No containerRef found');
    }
  };

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };

  const handlePrevClick = () => {
    setCurrentPage((prev) => {
      const newPage = Math.max(prev - 1, 0);
      scrollToTop();
      return newPage;
    });
  };

  const handleNextClick = () => {
    setCurrentPage((prev) => {
      const newPage = Math.min(prev + 1, totalPages - 1);
      scrollToTop();
      return newPage;
    });
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
