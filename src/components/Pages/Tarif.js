import React, { useState } from 'react'
import TarificationImg from '../../assets/Tarification/TarificationImg.svg';
import TarificationImgEnglish from '../../assets/Tarification/TarificationImgEnglish.svg';
import tableTrifImage from '../../assets/Tarification/tableTrifImageEnglish.svg';
import tableTrifImageEnglish from '../../assets/Tarification/tableTrifImageEnglish.svg';
import { useTranslation } from 'react-i18next';

function Tarif() {
    const { t, i18n } = useTranslation();
    const [currentLanguage] = useState(i18n.language);

    const [withdrawalAmount, setWithdrawalAmount] = useState('');
    const [withdrawalFee, setWithdrawalFee] = useState('');

    const handleWithdrawalAmountChange = (e) => {
        const amount = parseFloat(e.target.value.replace(',', ''));
        let fee = 0;

        if (!isNaN(amount)) {
            if (amount >= 1 && amount <= 99999) {
                fee = amount * 0.01; // 1% fee for amounts between 1 and 99999
            } else if (amount >= 100000 && amount <= 1500000) {
                fee = amount * 0.007; // 0.7% fee for amounts between 100000 and 1500000
            }
        }

        setWithdrawalAmount(amount.toFixed(3));
        setWithdrawalFee(fee.toFixed(3));
    };
    return (
        <div>
            {/* Tarification Section */}
            <div className="tarification-section">
                <h1 className="title">{t('TarificationIsyPay.title')}</h1>
                <h1 className="text">{t('TarificationIsyPay.text')}</h1>
                <div className="tarification-image">
                    <img
                        src={currentLanguage === 'en' ? TarificationImgEnglish : TarificationImg}
                        alt="Tarification"
                    />
                </div>
            </div>


            {/* Pricing détaillé Retrait Section */}
            <div className="pricing-retrait-section">
                <div className="double-titles">
                    <h1 className="title1">{t('TarificationIsyPay.Pricingdétaillé')}</h1>
                    <h1 className="title2">{t('TarificationIsyPay.Retrait')}</h1>
                </div>
                <div className="retrait-calculator">
                    <div className="coolinput">
                        <label htmlFor="withdrawalAmountInput" className="text">
                            {t('TarificationIsyPay.VousRetirez')}
                        </label>
                        <input
                            type="text"
                            placeholder="0.000"
                            name="withdrawalAmountInput"
                            className="input"
                            value={withdrawalAmount}
                            onChange={handleWithdrawalAmountChange}
                        />
                    </div>
                    <div className="coolinput">
                        <label htmlFor="withdrawalFeeInput" className="text">
                            {t('TarificationIsyPay.VousPayez')}
                        </label>
                        <input
                            type="text"
                            placeholder="0.000"
                            name="withdrawalFeeInput"
                            className="input"
                            value={withdrawalFee}
                            readOnly
                        />
                    </div>
                    <div className="tableTrif">
                        <img
                            src={currentLanguage === 'en' ? tableTrifImageEnglish : tableTrifImage}
                            alt="tableTrifImage"
                            height="150"
                            width="600"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tarif