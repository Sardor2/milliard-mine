import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/thumbs";
import "./styles.scss";
import SwiperCore, { Navigation, FreeMode, Thumbs, Pagination } from "swiper";
import Container from "../../components/container";
import Button from "../../components/button";
import facebook from "../../images/icons/Facebook.svg";
import instagram from "../../images/icons/Instagram.svg";
import twitter from "../../images/icons/Twitter.svg";
import youtube from "../../images/icons/Youtube.svg";
import clubMember from "../../images/club-members/club-member-1.png";
// import bottomMember from "../../images/club-members/club-member-bottom-1.png";
import circlesSvg from "../../images/circles.svg";
import arrow from "../../images/arrow-right.svg";
import ContactMemberForm from "../../components/contact-member-form";
import Modal from "../../components/modal";
import { useModal } from "../../hooks";
import ClubMember from "./club-member";

const singleMember = {
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
  img: clubMember,
  name: "Entreprenuer-",
};

const MEMBERS = Array(20)
  .fill(singleMember)
  .map((item, index) => ({
    ...item,
    name: item.name + index,
    description: item.description + index,
  }));

SwiperCore.use([Navigation, Thumbs]);

const ClubMembers = ({ members }) => {
  const [currentMember, setCurrentMember] = React.useState(null);
  const { onClose, open, onOpen } = useModal();

  return (
    <section id="club-members" className="club-members">
      <div className="animText">
        <div className="animTextLine">
          CLub members - community - Give million - get billion - give million -
          get billion
        </div>
        <div className="animTextLine">
          CLub members - community - Give million - get billion - give million -
          get billion
        </div>
      </div>
      <Container maxWidth={"md"}>
        <h2 onClick={onOpen} className="text-left">
          Klub a'zolari
        </h2>
        <Swiper
          navigation={true}
          thumbs={{ swiper: currentMember }}
          className="mySwiper2"
          speed={700}
        >
          {MEMBERS.map((member) => (
            <SwiperSlide key={member.name}>
              <ClubMember {...member} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="members">
          <Swiper
            onSwiper={setCurrentMember}
            spaceBetween={10}
            watchSlidesProgress={true}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 3,
                spaceBetween: 2,
              },
              640: {
                slidesPerView: 7,
                spaceBetween: 5,
              },
            }}
          >
            {MEMBERS.map((member, index) => (
              <SwiperSlide key={member.name}>
                <div className={"each-member"}>
                  <img
                    className="filter grayscale"
                    src={member.img}
                    alt="member"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="overlay" />
        </div>
      </Container>
      <div className="circles">
        <img src={circlesSvg} alt="circles" />
      </div>
    </section>
  );
};

export default ClubMembers;
