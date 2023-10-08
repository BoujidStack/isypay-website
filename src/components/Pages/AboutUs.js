import React from 'react'
import { useTranslation } from 'react-i18next';
import aboutUsImage from '../../assets/logo/Home/aboutUsImage.svg';

function AboutUs() {
    const { t } = useTranslation();
  return (
      <div className="about-us">
        <div className="about-us-image">
          <img src={aboutUsImage} alt="About Us"  width={500} height={500}/>
        </div>
        <div className="about-us-text">
          <h2>{t('APropos.titleSection')}</h2>
          <h1>{t('APropos.text')}</h1>
        </div>
      </div>
  )
}

export default AboutUs