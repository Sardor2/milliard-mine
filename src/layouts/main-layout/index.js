import * as React from "react";

import Footer from "../../components/footer";

import GlobalWrapper from "../../components/global-wrapper";

const MainLayout = ({ children }) => {
  return (
    <GlobalWrapper>
      {children}
      <Footer />
    </GlobalWrapper>
  );
};

export default MainLayout;
