import React from "react";
import Input from "../../components/input";
import "./styles.scss";

const Contact = () => {
  return (
    <section
      className="min-h-screen min-w-screenw-screen p-20   text-center"
      id={"contact"}
    >
      <h1>Contact us</h1>
      <Input />
      <Input />
      <Input />
    </section>
  );
};

export default Contact;
