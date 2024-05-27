import React, { useState } from 'react';
import styles from '../../Styles/Pages/BuyCrypto/BuyCrypto.module.css';
import BuySell from './Buy&Sell/BuySell';
import RecurringBuy from './RecurringBuy/RecurringBuy';
import Withdraw from './Withdraw/Withdraw';

const BuyCrypto: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Buy&Sell');

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.actionsContainer}>
        <ul className={styles.actionMenu}>
          <li
            className={activeTab === 'Buy&Sell' ? styles.active : styles.inactive}
            onClick={() => handleTabClick('Buy&Sell')}
          >
            Buy&Sell
          </li>
          <li
            className={activeTab === 'RecurringBuy' ? styles.active : styles.inactive}
            onClick={() => handleTabClick('RecurringBuy')}
          >
            Recurring Buy
          </li>
          <li
            className={activeTab === 'Withdraw' ? styles.active : styles.inactive}
            onClick={() => handleTabClick('Withdraw')}
          >
            Withdraw
          </li>
        </ul>
      </div>
      <div className={styles.contentContainer}>
        {activeTab === 'Buy&Sell' && <BuySell />}
        {activeTab === 'RecurringBuy' && <RecurringBuy />}
        {activeTab === 'Withdraw' && <Withdraw />}
      </div>
    </div>
  );
};

export default BuyCrypto;
