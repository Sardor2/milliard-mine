import * as React from "react";

const Flex = ({
  children,
  justifyContent = "normal",
  alignItems = "normal",
  className,
  ...props
}) => (
  <div
    className={className}
    style={{ display: "flex", justifyContent, alignItems, ...props }}
  >
    {children}
  </div>
);
export default Flex;
