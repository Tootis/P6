import React, { useState } from 'react';
import './CollapseStyle.scss';

const CollapseCard = () => {
  const [open, setOpen] = useState(false);

  const toggleCollapse = () => {
    setOpen(!open);
  };

  return (
    <div className={`CollapseCardStyle ${open ? 'open' : ''}`} onClick={toggleCollapse}>
      <p>Fiabilité</p>
      <div className={`collapse-content ${open ? 'open' : ''}`}>
        Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements,
        et toutes les informations sont régulièrement vérifiées par nos équipes.
      </div>
    </div>    
  );
};

export default CollapseCard;
