import React from 'react';
import './FooterStyle.scss';
import logo from '../../LogoFooter.png';

const Footer = () => {
    return (
        <footer>
            <img src={logo} alt="logo Kasa" className='LogoKasa' />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;
