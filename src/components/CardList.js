import React from 'react';
import Card from './Card';
import cardsData from './CardData';


//dummy CardList will Implement carousel later 
const CardsList = () => {
  

  return (
    <div className='d-flex justify-content-around'>
      {cardsData.map(card => (
        <Card
          key={card.id}
          title={card.title}
          image={card.image}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CardsList;
