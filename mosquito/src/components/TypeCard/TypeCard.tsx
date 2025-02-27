import React from "react";
import classes from "./typeCard.module.css";
import ProgressBar from "../ProgressBar/ProgressBar";

interface ITypeCard {
  name: string;
  image: string;
  size: string;
  description: string;
  characteristics: ICharacteristic[];
  cost: string;
}

interface ICharacteristic {
  name: string;
  value: number;
}

const TypeCard: React.FC<ITypeCard> = ({
  name,
  image,
  size,
  description,
  characteristics,
  cost,
}) => {
  return (
    <div className={classes.typeCard}>
      <div className={classes.typeCardContent}>
        <div className={classes.typeCardImgContainer}>
          <img src={image} alt={name} className={classes.typeCardImg} />
        </div>
        <h3 className={classes.typeCardHeading}>{name}</h3>
        <p className={classes.typeCardSize}>{`размер ячейки ${size}`}</p>
        <p className={classes.typeCardText}>{description}</p>
        <ul className={classes.typeCardCharacteristics}>
          {characteristics.map((characteristic, index) => {
            return (
              <li className={classes.typeCardCharacteristic} key={index}>
                <p className={classes.typeCardCharacteristicName}>
                  {`${characteristic.name} (${characteristic.value}%)`}
                </p>
                <ProgressBar value={characteristic.value} />
              </li>
            );
          })}
        </ul>
        <p>{cost}</p>
      </div>
    </div>
  );
};

export default TypeCard;
