import React from "react";
import styles from "../../Styles/Pages/News/News.module.css";
import { TrendingIcon,HouseIcon,ProfileIcon,NewsIcon } from "../../Components/Footer/SocialsContainer";
const NewsMenu : React.FC = () => {
    return (
        <div className={styles.newsMenu}>
          <div>
            <HouseIcon />
            <h4>Home</h4>
          </div>
          <div>
            <NewsIcon/>
            <h4>News</h4>
          </div>
          <div>
            <ProfileIcon/>
            <h4>Profile</h4>
          </div>
          <div>
            <TrendingIcon/>
            <h4>Trending Articles</h4>
          </div>
        </div>
    )
}
export default NewsMenu;