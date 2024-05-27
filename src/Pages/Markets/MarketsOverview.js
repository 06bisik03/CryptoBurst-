import styles from "../../Styles/Pages/Markets/MarketsOverview.module.css";
import { ArrowRight, Sort } from "../../Components/Footer/SocialsContainer";
import img1 from "../../Assets/BTC.jpeg";
import { useState } from "react";

const MarketsOverview = () => {
  const [activeChoice, setActiveChoice] = useState("All Cryptos");

  const handleChoiceClick = (choice) => {
    setActiveChoice(choice);
  };

  return (
    <div className={styles.marketsOverviewContainer}>
      <div className={styles.coinListsContainer}>
        <CoinList />
        <CoinList />
        <CoinList />
        <CoinList />
      </div>
      <div className={styles.marketChoices}>
        <div className={styles.choices}>
          <h4
            className={
              activeChoice === "All Cryptos" ? styles.active : styles.inactive
            }
            onClick={() => handleChoiceClick("All Cryptos")}
          >
            All Cryptos
          </h4>
          <h4
            className={
              activeChoice === "New Cryptos" ? styles.active : styles.inactive
            }
            onClick={() => handleChoiceClick("New Cryptos")}
          >
            New Cryptos
          </h4>
          <h4
            className={
              activeChoice === "My Favourites" ? styles.active : styles.inactive
            }
            onClick={() => handleChoiceClick("My Favourites")}
          >
            My Favourites
          </h4>
        </div>
      </div>
      <div className={styles.allCoinsContainer}>
        <div className={styles.legends}>
          <div>
            <h4>Name</h4>
            <Sort />
          </div>
          <div>
            <h4>Price</h4>
            <Sort />
          </div>
          <div>
            <h4>Change</h4>
            <Sort />
          </div>
          <div>
            <h4>24h Volume</h4>
            <Sort />
          </div>
          <div>
            <h4>Market Cap</h4>
            <Sort />
          </div>
          <div>
            <h4>Actions</h4>
          </div>
        </div>
        <div className={styles.allCoins}>
          {xx.map(item => {
            return <Coin />
          })}
        </div>
      </div>
    </div>
  );
};

export default MarketsOverview;

const CoinList = () => {
  return (
    <div className={styles.coinList}>
      <div className={styles.listDetail}>
        <h4>Hot Coins</h4>
        <div>
          <h4>More</h4>
          <ArrowRight h=".6em" translate={[5, 1]} />
        </div>
      </div>
      <div className={styles.coin}>
        <div className={styles.imgCoin}>
          <img src={img1} />
        </div>
        <div className={styles.coinFinance}>
          <h5>BTC</h5>
          <h5>$69.6K</h5>
          <h5>-0.07%</h5>
        </div>
      </div>
      <div className={styles.coin}>
        <div className={styles.imgCoin}>
          <img src={img1} />
        </div>
        <div className={styles.coinFinance}>
          <h5>BTC</h5>
          <h5>$69.6K</h5>
          <h5>-0.07%</h5>
        </div>
      </div>
      <div className={styles.coin}>
        <div className={styles.imgCoin}>
          <img src={img1} />
        </div>
        <div className={styles.coinFinance}>
          <h5>BTC</h5>
          <h5>$69.6K</h5>
          <h5>-0.07%</h5>
        </div>
      </div>
    </div>
  );
};
const Coin = () => {
  return (
    <div className={styles.coinMarket}>
      <div className={styles.coinIllustration}>
        <div>
          <img src={img1} />
        </div>
        <h4>BTC</h4>
        <h5>Bitcoin</h5>
      </div>
      <div className={styles.coinPrice}>$68,789.70</div>
      <div className={styles.coinChange}>-0.61%</div>
      <div className={styles.volume}>$15.21B</div>
      <div className={styles.marketCap}>$1,355.25B</div>
    </div>
  );
};
const xx = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]