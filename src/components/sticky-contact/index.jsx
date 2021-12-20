import React from "react";
import { useModal } from "../../hooks";
import ContactMemberForm from "../contact-member-form";
import Modal from "../modal";
import "./styles.scss";

const StickyContact = () => {
  const { open, onClose, onOpen } = useModal();
  return (
    <>
      <button className="sticky-contact-btn" onClick={onOpen}>
        Bo'glanish
      </button>
      <Modal onClose={onClose} open={open}>
        <ContactMemberForm onExitClick={onClose} />
      </Modal>
    </>
  );
};

export default StickyContact;
