import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  return (
    <li className={classes.container}>
      <div>
        <h4>{props.name}</h4>
        <i>{props.description}</i>
        <div className={classes.redText}>
          {`$${props.price.toFixed(2)}`}
        </div>
      </div>
      <div>
        <MealItemForm id={props.id} item={props} />
      </div>
    </li>
  );
};
export default MealItem;
