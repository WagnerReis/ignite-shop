'use client';
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
  product: Product;
}

function BuyButton({ product }: BuyButtonProps) {
  function handleBuyProduct() {
    console.log(product.defaultPriceId)
  }

  return (
    <Button onClick={handleBuyProduct}>
      Comprar
    </Button>
  );
}

export default BuyButton;