import { useEffect, useState } from "react";

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

        setCrypto(await cryptoRes.json());
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

  // early return if we're loading or hit an error
  if (loading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <main>
      <h3>Display top 100 Crypto Currencies</h3>
      <pre>{JSON.stringify(crypto, null, 2)}</pre>
      <pre>{JSON.stringify(currencies, null, 2)}</pre>
    </main>
  );
};
