import React from "react";
import { useState} from "react";
import CustomDropdown from "./CustomDropdown";
import styles from "../../../Styles/Pages/Markets/TradingData/TradingSubList.module.css";
import { TRADING_DATA_OPTIONS } from "../../../Constants";
import TradingDataCoin from "./TradingDataCoin";
const TradingSubList: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("Crypto");
  return (
    <div className={styles.tradingSubListContainer}>
      <div className={styles.sublistHeader}>
        <h4>Hot Coins</h4>
        <CustomDropdown
          options={TRADING_DATA_OPTIONS}
          selected={selectedOption}
          onChange={setSelectedOption}
        />
      </div>
      <div className={styles.sublistLegends}>
        <h4>Name</h4>
        <h4>Price</h4>
        <h4>24h Change</h4>
      </div>
      <div className={styles.list}>
        <TradingDataCoin />
        <TradingDataCoin />
        <TradingDataCoin />
        <TradingDataCoin />
        <TradingDataCoin />
        <TradingDataCoin />
        <TradingDataCoin />
        <TradingDataCoin />
        <TradingDataCoin />
        <TradingDataCoin />
      </div>
    </div>
  );
};
export default TradingSubList;