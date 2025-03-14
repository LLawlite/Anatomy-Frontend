import React, { useState, useEffect } from 'react';
import '../styles/Banner.css';
import SkullImage1 from '../assets/images/Skull.svg';

const images = [
  SkullImage1, // Replace with actual paths to your images
];

function Banner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Change image every 1 second
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="banner">
      <span className="text">ANAT</span>
      <div className="image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Skull ${index}`}
            className={`image ${currentImageIndex === index ? 'active' : ''}`}
          />
        ))}
      </div>
      <span className="text">OME</span>
    </div>
  );
}

export default Banner;
