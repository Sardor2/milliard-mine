import * as React from "react";

const Flex = ({
  children,
  justifyContent = "normal",
  alignItems = "normal",
  ...props
}) => (
  <div style={{ display: "flex", justifyContent, alignItems }} {...props}>
    {children}
  </div>
);
export default Flex;
