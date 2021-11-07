import React from "react";
import spinnerSvg from "../../images/spinner-dark.svg";
import "./styles.scss";

const Button = ({
  children,
  variant = "outlined",
  loading = false,
  className = "",
}) => (
  <button
    className={`btn btn-${variant} ${loading ? "loading" : ""} ${className}`}
  >
    {children}
    {loading && <img src={spinnerSvg} className="loader-img" alt="spinner" />}
  </button>
);

export default Button;
