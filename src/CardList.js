import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
  return (
    <div>
      {
        robots.map((user, index) => (
          <Card
            key={index}
            name={user.name}
            email={user.email}
            id={user.id}
          />
        )
      )}
    </div>
  );
};

export default CardList;