import React from "react";
import "./styles.scss";
import logo from "../../images/logo-full.svg";
import play from "../../images/play.svg";
import Container from "../../components/container";
import Flex from "../../components/flex";

const HomeIntro = () => {
  return (
    <section role={"header"} className={"intro-section"} id={"home-intro"}>
      <Container className={"flex-center"}>
        <div className={"intro-section__wrapper"}>
          <div className="intro-section__wrapper__details">
            <h1>MILLIARD BUSINESS CLUB</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              corporis culpa delectus deserunt eaque excepturi fuga fugiat,
              harum ipsfsadf
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
