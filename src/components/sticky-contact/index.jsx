import React from "react";
import { useTranslation } from "react-i18next";
import { useModal } from "../../hooks";
import ContactMemberForm from "../contact-member-form";
import Modal from "../modal";
import "./styles.scss";

const StickyContact = () => {
  const { open, onClose, onOpen } = useModal();
  const { t } = useTranslation();
  return (
    <>
      <a className="sticky-contact-btn" href="#contact">
        {t("connect")}
      </a>
      {/* <Modal onClose={onClose} open={open}>
        <ContactMemberForm onExitClick={onClose} />
      </Modal> */}
    </>
  );
};

export default StickyContact;
