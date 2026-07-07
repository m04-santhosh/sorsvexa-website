import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: Request) {
  try {
    const key_secret = process.env.RAZORPAY_KEY_SECRET;

    if (!key_secret) {
      return NextResponse.json(
        { error: 'Razorpay keys are not configured. Developer message: Please add RAZORPAY_KEY_SECRET to your environment variables.' },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { error: 'Missing Razorpay signature parameters.' },
        { status: 400 }
      );
    }

    const generated_signature = crypto
      .createHmac('sha256', key_secret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    if (generated_signature === razorpay_signature) {
      return NextResponse.json(
        { success: true, message: 'Payment verified successfully.' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'Payment signature verification failed.' },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error('Razorpay Verification Error:', error);
    return NextResponse.json(
      { error: 'Internal server error during verification.', details: error.message },
      { status: 500 }
    );
  }
}
