import React, { useState } from "react";
import "./styles.scss";
import Input from "../input";
import Button from "../button";
import cross from "../../images/icons/cross.svg";
import useSubmitFeedback from "../../services/use-submit-feedback";
import { useTranslation } from "react-i18next";

const ContactMemberForm = ({ onExitClick = () => null, memberId }) => {
  const { t } = useTranslation();

  const [formValues, setFormValues] = useState({
    email: "",
    fullName: "",
    message: "",
  });

  const { mutate, loading } = useSubmitFeedback({
    onSuccess(res) {
      setFormValues({
        email: "",
        fullName: "",
        message: "",
      });
    },
  });

  const handleChange = (e) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    mutate({
      type: "member",
      full_name: formValues.fullName,
      email: formValues.email,
      member_id: memberId,
    });
  };

  return (
    <div className="contact-member-form-container">
      <button onClick={onExitClick} className="cross-icon">
        <img src={cross} alt="exit-button" />
      </button>
      <h2>{t("leave_email_for_contact")}</h2>

      <form onSubmit={onSubmit}>
        <div className="form-item">
          <Input
            value={formValues.fullName}
            onChange={handleChange}
            label="Name"
            name="fullName"
            required
          />
        </div>

        <div className="form-item">
          <Input
            value={formValues.email}
            onChange={handleChange}
            label="Email"
            name="email"
            type="email"
            required
          />
        </div>

        <Button loading={loading} variant="filled">
          {t("contact_me")}
        </Button>
      </form>

      <div className="footer">
        <span>{t("this_is_our_number")}:</span>
        <a href="tel:+998 55 500 20 22">+998 55 500 20 22</a>
      </div>
    </div>
  );
};

export default ContactMemberForm;
