import React from "react";
import "./styles.scss";
import BusinessCard from "../../components/business-card";
import { Swiper, SwiperSlide } from "swiper/react";

import "./styles.scss";

import SwiperCore, { Navigation, Pagination } from "swiper";

import { useTranslation } from "react-i18next";
import { Link } from "gatsby";
import { useInView } from "react-intersection-observer";

SwiperCore.use([Navigation, Pagination]);

const BusinessTypes = ({ businessTypes }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const { t } = useTranslation();
  return (
    <section
      ref={ref}
      className={` ${
        inView ? "animate__animated animate__fadeIn" : ""
      } business-types animation-delay `}
      id={"business-types"}
    >
      <h2>{t("business_types")}</h2>
      <Swiper
        navigation={true}
        loop
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
