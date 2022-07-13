import React, { useContext } from "react";

import ModalDim from "../UI/Modal/Modal";
import CartItem from "./CartItem";

import CartContext from "../../store/cart-context";

import classes from "./Cart.module.css";

const Cart = () => {
  const cartCxt = useContext(CartContext);

  const totalCost = `$${cartCxt.totalCost.toFixed(2)}`;

  const onDecreaseHandler = id => {
    cartCxt.onDecrease(id);
  };
  const onIncreaseHandler = item => {
    cartCxt.onAddToCart({ ...item, amount: 1 });
  };

  const onOrderHandler = () => {
    cartCxt.onClear();
    cartCxt.onToggleCart();
  };

  return (
    <ModalDim onClickDim={cartCxt.onToggleCart}>
      <ul className={classes["cart-items"]}>
        {cartCxt.items.map(item => {
          return (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              amount={item.amount}
              onDecrease={onDecreaseHandler.bind(null, item.id)}
              onIncrease={onIncreaseHandler.bind(null, item)}
            />
          );
        })}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalCost}</span>
      </div>
      <div className={classes.actions}>
        <button
          type="button"
          onClick={cartCxt.onToggleCart}
          className={classes["button--alt"]}
        >
          Close
        </button>
        <button
          onClick={onOrderHandler}
          type="button"
          className={classes.button}
        >
          Order
        </button>
      </div>
    </ModalDim>
  );
};

export default Cart;
