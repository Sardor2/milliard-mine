import React from "react";
import "./styles.scss";
import logo from "../../images/logo.svg";
import play from "../../images/play.svg";
import Container from "../../components/container";
import Flex from "../../components/flex";
// import { useMembers } from "../../services/use-members";
// import Spinner from "../../components/spinner";
// import { useMain } from "../../services/use-main";

const HomeIntro = () => {
  return (
    <section
      role={"header"}
      className="intro-section min-h-screen"
      id={"home-intro"}
    >
      <Container maxWidth={"md"} className={"flex-center"}>
        <div className={"intro-section__wrapper "}>
          <div className="intro-section__wrapper__details">
            <h1 className={"mt-12"}>MILLIARD BUSINESS CLUB</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
              in et, lectus sit lorem id integer.
            </p>
            <Flex className={"footer"} alignItems={"center"}>
              <img
                src={play}
                alt="play"
                className="intro-section__wrapper__details__play-icon"
              />
              <span className="intro-section__wrapper__details__line" />
              <p>DISCOVER</p>
            </Flex>
          </div>
          <img className={"logo"} src={logo} alt="logo-milliard" />
        </div>
      </Container>
    </section>
  );
};

export default HomeIntro;
