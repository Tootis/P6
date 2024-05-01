import React from 'react';
import './BannerStyle.scss';
import image from '../../imageAccueil.png';

const Banner = () => {
    return (        
        <div className='bannerContainer'>
            <img src={image} alt="Montagne et récif" className='bannerForm' />
            <div className='bannerTextContainer'>
                <p className='bannerText'>Chez vous, partout et ailleurs</p>
            </div>
        </div>
    );
}

export default Banner;
