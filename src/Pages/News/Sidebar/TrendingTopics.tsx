import React from "react";
import styles from "../../../Styles/Pages/News/NewsSidebar.module.css";
import { HashtagIcon } from "../../../Components/Footer/SocialsContainer";
import img1 from '../../../Assets/hashtag.webp';
const TrendingTopics: React.FC = () => {
  return (
    <div className={styles.trendingTopicsContainer}>
      <h4>Trending Topics</h4>
      <img src={img1}/>
      <div className={styles.trendingTopicsContent}>
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
      </div>
    </div>
  );
};
export default TrendingTopics;
const Topic: React.FC = () => {
  return (
    <div className={styles.topic}>
      <HashtagIcon />
      <div className={styles.topicDetails}>
        <h4>Megadrop</h4>
        <div>
          <h4>6.1M views</h4>
          <h4>3494 Posts</h4>
        </div>
      </div>
    </div>
  );
};
