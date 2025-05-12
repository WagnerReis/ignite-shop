import { HomeClient } from "@/components/homeClient";
import { getProducts } from "@/lib/products";

export default async function Home() {
  const products = await getProducts();

  return <HomeClient products={products} />;
}

export const revalidate = 60;
