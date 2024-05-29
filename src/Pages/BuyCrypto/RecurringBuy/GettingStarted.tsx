import React from "react";
import {
  AddPaymentIcon,
  CreditCardIcon,
  CursorIcon,
  FrequencyIcon,
  RepeatIcon,
} from "../../../Components/Footer/SocialsContainer";
import styles from "../../../Styles/Pages/BuyCrypto/RecurringBuy/GettingStarted.module.css";

const GettingStarted: React.FC = () => {
  return (
    <div className={styles.gettingStartedContainer}>
      <h1>Getting Started</h1>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div>
            <CreditCardIcon />
          </div>
          <div>
            <h4>Select debit/credit card</h4>
            <h5>
              Log in to your Binance account and tap on the [Credit/Debit Card] option on the app homepage or top header on the website.
            </h5>
          </div>
        </div>
        <div className={styles.step}>
          <div>
            <RepeatIcon />
          </div>
          <div>
            <h4>Select crypto and enable Recurring Buy</h4>
            <h5>
              Next, choose your crypto to purchase and enable the Recurring Buy feature on the same page.
            </h5>
          </div>
        </div>
        <div className={styles.step}>
          <div>
            <CursorIcon />
          </div>
          <div>
            <h4>Select your fiat currency</h4>
            <h5>Choose from over 40+ fiat currencies and pick your preferred local currency.</h5>
          </div>
        </div>
        <div className={styles.step}>
          <div>
            <FrequencyIcon />
          </div>
          <div>
            <h4>Set up the frequency</h4>
            <h5>Choose between weekly, bi-weekly or monthly intervals. You can also select the day and time for your Recurring Buy.</h5>
          </div>
        </div>
        <div className={styles.step}>
          <div>
            <AddPaymentIcon />
          </div>
          <div>
            <h4>Select your payment methods</h4>
            <h5>We currently accept Visa or Mastercard payments. You can choose to use one of your existing cards or add a new card.</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
