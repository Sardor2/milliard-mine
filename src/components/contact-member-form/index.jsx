import React from "react";
import "./styles.scss";
import Input from "../input";
import Button from "../button";
import cross from "../../images/icons/cross.svg";

const ContactMemberForm = ({ onExitClick = () => null }) => {
  return (
    <div className="contact-member-form-container">
      <button onClick={onExitClick} className="cross-icon">
        <img src={cross} alt="exit-button" />
      </button>
      <h2>Bog’lanish uchun raqam qoldiring</h2>

      <form action="">
        <div className="form-item">
          <Input label="Name" name="name" />
        </div>

        <div className="form-item">
          <Input label="Email" name="email" />
        </div>

        <Button variant="filled">Contact me</Button>
      </form>

      <div className="footer">
        <span>yoki ushbu raqamimiz:</span>
        <a href="tel:+998 55 500 20 22">+998 55 500 20 22</a>
      </div>
    </div>
  );
};

export default ContactMemberForm;
