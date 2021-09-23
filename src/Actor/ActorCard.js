import React from 'react';
import { StyledActorCard } from './ActorCard.styled';

const ActorCard = ({ image, name, gender, country, birthDay, deathDay }) => {
  return (
    <StyledActorCard>
      <div className="img-wrapper">
        <img src={image} alt="actor" />
      </div>
      <h1>
        {name} {gender ? `(${gender})` : null}
      </h1>
      <p>{country ? `Comes from ${country}` : 'No country known'}</p>
      {birthDay ? <p>Born {birthDay}</p> : null}
      <p className="deathday">{deathDay ? `Died ${deathDay}` : 'Alive'}</p>
    </StyledActorCard>
  );
};

export default ActorCard;
