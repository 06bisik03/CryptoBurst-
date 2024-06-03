import React from "react";
import styles from "../../../Styles/Pages/News/NewsSidebar.module.css";
import img1 from "../../../Assets/Bitcoin.png";
const MostSearched: React.FC = () => {
  return (
    <div className={styles.mostSearchedContainer}>
      <div className={styles.mostSearchedHeader}>
        <h3>Most Searched (24h)</h3>
        <h4>USD</h4>
      </div>
      <div className={styles.mostSearchedCoins}>
        <MostSearchedCoin />
        <MostSearchedCoin />
        <MostSearchedCoin />
        <MostSearchedCoin />
        <MostSearchedCoin />
      </div>
    </div>
  );
};
export default MostSearched;
const MostSearchedCoin: React.FC = () => {
  return (
    <div className={styles.coinContainer}>
      <div className={styles.coinIdentifier}>
        <div className={styles.coinImg}>
          <img src={img1} />
        </div>
        <h4>BTC</h4>
      </div>
      <div className={styles.coinFinance}>
        <h4>67905.9</h4>
        <h4>-1.35%</h4>
      </div>
    </div>
  );
};
