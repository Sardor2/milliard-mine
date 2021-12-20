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
      <button className="sticky-contact-btn" onClick={onOpen}>
        {t("connect")}
      </button>
      <Modal onClose={onClose} open={open}>
        <ContactMemberForm onExitClick={onClose} />
      </Modal>
    </>
  );
};

export default StickyContact;
