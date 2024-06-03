import React from "react";
import styles from "../../../Styles/Pages/News/NewsSidebar.module.css";
import GaugeComponent from "react-gauge-component";
const VoteMarket: React.FC = () => {
  return (
    <div className={styles.voteMarketContainer}>
      <h4>Fear & Greed Index</h4>
      <Gauge/>
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
const Gauge: React.FC = () => {
  const kbitsToMbits = (value: number) => {
    if (value < 50) {

      return `${value} Bullish`;
    } else if (value === 50) {
      return `${value} Balanced`;
    } else {
      return `${value} \n Greed`
    }
  };
  return (
    <GaugeComponent
      arc={{
        nbSubArcs: 150,
        colorArray: [ "rgb(246, 70, 93)", "#ffff77","#0ecb81"],
        width: 0.15,
        padding: 0.003,
      }}
      className={styles.gauge}
      labels={{
        valueLabel: {
          style: {fontSize: '35em',textShadow:'none' ,color:"white"},
          matchColorWithArc: true,

          formatTextValue: kbitsToMbits,
        },
       tickLabels: {
        hideMinMax: true
       }
      }}
      style={{ width: '100%', height: '100%', objectFit: 'cover'}}
      
      value={60}
      minValue={0}
      maxValue={100}

      
    />
  );
};
//TODO: Viewport wide => gauge not expected behaviour