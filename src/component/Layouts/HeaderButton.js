import { useContext } from 'react'
import CartContext from '../store/CartContext';
import classes from "./HeaderButton.module.css";
import CartIcon from "../Cart/CartIcon";
const HeaderButton = (props) => {
  const cartctx = useContext(CartContext)

  let quantity = 0;
  cartctx.items.map(item=>{
    return quantity += Number(item.quantity)
  })


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
