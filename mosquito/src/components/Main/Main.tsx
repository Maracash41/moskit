import React from "react";
import classes from "./main.module.css";
import Banner from "../Banner/Banner";
import Nets from "../Nets/Nets";
import NetTypes from "../NetTypes/NetTypes";

import furnituraImg from "./img/banner_furnitura.png";
import ramkiImg from "./img/banner_ramki.jpg";

const Main: React.FC = () => {
  return (
    <>
      <main className={classes.main}>
        <div className={classes.mainContent}>
          <Banner
            image={furnituraImg}
            altText={"фурнитура"}
            text={
              "У нас так же можно заменить фурнитуру, уплотнительные резинки и настроить окна"
            }
          />
          <div className={classes.container}>
            <Nets />
            <NetTypes />
            <Banner
              image={ramkiImg}
              altText={"Окраска рам сеток"}
              text={
                "Мы предлагаем 3 стандартных цвета, а так же можем окрасить в любой цвет "
              }
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
