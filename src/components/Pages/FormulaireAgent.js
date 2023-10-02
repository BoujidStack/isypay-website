import React, { useState } from 'react';
import "./FormulaireAgent.css";
import { useTranslation } from 'react-i18next';

function FormulaireAgent() {
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const { t } = useTranslation();
    const handleCheckboxChange = () => {
        setAcceptedTerms(!acceptedTerms);
    };
    return (
        <div className='form-agent'>
            <div className="form-container-agent">
                <div className="form-title-agent">{t('FormulaireAgent.title')}</div>
                <div className='form-text-agent'>{t('FormulaireAgent.text')}</div>
            </div>
            <div className="card-Form-agent">
                <div className="card-body-Form-agent">
                    <form>
                        <div className="coolinput-agent">
                            <label htmlFor="lastName" className="text">{t('FormulaireAgent.lastName')}</label>
                            <input type="text" id="lastName" name="lastName" className="input" />
                        </div>
                        <div className="coolinput-agent">
                            <label htmlFor="firstName" className="text">{t('FormulaireAgent.firstName')}</label>
                            <input type="text" id="firstName" name="firstName" className="input" />
                        </div>
                        <div className="coolinput-agent">
                            <label htmlFor="phoneNumber" className="text">{t('FormulaireAgent.phoneNumber')}</label>
                            <input type="text" id="phoneNumber" name="phoneNumber" className="input" />
                        </div>
                        <div className="coolinput-agent">
                            <label htmlFor="city" className="text">{t('FormulaireAgent.city')}</label>
                            <select id="city" name="city" className="input">
                                <option value="paris">Paris</option>
                                <option value="lyon">Lyon</option>
                                <option value="marseille">Marseille</option>
                            </select>
                        </div>
                        <div className="coolinput-agent">
                            <label htmlFor="activity" className="text">{t('FormulaireAgent.activity')}</label>
                            <select id="activity" name="activity" className="input">
                                <option value="it">IT</option>
                                <option value="finance">Finance</option>
                                <option value="healthcare">Healthcare</option>
                            </select>
                        </div>
                        <div className="coolinput-agent">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    name="acceptTerms"
                                    checked={acceptedTerms}
                                    onChange={handleCheckboxChange}
                                />
                                {t('FormulaireAgent.acceptTerms')}
                            </label>
                        </div>
                        <div className="coolinput-agent">
                            <button type="submit" className="envoyer-button">{t('FormulaireAgent.button')}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormulaireAgent;
