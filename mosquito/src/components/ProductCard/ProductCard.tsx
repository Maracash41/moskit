import React from "react";
import classes from "./productCard.module.css";

import OrderButton from "../OrderButton/OrderButton";

interface IProductCard {
  image: string;
  name: string;
  description: string;
  price: string;
  features: string[];
}

const ProductCard: React.FC<IProductCard> = ({
  image,
  name,
  description,
  price,
  features,
}) => {
  return (
    <div className={classes.productCard}>
      <div className={classes.productCardContent}>
        <div className={classes.productCardFeatures}>
          <div className={classes.productCardFeaturesImgContainer}>
            <img
              src={image}
              className={classes.productCardFeaturesImg}
              alt={name}
            />
          </div>
          <ul className={classes.productCardFeaturesList}>
            {features.map((feature, index) => (
              <li key={index} className={classes.productCardFeaturesItem}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <h3 className={classes.productCardHeading}>{name}</h3>
        <p className={classes.productCardText}>{description}</p>
        <div className={classes.productCardBottom}>
          <div className={classes.productCardPriceContainer}>
            <p className={classes.productCardPriceHeading}>Стоимость:</p>
            <p className={classes.productCardPriceCost}>{price}</p>
          </div>
          <OrderButton />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
