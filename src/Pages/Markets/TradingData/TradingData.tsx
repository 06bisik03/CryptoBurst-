import React from "react";
import styles from "../../../Styles/Pages/Markets/TradingData/TradingData.module.css";
import TradingSubList from "./TradingSubList";
import TradingDataGraph from "./TradingDataGraph";
const TradingData: React.FC = () => {
  return (
    <div className={styles.tradingDataContainer}>
      <div className={styles.tradingDataRow}>
        <TradingSubList />
        <TradingSubList />
        <TradingSubList />
      </div>
      <div className={styles.tradingDataRow}>
        <TradingSubList />
        <TradingSubList />
        <TradingSubList />
      </div>
      <div className={styles.tradingDataRow}>
        <TradingDataGraph />
        <TradingSubList />
      </div>
    </div>
  );
};
export default TradingData;
