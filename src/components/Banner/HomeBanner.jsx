import React from 'react';
import './BannerStyle.scss';
import Banner from './Banner';
import image from '../../imageAccueil.png';

const HomeBanner = () => {
    return (        
        <Banner image={image}>
            <p className='bannerText'>Chez vous, partout et ailleurs</p>
        </Banner>
    );
}

export default HomeBanner;
