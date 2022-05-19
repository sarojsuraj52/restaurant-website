import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const addItemToCartHandler = (item) => {
    setItems([...items,item]);
  };
  const removeItemToCartHandler = (item) => {};

  const cartContextHelper = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContextHelper}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
