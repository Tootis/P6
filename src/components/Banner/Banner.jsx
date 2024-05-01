import React from 'react';
import './BannerStyle.scss';


const Banner = ({children}) => {
    return (        
        <div className='bannerContainer'>
             {children}
            
        </div>
    );
}

export default Banner;