import { useState, useRef, useEffect } from "react";
import styles from "../../Styles/Pages/Intro/IntroFaq.css";

const IntroFaq = () => {
  const [selection, setSelection] = useState(null);
  const contentRefs = useRef([]);
  const containerRef = useRef(null);

  const handleSelect = (drawer) => {
    setSelection(drawer);
  };

  const handleDeselect = () => {
    setSelection(null);
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.maxHeight =
          selection === index + 1 ? `${ref.scrollHeight}px` : "0px";
      }
    });

    // Adjust the height of the container based on the selected drawer
    if (containerRef.current) {
      const selectedContent = contentRefs.current[selection - 1];
      if (selectedContent) {
        const contentHeight = selectedContent.scrollHeight;
        const titleHeight = selectedContent.previousElementSibling.scrollHeight;
        const newHeight =
          90 + ((contentHeight + titleHeight) / window.innerHeight) * 100;
        containerRef.current.style.height = `${newHeight}vh`;
      } else {
        containerRef.current.style.height = "90vh";
      }
    }
  }, [selection]);

  return (
    <div className="container" ref={containerRef}>
      <h1>Frequently Asked Questions</h1>

      <div className="faq-drawer">
        <input
          className="faq-drawer__trigger"
          id="faq-drawer"
          type="checkbox"
          checked={selection === 1}
          readOnly
        />
        <label
          className="faq-drawer__title"
          htmlFor="faq-drawer"
          onClick={selection === 1 ? handleDeselect : () => handleSelect(1)}
        >
          What is a cryptocurrency trading platform?
        </label>
        <div
          className="faq-drawer__content-wrapper"
          ref={(el) => (contentRefs.current[0] = el)}
        >
          <div className="faq-drawer__content">
            <p>
              A cryptocurrency trading platform is an online marketplace where
              users can buy, sell, and trade various cryptocurrencies. These
              platforms facilitate the exchange of digital currencies with other
              assets, including traditional fiat currencies or different
              cryptocurrencies.
            </p>
          </div>
        </div>
      </div>

      <div className="faq-drawer">
        <input
          className="faq-drawer__trigger"
          id="faq-drawer-2"
          type="checkbox"
          checked={selection === 2}
          readOnly
        />
        <label
          className="faq-drawer__title"
          htmlFor="faq-drawer-2"
          onClick={selection === 2 ? handleDeselect : () => handleSelect(2)}
        >
          What services does CyrptoBurst offer?
        </label>
        <div
          className="faq-drawer__content-wrapper"
          ref={(el) => (contentRefs.current[1] = el)}
        >
          <div className="faq-drawer__content">
            <p>
              CryptoBurst is the world's leading cryptocurrency exchange, catering
              to 169 million registered users in over 180 countries. With low
              fees and over 350 cryptocurrencies to trade, Binance is the
              preferred exchange to trade Bitcoin, Altcoins, and other virtual
              assets. With CryptoBurst users can:
              <br/><br/>
              1.
            </p>
          </div>
        </div>
      </div>

      <div className="faq-drawer">
        <input
          className="faq-drawer__trigger"
          id="faq-drawer-3"
          type="checkbox"
          checked={selection === 3}
          readOnly
        />
        <label
          className="faq-drawer__title"
          htmlFor="faq-drawer-3"
          onClick={selection === 3 ? handleDeselect : () => handleSelect(3)}
        >
          How to buy Bitcoin and other cryptocurrencies on [YourCryptoSite]?
        </label>
        <div
          className="faq-drawer__content-wrapper"
          ref={(el) => (contentRefs.current[2] = el)}
        >
          <div className="faq-drawer__content">
            <p>
              A cryptocurrency trading platform is an online marketplace where
              users can buy, sell, and trade various cryptocurrencies. These
              platforms facilitate the exchange of digital currencies with other
              assets, including traditional fiat currencies or different
              cryptocurrencies.
            </p>
          </div>
        </div>
      </div>

      <div className="faq-drawer">
        <input
          className="faq-drawer__trigger"
          id="faq-drawer-4"
          type="checkbox"
          checked={selection === 4}
          readOnly
        />
        <label
          className="faq-drawer__title"
          htmlFor="faq-drawer-4"
          onClick={selection === 4 ? handleDeselect : () => handleSelect(4)}
        >
          How to track cryptocurrency prices?
        </label>
        <div
          className="faq-drawer__content-wrapper"
          ref={(el) => (contentRefs.current[3] = el)}
        >
          <div className="faq-drawer__content">
            <p>
              A cryptocurrency trading platform is an online marketplace where
              users can buy, sell, and trade various cryptocurrencies. These
              platforms facilitate the exchange of digital currencies with other
              assets, including traditional fiat currencies or different
              cryptocurrencies.
            </p>
          </div>
        </div>
      </div>

      <div className="faq-drawer">
        <input
          className="faq-drawer__trigger"
          id="faq-drawer-5"
          type="checkbox"
          checked={selection === 5}
          readOnly
        />
        <label
          className="faq-drawer__title"
          htmlFor="faq-drawer-5"
          onClick={selection === 5 ? handleDeselect : () => handleSelect(5)}
        >
          How to trade cryptocurrencies on [YourCryptoSite]?
        </label>
        <div
          className="faq-drawer__content-wrapper"
          ref={(el) => (contentRefs.current[4] = el)}
        >
          <div className="faq-drawer__content">
            <p>
              A cryptocurrency trading platform is an online marketplace where
              users can buy, sell, and trade various cryptocurrencies. These
              platforms facilitate the exchange of digital currencies with other
              assets, including traditional fiat currencies or different
              cryptocurrencies.
            </p>
          </div>
        </div>
      </div>

      <div className="faq-drawer">
        <input
          className="faq-drawer__trigger"
          id="faq-drawer-6"
          type="checkbox"
          checked={selection === 6}
          readOnly
        />
        <label
          className="faq-drawer__title"
          htmlFor="faq-drawer-6"
          onClick={selection === 6 ? handleDeselect : () => handleSelect(6)}
        >
          How to earn from crypto on [YourCryptoSite]?
        </label>
        <div
          className="faq-drawer__content-wrapper"
          ref={(el) => (contentRefs.current[5] = el)}
        >
          <div className="faq-drawer__content">
            <p>
              A cryptocurrency trading platform is an online marketplace where
              users can buy, sell, and trade various cryptocurrencies. These
              platforms facilitate the exchange of digital currencies with other
              assets, including traditional fiat currencies or different
              cryptocurrencies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroFaq;
