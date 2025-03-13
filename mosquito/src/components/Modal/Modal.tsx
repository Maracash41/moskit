import React, { useState } from "react";
import classes from "./modal.module.css";
import { useModal } from "../utils/ModalProvider";

const Modal = () => {
  const { isOpenModal, closeModal, phoneNumber, handlePhoneNumberChange } =
    useModal();

  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!phoneNumber) {
      setError("Введите номер телефона");
      return;
    }
    closeModal();
  };

  return isOpenModal ? (
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <div className={classes.numberContainer}>
          <form className={classes.formPhone} onSubmit={handleSubmit}>
            <label className={classes.numberLabel}>
              Ваш телефон
              <input
                type="tel"
                className={classes.numberField}
                value={phoneNumber}
                placeholder="Введите номер телефона"
                onChange={(e) => handlePhoneNumberChange(e.target.value)}
              />
            </label>
            {error && <p className={classes.errorPhoneMsg}>{error}</p>}
            <button type="submit" className={classes.formPhoneSubmitBtn}>
              Отправить
            </button>
          </form>
        </div>
      </div>
      <button onClick={closeModal}>Закрыть</button>
    </div>
  ) : null;
};

export default Modal;
