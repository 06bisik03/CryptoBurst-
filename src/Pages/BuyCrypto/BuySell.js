import styles from "../../Styles/Pages/BuyCrypto/BuySell.module.css";
const BuySell = () => {
  return (
    <div className={styles.buySellContainer}>
      <div className={styles.buySell}>
        <div className={styles.hotCryptos}>
          <h1>Current Crypto Ranks</h1>
          <div className={styles.cryptosContainer}></div>
        </div>
        <div className={styles.calculator}>
          <div className={styles.actionType}>
            <div className={styles.buy}>Buy</div>
            <div className={`${styles.sell} ${styles.inactiveAction}`}>
              Sell
            </div>
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.inputAmount}>
              <h5>Spend</h5>
              <div className={styles.inputChoiceRow}>
                <input
                  type="number"
                  step="any"
                  placeholder="Enter Amount"
                ></input>
                <div className={styles.placeholder}></div>
              </div>
            </div>
            <div className={styles.inputAmount}>
              <h5>Spend</h5>
              <div className={styles.inputChoiceRow}>
                <input type="number" step="any" placeholder="0.00" />
                <div className={styles.placeholder}></div>
              </div>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button>Buy 0.01 BTC</button>
          </div>
        </div>
      </div>
      <div className={styles.howToBuyContainer}>
        <h1>How to Buy Crypto</h1>
        <div className={styles.buyingSteps}>
          <div>
            <img />
            <div> </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};
export default BuySell;
