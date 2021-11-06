import spinnerSvg from "../../images/spinner.svg";
import React from "react";

const PageSpinner = ({ children, loading }) => {
  return loading ? (
    <div className="w-screen flex-center h-screen z-10 fixed flex-center">
      <img
        style={{ width: 100 }}
        src={spinnerSvg}
        className="loader"
        alt="spinner"
      />
    </div>
  ) : (
    children
  );
};

export default PageSpinner;
