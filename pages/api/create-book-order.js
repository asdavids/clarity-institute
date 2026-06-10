// pages/api/create-book-order.js
import { getAccessToken, getPayPalBaseUrl } from '../../lib/paypal'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.theclarityinstitute.guru'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  try {
    const accessToken = await getAccessToken()
    const base = getPayPalBaseUrl()

    const response = await fetch(`${base}/v2/checkout/orders`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [
          {
            description: 'The Rules of Life — Digital Book by AS Davids',
            amount: {
              currency_code: 'USD',
              value: '7.00',
            },
          },
        ],
        application_context: {
          brand_name: 'The Clarity Institute',
          landing_page: 'NO_PREFERENCE',
          user_action: 'PAY_NOW',
          return_url: `${BASE_URL}/shop?status=success`,
          cancel_url: `${BASE_URL}/shop?status=cancelled`,
        },
      }),
    })

    if (!response.ok) {
      const text = await response.text()
      console.error('[create-book-order] PayPal error:', text)
      return res.status(500).json({ error: 'Failed to create PayPal order.' })
    }

    const order = await response.json()

    // Find the approval URL to redirect the buyer to PayPal
    const approvalUrl = order.links?.find(l => l.rel === 'approve')?.href

    if (!approvalUrl) {
      return res.status(500).json({ error: 'No approval URL returned from PayPal.' })
    }

    return res.status(200).json({ orderID: order.id, approvalUrl })
  } catch (error) {
    console.error('[create-book-order] Error:', error?.message)
    return res.status(500).json({ error: 'Failed to create order.' })
  }
}
