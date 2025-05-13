import { ImageContainer, ProductContainer, ProductDetails } from "./styles";
import Image from "next/image";
import { getProduct } from "@/lib/products";
import { Metadata } from "next";
import { AddCartButton } from "@/components/addCartProduct";

type Props = Promise<{ id: string }>;

export const metadata: Metadata = {
  title: 'Product | Ignite Shop',
}

export default async function ProductPage(props: { params: Props }) {
  const { id } = await props.params;
  const productId = id;

  const product = await getProduct(productId);

  return (
    <ProductContainer>
      <ImageContainer>
        <Image
          src={product.imageUrl}
          width={520}
          height={480}
          alt={product.name}
        />
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>

        <AddCartButton product={product} />
      </ProductDetails>
    </ProductContainer>
  );
}
