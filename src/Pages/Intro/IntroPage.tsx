import React from 'react';
import styles from '../../Styles/Pages/Intro/IntroPage.module.css';
import { IntroGiftIcon } from '../../Components/Footer/SocialsContainer';
import { useGoogleLogin } from '@react-oauth/google';
import GoogleButton from 'react-google-button';
import AppleLogin from '../../Components/General/AppleLogin';

const IntroPage: React.FC = () => {
  return (
    <div className={styles.background}>
      <div className={styles.introductionTextContainer}>
        <div className={styles.introductionTitleContainer}>
          <div className={styles.introductionTitle}>
            <div>199,994,359</div>
            USERS
            <br />
            TRUST US
          </div>
          <div className={styles.emailSignUpContainer}>
            <div className={styles.emailSignUp}>
              <input placeholder="Email/Phone Number" />
              <button>Sign Up</button>
            </div>
            <a className={styles.signUpIncentive}>
              <IntroGiftIcon />
              Sign Up now and get up to 100 USDT in rewards
            </a>
          </div>
        </div>
        <div className={styles.introductionConnection}>
          <div className={styles.socialsContainer}>
            <div>Connect With</div>
            <div className={styles.social}>
              <GoogleButton type="light" style={styleGoogle} />
            </div>
            <div className={styles.social}>
              <AppleLogin />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.informationContainer}>
        <div className={styles.coinsNews}>
          <div className={styles.coins}></div>
          <div className={styles.news}></div>
        </div>
      </div>
    </div>
  );
};

const styleGoogle: React.CSSProperties = {
  display: 'flex',
  alignContent: 'center',
  width: '100%',
  height: '100%',
  borderRadius: '2em',
  backgroundSize: 'cover',
};

export default IntroPage;
