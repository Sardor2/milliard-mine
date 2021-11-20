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
import LanguageBanner from "../components/language-banner";
import { useModal } from "../hooks";

const HomePage = () => {
  const { loading, data } = useHomePageData();
  const { t } = useTranslation();

  const shouldRenderLanguageBanner = React.useMemo(
    () => (localStorage.getItem("lang") ? false : true),
    []
  );

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
        <Modal open={shouldRenderLanguageBanner}>
          <LanguageBanner />
        </Modal>
      </MainLayout>
    </PageSpinner>
  );
};

export default HomePage;
