import React, { useState } from "react";
import "./Particulier.css";
import carouselImg from '../../assets/carouselImg1.png';
import carouselImg3 from '../../assets/carouselImg3.png';
import carouselImg2 from '../../assets/carouselImg2.png';
import carouselImgEnglish from '../../assets/carouselImgEnglish.png';
import carouselImg3English from '../../assets/carouselImg3English.png';
import carouselImg2English from '../../assets/carouselImg2English.png';
import payerEnMagasin from '../../assets/payerEnMagasin.png'
import payerEnMagasinEnglish from '../../assets/payerEnMagasinEnglish.png';
import howItWorksImg from '../../assets/howItWorksImg.png';
import howItWorksImgEnglish from '../../assets/howItWorksImgEnglish.png';
import howItWorks2Img from '../../assets/howItWorks2Img.png';
import howItWorks2ImgEnglish from '../../assets/howItWorks2ImgEnglish.png';
import { useTranslation } from 'react-i18next';
import Recurringsection from "./Recurringsection";

export const Particulier = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const handleSlideChange = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };
  return (
    <div className="main-container">
      <div className="carousel">
        <div className="carousel-inner">
          <input
            className="carousel-open"
            type="radio"
            id="carousel-1"
            name="carousel"
            aria-hidden="true"
            hidden
            checked={currentSlide === 1}
            onChange={() => handleSlideChange(1)}
          />
          <div className="carousel-item">
            <img
              src={
                currentLanguage === 'en'
                  ? carouselImg2English
                  : carouselImg2
              }
              alt="Slide 1"
            />
          </div>

          <input
            className="carousel-open"
            type="radio"
            id="carousel-2"
            name="carousel"
            aria-hidden="true"
            hidden
            checked={currentSlide === 2}
            onChange={() => handleSlideChange(2)}
          />
          <div className="carousel-item">
            <img
              src={
                currentLanguage === 'en'
                  ? carouselImgEnglish
                  : carouselImg
              }
              alt="Slide 2"
            />
          </div>

          <input
            className="carousel-open"
            type="radio"
            id="carousel-3"
            name="carousel"
            aria-hidden="true"
            hidden
            checked={currentSlide === 3}
            onChange={() => handleSlideChange(3)}
          />
          <div className="carousel-item">
            <img
              src={
                currentLanguage === 'en'
                  ? carouselImg3English
                  : carouselImg3
              }
              alt="Slide 3"
            />
          </div>

          <label htmlFor="carousel-3" className="carousel-control prev control-1">
            ‹
          </label>
          <label htmlFor="carousel-2" className="carousel-control next control-1">
            ›
          </label>
          <label htmlFor="carousel-1" className="carousel-control prev control-2">
            ‹
          </label>
          <label htmlFor="carousel-3" className="carousel-control next control-2">
            ›
          </label>
          <label htmlFor="carousel-2" className="carousel-control prev control-3">
            ‹
          </label>
          <label htmlFor="carousel-1" className="carousel-control next control-3">
            ›
          </label>

          <ol className="carousel-indicators">
            <li>
              <label htmlFor="carousel-1" className="carousel-bullet">
                {t('carousel-bullet.carousel-1')}
              </label>
            </li>
            <li>
              <label htmlFor="carousel-2" className="carousel-bullet">
                {t('carousel-bullet.carousel-2')}
              </label>
            </li>
            <li>
              <label htmlFor="carousel-3" className="carousel-bullet">
                {t('carousel-bullet.carousel-3')}
              </label>
            </li>
          </ol>
        </div>
      </div>

      <div className="how-it-works">
        <h1 className="title">{t('how-it-works.title')}</h1>
        <h1 className="text">
          {t('how-it-works.text')}
        </h1>
        <br />
        <img
          src={
            currentLanguage === 'en'
              ? howItWorksImgEnglish
              : howItWorksImg
          }
          alt="How It Works"
          className="how-it-works-image"
        />
      </div>
      <img
        src={
          currentLanguage === 'en'
            ? payerEnMagasinEnglish
            : payerEnMagasin
        }
        alt="How It Works"
        className="how-it-works-image"
      />
      <div className="how-it-works-two">
        <h1 className="title">{t('how-it-works2.title')}</h1>
        <h1 className="text">
          {t('how-it-works2.text')}
        </h1>
        <br />
        <img
          src={
            currentLanguage === 'en'
              ? howItWorks2ImgEnglish
              : howItWorks2Img
          }
          alt="How It Works"
          className="how-it-works-image"
        />
      </div>
      <Recurringsection />
    </div>
  );
};
