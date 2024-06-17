import React from 'react';
import { useLocation } from 'react-router-dom';
import './HeaderStyle.scss';
import logo from '../Img/LogoHeader.png';

const Header = () => {
    const location = useLocation();

    return (
        <header>
            <nav>
                <img src={logo} alt="logo Kasa"/>
                <div className='Navigation'>
                    <a href="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</a>
                    <a href="/about" className={location.pathname === '/about' ? 'active' : ''}>À Propos</a>
                </div>           
            </nav>
        </header>
    );
}

export default Header;
