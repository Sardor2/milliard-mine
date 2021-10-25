import * as React from "react";

import Footer from "../../components/footer";
import Header from "../../components/header";
import Container from "../../components/container";
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
