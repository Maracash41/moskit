import classes from "./orderButton.module.css";
import { useModal } from "../utils/ModalProvider";

const OrderButton = () => {
  const { openModal } = useModal();
  return (
    <button className={classes.orderBtn} onClick={openModal}>
      Заказать
    </button>
  );
};

export default OrderButton;
