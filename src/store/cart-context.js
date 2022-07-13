import { createContext } from "react";

const CartContext = createContext({
  items: [],
  totalQuantity: 0,
  totalCost: 0,
  isVisible: false,
  onAddToCart: item => {},
  onDecrease: id => {},
  onClear: () => {},
  onToggleCart: () => {},
});

export default CartContext;
