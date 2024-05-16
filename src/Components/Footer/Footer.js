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
const Footer = () => {
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
            <a>About</a>
            <a>Announcements</a>
            <a>News</a>
            <a>Blog</a>
            <a>Community</a>
            <a>Terms</a>
            <a>Sitemap</a>
            <a>Risk Warning</a>
            <a>Careers</a>
            <a>Press</a>
            <a>Legal</a>
          </div>
        </div>
        <div className={styles.linkContainer}>
          <div>Products</div>
          <div className={styles.links}>
            <a>Exchange</a>
            <a>Buy Crypto</a>
            <a>Academy</a>
            <a>Leveraged Tokens</a>
            <a>Auto-Invest</a>
            <a>Research</a>
            <a>Browse Prices</a>
            <a>Learn & Earn</a>
            <a>Bitcoin Price Prediction</a>
            <a>Ethereum Price Prediciton</a>
            <a>Buy Bitcoin</a>
            <a>Buy Etherum</a>
            <a>Buy Dogecoin</a>
            <a>Buy Ripple</a>
            <a>Buy BNB</a>
          </div>
        </div>
        <div className={styles.linkContainer}>
          <div>Support</div>
          <div className={styles.links}>
            <a>Support Center</a>
            <a>Product Feedback & Suggestions</a>
            <a>Fees</a>
            <a>APIs</a>
            <a>Trading Rules</a>
            <a>Resources</a>
            <a>Project manager</a>
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
