import React from 'react';
import styles from '../../../Styles/Pages/BuyCrypto/RecurringBuy/Guides.module.css';

const Guides: React.FC = () => {
  return (
    <div className={styles.guidesContainer}>
      <h1>Guides & Resources</h1>
      <div className={styles.guides}>
        <a
          className={styles.guideLink}
          href="https://www.binance.com/en/blog/fiat/how-to-grow-your-crypto-portfolio-with-recurring-buy-421499824684903346"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <img src="https://public.bnbstatic.com/image/cms/blog/20220125/48d4f974-051e-43e6-9b57-067b0d316261.png" alt="Guide 1" />
          </div>
          <h2>How To Grow Your Crypto Portfolio with Recurring Buy</h2>
        </a>
        <a
          className={styles.guideLink}
          href="https://www.binance.com/en/blog/fiat/crypto-recurring-investments-benefits-and-how-to-start-421499824684903369"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <img src="https://public.bnbstatic.com/image/cms/blog/20220131/7aaa05c1-11cd-49d1-9eaa-d14f9d9b4aba.png" alt="Guide 2" />
          </div>
          <h2>Crypto Recurring Investments: Benefits and How to Start</h2>
        </a>
        <a
          className={styles.guideLink}
          href="https://www.binance.com/en/support/faq/how-to-use-recurring-buy-3b628537b6314964bb08b5b22fab6c18?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <img src="https://support.binance.us/hc/article_attachments/11078765609367" alt="Guide 3" />
          </div>
          <h2>How to Use Recurring Buy?</h2>
        </a>
      </div>
    </div>
  );
};

export default Guides;
