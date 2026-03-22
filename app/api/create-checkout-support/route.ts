import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-06-20' as any,
});

export async function POST(req: NextRequest) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error('STRIPE_SECRET_KEY not configured');
      return NextResponse.json(
        { error: 'Payment system not configured' },
        { status: 500 }
      );
    }

    const { email } = await req.json();
    const origin = req.headers.get('origin') || 'https://zendaddy.nl';
    
    const session = await stripe.checkout.sessions.create({
      customer_email: email || undefined,
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: 'ZenDaddy Setup Support',
              description: 'Live 1-on-1 Discord setup session - Full installation, settings tuning, 30 days priority support',
            },
            unit_amount: 1499,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      allow_promotion_codes: true,
      success_url: `${origin}/download?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/download?session_id=${req.headers.get('referer')?.split('session_id=')[1] || ''}`,
    } as any);

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Setup support checkout error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
