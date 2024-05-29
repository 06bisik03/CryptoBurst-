import React from "react";

import styles from "../../Styles/Pages/News/News.module.css";
import NewsMenu from "./NewsMenu";
import NewsContent from "./NewsContent";
import NewsSidebar from "./NewsSidebar";

const News: React.FC = () => {
  return (
    <div className={styles.newsContainer}>
      <div className={styles.newsChoices}>
        <NewsMenu />
        <div className={styles.profile}></div>
      </div>
      <NewsContent />
      <NewsSidebar />
    </div>
  );
};
export default News;
