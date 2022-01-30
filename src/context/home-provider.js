import React from "react";
import PageSpinner from "../components/page-spinner";
import useHomePageData from "../services/use-home-page-data";

const homePageCtx = React.createContext({});

const HomePageProvider = ({ children }) => {
  const { loading, data } = useHomePageData();

  return (
    <homePageCtx.Provider value={data}>
      <PageSpinner loading={loading}>{children}</PageSpinner>
    </homePageCtx.Provider>
  );
};

export const useHomeContext = () => {
  const context = React.useContext(homePageCtx);
  if (context === undefined) {
    throw new Error("useHomeContext must be used within a AuthProvider");
  }
  return context;
};

export default HomePageProvider;
