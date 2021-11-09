import React from "react";
import "./styles.scss";
import Portal from "../portal";

const Modal = ({ children, open, onClose = () => null }) => {
  return open ? (
    <Portal>
      <div onClick={onClose} className="backdrop">
        <div onClick={(e) => e.stopPropagation()} id="modal-content">
          {children}
        </div>
      </div>
    </Portal>
  ) : null;
};

export default Modal;
