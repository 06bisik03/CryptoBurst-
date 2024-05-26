import styles from '../../Styles/Pages/BuyCrypto/BuyCrypto.module.css'
import BuySell from './Buy&Sell/BuySell';
import RecurringBuy from './RecurringBuy/RecurringBuy';
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
           
                {/* <BuySell/> */}
                <RecurringBuy />
           

        </div>
    )
}
export default BuyCrypto;