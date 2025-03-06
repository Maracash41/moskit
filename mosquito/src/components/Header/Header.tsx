import React, { useState } from "react";
import classes from "./header.module.css";
import logo from "./img/logo.svg";
import tgIcon from "./img/tg_icon.svg";
import whatsappIcon from "./img/whatsapp_icon.svg";
import OrderButton from "../OrderButton/OrderButton";
import Modal from "../Modal/Modal";

const Header: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const switchModal = () => {
    setModalIsOpen((current) => !current);
  };
  return (
    <>
      <header className={classes.header}>
        <div className={classes.headerContent}>
          <div className={classes.headerTop}>
            <div className={classes.container}>
              <div className={classes.headerTopContent}>
                <div className={classes.headerLogo}>
                  <a href="/" className={classes.headerLogoLink}>
                    <img src={logo} className={classes.logoImg} alt="лого" />
                    <h1 className={classes.mainHeading}>АнтиПад.рф</h1>
                  </a>
                </div>
                <div className={classes.headerContacts}>
                  <p className={classes.contactsText}>Написать на в:</p>

                  <div className={classes.headerContactsMessengers}>
                    <a href="" className={classes.messengersLink}>
                      <img
                        src={tgIcon}
                        className={classes.messengersIcon}
                      ></img>
                    </a>
                    <a href="" className={classes.messengersLink}>
                      <img
                        src={whatsappIcon}
                        className={classes.messengersIcon}
                      ></img>
                    </a>
                  </div>
                  <div className={classes.headerContactsPhone}>
                    <a href="tel:+79219118317" className={classes.phoneLink}>
                      +7 (921) 911-83-17
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.headerBottom}>
            <div className={classes.container}>
              <div className={classes.headerBottomContent}>
                <nav className={classes.headerMenu}>
                  <ul className={classes.headerMenuList}>
                    <li className={classes.headerMenuItem}>
                      <a href="!#" className={classes.headerMenuLink}>
                        Виды сеток
                      </a>
                    </li>
                    <li className={classes.headerMenuItem}>
                      <a href="!#" className={classes.headerMenuLink}>
                        Типы полотен
                      </a>
                    </li>
                    <li className={classes.headerMenuItem}>
                      <a href="!#" className={classes.headerMenuLink}>
                        Наши работы
                      </a>
                    </li>
                  </ul>
                </nav>
                <OrderButton clickBtn={() => switchModal()} />
              </div>
            </div>
          </div>
        </div>
      </header>
      <Modal modalIsOpen={modalIsOpen} closeModal={switchModal} />
    </>
  );
};

export default Header;
