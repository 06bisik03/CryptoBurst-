import React from "react";
import styles from "../../Styles/Pages/News/NewsTile.module.css";
import UseOverflow from "../../Hooks/UseOverflow"; // Adjust the import path as necessary
import img1 from "../../Assets/Bitcoin.png";
import {
  CommentIcon,
  LikeIcon,
  StatisticsIcon,
  ShareIcon,
} from "../../Components/Footer/SocialsContainer";

import { NewsTileProps } from "../../types";
import { SAMPLE_TEXT_NEWS } from "../../Constants";
const NewsTile: React.FC<NewsTileProps> = ({ img }) => {
  const { isExpanded, overflowHeight, toggleExpand, contentRef } =
    UseOverflow(20);

  const contentContainerStyle = {
    maxHeight: isExpanded ? `calc(20vh + ${overflowHeight}vh)` : "20vh",
    overflow: "hidden",
    transition: "max-height 0.3s ease",
  };

  return (
    <div className={styles.newsTileContainer}>
      <div className={styles.newsAuthor}>
        <div className={styles.newsAuthorCredentials}>
          <div className={styles.authorImgContainer}>
            <img src={img1} alt="Author" />
          </div>
          <h4>TheWolfThatWins</h4>
          <h5>14 May</h5>
        </div>
        <div className={styles.btnFollow}>
          <button>Follow</button>
        </div>
      </div>
      <div className={styles.newsContent} style={contentContainerStyle}>
        <div className={styles.newsText} ref={contentRef}>
          {SAMPLE_TEXT_NEWS}
        </div>
      </div>
      <div className={styles.newsBtn}>
        {overflowHeight > 0 && !isExpanded && (
          <h4 className={styles.readMoreButton} onClick={toggleExpand}>
            Read More
          </h4>
        )}
        {isExpanded && (
          <h4 className={styles.readLessButton} onClick={toggleExpand}>
            Read Less
          </h4>
        )}
      </div>
      {img !== null && (
        <div className={styles.postImg}>
          <img src={img} alt="Post" />
        </div>
      )}

      <div className={styles.postStatistics}>
        <div>
          <StatisticsIcon />
          <h4>123.8K</h4>
        </div>
        <div>
          <LikeIcon />
          <h4>123.8K</h4>
        </div>
        <div>
          <CommentIcon />
          <h4>123.8K</h4>
        </div>
        <div>
          <ShareIcon />
          <h4>123.8K</h4>
        </div>
      </div>
    </div>
  );
};

export default NewsTile;
