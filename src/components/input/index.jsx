import React from "react";
import "./styles.scss";

const Input = () => {
  return (
    <div className="custom-input m-2 relative">
      <input type="text" placeholder=" " />
      <label className={"label"} htmlFor="">
        Label
      </label>
    </div>
  );
};

export default Input;
