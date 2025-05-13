import { X } from "phosphor-react";
import { createPortal } from "react-dom";
import { CartContent, CartItemsContainer, ModalContainer, Overlay, Summary } from "./styles";
import { CartItem } from "../cartItem";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
  if (!isOpen) return null;

  console.log("open", isOpen)
  return createPortal(
    <div>
      {isOpen && <Overlay />}

      {isOpen && (
        <ModalContainer>
          <X size={24} onClick={onClose} />

          <CartContent>
            <h1>Sacola de compras</h1>

            <CartItemsContainer>
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
            </CartItemsContainer>

            {/* Summary */}
            <Summary>
              <div>
                <span>Quantidade</span>
                <span>2 itens</span>
              </div>

              <div>
                <strong>Valor total</strong>
                <strong>R$ 159,80</strong>
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