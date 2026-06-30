const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || 'dummy_key');

/**
 * Create a Stripe Checkout Session for Invoice Payments
 * POST /api/payment/create-checkout-session
 */
const createCheckoutSession = async (req, res) => {
  try {
    const { name, email, amount, invoiceRef, description } = req.body;

    // Validate inputs
    if (!name || !email || !amount || !invoiceRef) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, amount, and invoice reference are required.',
      });
    }

    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Amount must be a positive number.',
      });
    }

    if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY === 'dummy_key') {
      console.error('STRIPE_SECRET_KEY is not defined or is placeholder in environment variables.');
      return res.status(500).json({
        success: false,
        message: 'Stripe configuration is missing on the server. Please contact the administrator to set STRIPE_SECRET_KEY.',
      });
    }

    // Stripe expects amount in cents (integers)
    const amountInCents = Math.round(parsedAmount * 100);

    // Dynamic front-end origin fallback
    const clientUrl = req.headers.origin || process.env.FRONTEND_URL || 'http://localhost:5173';

    // Create session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'aud',
            product_data: {
              name: `Solar Invoice Reference: ${invoiceRef}`,
              description: description || `Secure payment for Aussie Sun Solar projects/deposits`,
            },
            unit_amount: amountInCents,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer_email: email,
      success_url: `${clientUrl}/payment?status=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${clientUrl}/payment?status=cancel`,
      metadata: {
        customerName: name,
        customerEmail: email,
        invoiceRef: invoiceRef,
        description: description || '',
      },
    });

    res.json({
      success: true,
      url: session.url,
      sessionId: session.id,
    });
  } catch (error) {
    console.error('Error creating Stripe Checkout Session:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to create payment session.',
    });
  }
};

/**
 * Verify Stripe Checkout Session Payment Status
 * GET /api/payment/verify-session/:sessionId
 */
const verifySession = async (req, res) => {
  try {
    const { sessionId } = req.params;

    if (!sessionId) {
      return res.status(400).json({
        success: false,
        message: 'Session ID is required.',
      });
    }

    if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY === 'dummy_key') {
      return res.status(500).json({
        success: false,
        message: 'Stripe API key is not configured on the server.',
      });
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === 'paid') {
      res.json({
        success: true,
        paymentStatus: session.payment_status,
        customerDetails: {
          name: session.metadata?.customerName || session.customer_details?.name || 'Customer',
          email: session.customer_email || session.customer_details?.email,
        },
        invoiceRef: session.metadata?.invoiceRef || 'N/A',
        description: session.metadata?.description || '',
        amountTotal: session.amount_total / 100, // convert back from cents
        currency: session.currency.toUpperCase(),
        transactionId: session.payment_intent || session.id,
      });
    } else {
      res.json({
        success: false,
        paymentStatus: session.payment_status,
        message: `Payment has not been completed. Current status: ${session.payment_status}`,
      });
    }
  } catch (error) {
    console.error('Error verifying Stripe Session:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to verify payment session.',
    });
  }
};

module.exports = {
  createCheckoutSession,
  verifySession,
};
