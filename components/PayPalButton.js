import { useEffect } from 'react'

const PLANS = [
  { id: 'cohort', name: 'The Cohort', amount: '444.00', description: 'The Clarity Institute — 8 Week Cohort Program' },
  { id: 'bundle', name: 'Cohort + Mentorship', amount: '777.00', description: 'The Clarity Institute — Cohort + Mentorship Bundle' },
  { id: 'immersion', name: '90-Day Immersion', amount: '1444.00', description: 'The Clarity Institute — 90-Day Immersion Program' },
]

const PAYPAL_EMAIL = 'davidmuyunda@gmail.com'

export default function PayPalButton({ planId, onSuccess }) {
  const plan = PLANS.find(p => p.id === planId) || PLANS[0]

  useEffect(() => {
    // Load PayPal script
    if (window.paypal) return
    const script = document.createElement('script')
    script.src = `https://www.paypal.com/sdk/js?client-id=sb&currency=USD`
    script.setAttribute('data-sdk-integration-source', 'button-factory')
    document.body.appendChild(script)
  }, [])

  const handlePayment = () => {
    // Opens PayPal payment page directly — works without API keys
    const params = new URLSearchParams({
      cmd: '_xclick',
      business: PAYPAL_EMAIL,
      item_name: plan.description,
      amount: plan.amount,
      currency_code: 'USD',
      return: `${window.location.origin}/dashboard?payment=success`,
      cancel_return: `${window.location.origin}/#pricing`,
    })
    window.open(`https://www.paypal.com/cgi-bin/webscr?${params.toString()}`, '_blank')
  }

  return (
    <button
      onClick={handlePayment}
      style={{
        background: '#FFC439',
        color: '#003087',
        border: 'none',
        borderRadius: '4px',
        padding: '0.9rem 2rem',
        fontFamily: 'Jost, sans-serif',
        fontSize: '0.9rem',
        fontWeight: '700',
        cursor: 'pointer',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        transition: 'opacity 0.2s',
        marginTop: '0.8rem',
      }}
      onMouseOver={e => e.currentTarget.style.opacity = '0.9'}
      onMouseOut={e => e.currentTarget.style.opacity = '1'}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#003087">
        <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .921-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.775-4.471z"/>
      </svg>
      Pay with PayPal
    </button>
  )
}
