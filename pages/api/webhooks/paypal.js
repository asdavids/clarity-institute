/**
 * PayPal Webhook Handler — The Clarity Institute
 *
 * Receives PAYMENT.CAPTURE.COMPLETED (and related) events from PayPal,
 * verifies the webhook signature, then:
 *   1. Marks the Firestore booking as paid
 *   2. Sends a confirmation email to the client
 *   3. Pushes a real-time notification for the admin dashboard
 *   4. Emails David about the payment
 *
 * Environment variables required (set in .env.local / Vercel):
 *   PAYPAL_CLIENT_ID
 *   PAYPAL_CLIENT_SECRET
 *   PAYPAL_WEBHOOK_ID
 *   PAYPAL_MODE            – "sandbox" | "live"  (defaults to sandbox)
 *   RESEND_API_KEY         – for emails
 */

import { buffer } from "micro";
import { Resend } from "resend";
import { initAdmin, getFirestore } from "../../../lib/firebaseAdmin";
import { verifyWebhookSignature, getPayPalBaseUrl } from "../../../lib/paypal";
import { sendBookingConfirmation } from "../../../lib/email";

const resend = new Resend(process.env.RESEND_API_KEY);

// Next.js: disable built-in body parsing so we can read the raw body for
// signature verification.
export const config = {
  api: { bodyParser: false },
};

// Firestore timestamp helper
const serverTimestamp = () =>
  require("firebase-admin").firestore.FieldValue.serverTimestamp();

export default async function handler(req, res) {
  // ── Only accept POST ─────────────────────────────────────────────
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  let rawBody;
  try {
    rawBody = (await buffer(req)).toString("utf8");
  } catch (err) {
    console.error("[PayPal Webhook] Failed to read body:", err);
    return res.status(400).json({ error: "Could not read request body" });
  }

  const event = JSON.parse(rawBody);

  // ── 1. Verify webhook signature ───────────────────────────────────
  try {
    const isValid = await verifyWebhookSignature({
      headers: req.headers,
      rawBody,
      webhookId: process.env.PAYPAL_WEBHOOK_ID,
    });

    if (!isValid) {
      console.warn("[PayPal Webhook] Signature verification failed");
      return res.status(401).json({ error: "Invalid signature" });
    }
  } catch (err) {
    console.error("[PayPal Webhook] Verification error:", err);
    return res.status(500).json({ error: "Verification error" });
  }

  // ── 2. Route by event type ────────────────────────────────────────
  const eventType = event.event_type;
  console.log(`[PayPal Webhook] Received: ${eventType}`);

  try {
    switch (eventType) {
      case "PAYMENT.CAPTURE.COMPLETED":
        await handlePaymentCompleted(event);
        break;

      case "PAYMENT.CAPTURE.DENIED":
      case "PAYMENT.CAPTURE.REFUNDED":
        await handlePaymentFailed(event, eventType);
        break;

      default:
        // Acknowledge events we don't act on
        console.log(`[PayPal Webhook] Unhandled event type: ${eventType}`);
    }
  } catch (err) {
    console.error(`[PayPal Webhook] Error handling ${eventType}:`, err);
    return res.status(500).json({ error: "Internal processing error" });
  }

  // Always return 200 quickly so PayPal doesn't retry unnecessarily
  return res.status(200).json({ received: true });
}

