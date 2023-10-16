import "./Developer.css";
import DeveloperImg from '../../assets/developerImg.svg'
import React from "react";
import apiIntegrationImage from '../../assets/apiIntegrationImage.png';
import iconImage1 from '../../assets/iconImage1.png';
import iconImage2 from '../../assets/iconImage2.png';
import Recurringsection from "./Recurringsection";
import { useTranslation } from 'react-i18next';



export const Developer = () => {
  const { t } = useTranslation();
  return (
    <div className="Developer-main-container">
      <div className="Developer-container">
        <div className="Developer-content">
          <div className="Developer-text">
            <p className="Developer-heading-tagline">{t('developer.miniText')}</p>
            <h1 className="Developer-heading">{t('developer.title')}</h1>
            <h1 className="Developer-sub-heading">{t('developer.text')}</h1>
          </div>
        </div>
        <div className="Developer-image">
          <img src={DeveloperImg} alt="Developer" width={600} height={600} />
        </div>
      </div>

      <div className="api-integration-section">
        <div className="api-content">
          <h1 className="api-title">{t('developer.title-section2')}</h1>
          <h1 className="api-description">{t('developer.text-section2')}</h1>
          <div className="api-icons">
            <div className="api-icon">
              <img src={iconImage1} alt="Icon" />
              <div className="icon-text-container">
                <h4 className="icon-title">{t('developer.icon-title')}</h4>
                <p className="icon-text">{t('developer.icon-text')}</p>
              </div>
            </div>
            <div className="api-icon">
              <img src={iconImage2} alt="Icon" />
              <div className="icon-text-container">
                <h4 className="icon-title">{t('developer.icon-title2')}</h4>
                <p className="icon-text">{t('developer.icon-text2')}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="api-image">
          <img src={apiIntegrationImage} width={500} height={500} alt="APIintegration" />
        </div>
      </div>
      <br /><br />
      <Recurringsection />
    </div>
  );
};
