import React, { useState, useEffect, useContext } from "react";

import CartContext from "../../../store/cart-context";

import CartIcon from "../../../assets/Icons/CartIcon";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  const cartCxt = useContext(CartContext);

  const [btnHighlighted, setBtnHighlighted] = useState(false);

  const { items } = cartCxt;

  const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHighlighted(true);

    const timer = setTimeout(() => {
      setBtnHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button onClick={cartCxt.onToggleCart} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{cartCxt.totalQuantity}</span>
    </button>
  );
};

export default HeaderCartButton;
