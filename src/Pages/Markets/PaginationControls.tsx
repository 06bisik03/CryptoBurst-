import React from 'react';
import styles from '../../Styles/Pages/Markets/MarketsOverview.module.css';
import { PageButtonProps,PaginationControlsProps } from '../../types';

const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  handleClick,
  handlePrevClick,
  handleNextClick,
  maxButtons,
}) => {
  const buttonsBefore = Math.floor(maxButtons / 2);
  const buttonsAfter = Math.ceil(maxButtons / 2);
  const shouldRenderStartEllipsis = currentPage - buttonsBefore > 1;
  const shouldRenderEndEllipsis = currentPage + buttonsAfter < totalPages - 2;

  const indexesToRender = [];
  for (let i = Math.max(1, currentPage - buttonsBefore); i < currentPage; i++) {
    indexesToRender.push(i);
  }

  indexesToRender.push(currentPage);

  for (let i = currentPage + 1; i <= Math.min(totalPages - 2, currentPage + buttonsAfter); i++) {
    indexesToRender.push(i);
  }

  return (
    <div className={styles.pagination}>
      <span
        onClick={handlePrevClick}
        className={`${styles.paginationArrow} ${currentPage === 0 ? styles.disabled : ''}`}
      >
        &lt;
      </span>
      {currentPage !== 0 && (
        <PageButton
          index={0}
          handleClick={handleClick}
          currentPage={currentPage}
        />
      )}
      {shouldRenderStartEllipsis && <span>...</span>}
      {indexesToRender.map((index) => (
        <PageButton
          key={index}
          index={index}
          handleClick={handleClick}
          currentPage={currentPage}
        />
      ))}
      {shouldRenderEndEllipsis && <span>...</span>}
      {totalPages > 1 && currentPage !== totalPages - 1 && (
        <PageButton
          index={totalPages - 1}
          handleClick={handleClick}
          currentPage={currentPage}
        />
      )}
      <span
        onClick={handleNextClick}
        className={`${styles.paginationArrow} ${currentPage === totalPages - 1 ? styles.disabled : ''}`}
      >
        &gt;
      </span>
    </div>
  );
};

export default PaginationControls;





const PageButton: React.FC<PageButtonProps> = ({ index, label, handleClick, currentPage }) => {
  const _label = label ?? index;

  return (
    <button
      key={index}
      onClick={() => handleClick(index)}
      className={currentPage === index ? styles.activePage : styles.inactivePage}
    >
      {_label}
    </button>
  );
};
