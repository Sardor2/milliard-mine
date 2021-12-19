import React from "react";
import "./gallery-styles.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss/effect-coverflow";

import SwiperCore, { Navigation, EffectCoverflow } from "swiper";
import cross from "../../images/icons/cross.svg";

SwiperCore.use([EffectCoverflow, Navigation]);

const Gallery = ({
  projects = [],
  onClose = () => null,
  currentSlide,
  // setSwiper = () => null,
  // swiper = {},
}) => {
  const [swiper, setSwiper] = React.useState();
  React.useEffect(() => {
    if (swiper) {
      swiper.slideTo(currentSlide);
    }
  });

  return (
    <div className={"images-gallery"}>
      <button onClick={onClose} className="close-btn">
        <img src={cross} alt="exit-button" />
      </button>
      <Swiper
        effect={"coverflow"}
        onSwiper={setSwiper}
        navigation={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className="mySwiper"
      >
        {projects?.map((project) => (
          <SwiperSlide key={project.image_url + project.title}>
            <img src={project.image_url} alt={project.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
