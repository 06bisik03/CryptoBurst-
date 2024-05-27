import React, { useState } from 'react';
import styles from '../../Styles/Pages/Markets/Markets.module.css';
import MarketsOverview from './MarketsOverview';

const Markets: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Markets Overview');

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className={styles.marketsContainer}>
      <div className={styles.overview}>
        <div className={styles.choice}>
          <h1
            className={
              activeTab === 'Markets Overview' ? styles.active : styles.inactive
            }
            onClick={() => handleTabClick('Markets Overview')}
          >
            Markets Overview
          </h1>
          <h1
            className={
              activeTab === 'Trading Data' ? styles.active : styles.inactive
            }
            onClick={() => handleTabClick('Trading Data')}
          >
            Trading Data
          </h1>
        </div>
        <MarketsOverview />
      </div>
    </div>
  );
};

export default Markets;
