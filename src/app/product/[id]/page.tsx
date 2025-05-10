import { ImageContainer, ProductContainer, ProductDetails } from "./styles"

interface ProductProps {
  params: { id: string }
}

export default async function Product({ params }: ProductProps) {
  const { id } = await params

  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, deserunt qui saepe, eum consequatur illo totam maxime rem modi, ad doloribus at blanditiis. Doloremque odio corrupti, recusandae explicabo cum numquam?</p>

        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}