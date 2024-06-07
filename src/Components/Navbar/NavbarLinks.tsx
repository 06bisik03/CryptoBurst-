import React from "react";
import styles from '../../Styles/Components/Navbar/Navbar.module.css';
const NavbarLinks :React.FC = () => {
    return (
        <div className={styles.navbarLogoControlsContainer}>
        <div className={styles.logoContainer}>
          <a href="/">CryptoBurst</a>
        </div>
        <div className={styles.controlsContainer}>
          <a href="/buycrypto">Buy Crypto</a>
          <a href="/markets">Markets</a>
          <a href="/news">News</a>
          <a>Exchange</a>
          <a>Search</a>
        </div>
      </div>)
}
export default NavbarLinks;