import { useEffect, useState } from "react";

import { RankedCryptoTable } from "./components/rankedCryptoTable";

// settings like this normally better in a config object or populated via .env vars
// Inline these for now
const cryptoUrl = "https://api.coincap.io/v2/assets";
const currencyUrl = "https://open.er-api.com/v6/latest/USD";
const cryptoRowLimit = 25; // max number of crypto rows we want

export const App = () => {
  const [crypto, setCrypto] = useState(null);
  const [currencies, setCurrencies] = useState(null);
  const [loading, setLoading] = useState(true); // default to true as we'll be loading as soon as we mount the component
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        // fetch both URLs at the same time
        const [cryptoRes, currencyRes] = await Promise.all([
          fetch(cryptoUrl),
          fetch(currencyUrl),
        ]);

        // check both responses are "ok" (i.e. 200)
        if (!cryptoRes.ok || !currencyRes.ok) {
          throw new Error("Failed to fetch one or more resources");
        }

        setCrypto((await cryptoRes.json()).data.slice(0, cryptoRowLimit));
        setCurrencies(await currencyRes.json());
      } catch (err) {
        setError(
          typeof err.message === "string" ? err.message : "Unknown error"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // early return if we hit an error
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <main>
      <header>
        <h3>Displaying the Top 25 Crypto Currencies</h3>
      </header>

      {loading ? <p className="loading fade-in">Loading....</p> : null}

      {!loading && crypto && currencies ? (
        <RankedCryptoTable crypto={crypto} currencies={currencies} />
      ) : null}
    </main>
  );
};
