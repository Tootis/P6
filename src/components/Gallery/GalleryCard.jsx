import React from 'react';
import logements from '../../logements.json';
import './GalleryCardStyle.scss';
const GalleryCard = () => {
    return (
        <div className='Cards' >
            {logements.map((location, index) => (
                <div className='Card' key={index} >
                    <div className='locationTitle'>{location.title}</div>
                    <img src={location.cover} alt={location.title} />
                </div>
            ))}
        </div>
    );
}

export default GalleryCard;
