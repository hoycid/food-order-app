import { useState, useReducer } from "react";

import CartContext from "./cart-context";

const getTotalQuantity = items => {
  const total = items.reduce((partialSum, item) => partialSum + item.amount, 0);
  return total;
};

const getTotalCost = items => {
  const total = items.reduce(
    (partialSum, item) => partialSum + item.price * item.amount,
    0
  );
  return total;
};

const cartReducer = (state, action) => {
  let newItems = state.items.map(item => item);

  if (action.type === "ADD_ITEM") {
    //check if item exist
    const existingItemIndex = newItems.findIndex(item => {
      return item.id === action.item.id;
    });

    if (existingItemIndex !== -1) {
      //if item exist add new amount to the existing amount
      newItems[existingItemIndex].amount =
        newItems[existingItemIndex].amount + action.item.amount;
    } else {
      //if item does not exist, add to top of items
      newItems = [action.item, ...state.items];
    }
    return {
      items: newItems,
      totalQuantity: getTotalQuantity(newItems),
      totalCost: getTotalCost(newItems),
    };
  }

  if (action.type === "DECREASE_AMOUNT") {
    const existingItemIndex = newItems.findIndex(item => {
      return item.id === action.itemID;
    });
    const itemAmount = newItems[existingItemIndex].amount;
    if (itemAmount > 1) {
      newItems[existingItemIndex].amount--;
    } else {
      //remove item from cart
      newItems = state.items.filter(item => {
        return item.id !== action.itemID;
      });
    }
    return {
      items: newItems,
      totalQuantity: getTotalQuantity(newItems),
      totalCost: getTotalCost(newItems),
    };
  }

  if (action.type === "CLEAR_CART") {
    newItems = [];
    return {
      items: newItems,
      totalQuantity: getTotalQuantity(newItems),
      totalCost: getTotalCost(newItems),
    };
  }

  return initialCartState;
};

const initialCartState = {
  items: [],
  totalQuantity: 0,
  totalCost: 0,
};

const CartProvider = props => {
  const [isVisible, setIsVisible] = useState(false);

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartState
  );

  const onAddToCartHandler = item => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };
  const onDecreaseAmountHandler = id => {
    dispatchCartAction({ type: "DECREASE_AMOUNT", itemID: id });
  };
  const onClearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR_CART" });
  };
  const onToggleCartHandler = () => {
    setIsVisible(!isVisible);
  };

  const cartContext = {
    items: cartState.items,
    totalQuantity: cartState.totalQuantity,
    totalCost: cartState.totalCost,
    isVisible: isVisible,
    onAddToCart: onAddToCartHandler,
    onDecrease: onDecreaseAmountHandler,
    onClear: onClearCartHandler,
    onToggleCart: onToggleCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
