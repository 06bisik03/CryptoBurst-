import React from "react";
import styles from "../../../Styles/Pages/News/ProfileNews.module.css";
import { ShareIcon } from "../../../Components/Footer/SocialsContainer";

const ProfileDetails: React.FC = () => {
  return (
    <div className={styles.profileInfo}>
      <div className={styles.userImageAndInfo}>
        <div className={styles.profileUsernamePhoto}>
          <div className={styles.userImageContainer}></div>
          <h4>TheLoneWolf</h4>
        </div>
        <div className={styles.profileActions}>
          <ShareIcon />
          <button>Edit</button>
        </div>
      </div>
      <div className={styles.profilePublicDetails}>
        <div className={styles.publicDetail}>
          <h4>0</h4>
          <h5>Followers</h5>
        </div>
        <div className={styles.publicDetail}>
          <h4>0</h4>
          <h5>Following</h5>
        </div>
        <div className={styles.publicDetail}>
          <h4>0</h4>
          <h5>Liked</h5>
        </div>
        <div className={styles.publicDetail}>
          <h4>0</h4>
          <h5>Shared</h5>
        </div>
      </div>
    </div>
  );
};
export default ProfileDetails;
