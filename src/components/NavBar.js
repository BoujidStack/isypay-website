import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./NavBar.css";
import logo from "../assets/logo/IsyPay-logo.svg";
import usaFlagIcon from "../assets/flags/usa.svg";
import franceFlagIcon from "../assets/flags/fr.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [click, setClick] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => {
    setClick(!click);
  };

  const handleLanguageClick = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };

  const handleLanguageSelect = (language) => {
    i18n.changeLanguage(language);
    setLanguageMenuOpen(false);
    localStorage.setItem("selectedLanguage", language);
    window.location.reload();
  };

  const handleNavigation = (path) => {
    navigate(path);
    setClick(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <span
          className="nav-logo"
          onClick={() => handleNavigation("/")}
        >
          <img src={logo} alt="CodeBucks Logo" height={150} width={150} />
        </span>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <span
              className="nav-links"
              onClick={() => handleNavigation("/Particulier")}
            >
              {t("navbar.Particulier")}
            </span>
          </li>
          <li className="nav-item">
            <span
              className="nav-links"
              onClick={() => handleNavigation("/Business")}
            >
              {t("navbar.Business")}
            </span>
          </li>
          <li className="nav-item">
            <span
              className="nav-links"
              onClick={() => handleNavigation("/Developer")}
            >
              {t("navbar.Developer")}
            </span>
          </li>
          <li className="nav-itemTwoButtons">
            <span
              className="nav-links green-bg"
              onClick={() => handleNavigation("/Devenir Client")}
            >
              {t("navbar.DevenirClient")}
            </span>
          </li>
          <li className="nav-itemTwoButtons">
            <span
              className="nav-links blue-bg"
              onClick={() => handleNavigation("/Devenir Agent")}
            >
              {t("navbar.DevenirAgent")}
            </span>
          </li>
          <li className="nav-itemLanguage">
            <div className="language-dropdown">
              <div
                className="selected-language"
                onClick={handleLanguageClick}
              >
                <img
                  src={
                    i18n.language === "en" ? usaFlagIcon : franceFlagIcon
                  }
                  alt={i18n.language === "en" ? "USA Flag" : "France Flag"}
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
          {click ? (
            <AiOutlineClose className="menu-icon" />
          ) : (
            <AiOutlineMenu className="menu-icon" />
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
