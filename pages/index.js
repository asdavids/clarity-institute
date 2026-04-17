// pages/index.js — The Clarity Institute
// Fully self-contained, zero external CSS dependencies

import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

const WHATSAPP = '27817904941'
const PDF_LINK = 'https://drive.google.com/uc?export=download&id=1tlDSepusgZ16sB0_A3Edgu75azQtHGlz'

const C = {
  green:  '#3D5A3E',
  green2: '#2e4530',
  brown:  '#6B4A2A',
  orange: '#C1581A',
  cream:  '#FAF6F0',
  cream2: '#F2EBE0',
  text:   '#2C1F14',
  muted:  '#7A6A5A',
  border: '#E0D5C5',
  white:  '#ffffff',
}

const serif  = "'Cormorant Garamond', serif"
const sans   = "'Jost', sans-serif"

export default function Home() {
  const [waitlistEmail, setWaitlistEmail] = useState('')
  const [waitlistStatus, setWaitlistStatus] = useState('')
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' })
  const [contactStatus, setContactStatus] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [faqOpen, setFaqOpen] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleWaitlist = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: waitlistEmail }),
      })
      setWaitlistStatus(res.ok ? 'success' : 'error')
      if (res.ok) setWaitlistEmail('')
    } catch { setWaitlistStatus('error') }
  }

  const handleContact = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm),
      })
      setContactStatus(res.ok ? 'success' : 'error')
      if (res.ok) setContactForm({ name: '', email: '', message: '' })
    } catch { setContactStatus('error') }
  }

  // ── Shared style helpers ──
  const inp = {
    display: 'block', width: '100%', padding: '0.8rem 1rem',
    border: `1.5px solid ${C.border}`, borderRadius: 8,
    fontFamily: sans, fontSize: '0.95rem', color: C.text,
    background: C.cream, outline: 'none', boxSizing: 'border-box',
    marginBottom: '1rem',
  }
  const sectionWrap = (bg = C.cream) => ({
    padding: '5rem 1.5rem', background: bg,
  })
  const inner = { maxWidth: 1100, margin: '0 auto' }
  const sectionLabel = {
    display: 'block', fontSize: '0.75rem', fontWeight: 600,
    letterSpacing: '0.15em', textTransform: 'uppercase',
    color: C.orange, marginBottom: '0.75rem',
  }
  const sectionTitle = {
    fontFamily: serif, fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: 300, color: C.green, margin: '0 0 1rem', lineHeight: 1.15,
  }
  const sectionSub = {
    fontSize: '1.05rem', color: C.muted, lineHeight: 1.7,
    maxWidth: 560, margin: '0 auto 3rem',
  }
  const centeredHeader = { textAlign: 'center', marginBottom: '3rem' }

  return (
    <>
      <Head>
        <title>The Clarity Institute — Awaken Your Third Eye</title>
        <meta name="description" content="Transform your life through third eye awakening. Join our 8-week cohort and private mentorship programs with David Muyunda." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook / WhatsApp */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.theclarityinstitute.guru/" />
        <meta property="og:title" content="The Clarity Institute — Awaken Your Third Eye" />
        <meta property="og:description" content="An 8-week journey to activate your third eye, sharpen your intuition, and step into the life you've always sensed was possible." />
        <meta property="og:image" content="https://www.theclarityinstitute.guru/og-image.png" />
        <meta property="og:site_name" content="The Clarity Institute" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Clarity Institute — Awaken Your Third Eye" />
        <meta name="twitter:description" content="An 8-week journey to activate your third eye, sharpen your intuition, and step into the life you've always sensed was possible." />
        <meta name="twitter:image" content="https://www.theclarityinstitute.guru/og-image.png" />

        {/* Extras */}
        <meta name="theme-color" content="#3D5A3E" />
        <link rel="canonical" href="https://www.theclarityinstitute.guru/" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ fontFamily: sans, color: C.text, background: C.cream }}>

        {/* ── NAVBAR ── */}
        <nav style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '1rem 2rem',
          background: scrolled ? 'rgba(250,246,240,0.97)' : 'transparent',
          borderBottom: scrolled ? `1px solid ${C.border}` : 'none',
          transition: 'all 0.3s ease',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
        }}>
          <div style={{ fontFamily: serif, fontSize: '1.4rem', color: C.green, fontWeight: 600, letterSpacing: '0.01em' }}>
            The Clarity Institute
          </div>
          <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span style={menuOpen ? { transform: 'rotate(45deg) translateY(7px)' } : {}} />
            <span style={menuOpen ? { opacity: 0 } : {}} />
            <span style={menuOpen ? { transform: 'rotate(-45deg) translateY(-7px)' } : {}} />
          </button>
          <div className={`nav-links${menuOpen ? ' open' : ''}`}>
            {['#about', '#cohort', '#mentorship', '#pricing', '#faq', '#contact'].map((href, i) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} style={{ fontSize: '0.875rem', color: C.text, textDecoration: 'none', fontWeight: 400, letterSpacing: '0.03em', opacity: 0.8 }}>
                {['About', 'Cohort', 'Mentorship', 'Pricing', 'FAQ', 'Contact'][i]}
              </a>
            ))}
            <Link href="/blog" onClick={() => setMenuOpen(false)} style={{ fontSize: '0.875rem', color: C.text, textDecoration: 'none', fontWeight: 400, letterSpacing: '0.03em', opacity: 0.8 }}>Blog</Link>
            <Link href="/login" onClick={() => setMenuOpen(false)} style={{ fontSize: '0.875rem', color: C.muted, textDecoration: 'none' }}>Sign In</Link>
            <a href="#pricing" onClick={() => setMenuOpen(false)} style={{
              background: C.green, color: C.white, padding: '0.5rem 1.25rem',
              borderRadius: 6, fontSize: '0.875rem', fontWeight: 500,
              textDecoration: 'none', letterSpacing: '0.02em',
            }}>Enroll Now</a>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section style={{
          minHeight: '100vh', display: 'flex', alignItems: 'center',
          background: `linear-gradient(160deg, ${C.white} 0%, ${C.cream} 50%, ${C.cream2} 100%)`,
          padding: '8rem 2rem 5rem', position: 'relative', overflow: 'hidden',
        }}>
          {/* Decorative circles */}
          <div style={{ position: 'absolute', top: '10%', right: '5%', width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle, ${C.orange}15 0%, transparent 70%)`, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '5%', left: '0%', width: 300, height: 300, borderRadius: '50%', background: `radial-gradient(circle, ${C.green}10 0%, transparent 70%)`, pointerEvents: 'none' }} />

          <div className="grid-hero" style={{ ...inner, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            {/* Left — headline + buttons */}
            <div className="hero-text">
              <span style={{ ...sectionLabel, textAlign: 'left' }}>Begin Your Awakening</span>
              <h1 style={{
                fontFamily: serif, fontSize: 'clamp(3rem, 6vw, 5rem)',
                fontWeight: 300, color: C.green, margin: '0 0 1.5rem', lineHeight: 1.1,
                letterSpacing: '-0.01em',
              }}>
                See Beyond<br /><em style={{ color: C.brown }}>What You've<br />Been Told</em>
              </h1>
              <p style={{ fontSize: '1.1rem', color: C.muted, lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 480 }}>
                An 8-week journey to activate your third eye, sharpen your intuition,
                and step into the life you've always sensed was possible.
              </p>
              <div className="hero-buttons" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#pricing" style={{
                  background: C.green, color: C.white, padding: '0.9rem 2rem',
                  borderRadius: 8, fontSize: '1rem', fontWeight: 500,
                  textDecoration: 'none', letterSpacing: '0.02em',
                  boxShadow: `0 4px 20px ${C.green}40`,
                }}>Begin Your Journey</a>
                <Link href="/ebook" style={{
                  border: `1.5px solid ${C.brown}`, color: C.brown, padding: '0.9rem 2rem',
                  borderRadius: 8, fontSize: '0.9rem', fontWeight: 500,
                  textDecoration: 'none', letterSpacing: '0.05em',
                  background: 'transparent',
                }}>FREE EBOOK ↓</Link>
              </div>

              {/* ── CLARITY SESSION CARD ── */}
              <div style={{
                marginTop: '2.5rem',
                background: `linear-gradient(135deg, ${C.green2} 0%, ${C.green} 100%)`,
                borderRadius: 14,
                padding: '1.5rem',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: `0 8px 40px ${C.green}40`,
              }}>
                {/* Subtle ring decoration */}
                <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: 160, height: 160, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.08)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: 100, height: 100, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.06)', pointerEvents: 'none' }} />

                <div style={{ position: 'relative', zIndex: 1 }}>
                  {/* Badge */}
                  <span style={{
                    display: 'inline-block',
                    background: `${C.orange}`,
                    color: C.white,
                    fontSize: '0.68rem', fontWeight: 600,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    padding: '0.25rem 0.75rem', borderRadius: 999,
                    marginBottom: '0.85rem',
                  }}>✦ Start Here</span>

                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        fontFamily: serif, fontSize: '1.5rem', fontWeight: 400,
                        color: C.white, margin: '0 0 0.4rem', lineHeight: 1.2,
                      }}>Single Clarity Session</h3>
                      <p style={{
                        fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)',
                        lineHeight: 1.6, margin: '0 0 1rem', maxWidth: 280,
                      }}>
                        Something in you already knows it's time. One hour with David — to break through, receive guidance, and leave with clarity you can feel.
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                        <span style={{ fontFamily: serif, fontSize: '1.6rem', fontWeight: 300, color: C.white }}>$49.99</span>
                        <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)' }}>· 60 min · one-time</span>
                      </div>
                    </div>
                  </div>

                  <Link href="/clarity-session" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    marginTop: '1.1rem',
                    background: C.white, color: C.green,
                    padding: '0.7rem 1.5rem', borderRadius: 8,
                    fontSize: '0.9rem', fontWeight: 600,
                    textDecoration: 'none', letterSpacing: '0.02em',
                  }}>
                    👁 Book a Session →
                  </Link>
                </div>
              </div>
            </div>

            {/* Right — eye orb */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div className="hero-eye" style={{
                width: 320, height: 320, borderRadius: '50%',
                background: `radial-gradient(circle at 40% 40%, ${C.cream2}, ${C.cream})`,
                border: `1px solid ${C.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '8rem', boxShadow: `0 20px 80px ${C.brown}20`,
                position: 'relative',
              }}>
                👁
                <div style={{
                  position: 'absolute', inset: -20, borderRadius: '50%',
                  border: `1px dashed ${C.brown}30`,
                }} />
                <div style={{
                  position: 'absolute', inset: -40, borderRadius: '50%',
                  border: `1px dashed ${C.brown}15`,
                }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── DREAM INTERPRETER BANNER ── */}
        <section style={{
          padding: '5rem 1.5rem',
          background: `linear-gradient(135deg, ${C.green2} 0%, ${C.green} 100%)`,
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Decorative circles */}
          <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-80px', left: '-40px', width: 250, height: 250, borderRadius: '50%', background: 'rgba(255,255,255,0.03)', pointerEvents: 'none' }} />

          <div style={{ ...inner, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '3rem' }}>
            <div style={{ flex: 1, minWidth: 280 }}>
              <span style={{ ...sectionLabel, color: `${C.orange}` }}>New Feature</span>
              <h2 style={{ fontFamily: serif, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: C.white, margin: '0 0 1rem', lineHeight: 1.15 }}>
                Explore Your Dreams
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, maxWidth: 480, margin: '0 0 0.5rem' }}>
                Your dreams carry messages from the depths of your unconscious. Discover their hidden symbols, emotional landscapes, and the guidance your psyche is offering you.
              </p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginBottom: '2rem' }}>
                Free to use. No sign-in required.
              </p>
              <Link href="/dream-interpreter" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                background: C.white, color: C.green,
                padding: '0.9rem 2rem', borderRadius: 8,
                fontSize: '1rem', fontWeight: 600,
                textDecoration: 'none', letterSpacing: '0.02em',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
              }}>
                🌙 Interpret My Dream
              </Link>
            </div>

            {/* Preview card */}
            <div style={{
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 16, padding: '2rem',
              maxWidth: 340, width: '100%',
            }}>
              <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Example interpretation</div>
              <p style={{ fontFamily: serif, fontSize: '1rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, margin: '0 0 1.25rem' }}>
                "I was flying over a vast ocean at dusk, watching a golden light rise from beneath the waves…"
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  { label: 'Theme', value: 'Spiritual transcendence & inner awakening' },
                  { label: 'Key symbol', value: 'Ocean — the unconscious mind' },
                  { label: 'Guidance', value: 'Your inner light is rising. Trust it.' },
                ].map(item => (
                  <div key={item.label} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 8, padding: '0.6rem 0.85rem' }}>
                    <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{item.label}</span>
                    <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)', marginTop: '0.2rem' }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" style={sectionWrap(C.white)}>
          <div style={inner}>
            <div className="grid-about" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
              <div>
                <span style={sectionLabel}>About</span>
                <h2 style={sectionTitle}>What Is The Clarity Institute?</h2>
                <p style={{ color: C.muted, lineHeight: 1.8, marginBottom: '1rem' }}>
                  The Clarity Institute is a sacred space for those called to go deeper — beyond the noise of everyday life into the quiet knowing that lives within you.
                </p>
                <p style={{ color: C.muted, lineHeight: 1.8, marginBottom: '1rem' }}>
                  Founded by David, a spiritual guide with over a decade of practice in third eye activation, intuitive development, and consciousness expansion.
                </p>
                <p style={{ color: C.muted, lineHeight: 1.8 }}>
                  Whether you're just beginning to sense there's more, or you've been walking this path for years — there's a place for you here.
                </p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[
                  { num: '500+', label: 'Students Awakened' },
                  { num: '8',    label: 'Weeks to Transform' },
                  { num: '52',   label: 'Days of Practice' },
                  { num: '∞',    label: 'Community Support' },
                ].map(s => (
                  <div key={s.label} style={{
                    background: C.cream, border: `1px solid ${C.border}`,
                    borderRadius: 12, padding: '1.75rem 1.5rem', textAlign: 'center',
                  }}>
                    <div style={{ fontFamily: serif, fontSize: '2.5rem', color: C.green, fontWeight: 300, lineHeight: 1 }}>{s.num}</div>
                    <div style={{ fontSize: '0.8rem', color: C.muted, marginTop: '0.4rem', lineHeight: 1.4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── COHORT ── */}
        <section id="cohort" style={sectionWrap(C.cream)}>
          <div style={inner}>
            <div style={centeredHeader}>
              <span style={sectionLabel}>The Program</span>
              <h2 style={sectionTitle}>The 8-Week Cohort</h2>
              <p style={sectionSub}>A complete journey from Foundation to Embodiment — 52 days of guided awakening.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {[
                { weeks: 'Weeks 1–2', title: 'Foundation', emoji: '🌱', desc: 'Establish your practice, understand the third eye anatomy, and begin daily activation rituals that prepare the ground.' },
                { weeks: 'Weeks 3–5', title: 'Activation & Expansion', emoji: '🔥', desc: 'Open the Ajna chakra, develop your intuitive gifts, explore the subtle realms and discover your unique channel.' },
                { weeks: 'Weeks 6–8', title: 'Integration & Embodiment', emoji: '🌿', desc: 'Ground your gifts into daily life, relationships, vocation, and your unique soul purpose going forward.' },
              ].map((w, i) => (
                <div key={w.title} style={{
                  background: C.white, border: `1px solid ${C.border}`,
                  borderRadius: 14, padding: '2rem',
                  borderTop: `3px solid ${[C.green, C.orange, C.brown][i]}`,
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{w.emoji}</div>
                  <div style={{ fontSize: '0.75rem', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>{w.weeks}</div>
                  <h3 style={{ fontFamily: serif, fontSize: '1.5rem', color: C.green, fontWeight: 400, margin: '0 0 0.75rem' }}>{w.title}</h3>
                  <p style={{ color: C.muted, lineHeight: 1.7, fontSize: '0.9rem', margin: 0 }}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MENTORSHIP ── */}
        <section id="mentorship" style={sectionWrap(C.white)}>
          <div style={inner}>
            <div style={centeredHeader}>
              <span style={sectionLabel}>1:1 Work</span>
              <h2 style={sectionTitle}>Private Mentorship</h2>
              <p style={sectionSub}>For those who seek deeper, more personal guidance on their journey.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {[
                {
                  icon: '🕯', title: 'Single Clarity Session',
                  desc: 'A powerful 60-minute one-on-one session to address a specific block, receive intuitive guidance, or deepen a particular practice.',
                  tag: 'One-time session', href: '/clarity-session', btnLabel: 'Book a Session', isLink: true,
                },
                {
                  icon: '🌀', title: 'Monthly Mentorship',
                  desc: 'Ongoing 1:1 support with bi-weekly calls, voice message access, and a custom practice plan tailored to your path.',
                  tag: 'Ongoing support',
                  href: '/mentorship',
                  btnLabel: 'Apply Now', isLink: true,
                },
                {
                  icon: '👁', title: '90-Day Immersion',
                  desc: 'A complete transformation container with bi-weekly sessions, unlimited messaging, custom curriculum, and lifetime community access.',
                  tag: 'Deep transformation',
                  href: '/immersion',
                  btnLabel: 'Apply Now', isLink: true,
                },
              ].map(m => (
                <div key={m.title} style={{
                  background: C.cream, border: `1px solid ${C.border}`,
                  borderRadius: 14, padding: '2rem', display: 'flex',
                  flexDirection: 'column',
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{m.icon}</div>
                  <h3 style={{ fontFamily: serif, fontSize: '1.4rem', color: C.green, fontWeight: 400, margin: '0 0 0.75rem' }}>{m.title}</h3>
                  <p style={{ color: C.muted, lineHeight: 1.7, fontSize: '0.9rem', flex: 1, margin: '0 0 1.25rem' }}>{m.desc}</p>
                  <span style={{
                    display: 'inline-block', background: `${C.green}15`, color: C.green,
                    fontSize: '0.75rem', fontWeight: 500, padding: '0.25rem 0.75rem',
                    borderRadius: 999, marginBottom: '1.25rem', letterSpacing: '0.05em',
                  }}>{m.tag}</span>
                  {m.isLink ? (
                    <Link href={m.href} style={{
                      display: 'block', textAlign: 'center',
                      background: C.green, color: C.white, padding: '0.8rem',
                      borderRadius: 8, textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500,
                    }}>{m.btnLabel}</Link>
                  ) : (
                    <a href={m.href} target="_blank" rel="noopener noreferrer" style={{
                      display: 'block', textAlign: 'center',
                      background: C.green, color: C.white, padding: '0.8rem',
                      borderRadius: 8, textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500,
                    }}>{m.btnLabel}</a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section style={{ ...sectionWrap(C.green), color: C.white }}>
          <div style={inner}>
            <div style={{ ...centeredHeader }}>
              <span style={{ ...sectionLabel, color: `${C.orange}` }}>Stories</span>
              <h2 style={{ ...sectionTitle, color: C.white }}>What Students Say</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {[
                { quote: "I had been searching for years. The Clarity Institute gave me the tools, the community, and the courage to actually trust what I've always known inside.", name: 'Amara T.', location: 'Nairobi, Kenya' },
                { quote: "David's guidance is unlike anything I've experienced. He meets you exactly where you are and helps you see what was already there.", name: 'James M.', location: 'Johannesburg, South Africa' },
                { quote: "The 8-week cohort changed the way I move through every single day. I am clearer, calmer, and more myself than I've ever been.", name: 'Priya S.', location: 'London, UK' },
              ].map(t => (
                <div key={t.name} style={{
                  background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: 14, padding: '2rem',
                }}>
                  <p style={{ fontFamily: serif, fontSize: '1.15rem', fontStyle: 'italic', lineHeight: 1.8, color: 'rgba(255,255,255,0.9)', margin: '0 0 1.5rem' }}>"{t.quote}"</p>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: C.white }}>{t.name}</div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.2rem' }}>{t.location}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* TikTok link */}
            <div style={{ textAlign:'center', marginTop:'2rem' }}>
              <a href="https://www.tiktok.com/@asdavids1" target="_blank" rel="noopener noreferrer" style={{
                display:'inline-flex', alignItems:'center', gap:'0.6rem',
                background:'rgba(255,255,255,0.12)', border:'1px solid rgba(255,255,255,0.25)',
                color:C.white, padding:'0.75rem 1.5rem', borderRadius:999,
                textDecoration:'none', fontSize:'0.9rem', fontWeight:500,
                transition:'background 0.2s',
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52V6.8a4.84 4.84 0 01-1-.11z"/></svg>
                See more stories on TikTok →
              </a>
            </div>
          </div>
        </section>
        <section id="pricing" style={sectionWrap(C.cream)}>
          <div style={inner}>
            <div style={centeredHeader}>
              <span style={sectionLabel}>Investment</span>
              <h2 style={sectionTitle}>Choose Your Path</h2>
              <p style={sectionSub}>Every path leads to the same destination — clarity, presence, and an awakened inner life.</p>
            </div>
            <div className="grid-pricing" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
              {[
                {
                  tier: 'Essentials', name: 'The Cohort',
                  oldPrice: '$444', price: '$99', per: '8-week program',
                  features: ['8 live group sessions', 'Full video library', 'Workbooks & journals', 'Private community access', 'Guided meditations'],
                  btnLabel: 'Enroll Now', btnHref: 'https://www.paypal.com/paypalme/Xhantipta/99',
                  featured: false,
                },
                {
                  tier: 'Most Popular', name: 'Cohort + Mentorship',
                  oldPrice: '$777', price: '$199', per: '8 weeks + monthly calls',
                  features: ['Everything in The Cohort', '2 private 1:1 sessions', 'Email support access', 'Custom practice plan', 'Priority enrollment next cycle'],
                  btnLabel: 'Enroll Now', btnHref: 'https://www.paypal.com/paypalme/Xhantipta/199',
                  featured: true,
                },
                {
                  tier: 'Deep Dive', name: '90-Day Immersion',
                  oldPrice: '$1,444', price: '$299', per: '3-month container',
                  features: ['Bi-weekly 1:1 sessions', 'Unlimited messaging', 'Custom curriculum', 'Full library + community', 'Lifetime resource access'],
                  btnLabel: 'Apply Now', btnHref: 'https://www.paypal.com/paypalme/Xhantipta/299',
                  featured: false,
                },
              ].map(p => (
                <div key={p.name} style={{
                  background: C.white,
                  border: `1.5px solid ${p.featured ? C.orange : C.border}`,
                  borderRadius: 16, padding: '2rem',
                  boxShadow: p.featured ? `0 8px 40px ${C.orange}20` : '0 2px 12px rgba(0,0,0,0.04)',
                  transform: p.featured ? 'translateY(-8px)' : 'none',
                  position: 'relative',
                }}>
                  {p.featured && (
                    <div style={{
                      position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
                      background: C.orange, color: C.white, fontSize: '0.72rem', fontWeight: 600,
                      padding: '0.3rem 1.1rem', borderRadius: 999, letterSpacing: '0.08em',
                      textTransform: 'uppercase', whiteSpace: 'nowrap',
                    }}>Most Popular</div>
                  )}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 600, color: C.orange, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '0.3rem' }}>{p.tier}</span>
                    <h3 style={{ fontFamily: serif, fontSize: '1.5rem', color: C.green, fontWeight: 400, margin: '0 0 1rem' }}>{p.name}</h3>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '0.9rem', color: '#bbb', textDecoration: 'line-through' }}>{p.oldPrice}</span>
                      <span style={{ fontFamily: serif, fontSize: '3rem', fontWeight: 300, color: C.green, lineHeight: 1 }}>{p.price}</span>
                    </div>
                    <span style={{ fontSize: '0.85rem', color: C.muted }}>{p.per}</span>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.75rem' }}>
                    {p.features.map(f => (
                      <li key={f} style={{ fontSize: '0.9rem', color: C.text, padding: '0.5rem 0', borderBottom: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <span style={{ color: C.green, fontWeight: 600 }}>✦</span> {f}
                      </li>
                    ))}
                  </ul>
                  <a href={p.btnHref} target="_blank" rel="noopener noreferrer" style={{
                    display: 'block', textAlign: 'center', padding: '0.9rem',
                    background: p.featured ? C.orange : C.green,
                    color: C.white, borderRadius: 8, textDecoration: 'none',
                    fontWeight: 500, fontSize: '0.95rem', letterSpacing: '0.02em',
                  }}>{p.btnLabel}</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" style={sectionWrap(C.white)}>
          <div style={{ ...inner, maxWidth: 760 }}>
            <div style={centeredHeader}>
              <span style={sectionLabel}>Common Questions</span>
              <h2 style={sectionTitle}>Frequently Asked</h2>
            </div>
            {[
              { q: 'Do I need any prior experience with meditation or spirituality?', a: 'Not at all. The cohort is designed for both beginners and experienced practitioners. David meets you exactly where you are and guides you from there.' },
              { q: 'What happens during the 8-week cohort?', a: 'Each week includes a live group session with David, guided meditations, journaling prompts, and daily activation practices. You also get access to a private community of fellow seekers for support between sessions.' },
              { q: 'How are the sessions delivered?', a: 'All live sessions happen via Zoom. You\'ll receive your Zoom link after enrollment. Sessions are also recorded so you can revisit them at your own pace.' },
              { q: 'What is a Single Clarity Session?', a: 'It\'s a powerful 60-minute one-on-one call with David. You share what\'s alive for you, and David provides intuitive guidance, energy work, and practical tools tailored to your situation.' },
              { q: 'What is your refund policy?', a: 'Due to the nature of digital content and personalised services, all sales are final. If you have questions about which program is right for you, message David on WhatsApp before enrolling.' },
              { q: 'I\'m in a different timezone — can I still join?', a: 'Absolutely. Session times are flexible, and all live sessions are recorded. Many of our students are in Africa, Europe, and Asia. David will find a time that works for you.' },
              { q: 'How do I pay?', a: 'Payment is processed securely through PayPal. You can pay with your PayPal balance, bank account, or credit/debit card — no PayPal account required.' },
            ].map((item, i) => (
              <div key={i} style={{
                borderBottom: `1px solid ${C.border}`,
                marginBottom: 0,
              }}>
                <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} style={{
                  width: '100%', textAlign: 'left', background: 'none', border: 'none',
                  padding: '1.25rem 0', cursor: 'pointer', fontFamily: sans,
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem',
                }}>
                  <span style={{ fontSize: '1rem', fontWeight: 500, color: C.text, lineHeight: 1.5 }}>{item.q}</span>
                  <span style={{
                    fontSize: '1.4rem', color: C.muted, flexShrink: 0,
                    transform: faqOpen === i ? 'rotate(45deg)' : 'none',
                    transition: 'transform 0.2s',
                  }}>+</span>
                </button>
                {faqOpen === i && (
                  <div style={{
                    padding: '0 0 1.25rem', color: C.muted, fontSize: '0.95rem', lineHeight: 1.8,
                  }}>
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── WAITLIST ── */}
        <section style={{ padding: '4rem 1.5rem', background: C.cream2, textAlign: 'center' }}>
          <div style={{ maxWidth: 520, margin: '0 auto' }}>
            <span style={sectionLabel}>Stay Connected</span>
            <h2 style={{ ...sectionTitle, textAlign: 'center' }}>Join the Waitlist</h2>
            <p style={{ color: C.muted, marginBottom: '1.5rem', lineHeight: 1.7 }}>Be first to know when the next cohort opens. No spam, ever.</p>
            {waitlistStatus === 'success' ? (
              <p style={{ color: C.green, fontWeight: 500, fontSize: '1rem' }}>✦ You're on the list. We'll be in touch.</p>
            ) : (
              <form onSubmit={handleWaitlist} className="waitlist-form" style={{ display: 'flex', gap: '0.75rem', maxWidth: 420, margin: '0 auto' }}>
                <input
                  type="email" value={waitlistEmail}
                  onChange={e => setWaitlistEmail(e.target.value)}
                  placeholder="your@email.com" required
                  style={{ ...inp, marginBottom: 0, flex: 1 }}
                />
                <button type="submit" style={{
                  background: C.green, color: C.white, border: 'none',
                  padding: '0.8rem 1.5rem', borderRadius: 8, fontFamily: sans,
                  fontSize: '0.9rem', fontWeight: 500, cursor: 'pointer', whiteSpace: 'nowrap',
                }}>Join</button>
              </form>
            )}
            {waitlistStatus === 'error' && <p style={{ color: '#c0392b', marginTop: '0.5rem', fontSize: '0.875rem' }}>Something went wrong. Try WhatsApp instead.</p>}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" style={sectionWrap(C.white)}>
          <div className="grid-contact" style={{ ...inner, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            <div>
              <span style={sectionLabel}>Get in Touch</span>
              <h2 style={sectionTitle}>We'd Love to Hear From You</h2>
              <p style={{ color: C.muted, lineHeight: 1.8, marginBottom: '2rem' }}>
                Have questions about the cohort, mentorship, or which path is right for you? David personally responds to every message.
              </p>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                background: '#25D366', color: C.white, padding: '0.85rem 1.5rem',
                borderRadius: 8, fontSize: '0.95rem', fontWeight: 500, textDecoration: 'none',
              }}>💬 Message on WhatsApp</a>
            </div>
            <form onSubmit={handleContact}>
              <input type="text" placeholder="Your Name" value={contactForm.name}
                onChange={e => setContactForm({ ...contactForm, name: e.target.value })}
                required style={inp} />
              <input type="email" placeholder="Your Email" value={contactForm.email}
                onChange={e => setContactForm({ ...contactForm, email: e.target.value })}
                required style={inp} />
              <textarea placeholder="Your message..." value={contactForm.message}
                onChange={e => setContactForm({ ...contactForm, message: e.target.value })}
                required rows={5}
                style={{ ...inp, resize: 'vertical', lineHeight: 1.6 }} />
              {contactStatus === 'success' && <p style={{ color: C.green, fontWeight: 500, marginBottom: '0.75rem' }}>✦ Message sent. David will be in touch soon.</p>}
              {contactStatus === 'error' && <p style={{ color: '#c0392b', marginBottom: '0.75rem' }}>Something went wrong. Please try WhatsApp.</p>}
              <button type="submit" style={{
                background: C.green, color: C.white, border: 'none',
                padding: '0.9rem 2rem', borderRadius: 8, fontFamily: sans,
                fontSize: '1rem', fontWeight: 500, cursor: 'pointer', width: '100%',
              }}>Send Message</button>
            </form>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ background: C.text, color: 'rgba(255,255,255,0.7)', padding: '3rem 2rem' }}>
          <div className="footer-inner" style={{ ...inner, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem', marginBottom: '2rem' }}>
            <div>
              <div style={{ fontFamily: serif, fontSize: '1.4rem', color: C.white, fontWeight: 400, marginBottom: '0.5rem' }}>The Clarity Institute</div>
              <p style={{ fontSize: '0.875rem', margin: 0, opacity: 0.6 }}>Awakening minds. Transforming lives.</p>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              {[['#about','About'],['#cohort','Cohort'],['#mentorship','Mentorship'],['#pricing','Pricing']].map(([href,label]) => (
                <a key={href} href={href} style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.875rem' }}>{label}</a>
              ))}
              <Link href="/login" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.875rem' }}>Student Login</Link>
              <Link href="/blog" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.875rem' }}>Blog</Link>
              <Link href="/about" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.875rem' }}>About David</Link>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="https://www.tiktok.com/@asdavids1" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.875rem' }}>TikTok</a>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', textDecoration: 'none', fontSize: '0.875rem' }}>WhatsApp</a>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <Link href="/terms" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.78rem' }}>Terms of Service</Link>
            <Link href="/privacy" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.78rem' }}>Privacy Policy</Link>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', textAlign: 'center', fontSize: '0.8rem', opacity: 0.5 }}>
            © {new Date().getFullYear()} The Clarity Institute. All rights reserved.
          </div>
        </footer>

      </div>
    </>
  )
}
