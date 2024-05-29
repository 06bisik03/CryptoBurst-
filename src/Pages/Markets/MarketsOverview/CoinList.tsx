import React from "react";
import styles from "../../../Styles/Pages/Markets/MarketsOverview/MarketsOverview.module.css";
import { ArrowRightIcon } from "../../../Components/Footer/SocialsContainer";
import img1 from "../../../Assets/Bitcoin.png";
const CoinList: React.FC = () => {
  return (
    <div className={styles.coinListsContainer}>
      <CoinContainer />
      <CoinContainer />
      <CoinContainer />
      <CoinContainer />
    </div>
  );
};
export default CoinList;



const CoinContainer: React.FC = () => {
  return (
    <div className={styles.coinList}>
      <div className={styles.listDetail}>
        <h4>Hot Coins</h4>
        <div>
          <h4>More</h4>
          <ArrowRightIcon h=".6em" translate={[5, 1]} />
        </div>
      </div>
      <Coin />
      <Coin />
      <Coin />
    </div>
  );
};

const Coin: React.FC = () => {
  return (
    <div className={styles.coin}>
      <div className={styles.imgCoin}>
        <img src={img1} alt="Coin" />
      </div>
      <div className={styles.coinFinance}>
        <h5>BTC</h5>
        <h5>$69.6K</h5>
        <h5>-0.07%</h5>
      </div>
    </div>
  );
};
