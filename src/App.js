import Navbar from "./Components/Navbar/Navbar";
import IntroPage from "./Pages/Intro/IntroPage";
import styles from "./Styles/App.module.css";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BuyCrypto from "./Pages/BuyCrypto/BuyCrypto";
function App() {
  return (
    <body>
      <div className={styles.appContainer}>
        <Navbar />
        <div className={styles.pageContainer}>
          <BrowserRouter>
            <Routes>
              <Route index element={<IntroPage />}/>
              <Route path="/buycrypto" element={<BuyCrypto/>}/>
            </Routes>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    </body>
  );
}

export default App;
