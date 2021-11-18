import * as React from "react";
import "./styles.scss";
import logo from "../../images/logo-4x.png";
import facebook from "../../images/icons/Facebook.svg";
import instagram from "../../images/icons/Instagram.svg";
import twitter from "../../images/icons/Twitter.svg";
import youtube from "../../images/icons/Youtube.svg";
import Container from "../container";
import { Link } from "gatsby";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <Container maxWidth={"lg"}>
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between my-20">
          <Link to="/" className="block md:inline-block mb-20 md:mb-0">
            <img className={"logo"} src={logo} alt="" />
          </Link>
          <div className="flex max-w-3xl">
            <div className="mx-10 md:mx-20 lg:mx-40">
              <div className="font-bold text-4xl mb-5">{t("support")}</div>
              <div className="flex flex-col">
                <Link to="" className="mb-2">
                  {t("contact_us")}
                </Link>
                <Link to="" className="mb-2">
                  {t("about")}
                </Link>
                <Link to="" className="mb-2">
                  {t("club_members")}
                </Link>
              </div>
            </div>
            <div className="social">
              <div className="font-bold text-4xl mb-5">{t("social")}</div>
              <div className="social-links flex">
                <a className="mr-7" href="#facebook">
                  <img src={facebook} alt="facebook" />
                </a>
                <a className="mr-7" href="#instagram">
                  <img src={instagram} alt="instagram" />
                </a>
                <a className="mr-7" href="#twitter">
                  <img src={twitter} alt="twitter" />
                </a>
                <a className="mr-7" href="#youtube">
                  <img src={youtube} alt="yotube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
