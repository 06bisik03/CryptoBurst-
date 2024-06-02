import React from "react";
import styles from "../../../Styles/Pages/News/NewsSidebar.module.css";
import GaugeChart from "react-gauge-chart";
const VoteMarket: React.FC = () => {
  return (
    <div className={styles.voteMarketContainer}>
      <h4>Fear & Greed Index</h4>
      <GaugeChart
      id="gauge-chart"
      nrOfLevels={60} // Increase the number of levels to make the gauge look smoother
      percent={0.86} // Set the percentage to 0.35
      arcPadding={0.02} // Space between the segments
      arcWidth={0.15}
      colors={['red', 'red', '#adff2f', '#adff2f']} // Custom colors
      cornerRadius={0}
      needleColor="black" // Set the needle color
      className={styles.gauge}
      style={chartStyle}
    />
    <div className={styles.questionaire}>
    <h4>How do you feel about the market today?</h4>
    <button></button>
    </div>
   
    </div>
  );
};
export default VoteMarket;
const chartStyle ={
    height: '15.5vh'
}