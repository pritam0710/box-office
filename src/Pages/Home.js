import React, { useState } from 'react';
import MiniPageLayout from '../components/MiniPageLayout';
import { getApi } from '../misc/config';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResult] = useState(null);

  const onInputChange = evt => {
    setInput(evt.target.value);
  };

  const onSearch = () => {
    getApi(`/search/shows?q=${input}`).then(data => {
      setResult(data);
    });
  };

  const onKeyDown = evt => {
    if (evt.keyCode === 13) {
      onSearch();
    }
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No Results</div>;
    }

    if (results && results.length > 0) {
      return (
        <div>
          {results.map(item => (
            <div key={item.show.id}>{item.show.name}</div>
          ))}
        </div>
      );
    }

    return null;
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
      {renderResults()}
    </MiniPageLayout>
  );
};

export default Home;
