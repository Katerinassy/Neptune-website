import React from 'react';
import '../style/galeria.css';
import dolphin1 from '../image/image 1.svg';
import dolphin2 from '../image/image 10.svg';
import beluga1 from '../image/image 11.svg';
import beluga2 from '../image/image 2.svg';
import seal1 from '../image/image 3.svg';
import seal2 from '../image/image 4.svg';
import pelican from '../image/image 5.svg';
import swan from '../image/image 6.svg';

const GalleryPage = () => {
  const galleryImages = [
    { src: dolphin1, alt: "Дельфин в воде", category: "Дельфины" },
    { src: dolphin2, alt: "Дельфин прыгает", category: "Дельфины" },
    { src: beluga1, alt: "Белуха улыбается", category: "Белухи" },
    { src: beluga2, alt: "Белуха плавает", category: "Белухи" },
    { src: seal1, alt: "Морской котик", category: "Котики" },
    { src: seal2, alt: "Котик с мячом", category: "Котики" },
    { src: pelican, alt: "Пеликан", category: "Другие обитатели" },
    { src: swan, alt: "Лебедь", category: "Другие обитатели" }
  ];

  return (
    <div className="gallery-page">
      <h1 className="gallery-title">ГАЛЕРЕЯ</h1>
      
      <div className="gallery-container">
        {galleryImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="gallery-image"
            />
            <div className="image-overlay">
              <p className="image-category">{image.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;