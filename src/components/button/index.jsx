import React from "react";
import spinnerSvg from "../../images/spinner-dark.svg";
import "./styles.scss";

const Button = ({
  children,
  variant = "outlined",
  loading = false,
  className = "",
  onClick = () => null,
}) => (
  <button
    className={`btn btn-${variant} ${
      loading ? "btn-loading" : ""
    } ${className}`}
    onClick={onClick}
  >
    {children}
    {loading && <img src={spinnerSvg} className="loader-img" alt="spinner" />}
  </button>
);

export default Button;
