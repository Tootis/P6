import React from 'react';
import logements from '../../logements.json';

const GalleryCard = () => {
    return (
        <div className='gallery'>
            {logements.map((location, index) => (
                <div key={index} className='card'>
                    <div className='locationTitle'>{location.title}</div>
                    <img src={location.cover} alt={location.title} />
                    <p>{location.description}</p>
                    <div className='host'>
                        <img src={location.host.picture} alt={location.host.name} />
                        <p>Host: {location.host.name}</p>
                    </div>
                    <p>Rating: {location.rating}</p>
                    <p>Location: {location.location}</p>
                    <div className='equipments'>
                        <p>Equipments:</p>
                        <ul>
                            {location.equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='tags'>
                        <p>Tags:</p>
                        {location.tags.map((tag, index) => (
                            <span key={index}>{tag} </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default GalleryCard;
