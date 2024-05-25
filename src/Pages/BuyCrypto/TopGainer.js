import styles from "../../Styles/Pages/BuyCrypto/TopGainer.module.css";
import img1 from "../../Assets/Bitcoin.png";
import img2 from "../../Assets/tether.webp";
const TopGainer = () => {
  return (
    <div className={styles.topGainerContainer}>
      <h1>Top Gainer of the Week</h1>
      <div className={styles.gainerContainer}>
        <div className={styles.graphContainer}>
          <div className={styles.financeDetails}>
            <div className={styles.price}>
              <h2>USDT/IDR</h2>
              <h2>Rp 16,023.61</h2>
            </div>
            <div className={styles.percentage}>
              <div className={styles.imageCoinToCurrency}>
                <div className={styles.picFrom}>
                  <img src={img1} />
                </div>
                <div className={styles.picTo}>
                  <img src={img2} />
                </div>
              </div>
              <div className={styles.fluctuation}>
                <h2>-0.02%</h2>
              </div>
            </div>
          </div>
          <div className={styles.graph}></div>
        </div>
        <div className={styles.details}>
            
        </div>
      </div>
      <div className={styles.conversions}>
        <ConversionFromCoinToCurrency />
        <ConversionFromCurrencyToCoin />
      </div>
    </div>
  );
};
export default TopGainer;
const ConversionFromCurrencyToCoin = () => {
  return (
    <div className={styles.conversionFromCoin}>
      <h1>USDT TO USD</h1>
      <div>
        <h3>0.5 USDT</h3>
        <h3>0.5005144 USD</h3>
      </div>
      <div>
        <h3>0.5 USDT</h3>
        <h3>0.5005144 USD</h3>
      </div>
      <div>
        <h3>0.5 USDT</h3>
        <h3>0.5005144 USD</h3>
      </div>
      <div>
        <h3>0.5 USDT</h3>
        <h3>0.5005144 USD</h3>
      </div>
      <div>
        <h3>0.5 USDT</h3>
        <h3>0.5005144 USD</h3>
      </div>
      <div>
        <h3>0.5 USDT</h3>
        <h3>0.5005144 USD</h3>
      </div>
      <div>
        <h3>0.5 USDT</h3>
        <h3>0.5005144 USD</h3>
      </div>
    </div>
  );
};
const ConversionFromCoinToCurrency = () => {
  return (
    <div className={styles.conversionToCoin}>
      <h1>USD TO USDT</h1>
      <div>
        <h3>0.5005144 USD</h3>
        <h3>0.5 USDT</h3>
      </div>{" "}
      <div>
        <h3>0.5005144 USD</h3>
        <h3>0.5 USDT</h3>
      </div>{" "}
      <div>
        <h3>0.5005144 USD</h3>
        <h3>0.5 USDT</h3>
      </div>{" "}
      <div>
        <h3>0.5005144 USD</h3>
        <h3>0.5 USDT</h3>
      </div>{" "}
      <div>
        <h3>0.5005144 USD</h3>
        <h3>0.5 USDT</h3>
      </div>{" "}
      <div>
        <h3>0.5005144 USD</h3>
        <h3>0.5 USDT</h3>
      </div>{" "}
      <div>
        <h3>0.5005144 USD</h3>
        <h3>0.5 USDT</h3>
      </div>
    </div>
  );
};
