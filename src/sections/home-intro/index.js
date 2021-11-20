import React from "react";
import "./styles.scss";
// import logo from "../../images/banner_logo.png";
import play from "../../images/play.svg";
import Container from "../../components/container";
import Flex from "../../components/flex";
import ContactMemberForm from "../../components/contact-member-form";
import Modal from "../../components/modal";
import { useModal } from "../../hooks";
// import { useMembers } from "../../services/use-members";
// import Spinner from "../../components/spinner";
// import { useMain } from "../../services/use-main";

const HomeIntro = ({
  description = "",
  iframe = "",
  logo = "",
  logo_url = "",
  title = "",
}) => {
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
