import styles from '../../Styles/Pages/BuyCrypto/BuyCrypto.module.css'
import BuySell from './BuySell';
const BuyCrypto = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.actionsContainer}>
                <ul className={styles.actionMenu}>
                    <li className={styles.active}>Buy&Sell</li>
                    <li className={styles.inactive}>Recurring Buy</li>
                    <li className={styles.inactive}>Withdraw</li>
                </ul>
            </div>
            <div>
                <BuySell/>
            </div>

        </div>
    )
}
export default BuyCrypto;