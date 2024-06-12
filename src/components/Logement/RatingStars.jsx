import React from 'react';

const RatingStars = ({ rating }) => {
  const filledStars = parseInt(rating);
  const totalStars = 5;

  const ratingStars = Array.from({ length: totalStars }, (_, index) => {
    const customClass = index < filledStars ? 'full' : 'empty';

    return <i key={index} className={`fa-solid fa-star ${customClass}`} style={{ color: index < filledStars ? '#FF6060' : '#E3E3E3' }}></i>;
  });

  return (
    <>
      {ratingStars}
    </>
  );
}

export default RatingStars;
