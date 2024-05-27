import React from "react";
import styles from "../../Styles/Pages/Intro/IntroAbout.module.css";
import imgCryptoBurst from "../../Assets/CryptoBurst.png";
import {
  IntroSafari,
  IntroChrome,
  IntroBrave,
  IntroOpera,
} from "../../Components/Footer/SocialsContainer";

const IntroAbout: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.imageContainer}>
        <div className={styles.aboutImage}>
          <img src={imgCryptoBurst} alt="Crypto Burst" />
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.motive}>Trade on the go. Anywhere, anytime.</div>
        <div className={styles.qr}>
          <div className={styles.qrCode}></div>
          <div className={styles.navigate}>
            <h1>Scan the QR Code to sign up now.</h1>
            <h2>iOS and Android</h2>
          </div>
        </div>
        <div className={styles.browsers}>
          <h1>Our Preferred Browsers</h1>
          <div className={styles.browserImg}>
            <IntroSafari />
            <IntroChrome />
            <IntroOpera />
            <IntroBrave />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroAbout;
