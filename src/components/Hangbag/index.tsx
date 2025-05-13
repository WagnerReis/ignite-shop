import { Handbag } from "phosphor-react";
import { HangBagContainer } from "./styles";
import { Product } from "../cartItem";
import { useCartContext } from "@/hooks/use-cart-context";

interface HangBagButtonProps {
  product: Product;
}

export function HangBagButton({ product }: HangBagButtonProps) {
  const { handleAddItem } = useCartContext();

  return (
    <HangBagContainer>
      <button onClick={() => handleAddItem({
        ...product,
      })}>
        <Handbag size={32} color="white" />
      </button>
    </HangBagContainer>
  );
}