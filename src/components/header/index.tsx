"use client"
import Image from "next/image";

import logoImg from "@/assets/logo.svg";
import { Header as HeaderStyles } from "./styles";
import { HangBagButton } from "../Hangbag";
import { Handbag } from "phosphor-react";

export function Header() {
  return (
    <HeaderStyles>
      <Image src={logoImg} alt="" />

      <div>
        <button>
          <Handbag size={25} color="white" />
          <span>2</span>
        </button>
      </div>
    </HeaderStyles>
  );
}
