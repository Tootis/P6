import React from 'react';
import './BannerStyle.scss';
import Banner from './Banner';
import image from '../../imageAccueil.png';



const AboutBanner = () => {
    return (        
        <Banner>
             <img src={image} alt="Montagne et récif" className='bannerForm' />          
        </Banner>
    );
}

export default AboutBanner;