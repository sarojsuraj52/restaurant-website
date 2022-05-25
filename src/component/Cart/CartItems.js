import React, { useContext } from "react";
import CartContext from "../store/CartContext";
import classes from "./CartItems.module.css";

const CartItems = (props) => {
  const cartctx = useContext(CartContext);
  const addItemHandler = (event) => {
    event.preventDefault()
    const quantity = 1
    cartctx.addItem(props,quantity)
  };


  const removeItemHandler = (event) => {
    event.preventDefault()
    cartctx.removeItem(props)
  };
  return (
     <li  className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>${props.price}</span>
          <span className={classes.quantity}> x {props.quantity}</span>
        </div>
      </div>
      <div className={classes.action}>
        <button onClick={removeItemHandler}>−</button>
        <button onClick={addItemHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItems;
