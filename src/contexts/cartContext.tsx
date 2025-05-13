"use client"
import { createContext, ReactNode, useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

interface CartContextType {
  cartItems: Product[],
  handleAddItem: (item: Product) => void;
  handleRemoveItem: (id: string) => void;
  getTotal: () => string;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<Product[]>([])

  function handleAddItem(newItem: Product) {
    if (cartItems.find(item => item.id === newItem.id)) {
      return;
    }

    setCartItems(state => [...state, newItem])
  }

  function handleRemoveItem(id: String) {
    if (!cartItems.find(item => item.id === id)) {
      return;
    }

    setCartItems(state => {
      state = state.filter(item => item.id !== id)

      return state
    })
  }

  function getTotal() {
    const totalNumber = cartItems.reduce((acc, curr) => {
      acc += curr.price
      return acc
    }, 0)

    const totalFormatted = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(totalNumber);

    return totalFormatted;
  }

  return (
    <CartContext.Provider value={{ cartItems, handleAddItem, handleRemoveItem, getTotal }}>
      {children}
    </CartContext.Provider>
  )
}