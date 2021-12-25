import React from "react";
import MainLayout from "../../layouts/main-layout";
import Header from "../../components/header";
import Container from "../../components/container";
import logo from "../../images/milliard-new.svg";
import Button from "../../components/button";
import { Link } from "gatsby";
import Flex from "../../components/flex";
import "./styles.scss";
import Contact from "../../sections/contact";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Milliard | Contact</title>
      </Helmet>
      <MainLayout>
        <Header>
          <Container maxWidth="lg">
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Link to="/">
                <img className="logo" src={logo} alt="" />
              </Link>
              <Link to="/">
                <Button variant={"outlined"}>{t("home")}</Button>
              </Link>
            </Flex>
          </Container>
        </Header>

        <div className="mt-20">
          <Contact renderAnimatedText />
        </div>
      </MainLayout>
    </>
  );
};

export default ContactPage;
