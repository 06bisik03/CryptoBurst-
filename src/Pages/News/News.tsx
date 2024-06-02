import React, { useEffect, useState } from "react";

import styles from "../../Styles/Pages/News/News.module.css";
import NewsMenu from "./Home/NewsMenu";
import NewsContent from "./Home/NewsContent";
import NewsSidebar from "./Sidebar/NewsSidebar";
import ProfileNews from "./Profile/ProfileNews";

const News: React.FC = () => {
  const [activeMenuTab, setActiveMenuTab] = useState<string>("Home");
  console.log(activeMenuTab);
  return (
    <div className={styles.newsContainer}>
      <div className={styles.newsChoices}>
        <NewsMenu
          state_passed={activeMenuTab}
          state_update_function={setActiveMenuTab}
        />
        <div className={styles.profile}></div>
      </div>
      {activeMenuTab === "Home" && <NewsContent />}
      {activeMenuTab === "News" && <NewsContent />}
      {activeMenuTab === "Profile" && <ProfileNews />}
      {activeMenuTab === "Trending" && <NewsContent />}

      <NewsSidebar />
    </div>
  );
};
export default News;
