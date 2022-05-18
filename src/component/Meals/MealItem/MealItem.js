import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  return (
    <li className={classes.container}>
      <div>
        <h4>{props.meal.name}</h4>
        <i>{props.meal.description}</i>
        <div className={classes.redText}>
          {`$${props.meal.price.toFixed(2)}`}
        </div>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
};
export default MealItem;
