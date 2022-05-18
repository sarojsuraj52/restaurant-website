import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <>
        <li>
          <h4>{meal.name}</h4>
        </li>
        <li>
          <i>{meal.description}</i>
        </li>
        <li>
          <span className={classes.redText}>{`$${meal.price}`}</span>
        </li>
        <hr />
      </>
    );
  });
  return (
    <section className={classes.meals}>
      <Card className={classes.card}>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
