import React, { useContext } from "react";

import Header from "./components/Layout/Header/Header";
import MealsSummary from "./components/Meals/MealsSummary/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals/AvailableMeals";
import Cart from "./components/Cart/Cart";

import CartContext from "./store/cart-context";

function App() {
  const cartCxt = useContext(CartContext);

  return (
    <React.Fragment>
      {cartCxt.isVisible && <Cart />}
      <Header />
      <main>
        <MealsSummary />
        <AvailableMeals />
      </main>
    </React.Fragment>
  );
}

export default App;
