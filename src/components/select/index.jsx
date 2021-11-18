import React from "react";
import "./styles.scss";

const Select = ({ children, className, ...props }) => {
  return (
    <div className={`custom-select ${className}`}>
      <select {...props}>{children}</select>
      <div className="border"></div>
    </div>
  );
};

export default Select;
