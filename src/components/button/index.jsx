import * as React from "react";
import "./styles.scss";

const Button = ({ children, variant = "outlined", className = "" }) => (
  <button className={`btn btn-${variant} ${className}`}>{children}</button>
);

export default Button;
