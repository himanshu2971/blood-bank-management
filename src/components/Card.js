import React from 'react';

const Card = ({ title, image, description }) => {
  return (
    <div className="card col-3 "> 
      <img className='card-img-top' src={image} alt={title} />
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p className='card-text'>{description}</p>
      </div>
      
    </div>
  );
};

export default Card;
