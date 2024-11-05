import React, { useState } from 'react';
import SomeProjectsStyle from './SomeProjectsStyles.module.css'

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
                <button className={SomeProjectsStyle.prevButton} onClick={handlePrevClick}>Anterior</button>

                <img
                    className={SomeProjectsStyle.prevImage}
                    src={images[(currentImageIndex + images.length - 1) % images.length].src}
                    alt="Imagen previa"
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
                />
                <button className={SomeProjectsStyle.nextButton} onClick={handleNextClick}>Siguiente</button>
            </div>
            <h3 className={SomeProjectsStyle.imageTitle}>{images[currentImageIndex].title}</h3>
            <div className={SomeProjectsStyle.imageText}>{images[currentImageIndex].text}</div>
        </div>
    );
}

export default ImageCarousel;


