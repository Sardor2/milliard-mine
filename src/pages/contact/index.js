import React from "react";
import MainLayout from "../../layouts/main-layout";
import Header from "../../components/header";
import Container from "../../components/container";
import logo from "../../images/logo.svg";
import Button from "../../components/button";
import { Link } from "gatsby";
import Flex from "../../components/flex";
import "./styles.scss";
import Contact from "../../sections/contact";

const ContactPage = () => {
  return (
    <MainLayout>
      <Header>
        <Container maxWidth="lg">
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Link to="/">
              <img className="logo" src={logo} alt="" />
            </Link>
            <Link to="/">
              <Button variant={"outlined"}>Home</Button>
            </Link>
          </Flex>
        </Container>
      </Header>

      <div className="mt-20">
        <Contact />
      </div>
    </MainLayout>
  );
};

export default ContactPage;
