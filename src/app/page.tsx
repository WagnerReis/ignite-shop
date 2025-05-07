import { stripe } from "@/lib/stripe";
import { HomeClient } from "@/components/homeClient";
import Stripe from "stripe";

export default async function Home() {
  const { data } = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = data.map(product => {
    const price = product.default_price as { unit_amount: number };

    console.log(price.unit_amount)

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format((price.unit_amount || 0) / 100),
    }
  });
  return (
    <HomeClient products={products} />
  )
}
