import React, { useState } from "react";
import "./Home.css";
import homeImage from '../../assets/logo/Home/HomeImage.svg';
import particulier from '../../assets/pariculier.svg';
import particulierEnglish from '../../assets/particulierEnglish.svg';
import Professionnels from '../../assets/Professionnels.svg';
import ProfessionnelsEnglish from '../../assets/ProfessionnelsEnglish.svg';
import { useTranslation } from 'react-i18next';
import Recurringsection from "./Recurringsection";
import AboutUs from "./AboutUs";
import Slider from "./Slider";
import Tarif from "./Tarif";


export const Home = () => {
  const { t, i18n } = useTranslation();
  const [currentLanguage] = useState(i18n.language);
  return (
    <div className="main-container">
      <div className="container">
        <div className="content">
          <div className="text">
            <h1 className="heading">{t('home.title')}</h1>
            <h1 className="sub-heading">{t('home.text')}</h1>
          </div>
          <div className="buttons">
            <button className="button1">
              <span className="button-icon1"></span>
              App store
            </button>
            <button className="button2">
              <span className="button-icon2"></span>
              Play store
            </button>
          </div>
        </div>
        <div className="image">
          <img src={homeImage} alt="homeImage" width={700} height={700} />
        </div>
      </div>

      <AboutUs />
      <br /><br />

      <Slider />
      <br /><br />

      <div className="new-section">
        <h1>{t('ParticuliersouProfessionnels.title')}</h1>
        <div className="new-section-images">
          <img
            src={currentLanguage === 'en' ? particulierEnglish : particulier}
            alt="particulier"
            width={800}
            height={800}
          />
          <img
            src={currentLanguage === 'en' ? ProfessionnelsEnglish : Professionnels}
            alt="Professionnels"
            width={800}
            height={800}
          />
        </div>
      </div>

      <br /><br />

      <Tarif />
      <Recurringsection />
    </div>
  );
};
