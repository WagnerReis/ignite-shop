import { HomeClient } from "@/components/homeClient";
import { getProducts } from "@/lib/products";

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home | Ignite Shop',
}

export default async function Home() {
  const products = await getProducts();

  return <HomeClient products={products} />;
}

export const revalidate = 60;
