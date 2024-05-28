import React from "react";
import usePagination from "../../Hooks/UsePagination";
import styles from "../../Styles/Pages/Markets/MarketsOverview.module.css";
import { Sort } from "../../Components/Footer/SocialsContainer";
import PaginationControls from "./PaginationControls"; // Adjust the path as necessary
import { Details,Trade } from "../../Components/Footer/SocialsContainer";
import img1 from '../../Assets/BTC.jpeg'
import { Item,CoinTableProps } from "../../types";
const CoinTable: React.FC<CoinTableProps> = ({ items, onChange }) => {
  const {
    currentPage,
    totalPages,
    currentItems,
    handleClick,
    handlePrevClick,
    handleNextClick,
  } = usePagination(items, 19);
  
  return (
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
        {currentItems.map((item, index) => (
          <Coin key={index} />
        ))}
      </div>
      <PaginationControls
        currentPage={currentPage}
        handleClick={(i) => {
          handleClick(i);
          onChange && onChange(i);
        }}
        handleNextClick={handleNextClick} // TODO: emit onchange event to parent
        handlePrevClick={handlePrevClick}
        maxButtons={6}
        totalPages={totalPages}
      />
    </div>
  );
};
export default CoinTable;

const Coin: React.FC = () => {
  return (
    <div className={styles.coinMarket}>
      <div className={styles.coinIllustration}>
        <div>
          <img src={img1} alt="Coin" />
        </div>
        <h4>BTC</h4>
        <h5>Bitcoin</h5>
      </div>
      <div className={styles.coinPrice}>$68,789.70</div>
      <div className={styles.coinChange}>-0.61%</div>
      <div className={styles.volume}>$15.21B</div>
      <div className={styles.marketCap}>$1,355.25B</div>
      <div className={styles.actions}>
        <Details />
        <Trade />
      </div>
    </div>
  );
};
