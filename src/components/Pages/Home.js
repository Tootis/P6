import React from 'react';
import '../Body/BodyStyle.scss';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div >
            <Header />
            <Banner />
            <Gallery/>
            <Footer/>
        </div>
    );
}

export default Home;
