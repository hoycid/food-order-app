import React, { useRef } from "react";

import Input from "../../UI/Input/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = props => {
  const inputRef = useRef();

  const onSubmitHandler = event => {
    event.preventDefault();

    const enteredAmountNumber = +inputRef.current.value;
    props.onSubmit(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
