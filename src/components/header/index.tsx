"use client"
import Image from "next/image";

import logoImg from "@/assets/logo.svg";
import { Header as HeaderStyles } from "./styles";
import { Handbag } from "phosphor-react";
import { useState } from "react";
import { CartModal } from "../cartModal";

export function Header() {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  function toggleCartModal() {
    setIsCartModalOpen((state) => !state);
  }

  return (
    <HeaderStyles>
      <Image src={logoImg} alt="" />

      <div onClick={toggleCartModal}>
        <button>
          <Handbag size={25} color="white" />
          <span>2</span>
        </button>
      </div>

      <CartModal isOpen={isCartModalOpen} onClose={toggleCartModal} />
    </HeaderStyles>
  );
}
