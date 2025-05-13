import { Container } from "./styles";
import Image from "next/image";
import { useCartContext } from "@/hooks/use-cart-context";

export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  defaultPriceId: string;
}

interface CartItemProps {
  data: Product
}

export function CartItem({ data }: CartItemProps) {
  const { handleRemoveItem } = useCartContext();

  const priceFormatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(data.price);

  return (
    <Container>
      <div>
        <Image src={data.imageUrl} width={102} height={93} alt="" />
      </div>

      <div>
        <span>{data.name}</span>
        <strong>{priceFormatted}</strong>

        <a onClick={() => handleRemoveItem(data.id)}>Remover</a>
      </div>
    </Container>
  )
}