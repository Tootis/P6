import React from 'react';
import CollapseCard from './CollapseCard';
import './CollapseStyle.scss';

const Collapse = () => {
    return (
        <div className='CollapsePosition'>
            <CollapseCard title="Fiabilité">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</CollapseCard>
            <CollapseCard title="Respect">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</CollapseCard>
            <CollapseCard title="Service">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</CollapseCard>
            <CollapseCard title="Sécurité">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos servies. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</CollapseCard>
        </div>
    );
}

export default Collapse;
