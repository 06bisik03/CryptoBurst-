import React from "react";
import styles from "../../../Styles/Pages/News/ProfileNews.module.css";
import { ShareIcon } from "../../../Components/Footer/SocialsContainer";
import ProfileDetails from "./ProfileDetails";
import ProfilePosts from "./ProfilePosts";

const ProfileNews: React.FC = () => {
  return (
    <div className={styles.profileContainer}>
        <ProfileDetails/>
        <ProfilePosts/>
    </div>
  );
};
export default ProfileNews;
