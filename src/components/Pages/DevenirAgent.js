import "./DevenirAgent.css";
import DevenirAgentImg from '../../assets/devenirAgentImg.svg'
import React from "react";
import devenirAgentImg1 from '../../assets/devenirAgentImg1.png';
import devenirAgentImg2 from '../../assets/devenirAgentImg2.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Recurringsection from "./Recurringsection";


export const DevenirAgent = () => {
  const { t } = useTranslation();
  return (
    <div className="DevenirAgent-main-container">
      <div className="DevenirAgent-container">
        <div className="DevenirAgent-content">
          <div className="DevenirAgent-text">
            <h1 className="DevenirAgent-heading">{t('DevenirAgent.title')}</h1>
            <h1 className="DevenirAgent-sub-heading">{t('DevenirAgent.text')}</h1>
          </div>
        </div>
        <div className="DevenirAgent-image">
          <img src={DevenirAgentImg} alt="Devenir Agent Image" width={550} height={550} />
        </div>
      </div>

      <div className="types-image-section">
        <div className="types-image-container">
          <div className="types-image">
            <img src={devenirAgentImg2} alt="Devenir Agent Image" />
            <div className="overlay">
              <h2>{t('DevenirAgent.type1-title')}</h2>
              <button>
                <Link className="button" to="/Compte-Partenaire">{t('DevenirAgent.type1-button')}</Link>
              </button>
            </div>
          </div>
          <div className="types-image">
            <img src={devenirAgentImg1} alt="Devenir Agent Image" />
            <div className="overlay">
              <h2>{t('DevenirAgent.type2-title')}</h2>
              <button>
                <Link className="button" to="/Formulaire-Agent">{t('DevenirAgent.type1-button')}</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Recurringsection />
    </div>
  );
};
