import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import IntroPage from './Pages/Intro/IntroPage';
import styles from './Styles/App.module.css';
import Footer from './Components/Footer/Footer';
import BuyCrypto from './Pages/BuyCrypto/BuyCrypto';
import Home from './Pages/Intro/Home';
import Markets from './Pages/Markets/Markets';
import News from './Pages/News/News';

const App: React.FC = () => {
  return (
    <div className={styles.appContainer}>
      <div className={styles.pageContainer}>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/buycrypto" element={<BuyCrypto />} />
            <Route path="/markets" element={<Markets />} />
            <Route path="/news" element={<News />}/>
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
};

export default App;
