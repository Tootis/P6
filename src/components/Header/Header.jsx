import React from 'react';
import './HeaderStyle.scss';
import logo from '../../LogoHeader.png';

const Header = () => {
    return (
        <header>
            <nav>
                <img src={logo} alt="logo Kasa" className='LogoKasa' />
                <div className='Navigation'>
                    <a href="/">Accueil</a>
                    <a href="/about">A Propos</a>
                </div>           
            </nav>
        </header>
    );
}

export default Header;
