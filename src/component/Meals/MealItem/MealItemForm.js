import React, { useContext } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../store/CartContext";

const MealItemForm = (props) => {
  const cartctx = useContext(CartContext);
  const addToCart = (event) => {
    event.preventDefault();
    const quantity = document.getElementById("amount_" + props.id).value
    cartctx.addItem({...props.item,quantity});
  };

  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          type: "number",
          id: "amount_" + props.id,
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button onClick={addToCart}>+ Add</button>
    </form>
  );
};
export default MealItemForm;
