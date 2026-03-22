import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { session_id } = await req.json();

    if (!session_id) {
      return NextResponse.json({ success: false, error: 'No session ID provided' });
    }

    const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

    if (!STRIPE_SECRET_KEY) {
      return NextResponse.json({ success: false, error: 'Stripe not configured' });
    }

    const response = await fetch(`https://api.stripe.com/v1/checkout/sessions/${session_id}`, {
      headers: {
        'Authorization': `Bearer ${STRIPE_SECRET_KEY}`,
      },
    });

    if (!response.ok) {
      return NextResponse.json({ success: false, error: 'Invalid session' });
    }

    const session = await response.json();

    if (session.payment_status !== 'paid') {
      return NextResponse.json({ success: false, error: 'Payment not completed' });
    }

    return NextResponse.json({
      success: true,
      email: session.customer_details.email,
      product: 'GOD FLICK v2.0 PRO',
      session_id: session_id,
    });

  } catch (error) {
    console.error('Session verification error:', error);
    return NextResponse.json({ success: false, error: 'Verification failed' });
  }
}
