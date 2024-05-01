import React from 'react';
import '../Body/BodyStyle.scss';
import Gallery from '../Gallery/Gallery';
import HomeBanner from '../Banner/HomeBanner';

const Home = () => {
    return (
        <div >
            <HomeBanner/>   
            <Gallery/>
        </div>
    );
}

export default Home;
