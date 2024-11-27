export const RankedCryptoTable = ({ crypto, currencies }) => {
  const { GBP, EUR, AED } = currencies.rates; // destructure currency rates and just grab the ones we need
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>ID</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>24hr Change</th>
          </tr>
        </thead>
        <tbody>
          {crypto.map((row) => {
            return (
              <tr key={row.symbol}>
                <td>{row.rank}</td>
                <td>{row.id}</td>
                <td>
                  <a href={row.explorer} target="_blank">
                    {row.symbol}
                  </a>
                </td>
                <td>
                  <div>US$ {row.priceUsd}</div>
                  <ul>
                    <li>GBP: {row.priceUsd * GBP}</li>
                    <li>EUR: {row.priceUsd * EUR}</li>
                    <li>AED: {row.priceUsd * AED}</li>
                  </ul>
                </td>
                <td>{row.changePercent24Hr}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
