import React, { useState } from "react";
import image1 from '../../assets/ImagesSlider/image1.png';
import image2 from '../../assets/ImagesSlider/image2.png';
import image3 from '../../assets/ImagesSlider/image3.png';
import image4 from '../../assets/ImagesSlider/image4.png';
import image5 from '../../assets/ImagesSlider/image5.png';
import IsypayImg from '../../assets/isypayApp.png';
import securityImg1 from '../../assets/securityImages/securityImg1.gif';
import securityImg2 from '../../assets/securityImages/securityImg2.gif';
import securityImg3 from '../../assets/securityImages/securityImg3.gif';
import logoFooter from '../../assets/IsypayLogoFooter.png';
import { useTranslation } from 'react-i18next';

const imageUrls = [
  image1,
  image2,
  image3,
  image4,
  image5,
];

function Recurringsection() {
  const duplicatedImageUrls = [...imageUrls, ...imageUrls];
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
      <div class="card">
        <div class="card-content">
          <div class="left-content">
            <h2 className="title">{t('card.title')}</h2>
            <p className="text">{t('card.text')}</p>
            <div class="cardButtons">
              <a href="/" tabIndex="0"><img class="bn45" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="bn45" /></a>
              <a href="/" tabIndex="0"><img class="bn45" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="bn45" /></a>
            </div>
          </div>
          <div class="right-content">
            <img src={IsypayImg} alt="Image" />
          </div>
        </div>
      </div>


      <div className="security">
        <h1 className="title">{t('security.title')}</h1>
        <h1 className="text">{t('security.text')}</h1>
        <div className="security-images">
          <div className="image">
            <img src={securityImg1} alt="Image 1" />
            <h2>{t('security.title1')}</h2>
            <p>{t('security.text1')}</p>
          </div>
          <div className="image">
            <img src={securityImg2} alt="Image 2" />
            <h2>{t('security.title2')}</h2>
            <p>{t('security.text2')}</p>
          </div>
          <div className="image">
            <img src={securityImg3} alt="Image 3" />
            <h2>{t('security.title3')}</h2>
            <p>{t('security.text3')}</p>
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
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>



      <footer className="footer-distributed">
        <div className="footer-left">
          <img src={logoFooter} width={200} height={200} />
          <p className="footer-links">
            <a href="#" className="link-1">{t('footer.Home')}</a>
            <a href="#">{t('footer.Particulier')}</a>
            <a href="#">{t('footer.Business')}</a>
            <a href="#">{t('footer.Developer')}</a>
            <a href="#">{t('footer.Devenir Client')}</a>
            <a href="#">{t('footer.Devenir Agent')}</a>
          </p>
        </div>
        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p><span>2972 Westheimer Rd.</span> Santa Ana, Illinois 85486</p>
          </div>
          <div>
            <i className="fa fa-phone"></i>
            <p>(+222) 555093120</p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p><a href="mailto:support@company.com">IsyPay@gmail.com</a></p>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-company-about">
            <span>{t('footer.About the company')}</span>
            {t('footer.text')}
          </p>
          <div className="footer-icons">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-github"></i></a>
          </div>
        </div>
        <div className="footer-bottom">
          <h3>{t('footer.Download IsyPay')}</h3>
          <br />
          <div className="buttons">
            <a href="/" tabIndex="0"><img className="bn45" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="bn45" /></a>
            <a href="/" tabIndex="0"><img className="bn45" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="bn45" /></a>
          </div>
          <p className="company-name"> © {new Date().getFullYear()} <span className="isypayCopy">IsyPay</span>. {t('footer.copyright')}</p>
        </div>
      </footer>
    </div>
  )
}

export default Recurringsection