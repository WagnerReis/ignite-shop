import { Handbag } from "phosphor-react";
import { HangBagContainer } from "./styles";

interface HangBagButtonProps {
  fill: boolean;
}

export function HangBagButton({ fill }: HangBagButtonProps) {
  return (
    <HangBagContainer>
      <button>
        <Handbag size={32} color="white" />
      </button>
    </HangBagContainer>
  );
}