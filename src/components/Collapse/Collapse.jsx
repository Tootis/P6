import React from 'react';
import CollapseCard from './CollapseCard'
import './CollapseStyle.scss';

const Collapse = () => {
    return (
        <div className='CollapsePosition'>
            <CollapseCard/>
            <CollapseCard/>
            <CollapseCard/>
            <CollapseCard/>
        </div>
    );
}

export default Collapse;