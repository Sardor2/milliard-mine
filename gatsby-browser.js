import "./src/styles/globals.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import { PortalDiv } from "./src/components/portal";
import React from "react";

export const wrapRootElement = ({ element }) => (
  <>
    <PortalDiv /> {element}
  </>
);
