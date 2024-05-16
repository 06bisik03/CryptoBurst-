import styles from "../../Styles/Components/Navbar/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarLogoControlsContainer}>
        <div className={styles.logoContainer}>
          <div>CryptoBurst</div>
        </div>
        <div className={styles.controlsContainer}>
          <a>Buy Crypto</a>
          <a>Market</a>
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
            crossorigin="anonymous"
          />
          <form action="">
            <input type="search" required />
            <i className={["fa", "fa-search", styles.fa].join(" ")} />
          </form>
        </div>

        <div className={styles.logContainer}>Log In</div>
      </div>
    </div>
  );
};
export default Navbar;
