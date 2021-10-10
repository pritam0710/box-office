import React, { useState, useEffect } from 'react';
import MiniPageLayout from '../components/MiniPageLayout';
import { getApi } from '../misc/config';
import { useShows } from '../misc/custom-hooks';
import ShowGrid from '../Show/ShowGrid';

const Starred = () => {
  const [starred] = useShows();

  const [shows, setShows] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (starred && starred.length > 0) {
      const promises = starred.map(showId => getApi(`/shows/${showId}`));

      Promise.all(promises)
        .then(apiData => apiData.map(show => ({ show })))
        .then(res => {
          setShows(res);
          setIsLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [starred]);

  return (
    <MiniPageLayout>
      {isLoading && <div>Shows are still loading...</div>}
      {error && <div>Error occured: {error}</div>}
      {!isLoading && !shows && <div>No Show Added</div>}
      {!isLoading && !error && shows && <ShowGrid data={shows} />}
    </MiniPageLayout>
  );
};

export default Starred;
