import React from "react";
import "./styles.scss";
import play from "../../images/play.svg";
import Container from "../../components/container";
import Flex from "../../components/flex";
import Modal from "../../components/modal";
import { useModal } from "../../hooks";
import {useTranslation} from "react-i18next";

const HomeIntro = ({ description = "", logo_url = "", title = "" }) => {
  const { open, onClose, onOpen } = useModal();
  const {t }  = useTranslation()

  return (
    <section role={"header"} className={"intro-section"} id={"home-intro"}>

      <Container className={"flex-center"}>
        <div className={"intro-section__wrapper animate__fade-in"}>
          <div className="intro-section__wrapper__details animate__animated animate__fadeIn">
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
              <p style={{textTransform: 'uppercase'}}>{t('discover')}</p>
              <Modal open={open} onClose={onClose}>
                <iframe
                  width="700"
                  style={{ maxWidth: "100vw", maxHeight: "100vh" }}
                  height="400"
                  src={"https://www.youtube.com/embed/vY09Lo4wRY8"}
                  allowFullScreen
                  className="home-intro-video-player"
                />
              </Modal>
            </Flex>
          </div>
          <div className=" animate__animated animate__fadeIn ">
            <img className={"logo"} src={logo_url} alt="logo-milliard" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeIntro;
