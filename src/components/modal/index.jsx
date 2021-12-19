import React from "react";
import "./styles.scss";
import Portal from "../portal";

const Modal = ({ children, open, onClose = () => null }) => {
  React.useEffect(() => {
    if (window) {
      var evt = window?.addEventListener("keydown", (evt) => {
        evt.stopPropagation();
        if (evt.code === "Escape") {
          onClose();
        }
      });
    }

    return () => {
      if (window) {
        window?.removeEventListener("keydown", evt);
      }
    };
  }, []);
  return open ? (
    <Portal>
      <div onClick={onClose} className="backdrop animate__fade-in">
        <div onClick={(e) => e.stopPropagation()} id="modal-content">
          {children}
        </div>
      </div>
    </Portal>
  ) : null;
};

export default Modal;
