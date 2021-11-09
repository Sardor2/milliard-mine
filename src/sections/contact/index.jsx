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

const Contact = () => {
  const { loading, mutate } = useSubmitFeedback({
    onSuccess(res) {
      setFormValues({ email: "", fullName: "", message: "" });
    },
  });

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
    <section className="p-10 lg:p-20 pt-24 contact-section  " id={"contact"}>
      <div className="contact-box">
        <h2>Investitsiya kiritish yoki investor bo’lish!</h2>
        <form
          onSubmit={handleSubmit}
          className="flex justify-between flex-wrap mt-20"
        >
          <div className="flex flex-col inputs-wrapper  lg:w-7/12 lg:max-w-2xl">
            <h4>Xabaringizni quyida qoldiring!</h4>
            <div className="mb-9">
              <Input
                onChange={handleChange}
                value={formValues.fullName}
                name="fullName"
                label="Name"
                type="text"
                required
              />
            </div>
            <div className="mb-9">
              <Input
                onChange={handleChange}
                value={formValues.email}
                name="email"
                label="Email"
                type="email"
                required
              />
            </div>
            <div className="mb-9">
              <TextArea
                onChange={handleChange}
                value={formValues.message}
                name={"message"}
                label={"Your message"}
                required
              />
            </div>
            <Button loading={loading} variant="filled">
              Send
            </Button>
          </div>
          <div className="flex flex-col pt-16 lg:w-5/12  lg:ml-10">
            <div className="address-box flex flex-col lg:pl-8">
              <address>
                Toshkent shahar, qayerdir kocha 17 Nimadirni ro’parasida
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
