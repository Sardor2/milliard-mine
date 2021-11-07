import * as React from "react";
import "./styles.scss";
import logo from "../../images/logo-4x.png";
import facebook from "../../images/icons/Facebook.svg";
import instagram from "../../images/icons/Instagram.svg";
import twitter from "../../images/icons/Twitter.svg";
import youtube from "../../images/icons/Youtube.svg";
import Container from "../container";
import { Link } from "gatsby";

const Footer = () => (
  <footer>
    <Container maxWidth={"lg"}>
      <div className="flex justify-between my-20">
        <Link to="/">
          <img className={"logo"} src={logo} alt="" />
        </Link>
        <div className="flex max-w-3xl">
          <div className="mx-40">
            <div className="font-bold text-4xl mb-5">Support</div>
            <div className="flex flex-col">
              <Link to="" className="mb-2">
                Contact us
              </Link>
              <Link to="" className="mb-2">
                About
              </Link>
              <Link to="" className="mb-2">
                Club members
              </Link>
              <Link to="" className="mb-2">
                Charity
              </Link>
            </div>
          </div>
          <div className="social">
            <div className="font-bold text-4xl mb-5">Social</div>
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

export default Footer;
