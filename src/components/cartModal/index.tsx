import { X } from "phosphor-react";
import { createPortal } from "react-dom";
import { CartContent, CartItemsContainer, ModalContainer, Overlay, Summary } from "./styles";
import { CartItem } from "../cartItem";
import { useCartContext } from "@/hooks/use-cart-context";
import { useState } from "react";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const { cartItems, getTotal } = useCartContext();
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

  const total = getTotal()

  if (!isOpen) return null;

  async function handleCreateCheckoutSession() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          priceIds: cartItems.map(item => item.defaultPriceId)
        })
      })

      const { checkoutUrl } = await response.json();

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false)
      console.error(err)
      alert("Erro ao criar checkout")
    }
  }



  return createPortal(
    <div>
      {(isOpen && cartItems.length > 0) && <Overlay />}

      {(isOpen && cartItems.length > 0) && (
        <ModalContainer>
          <X size={24} onClick={onClose} />

          <CartContent>
            <h1>Sacola de compras</h1>

            <CartItemsContainer>
              {cartItems.map(item => {
                return (
                  <CartItem key={item.id} data={item} />
                )
              })}
            </CartItemsContainer>

            {/* Summary */}
            <Summary>
              <div>
                <span>Quantidade</span>
                <span>{cartItems.length} {cartItems.length === 1 ? "item" : "itens"}</span>
              </div>

              <div>
                <strong>Valor total</strong>
                <strong>{total}</strong>
              </div>
            </Summary>

            <button onClick={handleCreateCheckoutSession} disabled={isCreatingCheckoutSession}>Finalizar compra</button>
          </CartContent>
        </ModalContainer>
      )}
    </div>
    , document.body
  )
}