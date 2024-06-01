import React from "react";
import styles from "../../Styles/Pages/News/PostNews.module.css";
import img1 from '../../Assets/Bitcoin.png'
const PostNews: React.FC = () => {
  return (
    <div className={styles.postNewsContainer}>
      <div className={styles.authorContainer}>
        <div className={styles.imgContainer}>
          <img alt="author" src={img1}/>
        </div>
      </div>
      <div className={styles.postContent}>
        <textarea
          className={styles.textArea}
          placeholder="Share your thoughts"
        ></textarea>
        <button>Post</button>
      </div>
    </div>
  );
};

export default PostNews;
