import React from "react";
import Container from "../../components/container";
import "./styles.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Autoplay } from "swiper";

import { useTranslation } from "react-i18next";
import PrevArrow from "../../components/icons/prev-arrow";
import NextArrow from "../../components/icons/next-arrow";

SwiperCore.use([Navigation, Autoplay]);

const Partners = ({ partners }) => {
  // console.log(partners, "partners");
  const { t } = useTranslation();
  const [swiper, setSwiper] = React.useState(null);

  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  return (
    <section id="partners" className="partners">
      <h2 className="text-center">{t("partners")}</h2>
      <h3>{t("partners_description")}</h3>
      <div className="swiper-container">
        <div onClick={handlePrev} className={`control-btn-arrow  prev-btn `}>
          <PrevArrow />
        </div>

        <div onClick={handleNext} className={`control-btn-arrow next-btn`}>
          <NextArrow />
        </div>

        <Container maxWidth="lg">
          <Swiper
            // pagination={{
            //   type: "progressbar",
            // }}
            onSwiper={setSwiper}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mySwiper"
            breakpoints={{
              400: {
                slidesPerView: 1,
                spaceBetween: 2,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 0,
                // width: 170,
              },
              700: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              937: {
                slidesPerView: 4,
                spaceBetween: 0,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 0,
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
      </div>
    </section>
  );
};

export default Partners;
