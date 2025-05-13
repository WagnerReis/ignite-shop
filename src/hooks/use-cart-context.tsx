import { CartContext } from "@/contexts/cartContext";
import { useContext } from "react";

export function useCartContext() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("Context not found")
  }

  return context
}