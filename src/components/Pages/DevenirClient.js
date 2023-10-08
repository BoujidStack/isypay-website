import "./DevenirClient.css";
import DevenirClientImg from '../../assets/devenirClientImg.svg'
import React from "react";
import devenirClientImg1 from '../../assets/devenirClientImg1.png';
import devenirClientImg2 from '../../assets/devenirClientImg2.png';
import { Link } from 'react-router-dom';
import Recurringsection from "./Recurringsection";
import { useTranslation } from 'react-i18next';


export const DevenirClient = () => {
  const { t } = useTranslation();
  return (
    <div className="DevenirClient-main-container">
      <div className="DevenirClient-container">
        <div className="DevenirClient-content">
          <div className="DevenirClient-text">
            <h1 className="DevenirClient-heading">{t('DevenirClient.title')}</h1>
            <h1 className="DevenirClient-sub-heading">{t('DevenirClient.text')}</h1>
          </div>
        </div>
        <div className="DevenirClient-image">
          <img src={DevenirClientImg} alt="DevenirClient" />
        </div>
      </div>

      <div className="types-image-section-client">
        <div className="types-image-container-client">
          <div className="types-image-client">
            <img src={devenirClientImg1} alt="typesclient" />
            <div className="overlay-client">
              <h2>{t('DevenirClient.type1-title')}</h2>
              <button>
                <Link className="button" to="/IsyWallet">{t('DevenirClient.type1-button')}</Link>
              </button>
            </div>
          </div>
          <div className="types-image-client">
            <img src={devenirClientImg2} alt="typesclient" />
            <div className="overlay-client">
              <h2>{t('DevenirClient.type2-title')}</h2>
              <button>
                <Link className="button" to="/Formulaire-Client">{t('DevenirClient.type1-button')}</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Recurringsection />
    </div>
  );
};
