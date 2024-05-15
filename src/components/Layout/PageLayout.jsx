import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const PageLayout = () => {
    return (
        <>            
            <div className='main'>
                <Header />
                <Outlet/>
            </div>
            <Footer/>
        </>
    );
}

export default PageLayout;
