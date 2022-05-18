

import classes from "./HeaderButton.module.css";
import CartIcon from "../Cart/CartIcon";
const HeaderButton = (props) => {


  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.bump}>Your Cart</span>
      <span className={classes.badge}>0</span>
    </button>
  );
};

export default HeaderButton;
