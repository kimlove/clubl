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
                  <span className="arrow">
                    {sortBy.column === "rank"
                      ? sortBy.order === "ASC"
                        ? "↑"
                        : "↓"
                      : ""}
                  </span>
                </button>
              </th>
              <th>
                <button type="button" onClick={() => handleSort("id")}>
                  ID
                  <span className="arrow">
                    {sortBy.column === "id"
                      ? sortBy.order === "ASC"
                        ? "↑"
                        : "↓"
                      : ""}
                  </span>
                </button>
              </th>
              <th>
                <button type="button" onClick={() => handleSort("symbol")}>
                  Symbol
                  <span className="arrow">
                    {sortBy.column === "symbol"
                      ? sortBy.order === "ASC"
                        ? "↑"
                        : "↓"
                      : ""}
                  </span>
                </button>
              </th>
              <th>
                <button type="button" onClick={() => handleSort("price")}>
                  Price
                  <span className="arrow">
                    {sortBy.column === "price"
                      ? sortBy.order === "ASC"
                        ? "↑"
                        : "↓"
                      : ""}
                  </span>
                </button>
              </th>
              <th>
                <button
                  type="button"
                  onClick={() => handleSort("changePercent24Hr")}
                >
                  24hr Change
                  <span className="arrow">
                    {sortBy.column === "changePercent24Hr"
                      ? sortBy.order === "ASC"
                        ? "↑"
                        : "↓"
                      : ""}
                  </span>
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
