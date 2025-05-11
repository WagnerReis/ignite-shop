import { stripe } from "@/lib/stripe";

export async function getProducts() {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  return response.data;
}
