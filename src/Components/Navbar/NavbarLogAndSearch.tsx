import React from "react";
import styles from "../../Styles/Components/Navbar/Navbar.module.css";
const NavbarLogAndSearch: React.FC = () => {
  return (
    <div className={styles.navbarRedirectContainer}>
      <div className={styles.searchContainer}>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
        />
        <form action="">
          <input type="search" required />
          <i className={["fa", "fa-search", styles.fa].join(" ")} />
        </form>
      </div>
      <a href="/login"className={styles.logContainer}>Log In</a>
    </div>
  );
};
export default NavbarLogAndSearch;
