import * as React from "react";
import logo from "../images/milliard-new.svg";
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
import LanguageBanner from "../components/language-banner";
import { useHomeContext } from "../context/home-provider";
import StickyContact from "../components/sticky-contact";
import Helmet from "react-helmet";

const HomePage = () => {
  const data = useHomeContext();
  const { t } = useTranslation();

  const shouldRenderLanguageBanner = React.useMemo(() => {
    if (typeof window !== "undefined") {
      return !window.localStorage.getItem("lang");
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Milliard</title>
      </Helmet>
      <MainLayout>
        <StickyContact />
        <Header>
          <Container>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Link to="/">
                <div>
                  <img className={"logo"} src={logo} alt="milliard-club" />
                </div>
              </Link>
              <Link to={"/contact"}>
                <Button variant={"outlined"}>{t("contact")}</Button>
              </Link>
            </Flex>
          </Container>
        </Header>
        <HomeIntro {...data?.main} />
        <About animated {...data?.about} />
        <BusinessTypes businessTypes={data?.businessTypes} />
        <ClubMembers members={data?.members} />
        <Projects projects={data?.images} />
        <Partners partners={data?.partners} />
        <Statistics tags={data?.tags} />
        <Contact />
        <Modal open={shouldRenderLanguageBanner}>
          <LanguageBanner />
        </Modal>
      </MainLayout>
    </>
  );
};

export default HomePage;
