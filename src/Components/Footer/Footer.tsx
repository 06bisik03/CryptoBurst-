import React from "react";
import styles from "../../Styles/Components/Footer/Footer.module.css";
import {
  SocialsFacebook,
  SocialsGithub,
  SocialsInsta,
  SocialsX,
  SocialsLinkedIn,
  SocialsTelegram,
  SocialsDiscord,
  SocialsWhatsapp,
  SocialsReddit,
  SocialsYoutube,
  FunctionsWorld,
  FunctionsCurrency,
  FunctionsTheme,
} from "./SocialsContainer";

const Footer: React.FC = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.linksContainer}>
        <div className={styles.socialsContainer}>
          <div className={styles.socials}>
            <div>Community</div>
            <div className={styles.socialsButtons}>
              <SocialsInsta />
              <SocialsX />
              <SocialsFacebook />
              <SocialsGithub />
              <SocialsDiscord />
              <SocialsLinkedIn />
              <SocialsReddit />
              <SocialsTelegram />
              <SocialsYoutube />
              <SocialsWhatsapp />
            </div>
          </div>
          <div className={styles.functions}>
            <div className={styles.functionality}>
              <FunctionsWorld />
              <div>English</div>
            </div>
            <div className={styles.functionality}>
              <FunctionsCurrency />
              <div>USD</div>
            </div>
            <div className={styles.functionality}>
              <FunctionsTheme />
              <div>Theme</div>
            </div>
          </div>
        </div>
        <div className={styles.linkContainer}>
          <div>About Us</div>
          <div className={styles.links}>
            <a href="#about">About</a>
            <a href="#announcements">Announcements</a>
            <a href="#news">News</a>
            <a href="#blog">Blog</a>
            <a href="#community">Community</a>
            <a href="#terms">Terms</a>
            <a href="#sitemap">Sitemap</a>
            <a href="#risk-warning">Risk Warning</a>
            <a href="#careers">Careers</a>
            <a href="#press">Press</a>
            <a href="#legal">Legal</a>
          </div>
        </div>
        <div className={styles.linkContainer}>
          <div>Products</div>
          <div className={styles.links}>
            <a href="#exchange">Exchange</a>
            <a href="#buy-crypto">Buy Crypto</a>
            <a href="#academy">Academy</a>
            <a href="#leveraged-tokens">Leveraged Tokens</a>
            <a href="#auto-invest">Auto-Invest</a>
            <a href="#research">Research</a>
            <a href="#browse-prices">Browse Prices</a>
            <a href="#learn-earn">Learn & Earn</a>
            <a href="#bitcoin-price-prediction">Bitcoin Price Prediction</a>
            <a href="#ethereum-price-prediction">Ethereum Price Prediction</a>
            <a href="#buy-bitcoin">Buy Bitcoin</a>
            <a href="#buy-ethereum">Buy Ethereum</a>
            <a href="#buy-dogecoin">Buy Dogecoin</a>
            <a href="#buy-ripple">Buy Ripple</a>
            <a href="#buy-bnb">Buy BNB</a>
          </div>
        </div>
        <div className={styles.linkContainer}>
          <div>Support</div>
          <div className={styles.links}>
            <a href="#support-center">Support Center</a>
            <a href="#product-feedback">Product Feedback & Suggestions</a>
            <a href="#fees">Fees</a>
            <a href="#apis">APIs</a>
            <a href="#trading-rules">Trading Rules</a>
            <a href="#resources">Resources</a>
            <a href="#project-manager">Project Manager</a>
          </div>
        </div>
      </div>
      <div className={styles.rightsContainer}>
        CryptoBurst 2024 <br />
        All rights belong to sources used
      </div>
    </div>
  );
};

export default Footer;
