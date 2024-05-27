import React from "react";
import styles from "../../../Styles/Pages/BuyCrypto/RecurringBuy/RecurringBuy.module.css";
import Benefits from "./Benefits";
import GettingStarted from "./GettingStarted";
import Guides from "./Guides";
import RecurringBuyIntro from "./RecurringBuyIntro";
import Risks from "./Risks";

const RecurringBuy: React.FC = () => {
  return (
    <div className={styles.recurringBuyContainer}>
      <RecurringBuyIntro />
      <Benefits />
      <Risks />
      <GettingStarted />
      <Guides />
    </div>
  );
};

export default RecurringBuy;
