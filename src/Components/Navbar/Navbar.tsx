import React from 'react';
import styles from '../../Styles/Components/Navbar/Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarLogoControlsContainer}>
        <div className={styles.logoContainer}>
          <a href="/">CryptoBurst</a>
        </div>
        <div className={styles.controlsContainer}>
          <a href="/buycrypto">Buy Crypto</a>
          <a href="/markets">Markets</a>
          <a>News</a>
          <a>Exchange</a>
          <a>Search</a>
        </div>
      </div>
      <div className={styles.navbarRedirectContainer}>
        <div className={styles.searchContainer}>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
            crossOrigin="anonymous"
          />
          <form action="">
            <input type="search" required />
            <i className={['fa', 'fa-search', styles.fa].join(' ')} />
          </form>
        </div>
        <div className={styles.logContainer}>Log In</div>
      </div>
    </div>
  );
};

export default Navbar;
