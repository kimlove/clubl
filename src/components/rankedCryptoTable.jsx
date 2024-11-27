export const RankedCryptoTable = ({ crypto, currencies }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>ID</th>
            <th>Symbol</th>
          </tr>
        </thead>
        <tbody>
          {crypto.map((row) => {
            return (
              <tr key={row.symbol}>
                <td>{row.rank}</td>
                <td>{row.id}</td>
                <td>{row.symbol}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
