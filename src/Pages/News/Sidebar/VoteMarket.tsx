import React, { Fragment, useEffect, useState } from "react";
import styles from "../../../Styles/Pages/News/NewsSidebar.module.css";
import GaugeComponent from "react-gauge-component";
import { GaugeProps } from "../../../types";
const VoteMarket: React.FC = () => {
  return (
    <div className={styles.voteMarketContainer}>
      <h4>Fear & Greed Index</h4>
      <Gauge value={50} />
      <div className={styles.questionaire}>
        <h4>How do you feel about the market today?</h4>
        <div className={styles.voteButtons}>
          <button>Bearish</button>
          <button>Bullish</button>
        </div>
      </div>
    </div>
  );
};
export default VoteMarket;

const Gauge : React.FC<GaugeProps> = ({ value }) => {
  const valueMarket = (value:number) => {
    if (value < 50) {
      return `Bearish`;
    } else if (value === 50) {
      return `Balanced`;
    } else {
      return `Bullish`;
    }
  };

  return (
    <Fragment>
      <GaugeComponent
        arc={{
          nbSubArcs: 150,
          colorArray: ["rgb(246, 70, 93)", "#ffff77", "#0ecb81"],
          width: 0.15,
          padding: 0.003,
        }}
        className={styles.gauge}
        labels={{
          valueLabel: {
            style: {
              fontSize: "35em",
              textShadow: "none",
              fill: value >=50 ? "#0ecb81" : "rgb(246, 70, 93)"
            },
            formatTextValue: valueMarket,
            
          },
          tickLabels: {
            hideMinMax: true,
          },
        }}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        value={value}
        minValue={0}
        maxValue={100}
      />
      <div
        className={styles.valueMarket}
        style={{ color: value >= 50 ? "#0ecb81" : "rgb(246, 70, 93)" }}
      >
        {value}
      </div>
    </Fragment>
  );
};

