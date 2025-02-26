import React from "react";
import classes from "./productCard.module.css";
import featuresImg1 from "../../assets/img/features_img_1.jpg";
import OrderButton from "../OrderButton/OrderButton";

const ProductCard: React.FC = () => {
  return (
    <div className={classes.productCard}>
      <div className={classes.productCardContent}>
        <div className={classes.productCardFeatures}>
          <div className={classes.productCardFeaturesImgContainer}>
            <img
              src={featuresImg1}
              className={classes.productCardFeaturesImg}
              alt="картинка товара 1"
            />
          </div>
          <ul className={classes.productCardFeaturesList}>
            <li className={classes.productCardFeaturesItem}>Простой уход</li>
            <li className={classes.productCardFeaturesItem}>Надёжность</li>
            <li className={classes.productCardFeaturesItem}>
              Усиленный профиль
            </li>
            <li className={classes.productCardFeaturesItem}>
              Защищён от кражи
            </li>
          </ul>
        </div>
        <h3 className={classes.productCardHeading}>АнтиВандал</h3>
        <p className={classes.productCardText}>
          Сочетает в себе все преимущества стандартной сетки, но имеет усиленные
          антивандальные крепления. Идеальный вариант для 1ых этажей
        </p>
        <div className={classes.productCardBottom}>
          <div className={classes.productCardPriceContainer}>
            <p className={classes.productCardPriceHeading}>Стоимость:</p>
            <p className={classes.productCardPriceCost}>от 500 руб м2</p>
          </div>
          <OrderButton />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
