import React from 'react';
import step1Img from '../../assets/step1Img.png';
import step2Img from '../../assets/step2Img.png';
import step3Img from '../../assets/step3Img.png';
import step4Img from '../../assets/step4Img.png';
import ArrowRight from '../../assets/ArrowRight.png';
import { useTranslation } from 'react-i18next';
import './IsyWalletSteps.css';

function IsyWalletSteps() {
  const { t } = useTranslation();
  return (
    <div className="isy-wallet-steps">
      <h1 className='title'>{t('IsyWallet.title')}</h1>
      <h1 className='text'>{t('IsyWallet.text')}</h1>

      <div className="steps-container">
        <div className="step">
          <img src={step1Img} alt="Step 1" />
          <h3 className='title-step'>{t('IsyWallet.title-step1')}</h3>
          <p className='text-step'>{t('IsyWallet.text-step1')}</p>
        </div>

        <img src={ArrowRight} alt="Space" className='space-img' width={50} height={50} />

        <div className="step">
          <img src={step2Img} alt="Step 2" />
          <h3 className='title-step'>{t('IsyWallet.title-step2')}</h3>
          <p className='text-step'>{t('IsyWallet.text-step2')}</p>
        </div>

        <img src={ArrowRight} alt="Space" className='space-img' width={50} height={50} />

        <div className="step">
          <img src={step3Img} alt="Step 3" />
          <h3 className='title-step'>{t('IsyWallet.title-step3')}</h3>
          <p className='text-step'>{t('IsyWallet.text-step3')}</p>
        </div>

        <img src={ArrowRight} alt="Space" className='space-img' width={50} height={50} />

        <div className="step">
          <img src={step4Img} alt="Step 4" />
          <h3 className='title-step'>{t('IsyWallet.title-step4')}</h3>
          <p className='text-step'>{t('IsyWallet.text-step4')}</p>
        </div>
      </div>
    </div>
  );
}

export default IsyWalletSteps;
