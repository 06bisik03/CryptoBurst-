import React, { useState } from 'react';
import styles from '../../../Styles/Pages/BuyCrypto/RecurringBuy/RecurringBuyIntro.module.css';
import img1 from '../../../Assets/Bitcoin.png';
import img2 from '../../../Assets/tether.webp';
import { ArrowRight } from '../../../Components/Footer/SocialsContainer';

const RecurringBuyIntro: React.FC = () => {
  return (
    <div className={styles.recurringBuyContainer}>
      <div className={styles.actionsContainer}>
        <h1>Recurring Buy</h1>
        <div className={styles.actions}>
          <div className={styles.planner}>
            <h3>Create Recurring Plan</h3>
            <div className={styles.plannerInputs}>
              <div className={styles.assetChoices}>
                <div>Select Assets</div>
                <div className={styles.assetInputs}>
                  <div className={styles.inputChoice}>
                    <div>
                      <img src={img1} alt="Bitcoin" />
                    </div>
                    <h4>USD</h4>
                    <div>
                      <ArrowRight h=".6em" translate={[5, 1]} />
                    </div>
                  </div>
                  <h2>To</h2>
                  <div className={styles.inputChoice}>
                    <div>
                      <img src={img2} alt="Tether" />
                    </div>
                    <h4>USDT</h4>
                    <div>
                      <ArrowRight h=".6em" translate={[5, 1]} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.amountInput}>
                <div className={styles.inputContainer}>
                  <label>Amount</label>
                  <input type="text" placeholder="15.00 - 20,000.00" />
                  <div className={styles.currency}>USD</div>
                </div>
              </div>
              <div className={styles.repetition}>
                <h2>Repeat</h2>
                <div className={styles.datePicker}>
                  <DateTimePicker />
                </div>
              </div>
              <button className={styles.buyButton}>Confirm</button>
            </div>
          </div>
          <div className={styles.topCryptos}>
            <h2>Top Cryptos</h2>
            <div className={styles.cryptoList}>
              <TopCoinCard />
              <TopCoinCard />
              <TopCoinCard />
              <TopCoinCard />
              <TopCoinCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecurringBuyIntro;

const TopCoinCard: React.FC = () => {
  return (
    <div className={styles.coin}>
      <div className={styles.coinNamePrice}>
        <div className={styles.nameImage}>
          <div>
            <img src={img1} alt="Bitcoin" />
          </div>
          <h5>BTC</h5>
        </div>
        <div>
          <h5>$</h5>
          <h5>342323</h5>
        </div>
      </div>
      <div className={styles.coinHistory}>
        <h3>Historical ROI</h3>
        <h3>420.00%</h3>
      </div>
    </div>
  );
};

const DateTimePicker: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');

  return (
    <div className={styles.dateTimePicker}>
      <div className={styles.selector}>
        <label htmlFor="day-select" className={styles.label}>
          Weekly, on:
        </label>
        <select
          id="day-select"
          value={selectedDay}
          onChange={(e) => {
            setSelectedDay(e.target.value);
            setSelectedTime(''); // Reset time when day is changed
          }}
          className={styles.select}
        >
          <option value="">Select a day</option>
          {daysOfWeek.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </div>

      {selectedDay && (
        <div className={styles.selector}>
          <label htmlFor="time-select" className={styles.label}>
            At:
          </label>
          <select
            id="time-select"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className={styles.select}
          >
            <option value="">Select a time</option>
            {timeOptions.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const timeOptions = [
  '00:00',
  '01:00',
  '02:00',
  '03:00',
  '04:00',
  '05:00',
  '06:00',
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00',
];
