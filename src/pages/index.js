import * as React from "react";
import logo from "../images/logo.svg";
import MainLayout from "../layouts/main-layout";
import Header from "../components/header";
import Container from "../components/container";
import Flex from "../components/flex";
import Button from "../components/button";
import HomeIntro from "../sections/home-intro";
import "./index.scss";
import BusinessTypes from "../sections/business-types";
import { Link } from "gatsby";
import Footer from "../components/footer";
import Contact from "../sections/contact";
import ClubMembers from "../sections/club-members";

const HomePage = () => {
  return (
    <MainLayout>
      <Header>
        <Container>
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Link to="/">
              <img className={"logo"} src={logo} alt="" />
            </Link>
            <Link to={"/contact"}>
              <Button variant={"outlined"}>Contact</Button>
            </Link>
          </Flex>
        </Container>
      </Header>
      <HomeIntro />

      <ClubMembers />
      <BusinessTypes />
      <Contact />
    </MainLayout>
  );
};

export default HomePage;
