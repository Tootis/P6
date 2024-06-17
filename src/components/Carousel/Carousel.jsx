import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import logements from '../../logements.json';
import ImageSwitcher from '../Logement/ImageSwitcher';

const Carousel = () => {
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
            <ImageSwitcher
                currentImageIndex={currentImageIndex}
                totalImages={logement.pictures.length}
                previousImage={previousImage}
                nextImage={nextImage}
            />
            {logement.pictures.map((picture, index) => (
                <img key={index} src={picture} alt={"Appartement du carousel"} style={{ display: index === currentImageIndex ? 'block' : 'none' }} />
                ))
            }
        </div>
    );
}

export default Carousel;