// ─── Payment completed ────────────────────────────────────────────────
async function handlePaymentCompleted(event) {
  const capture = event.resource;
  const captureId = capture.id;
  const amount = capture.amount?.value;
  const currency = capture.amount?.currency_code;
  const payerEmail = capture.payer?.email_address ?? null;

  // The custom_id field carries our internal booking ID.
  // Set this when creating the PayPal order on the client/server.
  const bookingId = capture.custom_id;

  if (!bookingId) {
    console.warn("[PayPal Webhook] No bookingId (custom_id) on capture", captureId);
    return;
  }

  initAdmin();
  const db = getFirestore();
  const bookingRef = db.collection("bookings").doc(bookingId);
  const bookingSnap = await bookingRef.get();

  if (!bookingSnap.exists) {
    console.warn(`[PayPal Webhook] Booking ${bookingId} not found in Firestore`);
    return;
  }

  const booking = bookingSnap.data();

  // Idempotency: skip if already marked paid
  if (booking.paymentStatus === "paid") {
    console.log(`[PayPal Webhook] Booking ${bookingId} already paid — skipping`);
    return;
  }

  // ── 2a. Mark booking as paid ──────────────────────────────────────
  await bookingRef.update({
    paymentStatus: "paid",
    paypalCaptureId: captureId,
    paypalPayerEmail: payerEmail,
    paidAmount: amount,
    paidCurrency: currency,
    paidAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  // ── 2b. Push admin notification ───────────────────────────────────
  await db.collection("adminNotifications").add({
    type: "payment_received",
    bookingId,
    clientName: booking.clientName ?? "Unknown",
    clientEmail: booking.clientEmail ?? payerEmail,
    amount,
    currency,
    message: `Payment of ${currency} ${amount} received from ${booking.clientName ?? "a client"}.`,
    read: false,
    createdAt: serverTimestamp(),
  });

  // ── 2c. Send confirmation email ───────────────────────────────────
  try {
    await sendBookingConfirmation({
      to: booking.clientEmail ?? payerEmail,
      clientName: booking.clientName,
      sessionDate: booking.sessionDate,
      amount,
      currency,
    });
  } catch (emailErr) {
    // Don't fail the webhook if the email fails — log and continue
    console.error("[PayPal Webhook] Confirmation email failed:", emailErr);
  }

  // ── 2d. Email David about the payment ─────────────────────────────
  try {
    await resend.emails.send({
      from: 'The Clarity Institute <david@theclarityinstitute.guru>',
      to: 'davidmuyunda@gmail.com',
      subject: `💰 Payment Received — ${currency} ${amount} from ${booking.clientName ?? payerEmail}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; padding: 2rem; color: #2C1F14;">
          <h2 style="color: #3D5A3E; font-weight: 300;">Payment Received</h2>
          <p style="color: #7A6A5A;">A payment has been confirmed via PayPal.</p>
          <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0;">
            <tr style="border-bottom: 1px solid #E0D5C5;">
              <td style="padding: 0.65rem 0; color: #7A6A5A; font-size: 0.85rem; width: 40%;">Client</td>
              <td style="padding: 0.65rem 0; font-weight: 500;">${booking.clientName ?? "Unknown"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #E0D5C5;">
              <td style="padding: 0.65rem 0; color: #7A6A5A; font-size: 0.85rem;">Email</td>
              <td style="padding: 0.65rem 0;"><a href="mailto:${booking.clientEmail ?? payerEmail}" style="color: #3D5A3E;">${booking.clientEmail ?? payerEmail}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #E0D5C5;">
              <td style="padding: 0.65rem 0; color: #7A6A5A; font-size: 0.85rem;">Amount</td>
              <td style="padding: 0.65rem 0; font-weight: 600; color: #3D5A3E; font-size: 1.2rem;">${currency} ${amount}</td>
            </tr>
            <tr style="border-bottom: 1px solid #E0D5C5;">
              <td style="padding: 0.65rem 0; color: #7A6A5A; font-size: 0.85rem;">PayPal Capture ID</td>
              <td style="padding: 0.65rem 0; font-family: monospace; font-size: 0.85rem;">${captureId}</td>
            </tr>
            <tr>
              <td style="padding: 0.65rem 0; color: #7A6A5A; font-size: 0.85rem;">Booking ID</td>
              <td style="padding: 0.65rem 0; font-family: monospace; font-size: 0.85rem;">${bookingId}</td>
            </tr>
          </table>
          <a href="https://www.theclarityinstitute.guru/admin" style="display: inline-block; background: #3D5A3E; color: white; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-size: 0.9rem;">View in Admin Dashboard</a>
          <p style="margin-top: 2rem; font-size: 0.8rem; color: #aaa;">The Clarity Institute · theclarityinstitute.guru</p>
        </div>
      `,
    });
  } catch (adminEmailErr) {
    console.error("[PayPal Webhook] Admin notification email failed:", adminEmailErr);
  }

  console.log(`[PayPal Webhook] Booking ${bookingId} marked as paid (${currency} ${amount})`);
}

// ─── Payment denied / refunded ────────────────────────────────────────
async function handlePaymentFailed(event, eventType) {
  const capture = event.resource;
  const bookingId = capture.custom_id;

  if (!bookingId) return;

  initAdmin();
  const db = getFirestore();
  const bookingRef = db.collection("bookings").doc(bookingId);

  const newStatus =
    eventType === "PAYMENT.CAPTURE.REFUNDED" ? "refunded" : "failed";

  await bookingRef.update({
    paymentStatus: newStatus,
    updatedAt: serverTimestamp(),
  });

  await db.collection("adminNotifications").add({
    type: `payment_${newStatus}`,
    bookingId,
    message: `Payment ${newStatus} for booking ${bookingId}.`,
    read: false,
    createdAt: serverTimestamp(),
  });

  console.log(`[PayPal Webhook] Booking ${bookingId} marked as ${newStatus}`);
}
