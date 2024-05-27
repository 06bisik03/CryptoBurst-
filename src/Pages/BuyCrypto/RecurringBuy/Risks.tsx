import React from "react";
import styles from "../../../Styles/Pages/BuyCrypto/RecurringBuy/Risks.module.css";

const Risks: React.FC = () => {
  return (
    <div className={styles.risksContainer}>
      <h2>Risks of DCA via Recurring Buy</h2>
      <div className={styles.risk}>
        <h3>Missing Out on Large Gains</h3>
        <h4>DCA does not include lump sum investments during market dips, thus you may miss out on a larger profit.</h4>
      </div>
      <div className={styles.risk}>
        <h3>Crypto Facts</h3>
        <h4>Such large gains require investors to time the market correctly which is almost impossible, which is why DCA can help smooth out market timings.</h4>
      </div>
      <div className={styles.risk}>
        <h3>Lack of Detailed Investment Information</h3>
        <h4>DCA strategy does not help identify good investments. Hence, it’s important to DYOR before committing to a DCA approach.</h4>
      </div>
    </div>
  );
};

export default Risks;
