import React, { useState } from "react";
import "./Particulier.css";
import payerEntreAmisCadeau from '../../assets/payerEntreAmisCadeau.svg';
import payerEntreAmisRestaurant from '../../assets/payerEntreAmisRestaurant.svg';
import payerEntreAmisArgentDePoche from '../../assets/payerEntreAmisArgentDePoche.svg';
import payerEnMagasin from '../../assets/payerEnMagasin.svg'
import howItWorksImg from '../../assets/howItWorksImg.svg';
import howItWorksImgEnglish from '../../assets/howItWorksImgEnglish.svg';
import howItWorks2Img from '../../assets/howItWorks2Img.svg';
import howItWorks2ImgEnglish from '../../assets/howItWorks2ImgEnglish.svg';
import { useTranslation } from 'react-i18next';
import Recurringsection from "./Recurringsection";

export const Particulier = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const { t, i18n } = useTranslation();
  const [currentLanguage] = useState(i18n.language);
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
          <div className="carousel-content">
              <div className="carousel-text">
                <h1 className="title">{t('payerEntreAmisCadeau.title')}</h1>
                <h1 className="text">"{t('payerEntreAmisCadeau.text')}"</h1>
              </div>
              <div className="carousel-imageitem">
                <img
                  src={payerEntreAmisCadeau}
                  alt="How It Works"
                />
              </div>
            </div>
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
            <div className="carousel-content">
              <div className="carousel-text">
                <h1 className="title">{t('payerEntreAmisRestaurant.title')}</h1>
                <h1 className="text">"{t('payerEntreAmisRestaurant.text')}"</h1>
              </div>
              <div className="carousel-imageitem">
                <img
                  src={payerEntreAmisRestaurant}
                  alt="How It Works"
                />
              </div>
            </div>
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
          <div className="carousel-content">
              <div className="carousel-text">
                <h1 className="title">{t('payerEntreAmisArgentDePoche.title')}</h1>
                <h1 className="text">"{t('payerEntreAmisArgentDePoche.text')}"</h1>
              </div>
              <div className="carousel-imageitem">
                <img
                  src={payerEntreAmisArgentDePoche}
                  alt="How It Works"
                />
              </div>
            </div>
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
      <div className="carousel-content">
        <div className="carousel-text">
          <h1 className="title">Payer en magasin</h1>
          <h1 className="text">"Avec IsyPay réglez tous vos achats d’un simple geste."</h1>
        </div>
        <div className="carousel-image">
          <img
            src={payerEnMagasin}
            alt="How It Works"
            className="how-it-works-image"
            width={600}
            height={600}
          />
        </div>
      </div>

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
