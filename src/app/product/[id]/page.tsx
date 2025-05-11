import { stripe } from "@/lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "./styles";
import Image from "next/image";
import Stripe from "stripe";

type Props = Promise<{ id: string }>;

export default async function ProductPage(props: { params: Props }) {
  const { id } = await props.params;
  const productId = id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format((price.unit_amount || 0) / 100);

  return (
    <ProductContainer>
      <ImageContainer>
        <Image
          src={product.images[0]}
          width={520}
          height={480}
          alt={product.name}
        />
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{formattedPrice}</span>

        <p>{product.description}</p>

        <button>Add to cart</button>
      </ProductDetails>
    </ProductContainer>
  );
}
