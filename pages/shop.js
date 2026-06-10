// pages/shop.js
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

const C = {
  green: '#3D5A3E', brown: '#6B4A2A', orange: '#C1581A',
  cream: '#FAF6F0', cream2: '#F2EBE0', text: '#2C1F14',
  muted: '#7A6A5A', border: '#E0D5C5', white: '#ffffff',
  gold: '#D4A843',
}
const serif = "'Cormorant Garamond', serif"
const sans = "'Jost', sans-serif"

export default function Shop() {
  const router = useRouter()
  const [step, setStep] = useState('buy') // 'buy' | 'creating' | 'claim' | 'loading' | 'success' | 'error' | 'cancelled'
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [orderID, setOrderID] = useState('')

  // On return from PayPal, detect orderID in URL
  useEffect(() => {
    const { status, token } = router.query // PayPal returns 'token' as the orderID
    if (status === 'success' && token) {
      setOrderID(token)
      setStep('claim')
    } else if (status === 'cancelled') {
      setStep('cancelled')
    }
  }, [router.query])

  const handlePayPal = async () => {
    setStep('creating')
    setErrorMsg('')
    try {
      const res = await fetch('/api/create-book-order', { method: 'POST' })
      const data = await res.json()
      if (!res.ok || !data.approvalUrl) {
        setErrorMsg('Could not initiate payment. Please try again.')
        setStep('buy')
        return
      }
      // Redirect to PayPal
      window.location.href = data.approvalUrl
    } catch {
      setErrorMsg('Network error. Please try again.')
      setStep('buy')
    }
  }

  const handleClaim = async () => {
    if (!email) { setErrorMsg('Please enter your email address.'); return }
    if (!orderID) { setErrorMsg('Missing order ID. Please complete payment first.'); return }
    setErrorMsg('')
    setStep('loading')
    try {
      const res = await fetch('/api/book-purchase', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, orderID }),
      })
      const data = await res.json()
      if (res.ok) {
        setStep('success')
      } else {
        setErrorMsg(data.error || 'Something went wrong. Please try again.')
        setStep('claim')
      }
    } catch {
      setErrorMsg('Network error. Please try again.')
      setStep('claim')
    }
  }

  const inp = {
    width: '100%', padding: '0.85rem 1rem',
    border: `1.5px solid ${C.border}`, borderRadius: 8,
    fontFamily: sans, fontSize: '0.95rem', color: C.text,
    background: C.white, outline: 'none', boxSizing: 'border-box',
    marginBottom: '0.85rem',
  }

  return (
    <>
      <Head>
        <title>The Rules of Life — AS Davids | The Clarity Institute</title>
        <meta name="description" content="A 382-page prophetic guide to navigating life with clarity, purpose, and divine direction. By AS Davids. Available now for $7." />
        <meta property="og:title" content="The Rules of Life — AS Davids" />
        <meta property="og:description" content="A prophetic guide to life's deepest questions. 382 pages of raw wisdom from AS Davids." />
        <meta property="og:image" content="https://www.theclarityinstitute.guru/og-image.png" />
        <meta property="og:url" content="https://www.theclarityinstitute.guru/shop" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ minHeight: '100vh', background: C.cream, fontFamily: sans }}>

        {/* Nav */}
        <nav style={{
          background: C.white, borderBottom: `1px solid ${C.border}`,
          padding: '1rem 2rem', display: 'flex',
          justifyContent: 'space-between', alignItems: 'center',
        }}>
          <Link href="/" style={{ fontFamily: serif, fontSize: '1.3rem', color: C.green, textDecoration: 'none', fontWeight: 600 }}>
            The Clarity Institute
          </Link>
          <Link href="/" style={{ fontSize: '0.875rem', color: C.muted, textDecoration: 'none' }}>← Home</Link>
        </nav>

        {/* Hero */}
        <div style={{
          background: `linear-gradient(160deg, #1a1a1a 0%, #2C1F14 60%, #1a1a1a 100%)`,
          padding: '5rem 2rem 4rem', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: '20%', right: '10%', width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle, ${C.orange}18 0%, transparent 70%)`, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: 0, left: '15%', width: 300, height: 300, borderRadius: '50%', background: `radial-gradient(circle, ${C.gold}10 0%, transparent 70%)`, pointerEvents: 'none' }} />

          <div style={{ maxWidth: 960, margin: '0 auto', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '4rem', alignItems: 'center' }}>
            <div style={{ position: 'relative', flexShrink: 0, boxShadow: '20px 20px 60px rgba(0,0,0,0.7), -4px 0 12px rgba(0,0,0,0.4)', borderRadius: '4px 12px 12px 4px', overflow: 'hidden' }}>
              <img src="/rules-of-life-cover.webp" alt="The Rules of Life by AS Davids" style={{ display: 'block', width: 220, height: 'auto', borderRadius: '4px 12px 12px 4px' }} />
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 8, background: 'linear-gradient(to right, rgba(0,0,0,0.5), transparent)' }} />
            </div>
            <div>
              <p style={{ fontFamily: sans, fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: C.gold, margin: '0 0 0.75rem' }}>New Release</p>
              <h1 style={{ fontFamily: serif, fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: C.white, fontWeight: 400, margin: '0 0 0.5rem', lineHeight: 1.15 }}>The Rules of Life</h1>
              <p style={{ fontFamily: serif, fontSize: '1.1rem', color: `${C.gold}cc`, fontStyle: 'italic', margin: '0 0 1.5rem' }}>by AS Davids</p>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, fontSize: '1rem', margin: '0 0 1.5rem', maxWidth: 500 }}>
                A 382-page prophetic work that cuts through the noise of modern life. Written from a place of divine insight, this book does not comfort — it awakens.
              </p>
              <div style={{ display: 'flex', gap: '2rem', marginBottom: '1.5rem' }}>
                {[['Format', 'Digital (PDF)'], ['Pages', '382'], ['Price', '$7.00']].map(([label, val]) => (
                  <div key={label}>
                    <div style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 2 }}>{label}</div>
                    <div style={{ color: label === 'Price' ? C.gold : C.white, fontSize: label === 'Price' ? '1.1rem' : '0.9rem', fontWeight: label === 'Price' ? 600 : 400 }}>{val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '3rem 2rem', display: 'grid', gridTemplateColumns: '1fr 380px', gap: '3rem', alignItems: 'start' }}>

          {/* Left */}
          <div>
            <h2 style={{ fontFamily: serif, fontSize: '1.8rem', color: C.text, fontWeight: 400, margin: '0 0 1.5rem' }}>What this book carries</h2>
            {[
              { title: 'The Laws You Were Never Taught', desc: 'Ancient truths about how life actually works — from cause and consequence to the role of alignment in everything you experience.' },
              { title: 'Prophetic Clarity on Relationships', desc: 'Why certain people enter your life, what they reveal, and how to stop repeating cycles that drain your divine purpose.' },
              { title: 'Purpose, Direction & Calling', desc: 'Not a self-help formula — a prophetic dissection of how calling works and what blocks most people from walking in it.' },
              { title: 'The Inner Life', desc: 'Faith, identity, spiritual warfare, and the quiet battle for your soul that no one talks about directly.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: i < 3 ? `1px solid ${C.border}` : 'none' }}>
                <span style={{ color: C.orange, fontSize: '1rem', marginTop: 3, flexShrink: 0 }}>✦</span>
                <div>
                  <div style={{ fontWeight: 600, color: C.text, marginBottom: '0.3rem', fontSize: '0.95rem' }}>{item.title}</div>
                  <div style={{ color: C.muted, lineHeight: 1.7, fontSize: '0.9rem' }}>{item.desc}</div>
                </div>
              </div>
            ))}
            <div style={{ background: `linear-gradient(135deg, ${C.green}12, ${C.orange}08)`, border: `1px solid ${C.green}30`, borderRadius: 12, padding: '1.5rem', marginTop: '1rem' }}>
              <p style={{ fontFamily: serif, fontSize: '1.1rem', fontStyle: 'italic', color: C.text, lineHeight: 1.8, margin: '0 0 0.75rem' }}>
                "Most people are living inside a set of rules they never agreed to. This book names them — and shows you the door."
              </p>
              <p style={{ fontSize: '0.8rem', color: C.muted, margin: 0 }}>— AS Davids</p>
            </div>
          </div>

          {/* Right — Purchase card */}
          <div style={{ position: 'sticky', top: '2rem' }}>
            <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 16, padding: '2rem', boxShadow: '0 8px 40px rgba(0,0,0,0.08)' }}>

              {/* Price */}
              <div style={{ textAlign: 'center', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: `1px solid ${C.border}` }}>
                <div style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: C.muted, marginBottom: '0.5rem' }}>Digital Download</div>
                <div style={{ fontFamily: serif, fontSize: '2.8rem', color: C.text, fontWeight: 400, lineHeight: 1 }}>$7<span style={{ fontSize: '1rem', color: C.muted }}>.00</span></div>
                <div style={{ fontSize: '0.8rem', color: C.muted, marginTop: '0.4rem' }}>One-time payment · Instant delivery</div>
              </div>

              {/* BUY */}
              {step === 'buy' && (
                <>
                  <p style={{ fontSize: '0.9rem', color: C.muted, lineHeight: 1.7, marginBottom: '1.5rem', textAlign: 'center' }}>
                    Pay securely via PayPal. You'll be redirected back here to receive the book.
                  </p>
                  <button onClick={handlePayPal} style={{ width: '100%', padding: '0.95rem', background: '#FFC439', color: '#003087', border: 'none', borderRadius: 8, fontFamily: sans, fontSize: '1rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', transition: 'opacity 0.2s' }}
                    onMouseOver={e => e.currentTarget.style.opacity = '0.88'}
                    onMouseOut={e => e.currentTarget.style.opacity = '1'}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#003087"><path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .921-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.775-4.471z" /></svg>
                    Pay $7 with PayPal
                  </button>
                  {errorMsg && <p style={{ color: '#c0392b', fontSize: '0.85rem', textAlign: 'center', marginTop: '0.75rem' }}>{errorMsg}</p>}
                  <p style={{ fontSize: '0.75rem', color: C.muted, textAlign: 'center', marginTop: '0.75rem' }}>🔒 Secured by PayPal · No account required</p>
                </>
              )}

              {/* CREATING ORDER */}
              {step === 'creating' && (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>⏳</div>
                  <p style={{ color: C.muted, fontFamily: serif, fontSize: '1rem', fontStyle: 'italic' }}>Preparing your checkout…</p>
                </div>
              )}

              {/* CLAIM — after returning from PayPal */}
              {step === 'claim' && (
                <>
                  <div style={{ background: '#f0f7f0', border: '1px solid #c8d8c8', borderRadius: 8, padding: '0.85rem 1rem', marginBottom: '1.25rem', textAlign: 'center' }}>
                    <span style={{ fontSize: '1.2rem' }}>✅</span>
                    <p style={{ margin: '0.3rem 0 0', fontSize: '0.88rem', color: C.green, fontWeight: 600 }}>Payment received — enter your email to get the book.</p>
                  </div>
                  <input type="text" placeholder="Your name (optional)" value={name} onChange={e => setName(e.target.value)} style={inp} />
                  <input type="email" placeholder="Your email address *" value={email} onChange={e => setEmail(e.target.value)} style={{ ...inp, marginBottom: '1.1rem' }} />
                  {errorMsg && <p style={{ color: '#c0392b', fontSize: '0.85rem', margin: '-0.4rem 0 0.8rem' }}>{errorMsg}</p>}
                  <button onClick={handleClaim} style={{ width: '100%', padding: '0.95rem', background: C.green, color: C.white, border: 'none', borderRadius: 8, fontFamily: sans, fontSize: '1rem', fontWeight: 600, cursor: 'pointer', transition: 'opacity 0.2s' }}
                    onMouseOver={e => e.currentTarget.style.opacity = '0.88'}
                    onMouseOut={e => e.currentTarget.style.opacity = '1'}>
                    Send Me the Book →
                  </button>
                  <p style={{ fontSize: '0.78rem', color: C.muted, textAlign: 'center', marginTop: '0.75rem' }}>You'll receive a download link immediately.</p>
                </>
              )}

              {/* LOADING */}
              {step === 'loading' && (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>📖</div>
                  <p style={{ color: C.muted, fontFamily: serif, fontSize: '1.1rem', fontStyle: 'italic' }}>Verifying payment & sending your book…</p>
                </div>
              )}

              {/* SUCCESS */}
              {step === 'success' && (
                <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✦</div>
                  <h3 style={{ fontFamily: serif, fontSize: '1.4rem', color: C.green, fontWeight: 400, margin: '0 0 0.75rem' }}>It's on its way.</h3>
                  <p style={{ color: C.muted, lineHeight: 1.7, fontSize: '0.9rem', margin: '0 0 1.25rem' }}>
                    Check your inbox — your copy of <em>The Rules of Life</em> has been sent. Check spam if it doesn't arrive within a few minutes.
                  </p>
                  <Link href="/" style={{ display: 'inline-block', background: C.green, color: C.white, padding: '0.75rem 1.5rem', borderRadius: 8, textDecoration: 'none', fontSize: '0.9rem' }}>
                    Back to The Clarity Institute
                  </Link>
                </div>
              )}

              {/* CANCELLED */}
              {step === 'cancelled' && (
                <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>↩</div>
                  <p style={{ color: C.muted, fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>Payment was cancelled. No charge was made.</p>
                  <button onClick={() => setStep('buy')} style={{ background: C.green, color: C.white, border: 'none', padding: '0.75rem 1.5rem', borderRadius: 8, fontFamily: sans, fontSize: '0.9rem', cursor: 'pointer' }}>
                    Try Again
                  </button>
                </div>
              )}

              {/* What you get */}
              {(step === 'buy' || step === 'claim') && (
                <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: `1px solid ${C.border}` }}>
                  {['382-page PDF, readable on any device', 'Immediate delivery to your inbox', 'Yours to keep forever'].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                      <span style={{ color: C.green, fontSize: '0.8rem', marginTop: 2 }}>✓</span>
                      <span style={{ fontSize: '0.82rem', color: C.muted }}>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
              <p style={{ fontSize: '0.82rem', color: C.muted, margin: '0 0 0.4rem' }}>Questions before you buy?</p>
              <a href="https://wa.me/27817904941" style={{ fontSize: '0.85rem', color: C.green, textDecoration: 'none' }}>💬 Message AS Davids on WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
