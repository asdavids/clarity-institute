// pages/waitlist.js
import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

const C = { green:'#3D5A3E', brown:'#6B4A2A', orange:'#C1581A', cream:'#FAF6F0', cream2:'#F2EBE0', text:'#2C1F14', muted:'#7A6A5A', border:'#E0D5C5', white:'#ffffff' }
const serif = "'Cormorant Garamond', serif"
const sans = "'Jost', sans-serif"

export default function WaitlistPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  const submit = async () => {
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')
      setDone(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Join the Waitlist — The Clarity Institute</title>
        <meta name="description" content="Be the first to know when the next cohort opens. Join the waitlist for The Clarity Institute's group awakening program." />
        <meta property="og:title" content="Join the Waitlist — The Clarity Institute" />
        <meta property="og:description" content="The next cohort is coming. Reserve your place now." />
        <meta property="og:image" content="https://www.theclarityinstitute.guru/og-image.png" />
      </Head>

      <div style={{ minHeight: '100vh', background: C.cream, color: C.text, fontFamily: sans }}>

        {/* Nav */}
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 2rem', borderBottom: `1px solid ${C.border}`, background: C.white }}>
          <Link href="/" style={{ fontFamily: serif, fontSize: '1.2rem', fontWeight: 300, color: C.green, textDecoration: 'none', letterSpacing: '0.02em' }}>
            The Clarity Institute
          </Link>
          <Link href="/clarity-session" style={{ fontSize: '0.85rem', color: C.brown, textDecoration: 'none', borderBottom: `1px solid ${C.brown}`, paddingBottom: '1px' }}>
            Book a Session
          </Link>
        </nav>

        <div style={{ maxWidth: 580, margin: '0 auto', padding: '4rem 1.5rem' }}>

          {!done ? (
            <>
              {/* Header */}
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>👁</div>
                <h1 style={{ fontFamily: serif, fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 300, color: C.green, margin: '0 0 1rem', lineHeight: 1.2 }}>
                  The next cohort is coming.
                </h1>
                <p style={{ fontSize: '1rem', color: C.muted, lineHeight: 1.8, maxWidth: 420, margin: '0 auto' }}>
                  Join the waitlist and be the first to know when doors open — plus receive a free copy of <em>The Third Eye Awakening</em> while you wait.
                </p>
              </div>

              {/* What the cohort is */}
              <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 16, padding: '2rem', marginBottom: '2rem' }}>
                <h2 style={{ fontFamily: serif, fontSize: '1.4rem', fontWeight: 400, color: C.green, margin: '0 0 1.25rem' }}>
                  What you're joining
                </h2>
                {[
                  { icon: '🌿', title: 'Group Awakening Cohort', desc: 'A structured 52-day journey through spiritual awakening, guided by AS Davids with a small group of intentional seekers.' },
                  { icon: '🕯', title: 'Live sessions + community', desc: 'Regular group calls, peer reflection, and a shared space for questions and breakthroughs.' },
                  { icon: '📖', title: 'Daily practice framework', desc: 'Structured modules across 3 phases — foundation, deepening, and integration — with daily practices.' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', marginBottom: i < 2 ? '1.25rem' : 0 }}>
                    <span style={{ fontSize: '1.25rem', flexShrink: 0, marginTop: '2px' }}>{item.icon}</span>
                    <div>
                      <div style={{ fontWeight: 500, color: C.text, marginBottom: '0.25rem', fontSize: '0.95rem' }}>{item.title}</div>
                      <div style={{ fontSize: '0.875rem', color: C.muted, lineHeight: 1.6 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Form */}
              <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 16, padding: '2rem' }}>
                <h2 style={{ fontFamily: serif, fontSize: '1.3rem', fontWeight: 400, color: C.green, margin: '0 0 0.5rem' }}>
                  Reserve your place
                </h2>
                <p style={{ fontSize: '0.875rem', color: C.muted, margin: '0 0 1.5rem', lineHeight: 1.6 }}>
                  No payment now. You'll hear from AS Davids personally when the cohort opens.
                </p>

                <label style={{ fontSize: '0.8rem', fontWeight: 500, color: C.brown, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.4rem' }}>
                  Your email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError('') }}
                  onKeyDown={(e) => e.key === 'Enter' && submit()}
                  placeholder="you@example.com"
                  style={{ padding: '0.75rem 1rem', border: `1.5px solid ${error ? '#e74c3c' : C.border}`, borderRadius: 8, fontFamily: sans, fontSize: '0.95rem', color: C.text, background: C.cream, width: '100%', boxSizing: 'border-box', outline: 'none', marginBottom: '1rem' }}
                />

                {error && (
                  <div style={{ color: '#c0392b', background: '#fdf2f2', border: '1px solid #f5c6cb', padding: '0.75rem 1rem', borderRadius: 8, fontSize: '0.875rem', marginBottom: '1rem' }}>
                    {error}
                  </div>
                )}

                <button
                  onClick={submit}
                  disabled={loading}
                  style={{ width: '100%', padding: '0.95rem', background: loading ? C.muted : C.green, color: C.white, border: 'none', borderRadius: 8, fontFamily: sans, fontSize: '1rem', fontWeight: 500, cursor: loading ? 'not-allowed' : 'pointer', transition: 'background 0.2s' }}
                >
                  {loading ? 'Joining…' : 'Join the waitlist'}
                </button>

                <p style={{ fontSize: '0.78rem', color: C.muted, textAlign: 'center', marginTop: '0.875rem', marginBottom: 0 }}>
                  No spam. Unsubscribe any time.
                </p>
              </div>

              {/* Or book now */}
              <div style={{ textAlign: 'center', marginTop: '2rem', padding: '1.5rem', borderTop: `1px solid ${C.border}` }}>
                <p style={{ color: C.muted, fontSize: '0.9rem', margin: '0 0 0.75rem' }}>
                  Ready to start now?
                </p>
                <Link href="/clarity-session" style={{ display: 'inline-block', border: `1.5px solid ${C.green}`, color: C.green, padding: '0.75rem 1.75rem', borderRadius: 8, textDecoration: 'none', fontSize: '0.95rem', fontFamily: sans }}>
                  Book a 1-on-1 Clarity Session →
                </Link>
              </div>
            </>
          ) : (
            /* Success state */
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>✦</div>
              <h1 style={{ fontFamily: serif, fontSize: '2.2rem', fontWeight: 300, color: C.green, margin: '0 0 1rem' }}>
                You're on the list.
              </h1>
              <p style={{ color: C.muted, lineHeight: 1.8, fontSize: '1rem', maxWidth: 400, margin: '0 auto 2rem' }}>
                AS Davids will be in touch when the next cohort opens. Check your inbox — your free ebook is on its way.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: 300, margin: '0 auto' }}>
                <Link href="/dream-interpreter" style={{ display: 'block', background: C.green, color: C.white, padding: '0.875rem', borderRadius: 8, textDecoration: 'none', fontSize: '0.95rem' }}>
                  Try the Dream Interpreter →
                </Link>
                <Link href="/blog" style={{ display: 'block', border: `1.5px solid ${C.border}`, color: C.muted, padding: '0.875rem', borderRadius: 8, textDecoration: 'none', fontSize: '0.95rem' }}>
                  Read the blog
                </Link>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  )
}
