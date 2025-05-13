import { stripe } from '@/lib/stripe';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { priceIds } = await req.json();

  if (!priceIds.length) {
    return NextResponse.json({ error: 'Price not found.' }, { status: 400 });
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: "payment",
    line_items: priceIds.map((priceId: string) => {
      return {
        price: priceId,
        quantity: 1
      }
    })
  })

  return NextResponse.json({ checkoutUrl: checkoutSession.url });
}