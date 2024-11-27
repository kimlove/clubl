// normally you'd want to unit test business logic like this with Jest or similar, but skip for now

export const sortCrypto = (data, column, order) => {
  const sortedData = [...data].sort((a, b) => {
    let aVal = column === "price" ? parseFloat(a.priceUsd) : a[column];
    let bVal = column === "price" ? parseFloat(b.priceUsd) : b[column];

    // treat id and rank as numbers so we can sort correctly
    if (column === "rank") {
      aVal = parseFloat(aVal);
      bVal = parseFloat(bVal);
    }

    // sort depending on the order
    if (aVal < bVal) return order === "ASC" ? -1 : 1;
    if (aVal > bVal) return order === "ASC" ? 1 : -1;
    return 0;
  });

  return sortedData;
};
