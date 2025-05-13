'use client';
import { useState } from "react";
import { Button } from "./styles";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  description?: string | null;
  defaultPriceId: string;
}

interface BuyButtonProps {
  priceId: string;
}

function BuyButton({ priceId }: BuyButtonProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          priceId
        })
      })

      const { checkoutUrl } = await response.json();

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);
      alert("Falha ao redirecionar ao checkout")
    }
  }

  return (
    <Button onClick={handleBuyProduct} disabled={isCreatingCheckoutSession}>
      {isCreatingCheckoutSession ? "Aguarde..." : "Colocar na sacola"}
    </Button>
  );
}

export default BuyButton;