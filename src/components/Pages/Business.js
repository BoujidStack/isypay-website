import React from "react";
import "./Business.css";
import businessImg from '../../assets/businessImg.svg'
import QrCode from '../../assets/QrCode.svg'
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
          <img src={businessImg} alt="Business" width={550} height={550}/>
        </div>
      </div>

      <div className="codeQr">
        <div className="codeQr-image">
          <img src={QrCode} alt="Business" />
        </div>
        <div className="codeQr-content">
          <div className="codeQr-text">
            <h1 className="codeQr-heading">{t('Business.codeQr-title')}</h1>
            <h1 className="codeQr-sub-heading">{t('Business.codeQr-text')}</h1>
          </div>
        </div>
      </div>
      <Recurringsection />
    </div>
  );
};
