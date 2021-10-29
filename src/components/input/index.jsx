import React from "react";
import "./styles.scss";

const Input = ({ label = "Label", placeholder = " ", ...props }) => {
  return (
    <div className="custom-input relative inline-block">
      <input {...props} placeholder={placeholder} />
      <label className={"label"} htmlFor={props.id}>
        {label}
      </label>
      <fieldset className="border" />
    </div>
  );
};

export default Input;
