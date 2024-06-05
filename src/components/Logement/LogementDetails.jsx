import React from 'react';
import { useParams } from 'react-router-dom';
import ButtonLeftRight from './ButtonLeftRight';
import logements from '../../logements.json';
import './LogementStyle.scss';
import Error from '../Pages/Error';
import CollapseCard from '../Collapse/CollapseCard';
import RatingStars from './RatingStars';
import Tags from './Tags';

const LogementDetails = () => {
    const { id } = useParams();
    const logement = logements.find((item) => item.id === id);

    if (!logement) {
        return <Error />;
    }

    return (
        <div className="LogementDetails">
            <ButtonLeftRight />
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
                <Tags/>
                <RatingStars rating={logement.rating} />
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
