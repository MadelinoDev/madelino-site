import React, { useState } from 'react';
import SomeProjectsStyle from './SomeProjectsStyles.module.css'




import nextButton from '../img/Games/nextButtonWhite.png'

function ImageCarousel({ images }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div>
            <div className={SomeProjectsStyle.carousel}>
                <input type="image" className={SomeProjectsStyle.prevButton} onClick={handlePrevClick} src={nextButton}></input>
                <img
                    className={SomeProjectsStyle.prevImage}
                    src={images[(currentImageIndex + images.length - 1) % images.length].src}
                    alt="Imagen previa"
                    onClick={handlePrevClick}
                />
                <img
                    className={SomeProjectsStyle.activeImage}
                    src={images[currentImageIndex].src}
                    alt="Imagen activa"
                />
                <img
                    className={SomeProjectsStyle.nextImage}
                    src={images[(currentImageIndex + 1) % images.length].src}
                    alt="Imagen siguiente"
                    onClick={handleNextClick}
                />
                <input type="image" className={SomeProjectsStyle.nextButton} onClick={handleNextClick} src={nextButton}></input>
            </div>
            <div className={SomeProjectsStyle.projectTextBlock}>
                <h3 className={SomeProjectsStyle.imageTitle}>{images[currentImageIndex].title}</h3>
                <div className={SomeProjectsStyle.imageText}>{images[currentImageIndex].text}</div>
            </div>
        </div>
    );
}

export default ImageCarousel;


