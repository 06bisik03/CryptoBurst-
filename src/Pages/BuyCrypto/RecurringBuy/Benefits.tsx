import React from 'react';
import {
  ArrowUpIcon,
  CheckMarkIcon,
  ShieldIcon,
  ShieldHeartIcon,
  KeyIcon,
  ClockIcon,
} from '../../../Components/Footer/SocialsContainer';
import styles from '../../../Styles/Pages/BuyCrypto/RecurringBuy/Benefits.module.css';

const Benefits: React.FC = () => {
  return (
    <div className={styles.benefitsContainer}>
      <h1>Benefits of DCA via Recurring Buy</h1>
      <div className={styles.benefits}>
        <div className={styles.benefit}>
          <div className={styles.image}>
            <ArrowUpIcon />
          </div>
          <div className={styles.explanation}>
            <h4>Steady Portfolio Growth</h4>
            <h5>
              Investments at periodic intervals gradually grows your
              crypto wealth over time and reap the gains of invested projects’
              growth.
            </h5>
          </div>
        </div>
        <div className={styles.benefit}>
          <div className={styles.image}>
            <CheckMarkIcon />
          </div>
          <div className={styles.explanation}>
            <h4>Disciplined Saving</h4>
            <h5>
              Automates your crypto purchases and ensures you invest with
              discipline regardless of market conditions.
            </h5>
          </div>
        </div>
        <div className={styles.benefit}>
          <div className={styles.image}>
            <ShieldIcon />
          </div>
          <div className={styles.explanation}>
            <h4>Risk Reduction</h4>
            <h5>
              Manages impact from the volatile crypto market by spreading out
              your investments and smoothing out price swings.
            </h5>
          </div>
        </div>
        <div className={styles.benefit}>
          <div className={styles.image}>
            <ClockIcon />
          </div>
          <div className={styles.explanation}>
            <h4>Convenience & Flexibility</h4>
            <h5>
              Choose between weekly, bi-weekly or even monthly purchases and
              cryptocurrencies you want to buy beforehand.
            </h5>
          </div>
        </div>
        <div className={styles.benefit}>
          <div className={styles.image}>
            <KeyIcon />
          </div>
          <div className={styles.explanation}>
            <h4>Easy Access to CryptoBurst Ecosystem</h4>
            <h5>
              Get your stash of crypto ready to explore other Binance products
              such as staking or spot trading.
            </h5>
          </div>
        </div>
        <div className={styles.benefit}>
          <div className={styles.image}>
            <ShieldHeartIcon />
          </div>
          <div className={styles.explanation}>
            <h4>Emotional Detachment</h4>
            <h5>
              Remove the stress of timing the market and making impulsive
              decisions based on market conditions.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
