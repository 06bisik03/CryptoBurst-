import React from "react";
import { useState } from "react";
import styles from "../../Styles/Pages/News/News.module.css";
import {
  TrendingIcon,
  HouseIcon,
  ProfileIcon,
  NewsIcon,
} from "../../Components/Footer/SocialsContainer";

const NewsMenu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Home");
  return (
    <div className={styles.newsMenu}>
      <div
        className={
          activeTab === "Home" ? styles.activeNewsTab : styles.inactiveNewsTabs
        }
        onClick={() => setActiveTab("Home")}
      >
        <HouseIcon />
        <h4>Home</h4>
      </div>
      <div
        className={
          activeTab === "News" ? styles.activeNewsTab : styles.inactiveNewsTabs
        }
        onClick={() => setActiveTab("News")}
      >
        <NewsIcon />
        <h4>News</h4>
      </div>
      <div
        className={
          activeTab === "Profile"
            ? styles.activeNewsTab
            : styles.inactiveNewsTabs
        }
        onClick={() => setActiveTab("Profile")}
      >
        <ProfileIcon />
        <h4>Profile</h4>
      </div>
      <div
        className={
          activeTab === "Trending"
            ? styles.activeNewsTab
            : styles.inactiveNewsTabs
        }
        onClick={() => setActiveTab("Trending")}
      >
        <TrendingIcon />
        <h4>Trending Articles</h4>
      </div>
    </div>
  );
};
export default NewsMenu;
