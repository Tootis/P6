import React from 'react';
import { useLocation } from 'react-router-dom';
import '../Body/MainStyle.scss';
import '../Error/ErrorStyle.scss';
import image from '../../404.png';

const Error = () => {
    const location = useLocation();
    return (
        
        <div className='ErrorPage'>
             <img src={image} alt="Error 404" className='Error404' />
             <p>Oups! La page que vous demandez n'existe pas.</p>
                <div className='Navigation'>
                    <a href="/" className={location.pathname === '/error' ? 'active' : ''}>Retourner sur la page d'accueil</a>
                </div>   
        </div>
    );
}

export default Error;
