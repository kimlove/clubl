import { useEffect, useState } from "react";

// settings like this normally better in a config object or populated via .env vars
// Inline these for now
const cryptoUrl = "https://api.coincap.io/v2/assets";
const currencyUrl = "https://open.er-api.com/v6/latest/USD";
const cryptoRowLimit = 25; // max number of crypto rows we want

export const App = () => {
  const [crypto, setCrypto] = useState(null);
  const [currencies, setCurrencies] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetch Data:");
      console.log("cryptoUrl", cryptoUrl);
      console.log("currencyUrl", currencyUrl);
    };

    fetchData();
  }, []);

  return <main>Display top 100 Crypto Currencies</main>;
};
