const express = require('express');
const router = express.Router();
const {
  createCheckoutSession,
  verifySession,
} = require('../controllers/paymentController');

// ─── Payment Routes ──────────────────────────────────────────────────────────
// POST: Initiate a stripe checkout session
router.post('/create-checkout-session', createCheckoutSession);

// GET: Verify payment status from stripe checkout session ID
router.get('/verify-session/:sessionId', verifySession);

module.exports = router;
