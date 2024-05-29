import React, { useRef, useState } from "react";
import styles from "../../../Styles/Pages/Markets/MarketsOverview/MarketsOverview.module.css";
import CoinTable from "./CoinTable";
import CoinList from "./CoinList";
import { CoinTypeSelectorProps} from "../../../types";
import { SAMPLE_ITEMS, COIN_FILTERS } from "../../../Constants";


const MarketsOverview = () => {
  const [activeChoice, setActiveChoice] = useState<string>("All Cryptos");
  const allCoinsRef = useRef<HTMLDivElement>(null);
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

const CoinTypeSelector: React.FC<CoinTypeSelectorProps> = ({
  choices,
  onChange,
  current,
}) => {
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





/*

const PageButton: React.FC<PageButtonProps> = ({
  index,
  label,
  handleClick,
  currentPage,
}) => {
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
*/