import React, { useState } from "react";
import Input from "../../components/input";
import "./styles.scss";
import Button from "../../components/button";
import TextArea from "../../components/text-area";
import map from "../../images/map.png";
import youtube from "../../images/icons/Youtube.svg";
import instagram from "../../images/icons/Instagram.svg";
import facebook from "../../images/icons/Facebook.svg";
import twitter from "../../images/icons/Twitter.svg";
import useSubmitFeedback from "../../services/use-submit-feedback";
import { useTranslation } from "react-i18next";
import AnimText from "../../components/animText";
import { navigate } from "gatsby";

const Contact = ({ renderAnimatedText = false }) => {
  const { loading, mutate } = useSubmitFeedback({
    onSuccess(res) {
      setFormValues({ email: "", fullName: "", message: "" });
      navigate("/");
    },
  });

  const { t } = useTranslation();

  const [formValues, setFormValues] = useState({
    email: "",
    fullName: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({
      type: "feedback",
      full_name: formValues.fullName,
      message: formValues.message,
      email: formValues.email,
    });
  };

  return (
    <section
      className={`p-10 lg:p-20 pt-24 contact-section ${
        renderAnimatedText ? "with-anim-text" : ""
      }`}
      id={"contact"}
    >
      {renderAnimatedText && (
        <AnimText
          title={`${t("contact")} ${t("contact")} ${t("contact")} ${t(
            "contact"
          )} ${t("contact")}`}
        />
      )}
      <div className="contact-box">
        <h2 className="animate__fade-in">{t("leave_info_we_contact_you")}</h2>
        <form
          onSubmit={handleSubmit}
          className="flex justify-between flex-wrap mt-20 animate__fade-in"
        >
          <div className="flex flex-col inputs-wrapper sm:max-w-full sm:w-full  lg:w-7/12 lg:max-w-2xl">
            <h4>{t("leave_message")}</h4>
            <div className="mb-9">
              <Input
                onChange={handleChange}
                value={formValues.fullName}
                name="fullName"
                label={t("name")}
                type="text"
                required
              />
            </div>
            <div className="mb-9">
              <Input
                onChange={handleChange}
                value={formValues.email}
                name="email"
                label={t("email")}
                type="email"
                required
              />
            </div>
            <div className="mb-9">
              <TextArea
                onChange={handleChange}
                value={formValues.message}
                name={"message"}
                label={t("your_message")}
              />
            </div>
            <Button loading={loading} variant="filled">
              {t("send")}
            </Button>
          </div>
          <div className="flex flex-col pt-16 lg:w-5/12  lg:ml-10">
            <div className="address-box flex flex-col lg:pl-8">
              <address>{t("address")}</address>
              <a className="phone" href="tel:+998555002220">
                +998 (55) 500-22-20
              </a>

              <div className="socials">
                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UCUehHzRD5cp4yfnbCNeNg5Q"
                  className="social-icon"
                >
                  <img src={youtube} alt="youtube" />
                </a>
                <a
                  target={"_blank"}
                  href="https://www.instagram.com/alisherisae​​"
                  className="social-icon"
                >
                  <img src={instagram} alt="instagram" />
                </a>

                <a
                  target={"_blank"}
                  href="https://www.facebook.com/alisherisaevblogi/"
                  className="social-icon"
                >
                  <img src={facebook} alt="facebook" />
                </a>
                <a
                  href="https://t.me/AlisherIsaev_blogi​​"
                  target={"_blank"}
                  className="social-icon"
                >
                  <img src={twitter} alt="twitter" />
                </a>
              </div>
            </div>

            {/*<a*/}
            {/*  href="https://www.google.com/maps/place/Seoul+Plaza/@41.3047163,69.2830958,17.01z/data=!4m5!3m4!1s0x0:0xe31095572f95deef!8m2!3d41.3052132!4d69.2831898"*/}
            {/*  className="map-box"*/}
            {/*  target="_blank"*/}
            {/*>*/}
            {/*  <img src={map} alt="" />*/}
            {/*</a>*/}

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5994.320568192033!2d69.281424!3d41.3053766!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe31095572f95deef!2sSeoul%20Plaza!5e0!3m2!1sen!2s!4v1641562830939!5m2!1sen!2s"
              allowFullScreen
              loading="lazy"
              className={"map-box"}
            ></iframe>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
