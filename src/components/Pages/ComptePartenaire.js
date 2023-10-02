import React from 'react';
import step1ImgVert from '../../assets/step1ImgVert.png';
import step2ImgVert from '../../assets/step2ImgVert.png';
import step3ImgVert from '../../assets/step3ImgVert.png';
import step4ImgVert from '../../assets/step4ImgVert.png';
import ArrowRight from '../../assets/ArrowRightVert.png';
import { useTranslation } from 'react-i18next';
import './ComptePartenaire.css';


function ComptePartenaire() {
    const { t } = useTranslation();
    return (
        <div className="isy-wallet-steps-ComptePartenaire">
            <h1 className='title-ComptePartenaire'>{t('ComptePartenaire.title')}</h1>
            <h1 className='text-ComptePartenaire'>{t('ComptePartenaire.text')}</h1>
            <div className="steps-container-ComptePartenaire">
                <div className="step-ComptePartenaire">
                    <img src={step1ImgVert} alt="Step 1" />
                    <h3 className='title-step'>{t('ComptePartenaire.title-step1')}</h3>
                    <p className='text-step'>{t('ComptePartenaire.text-step1')}</p>
                </div>

                <img src={ArrowRight} alt="Space" className='space-img-ComptePartenaire' width={50} height={50} />

                <div className="step-ComptePartenaire">
                    <img src={step2ImgVert} alt="Step 2" />
                    <h3 className='title-step'>{t('ComptePartenaire.title-step2')}</h3>
                    <p className='text-step'>{t('ComptePartenaire.text-step2')}</p>
                </div>

                <img src={ArrowRight} alt="Space" className='space-img-ComptePartenaire' width={50} height={50} />

                <div className="step-ComptePartenaire">
                    <img src={step3ImgVert} alt="Step 3" />
                    <h3 className='title-step'>{t('ComptePartenaire.title-step3')}</h3>
                    <p className='text-step'>{t('ComptePartenaire.text-step3')}</p>
                </div>

                <img src={ArrowRight} alt="Space" className='space-img-ComptePartenaire' width={50} height={50} />

                <div className="step-ComptePartenaire">
                    <img src={step4ImgVert} alt="Step 4" />
                    <h3 className='title-step'>{t('ComptePartenaire.title-step4')}</h3>
                    <p className='text-step'>{t('ComptePartenaire.text-step4')}</p>
                </div>
            </div>
        </div>
    );
}

export default ComptePartenaire;
