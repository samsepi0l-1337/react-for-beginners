import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [amount, setAmount] = useState(0);
  const [selected, setSelected] = useState(0);
  const [selectedSymbol, setSelectedSymbol] = useState('');
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const onSelect = (event) => {
    const selectedCoin = coins[event.target.selectedIndex];
    console.log(selectedCoin.quotes.USD.price);
    setSelected(selectedCoin.quotes.USD.price);
    setSelectedSymbol(selectedCoin.symbol);
  };
  return (
    <div>
      <h1>The Coins! {loading ? '' : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onSelect}>
          {coins.map((coin, index) => (
            <option>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <input
        type='number'
        placeholder='Write your amount'
        value={amount}
        onChange={onChange}
      />
      <h2>
        You can get {amount > 0 ? amount / selected : 0} {selectedSymbol}
      </h2>
    </div>
  );
}

export default App;
