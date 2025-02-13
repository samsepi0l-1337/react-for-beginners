import { useState, useEffect } from 'react';
function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log('i run all the time');
  useEffect(() => {
    console.log('Call The API...');
  }, []);
  useEffect(() => {
    if (keyword !== '' && keyword.length > 5) {
      console.log('Search for', keyword);
    }
  }, [keyword]);
  useEffect(() => {
    console.log('Call The API...');
  }, [counter]);
  return (
    <div>
      <input
        type='text'
        placeholder='Search here...'
        onChange={onChange}
        value={keyword}
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
