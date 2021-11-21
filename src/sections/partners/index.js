import React from "react";
import Container from "../../components/container";
import "./styles.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Pagination } from "swiper";

import "swiper/scss/navigation";
import { PARTNERS } from "../../constants";
import { useTranslation } from "react-i18next";

SwiperCore.use([Navigation]);

const Partners = ({ partners }) => {
  console.log(partners, "partners");
  const { t } = useTranslation();
  return (
    <section id="partners" className="partners">
      <Container>
        <h2 className="text-center">{t("partners")}</h2>
        <h3>We have been working with some Fortune 500 clients</h3>

        {/*<div className="cards mt-20 flex justify-center"></div>*/}
        <Swiper
          navigation={true}
          // pagination={{
          //   type: "progressbar",
          // }}
          className="partners-swiper"
          breakpoints={{
            320: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            968: {
              slidesPerView: 5,
              spaceBetween: 24,
            },
          }}
        >
          {partners?.map((item, index) => (
            <SwiperSlide key={index}>
              <a style={{ display: "block" }} href={item.url} target="_blank">
                <div className="box flex-center">
                  <div className="image">
                    <img src={item.logo_url} alt={item.name} />
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Partners;
