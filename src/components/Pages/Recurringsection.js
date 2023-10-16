import React, { useState } from "react";
import IsypayImg from '../../assets/isypayApp.svg';
import securityImg1 from '../../assets/securityImages/securityImg1.gif';
import securityImg2 from '../../assets/securityImages/securityImg2.gif';
import securityImg3 from '../../assets/securityImages/securityImg3.gif';
import logoFooter from '../../assets/IsypayLogoFooter.svg';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

function Recurringsection() {
  const [expandedItem, setExpandedItem] = useState(null);
  const { t } = useTranslation();

  const toggleAccordion = (index) => {
    if (expandedItem === index) {
      setExpandedItem(null);
    } else {
      setExpandedItem(index);
    }
  };

  const faqData = [
    {
      question: t("Fqa.question1"),
      answer: t("Fqa.answer1"),
    },
    {
      question: t("Fqa.question2"),
      answer: t("Fqa.answer2"),
    },
    {
      question: t("Fqa.question3"),
      answer: t("Fqa.answer3"),
    },
    {
      question: t("Fqa.question4"),
      answer: t("Fqa.answer4"),
    },
    {
      question: t("Fqa.question5"),
      answer: t("Fqa.answer5"),
    },
  ];

  return (
    <div className="main-container">
      <div className="card">
        <div className="card-content">
          <div className="left-content">
            <h2 className="title">{t('card.title')}</h2>
            <p className="text">{t('card.text')}</p>
            <div className="cardButtons">
              <a href="/" tabIndex="0">
                <img className="bn45" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="Google Play" />
              </a>
              <a href="/" tabIndex="0">
                <img className="bn45" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" />
              </a>
            </div>
          </div>
          <div className="right-content">
            <img src={IsypayImg} alt="Isypay App" />
          </div>
        </div>
      </div>

      <div className="security">
        <h1 className="title">{t('security.title')}</h1>
        <h1 className="text">{t('security.text')}</h1>
        <div className="security-images">
          <div className="imageSecurity">
            <img src={securityImg1} alt="Security 1" width={300} height={300} />
            <h2>{t('security.title1')}</h2>
            <h3>{t('security.text1')}</h3>
          </div>
          <div className="imageSecurity">
            <img src={securityImg2} alt="Security 2" width={300} height={300} />
            <h2>{t('security.title2')}</h2>
            <h3>{t('security.text2')}</h3>
          </div>
          <div className="imageSecurity">
            <img src={securityImg3} alt="Security 3" width={300} height={300} />
            <h2>{t('security.title3')}</h2>
            <h3>{t('security.text3')}</h3>
          </div>
        </div>
      </div>

      <div className="faq-container" name="fqa">
        <div className="container-content">
          <h1 data-aos="fade-down" data-aos-duration="1000">{t('Fqa.title')}</h1>
          <div className="accordion">
            {faqData.map((item, index) => (
              <div
                className="accordion-item"
                key={index}
                data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                data-aos-duration="1000"
              >
                <button
                  id={`accordion-button-${index}`}
                  aria-expanded={expandedItem === index}
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="accordion-title">{item.question}</span>
                  <span className="icon" aria-hidden="true"></span>
                </button>
                <div
                  className={`accordion-content ${expandedItem === index && 'expanded'}`}
                >
                  <h2>{item.answer}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="footer-distributed">
        <div className="footer-left">
          <a href="/"><img className="footer-logo" src={logoFooter} alt="Isypay Logo" /></a>
          <p className="footer-links">
            <a href="/">{t('footer.Home')}</a>
            <a href="/Particulier">{t('footer.Particulier')}</a>
            <a href="/Business">{t('footer.Business')}</a>
            <a href="/Developer">{t('footer.Developer')}</a>
            <a href="/Devenir Client">{t('footer.Devenir Client')}</a>
            <a href="/Devenir Agent">{t('footer.Devenir Agent')}</a>
            <a href="/conditions">{t('footer.Termes et Conditions')}</a>
          </p>
        </div>
        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p><span>Bamako/Sebenicoro, Cité M’Boua KEITA,</span> Immeuble 18. MALI</p>
          </div>
          <div>
            <i className="fa fa-phone"></i>
            <p>(+222) 555093120</p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p><a href="mailto:support@company.com">Contact@isypay.net</a></p>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-company-about">
            <span>{t('footer.About the company')}</span>
            {t('footer.text')}
          </p>
          <div className="footer-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaGithub /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <h3>{t('footer.Download IsyPay')}</h3>
          <br />
          <div className="buttons">
            <a href="/" tabIndex="0">
              <img className="bn45" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="Google Play" />
            </a>
            <a href="/" tabIndex="0">
              <img className="bn45" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" />
            </a>
          </div>
          <p className="company-name"> © {new Date().getFullYear()} <span className="isypayCopy">IsyPay</span>. {t('footer.copyright')}</p>
        </div>
      </footer>
    </div>
  );
}

export default Recurringsection;
