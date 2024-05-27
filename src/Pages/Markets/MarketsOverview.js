import React, { useState, useEffect } from "react";
import styles from "../../Styles/Pages/Markets/MarketsOverview.module.css";
import {
  ArrowRight,
  Details,
  Sort,
  Trade,
} from "../../Components/Footer/SocialsContainer";
import img1 from "../../Assets/BTC.jpeg";
import { useRef } from "react";

const itemsPerPage = 19;
const xx = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23,
  24, 25, 26, 27, 28, 29, 30,
];

const MarketsOverview = () => {
  const [activeChoice, setActiveChoice] = useState("All Cryptos");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(xx.length / itemsPerPage);
  const allCoinsRef = useRef(null);

  const handleChoiceClick = (choice) => {
    setActiveChoice(choice);
  };
  const scrollToAllCoins = () => {
    if (allCoinsRef.current) {
      const offset = allCoinsRef.current.getBoundingClientRect().top + window.scrollY - (window.innerHeight * 0.1);
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollToAllCoins();
  };

  const handlePrevClick = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
    scrollToAllCoins();
  };

  const handleNextClick = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    scrollToAllCoins();
  };


  const currentItems = xx.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxButtons = 7;

    if (totalPages <= maxButtons) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(
          <button
            key={i}
            onClick={() => handleClick(i)}
            className={
              currentPage === i ? styles.activePage : styles.inactivePage
            }
          >
            {i}
          </button>
        );
      }
    } else {
      let startPage = Math.max(1, currentPage - 2);
      let endPage = Math.min(totalPages, currentPage + 2);

      if (currentPage <= 3) {
        endPage = 5;
      }

      if (currentPage >= totalPages - 2) {
        startPage = totalPages - 4;
      }

      for (let i = startPage; i <= endPage; i++) {
        buttons.push(
          <button
            key={i}
            onClick={() => handleClick(i)}
            className={
              currentPage === i ? styles.activePage : styles.inactivePage
            }
          >
            {i}
          </button>
        );
      }

      if (currentPage > 3) {
        buttons.unshift(
          <span key="start-ellipsis" className={styles.ellipsis}>
            ...
          </span>
        );
        buttons.unshift(
          <button
            key={1}
            onClick={() => handleClick(1)}
            className={
              currentPage === 1 ? styles.activePage : styles.inactivePage
            }
          >
            1
          </button>
        );
      }

      if (currentPage < totalPages - 2) {
        buttons.push(
          <span key="end-ellipsis" className={styles.ellipsis}>
            ...
          </span>
        );
        buttons.push(
          <button
            key={totalPages}
            onClick={() => handleClick(totalPages)}
            className={
              currentPage === totalPages
                ? styles.activePage
                : styles.inactivePage
            }
          >
            {totalPages}
          </button>
        );
      }
    }

    return buttons;
  };

  return (
    <div className={styles.marketsOverviewContainer}>
      <div className={styles.coinListsContainer}>
        <CoinList />
        <CoinList />
        <CoinList />
        <CoinList />
      </div>
      <div className={styles.marketChoices} ref={allCoinsRef}>
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
          {currentItems.map((item, index) => (
            <Coin key={index} />
          ))}
        </div>
        <div className={styles.pagination}>
          <span
            onClick={handlePrevClick}
            className={`${styles.paginationArrow} ${
              currentPage === 1 ? styles.disabled : ""
            }`}
          >
            &lt;
          </span>
          {renderPaginationButtons()}
          <span
            onClick={handleNextClick}
            className={`${styles.paginationArrow} ${
              currentPage === totalPages ? styles.disabled : ""
            }`}
          >
            &gt;
          </span>
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
          <img src={img1} alt="Coin" />
        </div>
        <div className={styles.coinFinance}>
          <h5>BTC</h5>
          <h5>$69.6K</h5>
          <h5>-0.07%</h5>
        </div>
      </div>
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
    </div>
  );
};

const Coin = () => {
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
