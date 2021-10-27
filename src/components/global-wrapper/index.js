import React from "react";

const styles = {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
};

const GlobalWrapper = ({ children }) => {
  return <div style={styles}>{children}</div>;
};

export default GlobalWrapper;
