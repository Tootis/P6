import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import logements from '../../logements.json';
import './LogementStyle.scss';

const LogementDetails = () => {
  const { id } = useParams(); // ID depuis URL
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const logement = logements.find((item) => item.id === id); // logement correspondant à l'ID

  if (!logement) {
    return <div>Logement non trouvé</div>; // si erreur
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % logement.pictures.length);
  };
  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + logement.pictures.length) % logement.pictures.length);
  };

  return (
    <div className="LogementDetails">
      <h1>{logement.title}</h1>
      <div className="image-container">
        {logement.pictures.map((picture, index) => (
          <img key={index} src={picture} alt={`${index + 1}`} style={{ display: index === currentImageIndex ? 'block' : 'none' }} />
        ))}
      </div>
      <div className="button-container">
        <button onClick={previousImage}>B</button>
        <button onClick={nextImage}>A</button>
      </div>
      <p>{logement.description}</p>
    </div>
  );
};

export default LogementDetails;
