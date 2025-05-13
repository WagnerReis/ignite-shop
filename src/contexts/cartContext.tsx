import { createContext, ReactNode, useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
}

interface CartContextType {
  cartItems: Product[],
  handleAddItem: (item: Product) => void;
  handleRemoveItem: (id: string) => void;
  getTotal: () => void;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<Product[]>([])

  function handleAddItem(newItem: Product) {
    if (cartItems.filter(item => item.id === newItem.id)) {
      return;
    }

    setCartItems(state => [...state, newItem])
  }

  function handleRemoveItem(id: String) {
    if (cartItems.filter(item => item.id === id)) {
      return;
    }

    setCartItems(state => {
      state = state.filter(item => item.id !== id)

      return state
    })
  }

  function getTotal() {
    return cartItems.reduce((acc, curr) => {
      acc += curr.price
      return acc
    }, 0)
  }

  return (
    <CartContext.Provider value={{ cartItems, handleAddItem, handleRemoveItem, getTotal }}>
      {children}
    </CartContext.Provider>
  )
}