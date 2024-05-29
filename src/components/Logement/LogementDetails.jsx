import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import logements from '../../logements.json';
import './LogementStyle.scss';
import LogementCollapse from './LogementCollapse';
import Error from '../Pages/Error';

const LogementDetails = () => {
  const { id } = useParams(); // ID depuis URL
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const logement = logements.find((item) => item.id === id); // logement correspondant à l'ID

  if (!logement) {
    return <Error />;
  } 

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % logement.pictures.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + logement.pictures.length) % logement.pictures.length);
  };

  return (
    <div className="LogementDetails">    
      <div className="image-container">
      {logement.pictures.map((picture, index) => (
        <img key={index} src={picture} alt={`${index + 1}`} style={{ display: index === currentImageIndex ? 'block' : 'none' }} />
      ))}
      <div className="button-container">
        <button className="button-left" onClick={previousImage}><i className="fa-solid fa-chevron-up"></i></button>
        <button className="button-right" onClick={nextImage}><i className="fa-solid fa-chevron-up"></i></button>
      </div>
      </div>
      
      <div className='moreInfo'>
      <div>
        <h1>{logement.title}</h1>
        <p>{logement.location}</p>
      </div>
      <div className='profile'>
        <p>{logement.host.name}</p>
        <img src={logement.host.picture} alt={logement.host.name} />
      </div>
      </div>
      
      <div className='tagsRating'>
        <p>{logement.tags}</p><div>
        <p>{'A'.repeat(parseInt(logement.rating))}</p>
      </div>
      
      </div>
      
      <div className='layout'>
        <LogementCollapse title="Description">
          {logement.description}      
        </LogementCollapse>
      
        <LogementCollapse title="Équipements">
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </LogementCollapse>
      </div>    
    </div>
  );
}
export default LogementDetails;