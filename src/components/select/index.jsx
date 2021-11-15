import React from "react";
import "./styles.scss";
import arrow from "../../images/icons/arrow-down.svg";

const Select = ({ children, className, ...props }) => {
  return (
    <div className={`custom-select ${className}`}>
      <select {...props}>{children}</select>
      <div className="border"></div>
      <img src={arrow} alt="arrow" className="arrow" />
    </div>
  );
};

export default Select;
