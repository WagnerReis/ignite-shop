import { stripe } from "@/lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "./styles"
import Image from "next/image";

interface ParamsProps {
  params: { id: string }
}

interface ProductProps {
  id: string;
  name: string;
  description: string | null;
  price: string;
  image: string;
}


async function getProductData(productId: string): Promise<ProductProps> {
  const response = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = response.default_price as { unit_amount: number };

  return {
    id: response.id,
    name: response.name,
    description: response.description,
    image: response.images[0],
    price: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format((price.unit_amount || 0) / 100),
  }
}

export default async function Product({ params }: ParamsProps) {
  const { id: productId } = await params

  const product = await getProductData(productId)

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.image} width={520} height={480} alt="" />
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>

        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}

export const revalidate = 60 * 60;
