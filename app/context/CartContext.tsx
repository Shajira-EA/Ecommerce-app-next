"use client";

import { createContext, useContext, useReducer } from "react";
import { cartReducer} from "./CartReducer";
import { CartContextType } from "./CartContextType";
import { CartItemType } from "./CartItemTypes";
import { ProductType } from "./ProductType";

export const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, [] as CartItemType[]);

  const addToCart = (product: ProductType) => {
    dispatch({ type: "ADD", payload: product });
  };
  const incrementCart = (id: number) => {
    console.log("added");
    dispatch({ type: "INCREMENT", payload: id });
  };
  const decrementCart = (id: number) => {
    dispatch({ type: "DECREMENT", payload: id });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR" })
  }

  return (
    <CartContext.Provider value = {{ cart, addToCart, incrementCart, decrementCart, clearCart }} >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
};
