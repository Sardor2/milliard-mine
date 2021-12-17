import "./src/styles/globals.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import { PortalDiv } from "./src/components/portal";
import React from "react";
import "./src/i18next";
import "animate.css";
import PageSpinner from "./src/components/page-spinner";

export const wrapRootElement = ({ element }) => (
  <React.Suspense fallback={<PageSpinner loading></PageSpinner>}>
    <PortalDiv /> {element}
  </React.Suspense>
);
