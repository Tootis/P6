import React from 'react';
import logements from '../../logements.json';

const Tags = () => {
    const logement = logements[0];

    const tagsArray = logement.tags.map((tag, index) => (
        <p key={index} className="Tags">{tag}</p>
    ));

    return (
        <div className='TagsBox'>            
            {tagsArray}
        </div>
    );
}

export default Tags;
