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
        <h2 className="text-left">Klub a'zolari</h2>
        <Swiper
          navigation={true}
          thumbs={{ swiper: currentMember }}
          className="mySwiper2"
          speed={700}
        >
          {MEMBERS.map((member) => (
            <SwiperSlide key={member.name}>
              <div className="current-member">
                <div className="current-member-img">
                  <img src={member.img} alt="club-member" />
                </div>

                <div className="current-member-details">
                  <h3>{member.name}</h3>
                  <p>{member.description}</p>

                  <div className="contacts-wrapper mt-9">
                    <Button variant="filled">Contact</Button>
                    <a href="#" className="website-link    font-poppins">
                      Go to the website
                    </a>

                    <div className="social-links flex mt-10">
                      <a className="mr-7" href="#facebook">
                        <img src={facebook} alt="facebook" />
                      </a>
                      <a className="mr-7" href="#instagram">
                        <img src={instagram} alt="instagram" />
                      </a>
                      <a className="mr-7" href="#twitter">
                        <img src={twitter} alt="twitter" />
                      </a>
                      <a className="mr-7" href="#youtube">
                        <img src={youtube} alt="yotube" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
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
