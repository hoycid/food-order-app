import React from "react";

import MealItem from "./MealItem";

import Card from "../../UI/Card/Card";

import classes from "./AvailableMeals.module.css";

import { DUMMY_MEALS } from "../../../resources/dummy-meals";

const AvailableMeals = () => {
  return (
    <Card className={classes.meals}>
      <ul>
        {DUMMY_MEALS.map(meal => {
          return (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default AvailableMeals;
