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

const HomePage = () => {
  const { loading, data } = useHomePageData();
  console.log(data);
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
                <Button variant={"outlined"}>Contact</Button>
              </Link>
            </Flex>
          </Container>
        </Header>
        <HomeIntro />
        <About />
        <BusinessTypes />
        <ClubMembers />
        <Projects projects={data?.images} />
        <Partners partners={data?.partners} />
        <Contact />
      </MainLayout>
    </PageSpinner>
  );
};

export default HomePage;
