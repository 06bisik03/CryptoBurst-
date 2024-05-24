import Navbar from "./Components/Navbar/Navbar";
import IntroPage from "./Pages/Intro/IntroPage";
import styles from "./Styles/App.module.css";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BuyCrypto from "./Pages/BuyCrypto/BuyCrypto";
import Home from "./Pages/Intro/Home";
function App() {
  return (
    <body>
      <div className={styles.appContainer}>
        <div className={styles.pageContainer}>
          <Navbar />
          <BrowserRouter>
            <Routes>
              <Route index element={<Home/>} />
              <Route path="/buycrypto" element={<BuyCrypto />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </div>
      </div>
    </body>
  );
}

export default App;
