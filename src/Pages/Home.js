import React, { useState } from 'react';
import ActorGrid from '../Actor/ActorGrid';
import MiniPageLayout from '../components/MiniPageLayout';
import { getApi } from '../misc/config';
import ShowGrid from '../Show/ShowGrid';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResult] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');

  const isShowsSearch = searchOption === 'shows';

  const onInputChange = evt => {
    setInput(evt.target.value);
  };

  const onSearch = () => {
    getApi(`/search/${searchOption}?q=${input}`).then(data => {
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
      return results[0].show ? (
        <ShowGrid data={results} />
      ) : (
        <ActorGrid data={results} />
      );
    }

    return null;
  };

  const onRadioChange = evt => {
    setSearchOption(evt.target.value);
  };

  return (
    <MiniPageLayout>
      <input
        type="text"
        placeholder="Search for something"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />

      <div>
        <label htmlFor="search-shows">
          Shows
          <input
            type="radio"
            id="search-shows"
            value="shows"
            checked={isShowsSearch}
            onChange={onRadioChange}
          />
        </label>

        <label htmlFor="search-actors">
          Actors
          <input
            type="radio"
            id="search-actors"
            value="people"
            checked={!isShowsSearch}
            onChange={onRadioChange}
          />
        </label>
      </div>

      <button type="submit" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </MiniPageLayout>
  );
};

export default Home;
