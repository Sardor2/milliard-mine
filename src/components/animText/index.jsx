import React from "react";
import "./animText.scss";

const AnimText = ({ title }) => {
  return (
    <div className="animText">
      <div className="animTextLine">{title}</div>
      <div className="animTextLine">{title}</div>
    </div>
  );
};

export default AnimText;
