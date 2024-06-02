import React from "react";
import { useState } from "react";
import styles from "../../../Styles/Pages/News/News.module.css";
import {
  TrendingIcon,
  HouseIcon,
  ProfileIcon,
  NewsIcon,
} from "../../../Components/Footer/SocialsContainer";
import { StateProp } from "../../../types";

const NewsMenu: React.FC<StateProp>= ({state_passed: activeMenuTab, state_update_function: setActiveMenuTab }) => {
  return (
    <div className={styles.newsMenu}>
      <div
        className={
          activeMenuTab === "Home" ? styles.activeNewsTab : styles.inactiveNewsTabs
        }
        onClick={() => setActiveMenuTab("Home")}
      >
        <HouseIcon />
        <h4>Home</h4>
      </div>
      <div
        className={
          activeMenuTab === "News" ? styles.activeNewsTab : styles.inactiveNewsTabs
        }
        onClick={() => setActiveMenuTab("News")}
      >
        <NewsIcon />
        <h4>News</h4>
      </div>
      <div
        className={
          activeMenuTab === "Profile"
            ? styles.activeNewsTab
            : styles.inactiveNewsTabs
        }
        onClick={() => setActiveMenuTab("Profile")}
      >
        <ProfileIcon />
        <h4>Profile</h4>
      </div>
      <div
        className={
          activeMenuTab === "Trending"
            ? styles.activeNewsTab
            : styles.inactiveNewsTabs
        }
        onClick={() => setActiveMenuTab("Trending")}
      >
        <TrendingIcon />
        <h4>Trending Articles</h4>
      </div>
    </div>
  );
};
export default NewsMenu;
