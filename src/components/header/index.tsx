import Image from "next/image";

import logoImg from "@/assets/logo.svg";
import { Header as HeaderStyles } from "./styles";

export function Header() {
  return (
    <HeaderStyles>
      <Image src={logoImg} alt="" />
    </HeaderStyles>
  );
}
