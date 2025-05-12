import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

export async function getProducts() {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as { unit_amount: number };

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format((price.unit_amount || 0) / 100),
    };
  });

  return products;
}

export async function getProduct(productId: string) {
  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    id: product.id,
    name: product.name,
    imageUrl: product.images[0],
    description: product.description,
    price: new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format((price.unit_amount || 0) / 100),
    defaultPriceId: price.id
  };
}