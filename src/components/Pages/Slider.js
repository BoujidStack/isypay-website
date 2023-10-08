import React from 'react'
import image1 from '../../assets/ImagesSlider/image6.svg';
import image2 from '../../assets/ImagesSlider/image2.svg';
import image3 from '../../assets/ImagesSlider/image3.svg';
import image4 from '../../assets/ImagesSlider/image4.svg';
import image5 from '../../assets/ImagesSlider/image5.svg';

const imageUrls = [image1, image2, image3, image4, image5];

function Slider() {
  return (
      <div className="slider">
        <div className="slide-track">
          {imageUrls.map((imageUrl, index) => (
            <div className="slide" key={index}>
              <img src={imageUrl} height="100" width="175" alt="slide" />
            </div>
          ))}
          {imageUrls.map((imageUrl, index) => (
            <div className="slide" key={index + imageUrls.length}>
              <img src={imageUrl} height="100" width="175" alt="slide" />
            </div>
          ))}
        </div>
      </div>
  )
}

export default Slider