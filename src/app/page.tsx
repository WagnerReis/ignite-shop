import { HomeClient } from "@/components/homeClient";
import { getProducts } from "@/lib/products";

export default async function Home() {
  const data = await getProducts();

  const products = data.map((product) => {
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

  return <HomeClient products={products} />;
}

export const revalidate = 60;
