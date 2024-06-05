import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import logements from '../../logements.json';

const ButtonLeftRight = () => {
    const { id } = useParams();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const logement = logements.find((item) => item.id === id);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % logement.pictures.length);
    };

    const previousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + logement.pictures.length) % logement.pictures.length);
    };

    return (
        <div className="image-container">
            {logement.pictures.map((picture, index) => (
                <img key={index} src={picture} alt={`${index + 1}`} style={{ display: index === currentImageIndex ? 'block' : 'none' }} />
            ))}
            <div className="button-container">
                <button className="button-left" onClick={previousImage}><i className="fa-solid fa-chevron-up"></i></button>
                <button className="button-right" onClick={nextImage}><i className="fa-solid fa-chevron-up"></i></button>
            </div>
        </div>
    );
}

export default ButtonLeftRight;
