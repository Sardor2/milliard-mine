import React from "react";
import Container from "../../components/container";
import "./styles.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Pagination } from "swiper";

import "swiper/scss/navigation";
import { PARTNERS } from "../../constants";

SwiperCore.use([Navigation]);

const Partners = ({ partners }) => {
  // console.log(partners)
  return (
    <section id="partners" className="partners">
      <Container>
        <h2 className="text-center">Partners</h2>
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
              slidesPerView: 2,
              spaceBetween: 0,
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
          {PARTNERS.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="box flex-center">
                <div className="image">
                  <img src={item.img} alt={item.title} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Partners;
