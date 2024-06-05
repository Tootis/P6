import React from 'react';

const RatingStars = ({ rating }) => {
  const filledStars = parseInt(rating);
  const totalStars = 5;

  const ratingStars = Array.from({ length: totalStars }, (_, index) => {
    if (index < filledStars) {
      return <i key={index} className="fa-solid fa-star" style={{ color: '#FF6060' }}></i>;
    } else {
      return <i key={index} className="fa-solid fa-star" style={{ color: '#E3E3E3' }}></i>;
    }
  });

  return (
    <div>
      {ratingStars}
    </div>
  );
}

export default RatingStars;
