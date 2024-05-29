import React from "react";
import styles from "../../../Styles/Pages/Markets/TradingData/TradingSubList.module.css";
import img1 from "../../../Assets/BTC.jpeg";
const TradingDataCoin: React.FC = () => {
  return (
    <div className={styles.tradingDataCoinContainer}>
      <h4>1</h4>
      <div className={styles.tradingDataCoinImgContainer}>
        <div className={styles.tradingDataCoinImg}>
          <img src={img1} />
        </div>
        <h5>BTC</h5>
      </div>
      <h4>$601.80</h4>
      <h4>-0.66%</h4>
    </div>
  );
};
export default TradingDataCoin;
