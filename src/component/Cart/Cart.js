import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../store/CartContext";
import CartItems from "./CartItems";


const Cart = (props) => {
  const cartctx = useContext(CartContext);
  const totalAmount  = cartctx.totalAmount
  const hasItem = cartctx.items.length > 0
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartctx.items.map((item) => (
         <CartItems
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          description={item.description}
          quantity={item.quantity}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--close"]} onClick={props.onClose}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
