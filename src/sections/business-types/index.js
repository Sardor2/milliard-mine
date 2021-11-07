import React from "react";
import "./styles.scss";
import Container from "../../components/container";
import Flex from "../../components/flex";
import BusinessCard from "../../components/business-card";
import wallet from "../../images/wallet.svg";
import swap from "../../images/swap.svg";
import { Swiper, SwiperSlide } from "swiper/react";

import "./styles.scss";

import SwiperCore, { Navigation, Pagination } from "swiper";

import "swiper/scss/pagination";

SwiperCore.use([Navigation, Pagination]);

const BusinessTypes = () => {
  return (
    <section className={"business-types"} id={"business-types"}>
      <h2>Business turlari</h2>
      <Swiper
        navigation={true}
        pagination={{
          type: "progressbar",
        }}
        className="business-swiper"
        breakpoints={{
          320: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          968: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
      >
        {Array(10)
          .fill(1)
          .map((item, i) => (
            <SwiperSlide>
              <BusinessCard key={i} img={swap} name={"Savdo sotiq"} />
            </SwiperSlide>
          ))}
        <div className="left-blur"></div>
        <div className="right-blur"></div>
      </Swiper>
    </section>
  );
};

export default BusinessTypes;
