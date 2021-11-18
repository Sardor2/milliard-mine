import * as React from "react";
import logo from "../images/logo-4x.png";
import MainLayout from "../layouts/main-layout";
import Header from "../components/header";
import Container from "../components/container";
import Flex from "../components/flex";
import Button from "../components/button";
import HomeIntro from "../sections/home-intro";
import "./index.scss";
import BusinessTypes from "../sections/business-types";
import { Link } from "gatsby";
import Contact from "../sections/contact";
import ClubMembers from "../sections/club-members";
import useHomePageData from "../services/use-home-page-data";
import PageSpinner from "../components/page-spinner";
import About from "../sections/about";
import Projects from "../sections/projects";
import Partners from "../sections/partners";
import { useTranslation } from "react-i18next";
import Statistics from "../sections/statistics";
import Modal from "../components/modal";
import AnimText from "../components/animText";

const HomePage = () => {
  const { loading, data } = useHomePageData();
  const { t, i18n } = useTranslation();

  const [modalOpen, setModalOpen] = React.useState(false);

  const handleClick = (e) => {
    i18n.changeLanguage(e.target.id);
    if (typeof window !== `undefined`) {
      window.location.reload();
    }
  };

  return (
    <PageSpinner loading={loading}>
      <MainLayout>
        <Header>
          <Container>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Link to="/">
                <div>
                  <img className={"logo"} src={logo} alt="" />
                </div>
              </Link>
              <Link to={"/contact"}>
                <Button variant={"outlined"}>{t("contact")}</Button>
              </Link>
            </Flex>
          </Container>
        </Header>
        <HomeIntro {...data?.main} />
        <About {...data?.about} />
        <BusinessTypes businessTypes={data?.businessTypes} />
        <ClubMembers members={data?.members} />
        <Projects projects={data?.images} />
        <Partners partners={data?.partners} />
        <Statistics tags={data?.tags} />
        <Contact />
        <button onClick={() => setModalOpen(true)} className="btn">
          Click me
        </button>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
          <div className="lang-modal">
            <AnimText title="CHoose language CHoose language CHoose language CHoose language CHoose language " />
            <div className="lang-teaser">
              <h3>Qaysi til sizga ma’qul?</h3>
              <div className="lang-select">
                <div onClick={handleClick} id="uz" className="lang-item">
                  O'zbek
                </div>
                <div onClick={handleClick} id="en" className="lang-item">
                  English
                </div>
                <div onClick={handleClick} id="ru" className="lang-item">
                  Русский
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </MainLayout>
    </PageSpinner>
  );
};

export default HomePage;
