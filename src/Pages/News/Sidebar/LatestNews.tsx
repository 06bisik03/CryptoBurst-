import React from "react";
import styles from "../../../Styles/Pages/News/NewsSidebar.module.css";
const LatestNews: React.FC = () => {
  return (
    <div className={styles.latestNewsContainer}>
      <h4>Latest News</h4>
      <div className={styles.latestNews}>
        <LatestPieceOfNews />
        <LatestPieceOfNews />
        <LatestPieceOfNews />
        <LatestPieceOfNews />
      </div>
    </div>
  );
};
export default LatestNews;
const LatestPieceOfNews: React.FC = () => {
  return (
    <div className={styles.pieceOfNews}>
      <h3>
        Linea Announces Velocore Event Update on X Platform, Emphasizes
        Dependence
      </h3>
      <h5>5h</h5>
    </div>
  );
};
