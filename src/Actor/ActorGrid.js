import React from 'react';
import ActorCard from './ActorCard';
import IMAGE_NOT_FOUND from '../images/not-found.png';
import { FlexGrid } from '../Style';

const ActorGrid = ({ data }) => {
  return (
    <FlexGrid>
      {data.map(({ person }) => (
        <ActorCard
          key={person.id}
          id={person.id}
          name={person.name}
          image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
          birthDay={person.birthday}
          deathDay={person.deathDay}
          country={person.country ? person.country.name : null}
          gender={person.gender}
        />
      ))}
    </FlexGrid>
  );
};

export default ActorGrid;
