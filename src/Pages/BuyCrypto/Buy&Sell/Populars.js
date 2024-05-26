import styles from "../../../Styles/Pages/BuyCrypto/Buy&Sell/Populars.module.css";
import testImg1 from "../../../Assets/Bitcoin.png";
import testImg2 from "../../../Assets/tether.webp";
const Populars = () => {
  return (
    <div className={styles.popularsContainer}>
      <h1>Popular Transitions</h1>
      <div className={styles.transitions}>
        <TransactionCard img1={testImg1} img2={testImg2} />
        <TransactionCard img1={testImg1} img2={testImg2} />
        <TransactionCard img1={testImg1} img2={testImg2} />
        <TransactionCard img1={testImg1} img2={testImg2} />
        <TransactionCard img1={testImg1} img2={testImg2} />
        <TransactionCard img1={testImg1} img2={testImg2} />
        <TransactionCard img1={testImg1} img2={testImg2} />
        <TransactionCard img1={testImg1} img2={testImg2} />
        <TransactionCard img1={testImg1} img2={testImg2} />
      </div>
    </div>
  );
};
export default Populars;
const TransactionCard = ({ img1, img2 }) => {
  return (
    <div className={styles.transitionCard}>
      <div className={styles.transitionDetails}>
        <h2>USDT to USD</h2>
        <h3>1 USDT = 0.9997364 USD</h3>
      </div>
      <div className={styles.transitionImage}>
        <div className={styles.transitionPic1}>
          <img src={img1} />
        </div>
        <div className={styles.transitionPic2}>
          <img src={img2} />
        </div>
      </div>
    </div>
  );
};
