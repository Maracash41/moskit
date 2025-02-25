import React from "react";
import classes from "./header.module.css";
import logo from "../../assets/logo.svg";
import tgIcon from "../../assets/tg_icon.svg";
import whatsappIcon from "../../assets/whatsapp_icon.svg";

const Header: React.FC = () => {
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
                    АнтиПад.рф
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
                    <a href="tel:+79999999999" className={classes.phoneLink}>
                      +7 (999) 999-99-99
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
                <button className={classes.orderBtn}>Заказать</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
