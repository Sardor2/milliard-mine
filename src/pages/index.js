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
import Contact from "../sections/contact";
import { Link } from "gatsby";

const HomePage = () => {
  return (
    <MainLayout>
      <Header>
        <Container>
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <img className={"logo"} src={logo} alt="milliard-club" />
            <Link to={"/about"}>About</Link>
            <Button variant={"outlined"}>Contact</Button>
          </Flex>
        </Container>
      </Header>
      <HomeIntro />
      <BusinessTypes />
      <Contact />
    </MainLayout>
  );
};

export default HomePage;
