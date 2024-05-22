import React from 'react';
import GalleryCard from './GalleryCard';
import logements from '../../logements.json';
import './GalleryCardStyle.scss';

const Gallery = () => {
  return (
    <div className='GalleryPosition'>
      {logements.map((location, index) => (
        <GalleryCard key={index} id={location.id} title={location.title} cover={location.cover} />
      ))}
    </div>
  );
};

export default Gallery;
