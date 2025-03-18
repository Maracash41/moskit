import React, { useRef, useState } from "react";
import classes from "./modal.module.css";
import { useModal } from "../utils/ModalProvider";

const Modal = () => {
  const { isOpenModal, closeModal, phoneNumber, handlePhoneNumberChange } =
    useModal();

  const [error, setError] = useState("");
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!phoneNumber) {
      setError("*Введите номер телефона!");
      return;
    }
    const phoneRegex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setError("Неверный формат номера телефона.");
      return;
    }
    close();
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      close();
    }
  };

  const close = () => {
    setError("");
    closeModal();
  };

  return isOpenModal ? (
    <div className={classes.modal} onClick={handleOutsideClick}>
      <div className={classes.modalContent} ref={modalRef}>
        <form className={classes.formPhone} onSubmit={handleSubmit}>
          <input
            type="tel"
            className={classes.numberField}
            value={phoneNumber}
            placeholder="+7-999-99-99"
            onChange={(e) => handlePhoneNumberChange(e.target.value)}
          />

          <button type="submit" className={classes.formPhoneSubmitBtn}>
            Отправить
          </button>
        </form>
        {error && <p className={classes.errorPhoneMsg}>{error}</p>}
        <button onClick={close} className={classes.closeBtn}>
          закрыть
        </button>
      </div>
    </div>
  ) : null;
};

export default Modal;
