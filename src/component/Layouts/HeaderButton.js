import { useContext } from 'react'
import CartContext from '../store/CartContext';
import classes from "./HeaderButton.module.css";
import CartIcon from "../Cart/CartIcon";
const HeaderButton = (props) => {
  const cartctx = useContext(CartContext)

  let quantity = cartctx.items.length

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.bump}>Your Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default HeaderButton;
