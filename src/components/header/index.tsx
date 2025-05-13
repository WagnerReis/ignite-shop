"use client"
import Image from "next/image";

import logoImg from "@/assets/logo.svg";
import { Header as HeaderStyles } from "./styles";
import { Handbag } from "phosphor-react";
import { useState } from "react";
import { CartModal } from "../cartModal";
import { useCartContext } from "@/hooks/use-cart-context";

export function Header() {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const { cartItems } = useCartContext();

  function toggleCartModal() {
    setIsCartModalOpen((state) => !state);
  }

  const cartIsEmpty = cartItems.length === 0

  return (
    <HeaderStyles>
      <Image src={logoImg} alt="" />

      <button onClick={toggleCartModal} disabled={cartIsEmpty} style={{ cursor: cartIsEmpty ? "not-allowed" : "pointer" }}>
        <Handbag size={25} color="white" />
        {cartItems.length > 0 && <span>{cartItems.length}</span>}
      </button>

      <CartModal isOpen={isCartModalOpen} onClose={toggleCartModal} />
    </HeaderStyles>
  );
}
