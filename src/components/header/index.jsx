import * as React from "react";

const headerStyles = {
  padding: "20px 0 33px",
};

const Header = ({ className, children, ...otherProps }) => (
  <header style={{ ...headerStyles, ...otherProps }}>{children}</header>
);

export default Header;
