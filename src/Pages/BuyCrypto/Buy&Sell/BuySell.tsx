import React from "react";
import styles from "../../../Styles/Pages/BuyCrypto/Buy&Sell/BuySell.module.css";
import stepOne from "../../../Assets/howToBuyStep1.svg";
import stepTwo from "../../../Assets/howToBuyStep2.svg";
import stepThree from "../../../Assets/howToBuyStep3.svg";
import TopGainer from "./TopGainer";
import Populars from "./Populars";

const BuySell: React.FC = () => {
  return (
    <div className={styles.buySellContainer}>
      <div className={styles.buySell}>
        <div className={styles.hotCryptos}>
          <h1>Current Crypto Ranks</h1>
          <div className={styles.cryptosContainer}></div>
        </div>
        <div className={styles.calculator}>
          <div className={styles.actionType}>
            <div className={`${styles.buy} ${styles.activeAction}`}>Buy</div>
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
                />
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
        <div>
          <h1>How to Buy Crypto</h1>
        </div>

        <div className={styles.buyingSteps}>
          <div className={styles.step}>
            <img src={stepOne} alt="Step 1" />
            <h4>1. Enter Amount & Select Payment</h4>
            <h5>
              Enter the amount, select the available payment method, and choose
              the payment account or bind the payment card.
            </h5>
          </div>
          <div className={styles.step}>
            <img src={stepTwo} alt="Step 2" />
            <h4>2. Confirm Order</h4>
            <h5>
              Confirmation of transaction detail information, including trading
              pair quotes, fees, and other explanatory tips.
            </h5>
          </div>
          <div className={styles.step}>
            <img src={stepThree} alt="Step 3" />
            <h4>3. Receive Crypto</h4>
            <h5>
              After successful payment, the purchased crypto will reach the Spot
              Wallet.
            </h5>
          </div>
        </div>
      </div>
      <TopGainer />
      <Populars />
    </div>
  );
};

export default BuySell;
