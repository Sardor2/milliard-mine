import React from "react";
import "./styles.scss";

const BusinessCard = ({ img, name, className }) => {
  return (
    <div className={`business-card ${className}`}>
      <img src={img} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default BusinessCard;
