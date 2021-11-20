import React from "react";
import AnimText from "../animText";
import "./styles.scss";
import { setLang } from "../../utils";

const LanguageBanner = () => {
  const handleClick = (e) => {
    setLang(e.target.id);
  };
  return (
    <div className="lang-modal">
      <AnimText title="CHoose language CHoose language CHoose language CHoose language CHoose language " />
      <div className="lang-teaser">
        <h3>Qaysi til sizga ma’qul?</h3>
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
