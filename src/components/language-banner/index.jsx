import React from "react";
import AnimText from "../animText";
import "./styles.scss";
import { setLang } from "../../utils";
import { useTranslation } from "react-i18next";

const LanguageBanner = () => {
  const { t } = useTranslation();
  const handleClick = (e) => {
    setLang(e.target.id);
  };
  let choseLangStr = t("choose_lang");
  return (
    <div className="lang-modal">
      <AnimText
        title={`${choseLangStr} ${choseLangStr} ${choseLangStr} ${choseLangStr} ${choseLangStr} `}
      />
      <div className="lang-teaser">
        <h3>{t("lang_pref")}</h3>
        <div className="lang-select">
          <div onClick={handleClick} id="uz" className="lang-item">
            O'zbek
          </div>
          <div onClick={handleClick} id="en" className="lang-item">
            English
          </div>
          <div onClick={handleClick} id="ru" className="lang-item">
            Русский
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageBanner;
