import React from "react";
import styles from "../../../Styles/Pages/News/ProfileNews.module.css";
import img1 from "../../../Assets/Search.png";
const SAMPLE = [];
const ProfilePosts: React.FC = () => {
  return (
    <div className={styles.profilePostsContainer}>
      <div className={styles.profilePostsDescription}>
        <h4> All Posts</h4>
      </div>
      <div className={styles.profilePosts}>
        {SAMPLE.length === 0 && (
          <div className={styles.noPostsImg}>
            <img src={img1} className={styles.noPostsImg} />

            <h4>No Records</h4>
          </div>
        )}
      </div>
    </div>
  );
};
export default ProfilePosts;
