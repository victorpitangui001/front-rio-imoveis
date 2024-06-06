import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './ImageCarousel.module.css';

const ImageCarousel = ({ images, altText }) => {
  return (
    <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} dynamicHeight={true}>
      {images.map((image, index) => (
        <div key={index}>
          <img 
            src={`${process.env.REACT_APP_API}/images/properties/${image}`} 
            alt={altText} 
            className={styles.carousel_image}
          />
        </div>
      ))}
    </Carousel>
  );
};

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  altText: PropTypes.string.isRequired,
};

export default ImageCarousel;