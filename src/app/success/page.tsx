import Link from "next/link";
import { ImageContainer, SuccessContainer } from "./styles";
import { redirect, useSearchParams } from "next/navigation";
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

  console.log('sessionId: ', sessionId);

  if (!sessionId) {
    redirect('/');
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details?.name;
  const product = session.line_items?.data[0].price?.product as Stripe.Product;

  return (
    <SuccessContainer >
      <h1>Compra efetuada</h1>

      <ImageContainer>
        <Image src={product.images[0]} width={120} height={110} alt="" />
      </ImageContainer>

      <p>
        Uhuul <strong>{customerName}</strong>, sua compra de <strong>{product.name}</strong> já está a caminho da sua casa.
      </p>

      <Link href="/">
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
  )
}
