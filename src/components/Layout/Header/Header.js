import React from "react";

import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";
import image from "../../../assets/Images/meals.jpg";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={image} alt="meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;
