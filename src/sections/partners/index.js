import React from "react";
import Container from "../../components/container";
import "./styles.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Autoplay } from "swiper";

import "swiper/scss";
import "swiper/scss/navigation";
import { useTranslation } from "react-i18next";
import { PARTNERS } from "../../constants";
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
      <h3>We have been working with some Fortune 500 clients</h3>
      {/*<div className="cards mt-20 flex justify-center"></div>*/}
      <div className="swiper-container">
        <div onClick={handlePrev} className="control-btn-arrow  prev-btn">
          <PrevArrow />
        </div>

        <div onClick={handleNext} className="control-btn-arrow next-btn">
          <NextArrow />
        </div>

        <Container maxWidth="lg">
          <Swiper
            // pagination={{
            //   type: "progressbar",
            // }}
            onSwiper={setSwiper}
            loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 2,
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
      </div>
    </section>
  );
};

export default Partners;
