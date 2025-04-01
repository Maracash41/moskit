import React, { useEffect, useRef, useState } from "react";
import classes from "./header.module.css";
import logo from "./img/logo.svg";
import tgIcon from "./img/tg_icon.svg";
import whatsappIcon from "./img/whatsapp_icon.svg";
import OrderButton from "../OrderButton/OrderButton";

const Header: React.FC = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement | null>(null);

  const toggleBurgerMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const outsideClickHandler = (e: MouseEvent) => {
    const target = e.target as HTMLElement;

    if (
      menuRef.current &&
      !menuRef.current.contains(target) &&
      !target.closest(`.${classes.burgerIcon}`)
    ) {
      setIsBurgerOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", outsideClickHandler);
    return () => {
      document.removeEventListener("mousedown", outsideClickHandler);
    };
  }, []);

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
                  <p className={classes.contactsText}>Написать нам в:</p>

                  <div className={classes.headerContactsMessengers}>
                    <a
                      href="https://t.me/+79219118311"
                      className={classes.messengersLink}
                    >
                      <img
                        src={tgIcon}
                        className={classes.messengersIcon}
                        alt="telegram"
                      ></img>
                    </a>
                    <a
                      href="https://wa.me/79219118317"
                      className={classes.messengersLink}
                    >
                      <img
                        src={whatsappIcon}
                        className={classes.messengersIcon}
                        alt="whatsapp"
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
                <div className={classes.burger}></div>
                <button
                  className={`${classes.burgerIcon} ${
                    isBurgerOpen ? classes.burgerIconActive : ""
                  }`}
                  onClick={toggleBurgerMenu}
                ></button>
                <nav
                  className={`${classes.headerMenu} ${
                    isBurgerOpen ? classes.headerMenuActive : ""
                  }`}
                >
                  <ul className={classes.headerMenuList} ref={menuRef}>
                    <li className={classes.headerMenuItem}>
                      <a href="#nets" className={classes.headerMenuLink}>
                        Виды сеток
                      </a>
                    </li>
                    <li className={classes.headerMenuItem}>
                      <a href="#netsTypes" className={classes.headerMenuLink}>
                        Типы полотен
                      </a>
                    </li>
                    <li className={classes.headerMenuItem}>
                      <a
                        href="#workExamples"
                        className={classes.headerMenuLink}
                      >
                        Наши работы
                      </a>
                    </li>
                  </ul>
                </nav>
                <OrderButton />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
