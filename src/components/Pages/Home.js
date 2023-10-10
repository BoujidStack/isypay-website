import React from "react";
import "./Home.css";
import homeImage from '../../assets/logo/Home/HomeImage.svg';
import particulier from '../../assets/particulier.svg';
import particulierEnglish from '../../assets/particulierEnglish.svg';
import Professionnels from '../../assets/Professionnels.svg';
import ProfessionnelsEnglish from '../../assets/ProfessionnelsEnglish.svg';
import { useTranslation } from 'react-i18next';
import Recurringsection from "./Recurringsection";
import AboutUs from "./AboutUs";
import Slider from "./Slider";
import Tarif from "./Tarif";


export const Home = () => {
  const { t } = useTranslation();
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
          <div class="image-container">
            <img
              src={particulier}
              alt="particulier"
              width={600}
              height={600}
            />
            <div class="image-text">
              <h2>{t('ParticuliersouProfessionnels.titleParticulier')}</h2>
              <h4>{t('ParticuliersouProfessionnels.textParticulier')}</h4>
                <p>{t('ParticuliersouProfessionnels.point1Particulier')}</p>
                <p>{t('ParticuliersouProfessionnels.point2Particulier')}</p>
            </div>
          </div>
          <div class="image-container">
            <img
              src={Professionnels}
              alt="Professionnels"
              width={600}
              height={600}
              className="image2-container"
            />
            <div class="image-text">
              <h2>{t('ParticuliersouProfessionnels.titleProfessionals')}</h2>
              <h4>{t('ParticuliersouProfessionnels.textProfessionals')}</h4>
                <p>{t('ParticuliersouProfessionnels.point1Professionals')}</p>
                <p>{t('ParticuliersouProfessionnels.point2Professionals')}</p>
                <p>{t('ParticuliersouProfessionnels.point3Professionals')}</p>
            </div>
          </div>
        </div>
      </div>


      <br /><br />

      <Tarif />
      <Recurringsection />
    </div>
  );
};
