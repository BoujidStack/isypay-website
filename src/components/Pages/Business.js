import React from "react";
import "./Business.css";
import businessImg from '../../assets/businessImg.png'
import QrCode from '../../assets/QrCode.png'
import { useTranslation } from 'react-i18next';
import Recurringsection from "./Recurringsection";

export const Business = () => {
  const { t } = useTranslation();
  return (
    <div className="Business-main-container">
      <div className="Business-container">
        <div className="Business-content">
          <div className="Business-text">
            <h1 className="Business-heading">{t('Business.title')}</h1>
            <h1 className="Business-sub-heading">{t('Business.text')}</h1>
          </div>
        </div>
        <div className="Business-image">
          <img src={businessImg} alt="Image" />
        </div>
      </div>

      <div class="codeQr">
        <div class="codeQr-image">
          <img src={QrCode} alt="Image" />
        </div>
        <div class="codeQr-content">
          <div class="codeQr-text">
            <h1 class="codeQr-heading">{t('Business.codeQr-title')}</h1>
            <h1 class="codeQr-sub-heading">{t('Business.codeQr-text')}</h1>
          </div>
        </div>
      </div>
      <Recurringsection />
    </div>
  );
};
