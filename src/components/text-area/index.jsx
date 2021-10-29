import React from "react";
import "./styles.scss";

const TextArea = ({ placeholder = " ", label, ...props }) => {
  return (
    <div className="custom-text-area relative inline-block">
      <textarea {...props} placeholder={placeholder} />
      <label className={"label"} htmlFor={props.id}>
        {label}
      </label>
      <fieldset className="border" />
    </div>
  );
};

export default TextArea;
