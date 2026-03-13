// pages/clarity-session.js
// Single Clarity Session — booking page
// Route: /clarity-session

import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/ClaritySession.module.css'

const PAYPAL_EMAIL = 'davidmuyunda@gmail.com'
const WHATSAPP_NUMBER = '27817904941'
const SESSION_PRICE = 111 // Update to your actual price

const SESSION_FOCUS_OPTIONS = [
  'Breaking through a specific block',
  'Receiving intuitive guidance on a life decision',
  'Deepening my meditation or third eye practice',
  'Understanding a recurring dream or vision',
  'Navigating a relationship or emotional challenge',
  'Career, purpose, or vocation clarity',
  'Chakra or energy field work',
  'General spiritual guidance',
  'Other (describe in intention field)',
]

const TIME_OPTIONS = [
  '07:00', '08:00', '09:00', '10:00', '11:00',
  '12:00', '13:00', '14:00', '15:00', '16:00',
  '17:00', '18:00', '19:00', '20:00',
]

export default function ClaritySessionPage() {
  const [step, setStep] = useState(1) // 1: info, 2: payment, 3: confirm, 4: success
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [bookingId, setBookingId] = useState('')

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || '',
    sessionFocus: '',
    intention: '',
    howHeard: '',
    paypalConfirmation: '',
  })

  const handle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const validateStep1 = () => {
    if (!form.name.trim()) return 'Please enter your name.'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) return 'Please enter a valid email.'
    if (!form.sessionFocus) return 'Please select a session focus.'
    if (!form.intention.trim()) return 'Please share your intention — this helps David prepare for your session.'
    return null
  }

  const validateStep2 = () => {
    if (!form.paypalConfirmation.trim()) return 'Please enter your PayPal payment confirmation or transaction ID.'
    return null
  }

  const submitBooking = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/clarity-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Booking failed')
      setBookingId(data.bookingId)
      setStep(4)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const paypalLink = `https://www.paypal.com/paypalme/${PAYPAL_EMAIL.split('@')[0]}/${SESSION_PRICE}`
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi David, I've just booked a Single Clarity Session. My name is ${form.name} and my email is ${form.email}. Looking forward to connecting!`)}`

  return (
    <>
      <Head>
        <title>Single Clarity Session — The Clarity Institute</title>
        <meta name="description" content="Book a powerful 60-minute one-on-one session with David. Receive intuitive guidance, break through blocks, and deepen your practice." />
      </Head>

      <div className={styles.page}>
        {/* ── Nav ── */}
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLogo}>The Clarity Institute</Link>
          <Link href="/#mentorship" className={styles.navBack}>← Back to Mentorship</Link>
        </nav>

        {/* ── Hero ── */}
        <section className={styles.hero}>
          <div className={styles.eyeIcon}>👁</div>
          <h1 className={styles.heroTitle}>Single Clarity Session</h1>
          <p className={styles.heroSubtitle}>A powerful 60-minute one-on-one with David</p>
          <div className={styles.pillRow}>
            <span className={styles.pill}>60 Minutes</span>
            <span className={styles.pill}>One-on-One</span>
            <span className={styles.pill}>One-Time Session</span>
            <span className={styles.pill}>${SESSION_PRICE} USD</span>
          </div>
        </section>

        {/* ── What to expect ── */}
        <section className={styles.expectSection}>
          <div className={styles.expectGrid}>
            <div className={styles.expectCard}>
              <span className={styles.expectIcon}>🔓</span>
              <h3>Break Through Blocks</h3>
              <p>Identify and release what's holding you back from clarity, purpose, or peace.</p>
            </div>
            <div className={styles.expectCard}>
              <span className={styles.expectIcon}>🌀</span>
              <h3>Intuitive Guidance</h3>
              <p>Receive direct, grounded guidance tailored to your unique situation and energy.</p>
            </div>
            <div className={styles.expectCard}>
              <span className={styles.expectIcon}>🕯</span>
              <h3>Deepen Your Practice</h3>
              <p>Get personalised tools, meditations, and practices to take into your daily life.</p>
            </div>
          </div>
        </section>

        {/* ── Step progress ── */}
        {step < 4 && (
          <div className={styles.stepBar}>
            {['Your Details', 'Payment', 'Confirm'].map((label, i) => (
              <div key={i} className={`${styles.stepItem} ${step > i + 1 ? styles.stepDone : ''} ${step === i + 1 ? styles.stepActive : ''}`}>
                <div className={styles.stepCircle}>{step > i + 1 ? '✓' : i + 1}</div>
                <span>{label}</span>
              </div>
            ))}
          </div>
        )}

        {/* ══════════════════════════════════════
            STEP 1 — Your Details
        ══════════════════════════════════════ */}
        {step === 1 && (
          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Tell us about yourself</h2>
            <p className={styles.formSub}>David reads your intention before your session — be as open as you like.</p>

            <div className={styles.fieldGrid}>
              <div className={styles.field}>
                <label>Full Name *</label>
                <input name="name" value={form.name} onChange={handle} placeholder="Your name" />
              </div>
              <div className={styles.field}>
                <label>Email Address *</label>
                <input name="email" type="email" value={form.email} onChange={handle} placeholder="your@email.com" />
              </div>
              <div className={styles.field}>
                <label>WhatsApp / Phone</label>
                <input name="phone" value={form.phone} onChange={handle} placeholder="+1 234 567 8900" />
              </div>
              <div className={styles.field}>
                <label>Preferred Date</label>
                <input
                  name="preferredDate"
                  type="date"
                  value={form.preferredDate}
                  onChange={handle}
                  min={new Date(Date.now() + 86400000).toISOString().split('T')[0]}
                />
              </div>
              <div className={styles.field}>
                <label>Preferred Time</label>
                <select name="preferredTime" value={form.preferredTime} onChange={handle}>
                  <option value="">Select a time</option>
                  {TIME_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div className={styles.field}>
                <label>Your Timezone</label>
                <input name="timezone" value={form.timezone} onChange={handle} placeholder="e.g. Africa/Johannesburg" />
              </div>
            </div>

            <div className={styles.field}>
              <label>Session Focus *</label>
              <select name="sessionFocus" value={form.sessionFocus} onChange={handle}>
                <option value="">What would you like to work on?</option>
                {SESSION_FOCUS_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>

            <div className={styles.field}>
              <label>Your Intention *</label>
              <textarea
                name="intention"
                value={form.intention}
                onChange={handle}
                rows={5}
                placeholder="Share what's alive for you right now. What are you seeking clarity on? What has been stirring beneath the surface? The more openly you share, the better David can prepare."
              />
            </div>

            <div className={styles.field}>
              <label>How did you hear about us?</label>
              <select name="howHeard" value={form.howHeard} onChange={handle}>
                <option value="">Select one</option>
                <option value="TikTok">TikTok</option>
                <option value="Instagram">Instagram</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="Friend / Word of Mouth">Friend / Word of Mouth</option>
                <option value="Cohort referral">Cohort referral</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {error && <p className={styles.error}>{error}</p>}

            <button
              className={styles.btnPrimary}
              onClick={() => {
                const err = validateStep1()
                if (err) { setError(err); return }
                setStep(2)
              }}
            >
              Continue to Payment →
            </button>
          </div>
        )}

        {/* ══════════════════════════════════════
            STEP 2 — Payment
        ══════════════════════════════════════ */}
        {step === 2 && (
          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Secure your session</h2>
            <p className={styles.formSub}>Complete payment via PayPal to confirm your booking.</p>

            <div className={styles.paymentBox}>
              <div className={styles.paymentAmount}>
                <span className={styles.currency}>USD</span>
                <span className={styles.amount}>${SESSION_PRICE}</span>
                <span className={styles.paymentLabel}>Single Clarity Session · 60 min</span>
              </div>

              <a
                href={paypalLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.paypalBtn}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.59 3.025-2.566 6.082-8.558 6.082H9.828l-1.32 8.37h3.562l.873-5.532h2.135c4.245 0 6.707-2.076 7.566-6.526.35-1.793.133-3.203-.422-4.107z"/>
                </svg>
                Pay ${SESSION_PRICE} via PayPal
              </a>

              <p className={styles.paymentNote}>
                You'll be redirected to PayPal. After paying, copy your <strong>transaction ID</strong> or <strong>confirmation number</strong> and paste it below.
              </p>
            </div>

            <div className={styles.field} style={{ marginTop: '1.5rem' }}>
              <label>PayPal Confirmation / Transaction ID *</label>
              <input
                name="paypalConfirmation"
                value={form.paypalConfirmation}
                onChange={handle}
                placeholder="e.g. 3FX29847AB123456C"
              />
              <small className={styles.fieldNote}>Find this in your PayPal receipt email or transaction history.</small>
            </div>

            {error && <p className={styles.error}>{error}</p>}

            <div className={styles.btnRow}>
              <button className={styles.btnSecondary} onClick={() => setStep(1)}>← Back</button>
              <button
                className={styles.btnPrimary}
                onClick={() => {
                  const err = validateStep2()
                  if (err) { setError(err); return }
                  setStep(3)
                }}
              >
                Review Booking →
              </button>
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════
            STEP 3 — Confirm
        ══════════════════════════════════════ */}
        {step === 3 && (
          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Review your booking</h2>
            <p className={styles.formSub}>Please confirm everything looks correct before submitting.</p>

            <div className={styles.reviewGrid}>
              <div className={styles.reviewRow}><span>Name</span><strong>{form.name}</strong></div>
              <div className={styles.reviewRow}><span>Email</span><strong>{form.email}</strong></div>
              {form.phone && <div className={styles.reviewRow}><span>Phone</span><strong>{form.phone}</strong></div>}
              {form.preferredDate && <div className={styles.reviewRow}><span>Preferred Date</span><strong>{form.preferredDate}</strong></div>}
              {form.preferredTime && <div className={styles.reviewRow}><span>Preferred Time</span><strong>{form.preferredTime} ({form.timezone})</strong></div>}
              <div className={styles.reviewRow}><span>Session Focus</span><strong>{form.sessionFocus}</strong></div>
              <div className={styles.reviewRow}><span>Payment Ref</span><strong>{form.paypalConfirmation}</strong></div>
              <div className={styles.reviewRow}><span>Amount Paid</span><strong>${SESSION_PRICE} USD</strong></div>
            </div>

            <div className={styles.intentionPreview}>
              <span>Your Intention</span>
              <p>{form.intention}</p>
            </div>

            {error && <p className={styles.error}>{error}</p>}

            <div className={styles.btnRow}>
              <button className={styles.btnSecondary} onClick={() => setStep(2)}>← Back</button>
              <button
                className={styles.btnPrimary}
                onClick={submitBooking}
                disabled={loading}
              >
                {loading ? 'Submitting…' : 'Confirm Booking ✓'}
              </button>
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════
            STEP 4 — Success
        ══════════════════════════════════════ */}
        {step === 4 && (
          <div className={styles.successCard}>
            <div className={styles.successEye}>👁</div>
            <h2>Your session is booked, {form.name.split(' ')[0]}.</h2>
            <p className={styles.successSub}>
              David has received your intention and will confirm your session time within <strong>24 hours</strong>.
            </p>

            <div className={styles.successDetails}>
              <div className={styles.successRow}><span>Booking Reference</span><strong className={styles.bookingId}>{bookingId?.slice(0, 8).toUpperCase()}</strong></div>
              <div className={styles.successRow}><span>Confirmation sent to</span><strong>{form.email}</strong></div>
              <div className={styles.successRow}><span>Session type</span><strong>Single Clarity Session · 60 min</strong></div>
            </div>

            <div className={styles.nextSteps}>
              <h3>What happens next?</h3>
              <ol>
                <li>David reviews your intention and prepares for your session.</li>
                <li>You'll receive a Zoom link and confirmed time via email or WhatsApp within 24 hours.</li>
                <li>Show up as you are. The session holds space for exactly what you need.</li>
              </ol>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Message David on WhatsApp
            </a>

            <Link href="/" className={styles.homeLink}>← Return to home</Link>
          </div>
        )}

        {/* ── Footer note ── */}
        <div className={styles.footer}>
          <p>Questions? Reach David directly on <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>.</p>
        </div>
      </div>
    </>
  )
}
