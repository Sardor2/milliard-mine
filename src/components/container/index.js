import * as React from "react";

import "./styles.scss";

const Container = ({ children, className, maxWidth = "lg", ...props }) => (
  <div
    className={`container-wrapper container-wrapper-${maxWidth} ${className}`}
    style={props}
  >
    {children}
  </div>
);

export default Container;
