import React, { useState } from "react";
import "./Home.css";
import homeImage from '../../assets/logo/Home/HomeImage.png';
import aboutUsImage from '../../assets/logo/Home/aboutUsImage.png';
import image1 from '../../assets/ImagesSlider/image1.png';
import image2 from '../../assets/ImagesSlider/image2.png';
import image3 from '../../assets/ImagesSlider/image3.png';
import image4 from '../../assets/ImagesSlider/image4.png';
import image5 from '../../assets/ImagesSlider/image5.png';
import particulier from '../../assets/pariculier.png';
import particulierEnglish from '../../assets/particulierEnglish.png';
import Professionnels from '../../assets/Professionnels.png';
import ProfessionnelsEnglish from '../../assets/ProfessionnelsEnglish.png';
import TarificationImg from '../../assets/Tarification/TarificationImg.png';
import TarificationImgEnglish from '../../assets/Tarification/TarificationImgEnglish.png';
import tableTrifImage from '../../assets/Tarification/tableTrifImage.png';
import tableTrifImageEnglish from '../../assets/Tarification/tableTrifImageEnglish.png';
import { useTranslation } from 'react-i18next';
import Recurringsection from "./Recurringsection";

const imageUrls = [image1, image2, image3, image4, image5];

export const Home = () => {
  const duplicatedImageUrls = [...imageUrls, ...imageUrls];
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
  };

  const [withdrawalAmount, setWithdrawalAmount] = useState('');
  const [withdrawalFee, setWithdrawalFee] = useState('');

  const handleWithdrawalAmountChange = (e) => {
    const amount = parseFloat(e.target.value.replace(',', ''));
    let fee = 0;

    if (!isNaN(amount)) {
      if (amount >= 1 && amount <= 99999) {
        fee = amount * 0.01; // 1% fee for amounts between 1 and 99999
      } else if (amount >= 100000 && amount <= 1500000) {
        fee = amount * 0.007; // 0.7% fee for amounts between 100000 and 1500000
      }
    }

    setWithdrawalAmount(amount.toFixed(3));
    setWithdrawalFee(fee.toFixed(3));
  };
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
          <img src={homeImage} alt="Image" />
        </div>
      </div>


      {/* About Us Section */}
      <div className="about-us">
        <div className="about-us-image">
          <img src={aboutUsImage} alt="About Us Image" />
        </div>
        <div className="about-us-text">
          <h2>{t('APropos.titleSection')}</h2>
          <h1>{t('APropos.text')}</h1>
        </div>
      </div>

      <br /><br />

      {/* slider Section */}
      <div className="slider">
        <div className="slide-track">
          {imageUrls.map((imageUrl, index) => (
            <div className="slide" key={index}>
              <img src={imageUrl} height="50" width="125" alt="" />
            </div>
          ))}
          {imageUrls.map((imageUrl, index) => (
            <div className="slide" key={index + imageUrls.length}>
              <img src={imageUrl} height="50" width="125" alt="" />
            </div>
          ))}
        </div>
      </div>

      <br /><br />

      <div className="new-section">
        <h1>{t('ParticuliersouProfessionnels.title')}</h1>
        <div className="new-section-images">
          <img
            src={currentLanguage === 'en' ? particulierEnglish : particulier}
            alt="particulier"
          />
          <img
            src={currentLanguage === 'en' ? ProfessionnelsEnglish : Professionnels}
            alt="Professionnels"
          />
        </div>
      </div>

      <br /><br />

      {/* Tarification Section */}
      <div className="tarification-section">
        <h1 className="title">{t('TarificationIsyPay.title')}</h1>
        <h1 className="text">{t('TarificationIsyPay.text')}</h1>
        <div className="tarification-image">
          <img
            src={currentLanguage === 'en' ? TarificationImgEnglish : TarificationImg}
            alt="Tarification Image"
          />
        </div>
      </div>


      {/* Pricing détaillé Retrait Section */}
      <div className="pricing-retrait-section">
        <div className="double-titles">
          <h1 className="title1">{t('TarificationIsyPay.Pricingdétaillé')}</h1>
          <h1 className="title2">{t('TarificationIsyPay.Retrait')}</h1>
        </div>
        <div className="retrait-calculator">
          <div className="coolinput">
            <label htmlFor="withdrawalAmountInput" className="text">
              {t('TarificationIsyPay.VousRetirez')}
            </label>
            <input
              type="text"
              placeholder="0.000"
              name="withdrawalAmountInput"
              className="input"
              value={withdrawalAmount}
              onChange={handleWithdrawalAmountChange}
            />
          </div>
          <div className="coolinput">
            <label htmlFor="withdrawalFeeInput" className="text">
              {t('TarificationIsyPay.VousPayez')}
            </label>
            <input
              type="text"
              placeholder="0.000"
              name="withdrawalFeeInput"
              className="input"
              value={withdrawalFee}
              readOnly
            />
          </div>
          <div className="tableTrif">
            <img
              src={currentLanguage === 'en' ? tableTrifImageEnglish : tableTrifImage}
              alt="tableTrifImage"
              height="150"
              width="600"
            />
          </div>
        </div>
      </div>
      <Recurringsection />
    </div>
  );
};
