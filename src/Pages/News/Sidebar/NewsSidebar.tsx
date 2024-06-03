import React from "react";
import styles from "../../../Styles/Pages/News/NewsSidebar.module.css";
import TrendingTopics from "./TrendingTopics";
import VoteMarket from "./VoteMarket";
import MostSearched from "./MostSearched";
import LatestNews from "./LatestNews";

import MustFollow from "./MustFollow";

const NewsSidebar : React.FC = () => {
    return (
        <div className={styles.newsSidebar}>
            <TrendingTopics />
            <VoteMarket />
            <MostSearched />
            <LatestNews />
            <MustFollow />

        </div>
    )
}
export default NewsSidebar;