/**
 * Email Utilities — The Clarity Institute
 *
 * Sends transactional emails via Resend.
 *
 * Env vars:
 *   RESEND_API_KEY
 *   RESEND_FROM_EMAIL  – verified sender (e.g. hello@theclarityinstitute.guru)
 */

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Sends a booking confirmation email after successful payment.
 */
export async function sendBookingConfirmation({
  to,
  clientName,
  sessionDate,
  amount,
  currency = "USD",
}) {
  if (!to) {
    console.warn("[Email] No recipient address — skipping confirmation email");
    return;
  }

  const formattedDate = sessionDate
    ? new Date(sessionDate).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
      })
    : "To be confirmed";

  const html = `
    <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color: #2d2d2d;">
      <div style="border-bottom: 2px solid #8b7355; padding-bottom: 16px; margin-bottom: 24px;">
        <h1 style="font-size: 22px; margin: 0; color: #8b7355;">The Clarity Institute</h1>
      </div>

      <p>Dear ${clientName || "Valued Client"},</p>

      <p>Thank you for your payment of <strong>${currency} ${amount}</strong>.
         Your session is confirmed.</p>

      <table style="width: 100%; border-collapse: collapse; margin: 24px 0;">
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #e0d8cc; color: #666;">Session Date</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #e0d8cc; text-align: right; font-weight: 600;">${formattedDate}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #e0d8cc; color: #666;">Amount Paid</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #e0d8cc; text-align: right; font-weight: 600;">${currency} ${amount}</td>
        </tr>
      </table>

      <p>You will receive your session link shortly before the scheduled time.
         If you have any questions, simply reply to this email.</p>

      <p style="margin-top: 32px;">With warmth,<br/>
      <strong>The Clarity Institute</strong></p>

      <p style="font-size: 12px; color: #999; margin-top: 40px; border-top: 1px solid #e0d8cc; padding-top: 12px;">
        This is an automated confirmation. Please do not reply unless you need assistance.
      </p>
    </div>
  `;

  const { data, error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL || "The Clarity Institute <hello@theclarityinstitute.guru>",
    to: [to],
    subject: "Your Session is Confirmed — The Clarity Institute",
    html,
  });

  if (error) {
    throw new Error(`Resend error: ${JSON.stringify(error)}`);
  }

  console.log(`[Email] Confirmation sent to ${to} (id: ${data?.id})`);
}
