import React, { useState } from 'react';
import './CollapseStyle.scss';

const CollapseCard = ({ title, children }) => {
    const [open, setOpen] = useState(false);

    const toggleCollapse = () => {
        setOpen(!open);
    };

    return (
        <div className={`CollapseCardStyle ${open ? 'open' : ''}`}>
            <p>{title}<i className={`fa-solid fa-chevron-up rotate-button ${open ? 'up' : 'down'}`} onClick={toggleCollapse}></i></p>
            <div className={`collapse-content ${open ? 'open' : ''}`}>
                {children}
            </div>
        </div>    
    );
};
export default CollapseCard;