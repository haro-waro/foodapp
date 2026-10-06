import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState({}); 

  const addToCart = (key, item) => {
    setCart((prev) => ({ ...prev, [key]: { ...item, quantity: 1 } }));
  };

  const increaseQty = (key) => {
    setCart((prev) => ({
      ...prev,
      [key]: { ...prev[key], quantity: prev[key].quantity + 1 },
    }));
  };

  const decreaseQty = (key) => {
    setCart((prev) => {
      const newQty = prev[key].quantity - 1;
      if (newQty <= 0) {
        const updated = { ...prev };
        delete updated[key];
        return updated;
      }
      return { ...prev, [key]: { ...prev[key], quantity: newQty } };
    });
  };

  const removeFromCart = (key) => {
    setCart((prev) => {
      const updated = { ...prev };
      delete updated[key];
      return updated;
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increaseQty, decreaseQty, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}