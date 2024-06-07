import React from 'react';
import styles from '../../Styles/Components/Navbar/Navbar.module.css';
import NavbarLinks from './NavbarLinks';
import NavbarLogAndSearch from './NavbarLogAndSearch';

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbarContainer}>
      <NavbarLinks/>
      <NavbarLogAndSearch/>
    </div>
  );
};

export default Navbar;
