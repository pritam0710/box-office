import React, { useState } from 'react';
import MiniPageLayout from '../components/MiniPageLayout';

const Home = () => {
  const [input, setInput] = useState('');

  const onInputChange = evt => {
    setInput(evt.target.value);
  };

  const onSearch = () => {
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then(res => res.json())
      .then(data => console.log(data));
  };

  const onKeyDown = evt => {
    if (evt.keyCode === 13) {
      onSearch();
    }
  };

  return (
    <MiniPageLayout>
      <input
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <button type="submit" onClick={onSearch}>
        Search
      </button>
    </MiniPageLayout>
  );
};

export default Home;
