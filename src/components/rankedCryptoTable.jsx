export const RankedCryptoTable = ({ crypto, currencies }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>ID</th>
            <th>Symbol</th>
            <th>Price</th>
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
                <td>US$ {row.priceUsd}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
