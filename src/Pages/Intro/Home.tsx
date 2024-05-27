import React from 'react';
import styles from '../../Styles/Pages/Intro/Home.module.css';
import IntroAbout from './IntroAbout';
import IntroFaq from './IntroFaq';
import IntroPage from './IntroPage';

const Home: React.FC = () => {
    return (
        <div className={styles.homeContainer}>
            <IntroPage />
            <IntroAbout />
            <IntroFaq />
        </div>
    );
};

export default Home;
