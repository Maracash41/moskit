import React from "react";
import classes from "./banner.module.css";

interface IBanner {
  image: string;
  altText: string;
  text: string;
}

const Banner: React.FC<IBanner> = ({ image, altText, text }) => {
  return (
    <section className={classes.banner}>
      <div className={classes.container}>
        <div className={classes.bannerContent}>
          <p className={classes.bannerText}>{text}</p>
          <div className={classes.bannerImageContainer}>
            <img src={image} alt={altText} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
