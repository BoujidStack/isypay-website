import React from 'react';
import "./TermesAndConditions.css";
import Recurringsection from "./Recurringsection";
import { useTranslation } from 'react-i18next';

function TermesAndConditions() {
    const { t } = useTranslation();
    return (
        <>
            <div className="terms-and-conditions">
                <div className="section">
                    <h1 className="section-titleterms-and-conditions">{t('TermesAndConditions.Title')}</h1>
                    <p className="section-text">
                    {t('TermesAndConditions.text')}
                    </p>
                </div>
                <div className="section">
                    <h2 className="section-title">{t('TermesAndConditions.section-title1')}</h2>
                    <p className="section-text">
                    {t('TermesAndConditions.section-text1')}
                    </p>
                </div>
                <div className="section">
                    <h1 className="section-title">{t('TermesAndConditions.section-title2')}</h1>
                    <p className="section-text">
                    {t('TermesAndConditions.section-text2')}
                    </p>
                </div>
                <div className="section">
                    <h1 className="section-title">{t('TermesAndConditions.section-title3')}</h1>
                    <p className="section-text">
                    {t('TermesAndConditions.section-text3')}
                    </p>
                </div>
                <div className="section">
                    <h1 className="section-title">{t('TermesAndConditions.section-title4')}</h1>
                    <p className="section-text">
                    {t('TermesAndConditions.section-text4')}
                    </p>
                </div>
                <div className="section">
                    <h1 className="section-title">{t('TermesAndConditions.section-title5')}</h1>
                    <p className="section-text">
                    {t('TermesAndConditions.section-text5')}
                    </p>
                </div>
                <div className="section">
                    <h1 className="section-title">{t('TermesAndConditions.section-title6')}</h1>
                    <p className="section-text">
                    {t('TermesAndConditions.section-text6')}
                    </p>
                </div>
                <div className="section">
                    <h1 className="section-title">{t('TermesAndConditions.section-title7')}</h1>
                    <p className="section-text">
                    {t('TermesAndConditions.section-text7')}
                    </p>
                </div>
                <div className="section">
                    <h1 className="section-title">{t('TermesAndConditions.section-title8')}</h1>
                    <p className="section-text">
                    {t('TermesAndConditions.section-text8')}
                    </p>
                </div>
                <div className="section">
                    <h1 className="section-title">{t('TermesAndConditions.section-title9')}</h1>
                    <p className="section-text">
                    {t('TermesAndConditions.section-text9')}
                    </p>
                </div>
            </div>
            <br/> <br/>
            <Recurringsection />
        </>

    );
}

export default TermesAndConditions;
