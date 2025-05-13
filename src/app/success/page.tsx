import Link from "next/link";
import { ImageContainer, ImageContent, SuccessContainer } from "./styles";
import { redirect } from "next/navigation";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import Image from "next/image";

type SuccessPageProps = {
  searchParams: { session_id?: string };
};


export default async function Success({
  searchParams,
}: SuccessPageProps) {
  const sessionId = (await searchParams).session_id;

  if (!sessionId) {
    redirect('/');
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details?.name;
  const products = session.line_items?.data.map((product) => {
    const productData = product.price?.product as Stripe.Product;

    return {
      id: product.id,
      imageUrl: productData.images[0]
    }
  });

  return (
    <SuccessContainer >
      <h1>Compra efetuada</h1>

      <ImageContainer>
        {
          products?.map(product => (
            <ImageContent key={product.id}>
              <Image src={product.imageUrl} width={120} height={110} alt="" />
            </ImageContent>
          ))
        }
      </ImageContainer>

      <p>
        Uhuul <strong>{customerName}</strong>, sua compra de {products?.length} camisetas já está a caminho da sua casa.
      </p>

      <Link href="/">
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
  )
}
