import React from 'react';
import './BannerStyle.scss';
import Banner from './Banner';

import image from '../../imageAccueil.png';



const HomeBanner = () => {
    return (        
        <Banner>
             <img src={image} alt="Montagne et récif" className='bannerForm' />
                <div className='bannerTextContainer'>
                    <p className='bannerText'>Chez vous, partout et ailleurs</p>
                </div>
            
        </Banner>
    );
}

export default HomeBanner;