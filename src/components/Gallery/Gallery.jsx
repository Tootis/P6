import React from 'react';
import GalleryCard from './GalleryCard'
import './GalleryStyle.scss';

const Gallery = () => {
    return (
        <div className='GalleryPosition'>
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
        </div>
    );
}

export default Gallery;
