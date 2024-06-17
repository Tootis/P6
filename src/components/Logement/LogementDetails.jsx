import React from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import '../Carousel/Carousel.scss';
import logements from '../../logements.json';
import Error from '../Pages/Error';
import CollapseCard from '../Collapse/CollapseCard';
import './Collapse.scss';
import RatingStars from '../RatingStars/RatingStars';
import '../RatingStars/RatingStars.scss';
import Tags from '../Tags/Tags';
import '../Tags/Tags.scss';
import './LogementStyle.scss';

const LogementDetails = () => {
    const { id } = useParams();
    const logement = logements.find((item) => item.id === id);

    if (!logement) {
        return <Error />;
    }

    return (
        <div className="LogementDetails">
            <Carousel/>
            <div className='About'>
                <div className='Localisation'>
                    <h1>{logement.title}</h1>
                    <h2>{logement.location}</h2>
                    <Tags/>                
                </div>
                <div className='Profile'>
                    <div className='OwnerProfile'>
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} alt={logement.host.name} />
                    </div>
                    <div>
                        <RatingStars rating={logement.rating} />
                    </div>
                </div>
            </div>
            <div className='layout'>
                    <CollapseCard title="Description">
                        {logement.description}
                    </CollapseCard>
        
                    <CollapseCard title="Équipements">
                        <ul>
                            {logement.equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </ul>
                    </CollapseCard>
            </div>
        </div>
    );
}

export default LogementDetails;
