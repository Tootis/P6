import React from 'react';
import './GalleryCardStyle.scss';
import { Link } from 'react-router-dom';

const GalleryCard = ({ id, title, cover }) => {
  return (
    <Link to={`/logement/${id}`}className='Cards'>
      <div className='Card'>
        <div className='locationTitle'>{title}</div>
        <img className='img'src={cover} alt={title} />
      </div>
    </Link>
  );
};

export default GalleryCard;
