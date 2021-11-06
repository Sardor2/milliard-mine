import React from "react";
import spinnerSvg from "../../images/spinner.svg";
import "./styles.scss";

const Spinner = ({
  children,
  loading,
  height = "100%",
  loaderSize = "10rem",
}) => {
  return loading ? (
    <div style={{ height }} className="w-full flex-center">
      <img
        style={{ width: loaderSize, height: loaderSize }}
        src={spinnerSvg}
        className="loader"
        alt="spinner"
      />
    </div>
  ) : (
    children
  );
};

export default Spinner;
