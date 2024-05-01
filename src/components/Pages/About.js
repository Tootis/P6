import React from 'react';
import '../Body/BodyStyle.scss';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Collapse from '../Collapse/Collapse';
import Footer from '../Footer/Footer';


const About = () => {
    return (
        <div >
            <Header />
            <Banner />
            <Collapse/>
            <Footer/>
        </div>
    );
}
export default About;
