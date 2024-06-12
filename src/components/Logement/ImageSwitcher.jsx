import React from 'react';

const ImageSwitcher = ({ currentImageIndex, totalImages, previousImage, nextImage }) => {
    return (
        <div className="button-container">
            <button className="button-left" onClick={previousImage}><i className="fa-solid fa-chevron-up"></i></button>
            <button className="button-right" onClick={nextImage}><i className="fa-solid fa-chevron-up"></i></button>
            <div className="image-counter">{currentImageIndex + 1}/{totalImages}</div>
        </div>
    );
}

export default ImageSwitcher;
