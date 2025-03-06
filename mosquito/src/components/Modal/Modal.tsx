import React from "react";
import classes from "./modal.module.css";

interface IModal {
  modalIsOpen: boolean;
  closeModal: () => void;
}

const Modal: React.FC<IModal> = ({ modalIsOpen, closeModal }) => {
  return modalIsOpen ? (
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <div className={classes.numberContainer}>
          <label className={classes.numberLabel}>
            Ваш телефон
            <input type="phone" className={classes.numberField} />
          </label>
        </div>
      </div>
      <button onClick={closeModal}>Закрыть</button>
    </div>
  ) : null;
};

export default Modal;
