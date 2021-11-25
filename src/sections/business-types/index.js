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
import { useTranslation } from "react-i18next";
import { Link } from "gatsby";

SwiperCore.use([Navigation, Pagination]);

const BusinessTypes = ({ businessTypes }) => {
  console.log(businessTypes, "hello");
  const { t } = useTranslation();
  return (
    <section className={"business-types"} id={"business-types"}>
      <h2>{t("business_types")}</h2>
      <Swiper
        navigation={true}
        pagination={{
          type: "progressbar",
        }}
        className="business-swiper"
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          968: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
      >
        {businessTypes?.map((item, i) => (
          <SwiperSlide key={item.id}>
            <Link to={`/businesses/${item?.slug}`}>
              <BusinessCard img={item.logo_url} name={item.title} />
            </Link>
          </SwiperSlide>
        ))}
        <div className="left-blur"></div>
        <div className="right-blur"></div>
      </Swiper>
    </section>
  );
};

export default BusinessTypes;
