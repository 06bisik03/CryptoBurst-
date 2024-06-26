import React, { useState, useEffect, useRef } from "react";
import styles from "../../../Styles/Pages/News/NewsContent.module.css";
import img1 from "../../../Assets/CoinBinance.webp";
import NewsTile from "./NewsTile";
import PostNews from "./PostNews";
import usePagination from "../../../Hooks/UsePagination";
import PaginationControls from "../../../Components/General/PaginationControls";

const NewsContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Recommended");
  const newsContainerRef = useRef<HTMLDivElement | null>(null);
  const newsItems = Array(80).fill(<NewsTile img={img1} />); // Example list of news items
  const {
    currentPage,
    totalPages,
    currentItems,
    handleClick,
    handlePrevClick,
    handleNextClick,
  } = usePagination(newsItems, 4, null); // Change 4 to the number of items per page
  const [showPagination, setShowPagination] = useState<boolean>(false);

  useEffect(() => {
    const checkHeight = () => {
      if (newsContainerRef.current) {
        const totalHeight = newsContainerRef.current.scrollHeight;
        const viewportHeight = window.innerHeight;
        const viewportHeightInVh = (viewportHeight / viewportHeight) * 100;
        if (totalHeight > viewportHeightInVh * 2.5) {
          setShowPagination(true);
        } else {
          setShowPagination(false);
        }
      }
    };
    checkHeight();
  }, [currentItems]);

  return (
    <div className={styles.newsContent} ref={newsContainerRef}>
      <div className={styles.newsChoice}>
        <h4
          className={
            activeTab === "Recommended" ? styles.active : styles.inactive
          }
          onClick={() => setActiveTab("Recommended")}
        >
          Recommended
        </h4>
        <h4
          className={
            activeTab === "Following" ? styles.active : styles.inactive
          }
          onClick={() => setActiveTab("Following")}
        >
          Following
        </h4>
      </div>
      <div className={styles.news}>
        <PostNews />
        {currentItems.map((item, index) => (
          <React.Fragment key={index}>{item}</React.Fragment>
        ))}
      </div>
      {showPagination && (
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          handleClick={handleClick}
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
          maxButtons={5} // Adjust the number of buttons to display as needed
        />
      )}
    </div>
  );
};

export default NewsContent;
