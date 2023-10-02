import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import i18n from '../components/i18n';
import "./NavBar.css";
import logo from '../assets/logo/IsyPay-logo.png'
import { FaChevronDown } from 'react-icons/fa';
import usaFlagIcon from '../assets/flags/usa.png';
import franceFlagIcon from '../assets/flags/fr.png';

function NavBar() {
  const [click, setClick] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const handleClick = () => setClick(!click);

  const handleLanguageClick = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };

  const handleLanguageSelect = (language) => {
    i18n.changeLanguage(language);
    setLanguageMenuOpen(false);
    localStorage.setItem('selectedLanguage', language);
    window.location.reload();
  };


  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={logo} alt="CodeBucks Logo" height={150} width={150} />
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/Particulier"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                {t("navbar.Particulier")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Business"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                {t("navbar.Business")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Developer"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                {t("navbar.Developer")}
              </NavLink>
            </li>
            <li className="nav-itemTwoButtons">
              <NavLink
                exact
                to="/Devenir Client"
                activeClassName="active"
                className="nav-links green-bg"
                onClick={handleClick}
              >
                {t("navbar.DevenirClient")}
              </NavLink>
            </li>
            <li className="nav-itemTwoButtons">
              <NavLink
                exact
                to="/Devenir Agent"
                activeClassName="active"
                className="nav-links blue-bg"
                onClick={handleClick}
              >
                {t("navbar.DevenirAgent")}
              </NavLink>
            </li>
            <li className="nav-itemLanguage">
              <div className="language-dropdown">
                <div
                  className="selected-language"
                  onClick={handleLanguageClick}
                >
                  <img
                    src={
                      i18n.language === "en"
                        ? usaFlagIcon
                        : franceFlagIcon
                    }
                    alt={
                      i18n.language === "en"
                        ? "USA Flag"
                        : "France Flag"
                    }
                    className="flag-icon"
                  />
                  <span>{i18n.language.toUpperCase()}</span>
                  <FaChevronDown />
                </div>
                {languageMenuOpen && (
                  <ul className="language-options">
                    <li onClick={() => handleLanguageSelect("en")}>
                      <img src={usaFlagIcon} alt="USA Flag" className="flag-icon" />
                      English
                    </li>
                    <li onClick={() => handleLanguageSelect("fr")}>
                      <img src={franceFlagIcon} alt="France Flag" className="flag-icon" />
                      Francais
                    </li>
                  </ul>
                )}
              </div>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
