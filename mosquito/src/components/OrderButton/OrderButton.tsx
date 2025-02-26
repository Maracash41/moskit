import React from "react";
import classes from "./orderButton.module.css";

const OrderButton: React.FC = () => {
  return <button className={classes.orderBtn}>Заказать</button>;
};

export default OrderButton;
