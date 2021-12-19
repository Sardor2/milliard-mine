import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./styles.scss";
import SwiperCore, { Navigation, Thumbs, EffectFade, Keyboard } from "swiper";
import Container from "../../components/container";
import clubMember from "../../images/club-members/club-member-1.png";
import circlesSvg from "../../images/circles.svg";
import ClubMember from "./club-member";
import AnimText from "../../components/animText";
import { useTranslation } from "react-i18next";

SwiperCore.use([Navigation, Thumbs, EffectFade, Keyboard]);

const ClubMembers = ({ members }) => {
  const [currentMember, setCurrentMember] = React.useState(null);

  // console.log(members, "members");
  const { t } = useTranslation();

  return (
    <section id="club-members" className="club-members">
      <AnimText
        title="CLub members - community - Give million - get billion - give million -
          get billion"
      />
      <Container maxWidth={"md"}>
        <h2 className="text-left">{t("club_members")}</h2>
        <Swiper
          navigation={true}
          thumbs={{ swiper: currentMember }}
          className="mySwiper2"
          speed={700}
          effect={"fade"}
          keyboard={{
            enabled: true,
          }}
          fadeEffect={{
            crossFade: true,
          }}
        >
          {members &&
            members?.map((member) => (
              <SwiperSlide key={member.name}>
                <ClubMember
                  name={member.title}
                  img={member.logo_url}
                  description={member.description}
                  website={member.website}
                  socials={member.socials}
                  {...member}
                />
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
            {members?.map((member) => (
              <SwiperSlide className="bottom-slider" key={member.title}>
                <div className={"each-member"}>
                  <img
                    className="filter grayscale"
                    src={member.logo_url}
                    alt={member.title}
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
