'use client';
import { useState } from "react";
import { Button } from "./styles";
import { useCartContext } from "@/hooks/use-cart-context";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  description?: string | null;
  defaultPriceId: string;
}

interface BuyButtonProps {
  product: Product;
}

export function AddCartButton({ product }: BuyButtonProps) {
  const { handleAddItem } = useCartContext();
  // const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

  async function handleBuyProduct() {
    try {
      handleAddItem({
        id: product.id,
        name: product.name,
        price: Number(product.price),
        imageUrl: product.imageUrl
      })

      // setIsCreatingCheckoutSession(true);

      // const response = await fetch('/api/checkout', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({
      //     priceId
      //   })
      // })

      // const { checkoutUrl } = await response.json();

      // window.location.href = checkoutUrl;
    } catch (err) {
      // setIsCreatingCheckoutSession(false);
      alert("Falha ao redirecionar ao checkout")
    }
  }

  return (
    <Button onClick={handleBuyProduct}>
      Colocar na sacola
    </Button>
  );
}
