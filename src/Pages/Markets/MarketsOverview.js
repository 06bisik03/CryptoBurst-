import React, { useRef, useState } from "react";
import img1 from "../../Assets/BTC.jpeg";
import {
  ArrowRight,
  Details,
  Sort,
  Trade,
} from "../../Components/Footer/SocialsContainer";
import styles from "../../Styles/Pages/Markets/MarketsOverview.module.css";

const itemsPerPage = 5;

const SAMPLE_ITEMS = Array.from({ length: 80 }, (x, i) => ({
  name: `Coin ${i}`,
}));

const COIN_FILTERS = ["All Cryptos", "Top Gainers", "Top Losers"];

const MarketsOverview = () => {
  const [activeChoice, setActiveChoice] = useState("All Cryptos");
  const allCoinsRef = useRef(null);
  const scrollToAllCoins = () => {
    if (allCoinsRef.current) {
      const offset =
        allCoinsRef.current.getBoundingClientRect().top +
        window.scrollY -
        window.innerHeight * 0.1;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  const selectedItems = SAMPLE_ITEMS.filter((item) => true); // filter based on activeChoice

  return (
    <div className={styles.marketsOverviewContainer}>
      <div className={styles.coinListsContainer}>
        <CoinList />
        <CoinList />
        <CoinList />
        <CoinList />
      </div>
      <div className={styles.marketChoices} ref={allCoinsRef}>
        <CoinTypeSelector
          choices={COIN_FILTERS}
          current={activeChoice}
          onChange={setActiveChoice}
        />
      </div>
      <CoinTable
        items={selectedItems}
        onChange={(newPage) => scrollToAllCoins()}
      />
    </div>
  );
};

export default MarketsOverview;

// use a Custom Hook to handle pagination
const usePagination = (items, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const currentItems = items.slice(
    currentPage * itemsPerPage,
    (1 + currentPage) * itemsPerPage
  );

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevClick = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  return {
    currentPage,
    totalPages,
    currentItems,
    handleClick,
    handlePrevClick,
    handleNextClick,
  };
};

const PageButton = ({ index, label, handleClick, currentPage }) => {
  const _label = label ?? index;

  return (
    <button
      key={index}
      onClick={() => handleClick(index)}
      className={
        currentPage === index ? styles.activePage : styles.inactivePage
      }
    >
      {_label}
    </button>
  );
};

const PaginationControls = ({
  currentPage,
  totalPages,
  handleClick,
  handlePrevClick,
  handleNextClick,
  maxButtons,
}) => {
  // TODO there is still a bug here when there are less items than maxButtons
  const buttonsBefore = Math.ceil(maxButtons / 2);
  const buttonsAfter = Math.floor(maxButtons / 2);
  const shouldRenderStartEllipsis = currentPage - 1 > buttonsBefore;
  const shouldRenderEndEllipsis = totalPages - currentPage - 1 > buttonsAfter;

  const indexesToRender = [];
  for (let i = currentPage - buttonsAfter; i < currentPage && i >= 1; i++)
    indexesToRender.push(i);

  if (currentPage !== 0 && currentPage !== totalPages - 1)
    indexesToRender.push(currentPage);

  for (
    let i = currentPage + 1;
    i < totalPages - 1 && i < currentPage + buttonsAfter;
    i++
  )
    indexesToRender.push(i);

  return (
    <div className={styles.pagination}>
      <span
        onClick={handlePrevClick}
        className={`${styles.paginationArrow} ${
          currentPage === 0 ? styles.disabled : ""
        }`}
      >
        &lt;
      </span>
      <PageButton
        index={0}
        handleClick={handleClick}
        currentPage={currentPage}
      />
      {shouldRenderStartEllipsis && <span>...</span>}
      {indexesToRender.map((index) => (
        <PageButton
          key={index}
          index={index}
          handleClick={handleClick}
          currentPage={currentPage}
        />
      ))}
      {shouldRenderEndEllipsis && <span>...</span>}
      <PageButton
        index={totalPages - 1}
        handleClick={handleClick}
        currentPage={currentPage}
      />
      <span
        onClick={handleNextClick}
        className={`${styles.paginationArrow} ${
          currentPage === totalPages - 1 ? styles.disabled : ""
        }`}
      >
        &gt;
      </span>
    </div>
  );
};

const CoinTable = ({ items, onChange }) => {
  const {
    currentPage,
    totalPages,
    currentItems,
    handleClick,
    handlePrevClick,
    handleNextClick,
  } = usePagination(items, itemsPerPage);

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

const CoinTypeSelector = ({ choices, onChange, current }) => {
  return (
    <div className={styles.choices}>
      {choices.map((choice) => (
        <h4
          key={choice}
          className={choice === current ? styles.active : styles.inactive}
          onClick={() => onChange(choice)}
        >
          {choice}
        </h4>
      ))}
    </div>
  );
};

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
