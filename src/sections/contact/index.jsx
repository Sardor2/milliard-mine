import React from "react";
import Input from "../../components/input";
import "./styles.scss";
import Button from "../../components/button";
import TextArea from "../../components/text-area";
import map from "../../images/map.png";
import youtube from "../../images/icons/Youtube.svg";
import instagram from "../../images/icons/Instagram.svg";
import facebook from "../../images/icons/Facebook.svg";
import twitter from "../../images/icons/Twitter.svg";

const Contact = () => {
  return (
    <section className="p-10 lg:p-20 pt-24 contact-section  " id={"contact"}>
      <div className="contact-box">
        <h2>Investitsiya kiritish yoki investor bo’lish!</h2>
        <form className="flex justify-between flex-wrap mt-20">
          <div className="flex flex-col lg:w-7/12 lg:max-w-2xl">
            <h4>Xabaringizni quyida qoldiring!</h4>
            <div className="mb-9">
              <Input label={"Name"} type={"text"} />
            </div>
            <div className="mb-9">
              <Input label={"Email"} type={"email"} />
            </div>
            <div className="mb-9">
              <TextArea label={"Your message"} />
            </div>
            <Button variant="filled">Send</Button>
          </div>
          <div className="flex flex-col pt-16 lg:w-5/12  lg:ml-10">
            <div className="address-box flex flex-col lg:pl-8">
              <address>
                Toshkent shahar, qayerdir kocha, 17 Nimadirni ro’parasida
              </address>
              <a className="phone" href="tel:+998 550 55 50">
                +998 550 55 50
              </a>
              <a href="tel">+998 550 55 50</a>

              <div className="socials">
                <a href="#" className="social-icon">
                  <img src={youtube} alt="youtube" />
                </a>
                <a href="#" className="social-icon">
                  <img src={instagram} alt="instagram" />
                </a>

                <a href="#" className="social-icon">
                  <img src={facebook} alt="facebook" />
                </a>
                <a href="#" className="social-icon">
                  <img src={twitter} alt="twitter" />
                </a>
              </div>
            </div>

            <div className="map-box">
              <img src={map} alt="" />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
