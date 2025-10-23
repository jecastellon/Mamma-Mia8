import { createContext, useContext, useState, useMemo } from "react";
import { pizzaCart } from "../utils/pizzas";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(pizzaCart);

const addToCart = (pizza) => {
  setCart((prev) => {
    const exists = prev.find((p) => p.id === pizza.id);
    if (exists) {
      return prev.map((p) =>
        p.id === pizza.id ? { ...p, count: p.count + 1 } : p
      );
    }
    return [...prev, { ...pizza, count: 1 }];
  });
};


  const updateCount = (id, delta) => {
    setCart((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, count: Math.max(p.count + delta, 0) } : p
      )
    );
  };

  const total = useMemo(
    () => cart.reduce((acc, p) => acc + p.price * p.count, 0),
    [cart]
  );

  return (
    <CartContext.Provider value={{ cart, setCart, updateCount, addToCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
