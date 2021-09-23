import React from 'react';

const ActorCard = ({ image, name, gender, country, birthDay, deathDay }) => {
  return (
    <div>
      <div>
        <img src={image} alt="actor" />
      </div>
      <h1>
        {name} {gender ? `(${gender})` : null}
      </h1>
      <p>{country ? `Comes from ${country}` : 'No country known'}</p>
      {birthDay ? <p>Born {birthDay}</p> : null}
      <p>{deathDay ? `Died ${deathDay}` : 'Alive'}</p>
    </div>
  );
};

export default ActorCard;
