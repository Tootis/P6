import React from 'react';
import './BannerStyle.scss';

const Banner = ({image, children}) => {
    return (        
        <div className='bannerContainer'>
            <img src={image} alt="Montagne et récif" className='bannerForm' />
            <div className='bannerTextContainer'>
                {children}
            </div>
        </div>
    );
}

export default Banner;
