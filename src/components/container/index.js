import * as React from "react";

import "./styles.scss";

const Container = ({ children, className, ...props }) => (
  <div className={`container-wrapper ${className}`} style={props}>
    {children}
  </div>
);

export default Container;
