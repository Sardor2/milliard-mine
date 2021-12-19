import "./src/styles/globals.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import { PortalDiv } from "./src/components/portal";
import React from "react";
import "./src/i18next";
import PageSpinner from "./src/components/page-spinner";
import "swiper/scss/effect-fade";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/thumbs";
import "swiper/scss/pagination";
import "animate.css";
import HomePageProvider from "./src/context/home-provider";

export const wrapRootElement = ({ element }) => (
  <React.Suspense fallback={<PageSpinner loading></PageSpinner>}>
    <PortalDiv />
    <HomePageProvider>{element}</HomePageProvider>
  </React.Suspense>
);
