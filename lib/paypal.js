/**
 * PayPal Utilities — The Clarity Institute
 *
 * Handles OAuth token fetching and webhook signature verification.
 * Switches between sandbox and live based on PAYPAL_MODE env var.
 */

const PAYPAL_URLS = {
  sandbox: "https://api-m.sandbox.paypal.com",
  live: "https://api-m.paypal.com",
};

/**
 * Returns the base URL for the current PayPal environment.
 */
export function getPayPalBaseUrl() {
  const mode = (process.env.PAYPAL_MODE || "sandbox").toLowerCase();
  return PAYPAL_URLS[mode] || PAYPAL_URLS.sandbox;
}

/**
 * Fetches a short-lived OAuth 2.0 access token from PayPal.
 */
export async function getAccessToken() {
  const base = getPayPalBaseUrl();
  const credentials = Buffer.from(
    `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`
  ).toString("base64");

  const res = await fetch(`${base}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`PayPal auth failed (${res.status}): ${text}`);
  }

  const data = await res.json();
  return data.access_token;
}

/**
 * Verifies a PayPal webhook signature by calling PayPal's
 * /v1/notifications/verify-webhook-signature endpoint.
 *
 * This is the recommended server-side verification approach.
 *
 * @param {Object}  opts
 * @param {Object}  opts.headers   – the incoming request headers
 * @param {string}  opts.rawBody   – the raw request body string
 * @param {string}  opts.webhookId – your PAYPAL_WEBHOOK_ID
 * @returns {boolean} true if PayPal confirms the signature is valid
 */
export async function verifyWebhookSignature({ headers, rawBody, webhookId }) {
  const accessToken = await getAccessToken();
  const base = getPayPalBaseUrl();

  const verificationPayload = {
    auth_algo: headers["paypal-auth-algo"],
    cert_url: headers["paypal-cert-url"],
    transmission_id: headers["paypal-transmission-id"],
    transmission_sig: headers["paypal-transmission-sig"],
    transmission_time: headers["paypal-transmission-time"],
    webhook_id: webhookId,
    webhook_event: JSON.parse(rawBody),
  };

  const res = await fetch(`${base}/v1/notifications/verify-webhook-signature`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(verificationPayload),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`PayPal verification request failed (${res.status}): ${text}`);
  }

  const data = await res.json();
  return data.verification_status === "SUCCESS";
}

/**
 * Creates a PayPal order (for use on your checkout page / API route).
 *
 * Pass `bookingId` as `custom_id` so the webhook can link the payment
 * back to the correct Firestore booking.
 *
 * @param {Object}  opts
 * @param {string}  opts.bookingId  – Firestore booking document ID
 * @param {string}  opts.amount     – e.g. "150.00"
 * @param {string}  opts.currency   – e.g. "USD"
 * @param {string}  opts.description
 * @returns {Object} PayPal order object (includes approval URL)
 */
export async function createOrder({ bookingId, amount, currency = "USD", description }) {
  const accessToken = await getAccessToken();
  const base = getPayPalBaseUrl();

  const res = await fetch(`${base}/v2/checkout/orders`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          custom_id: bookingId,
          description: description || "Clarity Institute Session",
          amount: {
            currency_code: currency,
            value: amount,
          },
        },
      ],
      application_context: {
        brand_name: "The Clarity Institute",
        landing_page: "NO_PREFERENCE",
        user_action: "PAY_NOW",
        return_url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://theclarityinstitute.guru"}/booking/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://theclarityinstitute.guru"}/booking/cancel`,
      },
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`PayPal create order failed (${res.status}): ${text}`);
  }

  return res.json();
}
