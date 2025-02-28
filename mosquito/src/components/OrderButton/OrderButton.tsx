import React from "react";
import classes from "./orderButton.module.css";
interface IOrderButton {
  clickBtn: () => void;
}

const OrderButton: React.FC<IOrderButton> = ({ clickBtn }) => {
  return (
    <button className={classes.orderBtn} onClick={clickBtn}>
      Заказать
    </button>
  );
};

export default OrderButton;
