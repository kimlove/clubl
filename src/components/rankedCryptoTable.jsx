export const RankedCryptoTable = ({ crypto, currencies }) => {
  return (
    <>
      <pre>{JSON.stringify(crypto, null, 2)}</pre>
      <pre>{JSON.stringify(currencies, null, 2)}</pre>
    </>
  );
};
