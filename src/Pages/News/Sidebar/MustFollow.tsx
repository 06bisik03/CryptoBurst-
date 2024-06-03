import React from "react";
import styles from "../../../Styles/Pages/News/NewsSidebar.module.css";
import img1 from "../../../Assets/Bitcoin.png";
const MustFollow: React.FC = () => {
  return (
    <div className={styles.mustFollowContainer}>
      <h4>Must Follow Creators</h4>
      <div className={styles.creatorsList}>
        <Creator />
        <Creator />
        <Creator />
        <Creator />
        <Creator />
      </div>
    </div>
  );
};
export default MustFollow;
const Creator: React.FC = () => {
  return (
    <div className={styles.creatorContainer}>
      <div className={styles.creatorImg}>
        <img src={img1} />
      </div>
      <div className={styles.creatorBio}>
        <h4>Richard Teng</h4>
        <h5>Binance CEO</h5>
      </div>

      <button>Follow</button>
    </div>
  );
};
