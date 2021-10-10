/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useShow } from '../misc/custom-hooks';
import Cast from '../Show/Cast';
import Details from '../Show/Details';
import Seasons from '../Show/Seasons';
import ShowMainData from '../Show/ShowMainData';
import { InfoBlock, ShowPageWrapper } from './Show.styled';

const Show = () => {
  const { id } = useParams();

  const { show, isLoading, error } = useShow(id);
  if (isLoading) {
    return <div>Data is Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <ShowPageWrapper>
      <ShowMainData
        img={show.image}
        name={show.name}
        rating={show.rating}
        summary={show.summary}
        tags={show.genres}
      />

      <InfoBlock>
        <h2>Details</h2>
        <Details
          status={show.status}
          network={show.network}
          premiered={show.premiered}
        />
      </InfoBlock>

      <InfoBlock>
        <h2>Seasons</h2>
        <Seasons seasons={show._embedded.seasons} />
      </InfoBlock>

      <InfoBlock>
        <h2>Cast</h2>
        <Cast cast={show._embedded.cast} />
      </InfoBlock>
    </ShowPageWrapper>
  );
};

export default Show;
