import classes from "./Summary.module.css";

const Summary = () => {
  return (
    <div className={classes.summary}>
      <h1>Delicious Food, Delivered to you</h1>
      <p>
        Choose your favourite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home
      </p>
      <p>
        All our meals are cooked with high quality ingredients, just-in-times and of course by experienced chefs!
      </p>
    </div>
  );
};
export default Summary;
