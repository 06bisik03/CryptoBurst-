import React from "react";
import styles from "../../Styles/Pages/News/NewsContent.module.css";
import { useState } from "react";

const NewsContent: React.FC = () => {
    const [activeTab,setActiveTab] = useState<string>("Recommended")
  return <div className={styles.newsContent}>
    <div className={styles.newsChoice}>
        <h4 onClick={() => setActiveTab("Recommended")}>Recommended</h4>
        <h4 onClick={() => setActiveTab("Following")}>Following</h4>
    </div>
    <div></div>
  </div>;
};
export default NewsContent;
