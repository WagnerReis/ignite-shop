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

  async function handleAddProductToCart() {
    handleAddItem({
      id: product.id,
      name: product.name,
      price: Number(product.price),
      imageUrl: product.imageUrl,
      defaultPriceId: product.defaultPriceId
    })
  }

  return (
    <Button onClick={handleAddProductToCart}>
      Colocar na sacola
    </Button>
  );
}
