import { X } from "phosphor-react";
import { createPortal } from "react-dom";
import { CartContent, CartItemsContainer, ModalContainer, Overlay, Summary } from "./styles";
import { CartItem } from "../cartItem";
import { useCartContext } from "@/hooks/use-cart-context";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const { cartItems, getTotal } = useCartContext();

  const total = getTotal()

  if (!isOpen) return null;

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

            <button>Finalizar compra</button>
          </CartContent>
        </ModalContainer>
      )}
    </div>
    , document.body
  )
}