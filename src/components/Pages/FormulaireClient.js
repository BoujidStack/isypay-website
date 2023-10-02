import React, { useState } from 'react';
import "./FormulaireClient.css";
import { useTranslation } from 'react-i18next';

function FormulaireClient() {
    const [userType, setUserType] = useState("particulier");
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const { t } = useTranslation();
    const handleUserTypeChange = (e) => {
        setUserType(e.target.value);
    };
    const handleCheckboxChange = () => {
        setAcceptedTerms(!acceptedTerms);
    };
    const shouldShowDomainField = userType === "professionnel";
    return (
        <div className='form-client'>
            <div className="form-container-client">
                <div className="form-title-client">{t('FormulaireClient.title')}</div>
                <label className="radio-inline-client">
                    <input
                        type="radio"
                        name="userType"
                        value="particulier"
                        checked={userType === "particulier"}
                        onChange={handleUserTypeChange}
                    /> {t('FormulaireClient.Particulier')}
                </label>
                <label className="radio-inline-client">
                    <input
                        type="radio"
                        name="userType"
                        value="professionnel"
                        checked={userType === "professionnel"}
                        onChange={handleUserTypeChange}
                    /> {t('FormulaireClient.Professionnel')}
                </label>
            </div>
            <div className="card-Form-client">
                <div className="card-body-Form-client">
                    <form>
                        <div className="coolinput-client">
                            <label htmlFor="lastName" className="text">{t('FormulaireClient.lastName')}</label>
                            <input type="text" id="lastName" name="lastName" className="input" />
                        </div>
                        <div className="coolinput-client">
                            <label htmlFor="firstName" className="text">{t('FormulaireClient.firstName')}</label>
                            <input type="text" id="firstName" name="firstName" className="input" />
                        </div>
                        <div className="coolinput-client">
                            <label htmlFor="phoneNumber" className="text">{t('FormulaireClient.phoneNumber')}</label>
                            <input type="text" id="phoneNumber" name="phoneNumber" className="input" />
                        </div>
                        <div className="coolinput-client">
                            <label htmlFor="city" className="text">{t('FormulaireClient.city')}</label>
                            <select id="city" name="city" className="input">
                                <option value="paris">Paris</option>
                                <option value="lyon">Lyon</option>
                                <option value="marseille">Marseille</option>
                            </select>
                        </div>
                        {shouldShowDomainField && (
                            <div className="coolinput-client">
                                <label htmlFor="activity" className="text">{t('FormulaireClient.activity')}</label>
                                <select id="activity" name="activity" className="input">
                                    <option value="it">IT</option>
                                    <option value="finance">Finance</option>
                                    <option value="healthcare">Healthcare</option>
                                </select>
                            </div>
                        )}
                        <div className="coolinput-client">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    name="acceptTerms"
                                    checked={acceptedTerms}
                                    onChange={handleCheckboxChange}
                                />
                                {t('FormulaireClient.acceptTerms')}
                            </label>
                        </div>
                        <div className="coolinput-client">
                            <button type="submit" className="envoyer-button">{t('FormulaireClient.button')}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormulaireClient;
