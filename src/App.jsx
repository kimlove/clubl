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
      try {
        const cryptoRes = await fetch(cryptoUrl);
        const currencyRes = await fetch(currencyUrl);

        setCrypto(await cryptoRes.json());
        setCurrencies(await currencyRes.json());
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <h3>Display top 100 Crypto Currencies</h3>
      <pre>{JSON.stringify(crypto, null, 2)}</pre>
      <pre>{JSON.stringify(currencies, null, 2)}</pre>
    </main>
  );
};
