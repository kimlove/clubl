import { useEffect, useState } from "react";

import { sortCrypto } from "../lib/sortCrypto";

export const RankedCryptoTable = ({ crypto, currencies }) => {
  const [sortedCrypto, setSortedCrypto] = useState(null);
  // default to rank ascending
  const [sortBy, setSortBy] = useState({
    column: "rank",
    order: "ASC",
  });

  useEffect(() => {
    setSortedCrypto(sortCrypto(crypto, sortBy.column, sortBy.order));
  }, [sortBy]);

  const { GBP, EUR, AED } = currencies.rates; // destructure currency rates and just grab the ones we need

  const handleSort = (column) => {
    setSortBy((prev) => ({
      column,
      order: prev.column === column && prev.order === "ASC" ? "DESC" : "ASC",
    }));
  };

  return (
    <>
      {sortedCrypto ? (
        <table>
          <thead>
            <tr>
              <th>
                <button type="button" onClick={() => handleSort("rank")}>
                  Rank
                </button>
              </th>
              <th>
                <button type="button" onClick={() => handleSort("id")}>
                  ID
                </button>
              </th>
              <th>
                <button type="button" onClick={() => handleSort("symbol")}>
                  Symbol
                </button>
              </th>
              <th>
                <button type="button" onClick={() => handleSort("price")}>
                  Price
                </button>
              </th>
              <th>
                <button type="button" onClick={() => handleSort("price")}>
                  24hr Change
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedCrypto.map((row) => {
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
      ) : null}
    </>
  );
};
