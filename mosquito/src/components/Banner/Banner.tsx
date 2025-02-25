import React from "react";
import classes from "./banner.module.css";
import bannerImg from "../../assets/banner_img.png";

const Banner: React.FC = () => {
  return (
    <div className={classes.banner}>
      <div className={classes.container}>
        <div className={classes.bannerContent}>
          <div className={classes.bannerText}>
            У нас так же можно заменить фурнитуру, уплотнительные резинки и
            настроить окна
          </div>
          <div className={classes.bannerImageContainer}>
            <img src={bannerImg} alt="баннер рисунок" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
