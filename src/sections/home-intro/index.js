import React from "react";
import "./styles.scss";
import play from "../../images/play.svg";
import Container from "../../components/container";
import Flex from "../../components/flex";
import Modal from "../../components/modal";
import { useModal } from "../../hooks";

const HomeIntro = ({ description = "", logo_url = "", title = "" }) => {
  const { open, onClose, onOpen } = useModal();

  return (
    <section role={"header"} className={"intro-section"} id={"home-intro"}>
      <Container className={"flex-center"}>
        <div className={"intro-section__wrapper"}>
          <div className="intro-section__wrapper__details">
            <h1>{title}</h1>
            <p>{description}</p>
            <Flex className={"footer"} alignItems={"center"}>
              <img
                src={play}
                alt="play"
                className="intro-section__wrapper__details__play-icon"
                onClick={onOpen}
              />
              <span className="intro-section__wrapper__details__line" />
              <p>DISCOVER</p>
              <Modal open={open} onClose={onClose}>
                <iframe
                  width="700"
                  style={{ maxWidth: "100vw", maxHeight: "100vh" }}
                  height="400"
                  src={"https://www.youtube.com/embed/vY09Lo4wRY8"}
                  allowFullScreen
                />
              </Modal>
            </Flex>
          </div>
          <div>
            <img className={"logo"} src={logo_url} alt="logo-milliard" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeIntro;
