// pages/ebook.js
import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

const C = { green:'#3D5A3E', brown:'#6B4A2A', orange:'#C1581A', cream:'#FAF6F0', cream2:'#F2EBE0', text:'#2C1F14', muted:'#7A6A5A', border:'#E0D5C5', white:'#ffffff' }
const serif = "'Cormorant Garamond', serif"
const sans = "'Jost', sans-serif"

export default function EbookLanding() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('') // '', 'loading', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/ebook-download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inp = {
    width:'100%', padding:'0.85rem 1rem', border:`1.5px solid ${C.border}`,
    borderRadius:8, fontFamily:sans, fontSize:'0.95rem', color:C.text,
    background:C.cream, outline:'none', boxSizing:'border-box', marginBottom:'1rem',
  }

  return (
    <>
      <Head>
        <title>Free Ebook: The Third Eye Awakening — The Clarity Institute</title>
        <meta name="description" content="Download your free guide to third eye awakening. Learn the foundations of spiritual perception, daily practices, and how to activate your inner sight." />
        <meta property="og:title" content="Free Ebook: The Third Eye Awakening" />
        <meta property="og:description" content="A free guide to third eye awakening from The Clarity Institute. Enter your email to download instantly." />
        <meta property="og:image" content="https://www.theclarityinstitute.guru/og-image.png" />
        <meta property="og:url" content="https://www.theclarityinstitute.guru/ebook" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <div style={{ minHeight:'100vh', background:C.cream, fontFamily:sans }}>

        {/* Nav */}
        <nav style={{ background:C.white, borderBottom:`1px solid ${C.border}`, padding:'1rem 2rem', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <Link href="/" style={{ fontFamily:serif, fontSize:'1.3rem', color:C.green, textDecoration:'none', fontWeight:600 }}>The Clarity Institute</Link>
          <Link href="/" style={{ fontSize:'0.875rem', color:C.muted, textDecoration:'none' }}>← Home</Link>
        </nav>

        {/* Hero */}
        <div style={{
          background:`linear-gradient(160deg, ${C.white} 0%, ${C.cream} 40%, ${C.cream2} 100%)`,
          padding:'4rem 2rem 3rem', position:'relative', overflow:'hidden',
        }}>
          {/* Decorative circles */}
          <div style={{ position:'absolute', top:'10%', right:'8%', width:300, height:300, borderRadius:'50%', background:`radial-gradient(circle, ${C.orange}10 0%, transparent 70%)`, pointerEvents:'none' }} />
          <div style={{ position:'absolute', bottom:'5%', left:'5%', width:250, height:250, borderRadius:'50%', background:`radial-gradient(circle, ${C.green}08 0%, transparent 70%)`, pointerEvents:'none' }} />

          <div style={{ maxWidth:900, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'3rem', alignItems:'center' }}>

            {/* Left — Book visual */}
            <div style={{ textAlign:'center' }}>
              <div style={{
                width:260, height:340, margin:'0 auto',
                background:`linear-gradient(145deg, ${C.green}, #2e4530)`,
                borderRadius:'4px 16px 16px 4px',
                boxShadow:`12px 8px 40px ${C.brown}25, -2px 0 8px ${C.brown}15`,
                display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
                padding:'2rem', position:'relative',
              }}>
                {/* Spine effect */}
                <div style={{ position:'absolute', left:0, top:0, bottom:0, width:6, background:'linear-gradient(to right, rgba(0,0,0,0.2), transparent)', borderRadius:'4px 0 0 4px' }} />
                <div style={{ fontSize:'3rem', marginBottom:'1rem' }}>👁</div>
                <div style={{ fontFamily:serif, fontSize:'1.6rem', color:C.white, fontWeight:300, lineHeight:1.3, textAlign:'center', marginBottom:'0.5rem' }}>
                  The Third Eye Awakening
                </div>
                <div style={{ width:30, height:1, background:`${C.orange}`, margin:'0.5rem 0' }} />
                <div style={{ fontSize:'0.75rem', color:'rgba(255,255,255,0.6)', letterSpacing:'0.1em', textTransform:'uppercase' }}>AS Davids</div>
              </div>
              <p style={{ fontSize:'0.82rem', color:C.muted, marginTop:'1.25rem' }}>Free digital download · PDF</p>
            </div>

            {/* Right — Copy + Form */}
            <div>
              <span style={{ fontSize:'0.75rem', fontWeight:600, letterSpacing:'0.15em', textTransform:'uppercase', color:C.orange, display:'block', marginBottom:'0.75rem' }}>Free Ebook</span>
              <h1 style={{ fontFamily:serif, fontSize:'clamp(2rem, 4vw, 2.8rem)', color:C.green, fontWeight:300, margin:'0 0 1rem', lineHeight:1.15 }}>
                The Third Eye<br /><em style={{ color:C.brown }}>Awakening</em>
              </h1>
              <p style={{ color:C.muted, fontSize:'1.05rem', lineHeight:1.8, marginBottom:'1.5rem' }}>
                A foundational guide to understanding and activating your third eye. Written by AS Davids, this ebook covers the principles, practices, and inner shifts that begin the journey to spiritual perception.
              </p>

              {status === 'success' ? (
                <div style={{
                  background:C.white, border:`1.5px solid ${C.green}40`, borderRadius:14,
                  padding:'2rem', textAlign:'center',
                }}>
                  <div style={{ fontSize:'2.5rem', marginBottom:'0.75rem' }}>✉️</div>
                  <h2 style={{ fontFamily:serif, fontSize:'1.5rem', color:C.green, fontWeight:400, margin:'0 0 0.5rem' }}>Check your inbox!</h2>
                  <p style={{ color:C.muted, fontSize:'0.95rem', lineHeight:1.7, marginBottom:'1.25rem' }}>
                    We've sent the download link to <strong>{email}</strong>. It should arrive within a minute — check your spam folder too.
                  </p>
                  <Link href="/#pricing" style={{
                    display:'inline-block', background:C.green, color:C.white,
                    padding:'0.75rem 1.5rem', borderRadius:8, textDecoration:'none',
                    fontSize:'0.9rem', fontWeight:500,
                  }}>Explore the 8-Week Cohort →</Link>
                </div>
              ) : (
                <div style={{
                  background:C.white, border:`1px solid ${C.border}`, borderRadius:14,
                  padding:'1.75rem', boxShadow:'0 4px 24px rgba(0,0,0,0.06)',
                }}>
                  <p style={{ fontSize:'0.9rem', color:C.text, fontWeight:500, marginBottom:'1rem' }}>
                    Enter your details to get instant access:
                  </p>
                  <form onSubmit={handleSubmit}>
                    <input style={inp} type="text" placeholder="Your first name" value={name} onChange={e => setName(e.target.value)} required />
                    <input style={inp} type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} required />
                    {status === 'error' && (
                      <p style={{ color:'#c0392b', fontSize:'0.85rem', background:'#fdf2f2', border:'1px solid #f5c6cb', padding:'0.65rem 1rem', borderRadius:8, marginBottom:'1rem' }}>
                        Something went wrong. Please try again or message David on WhatsApp.
                      </p>
                    )}
                    <button type="submit" disabled={status === 'loading'} style={{
                      width:'100%', padding:'0.95rem', background:C.orange, color:C.white,
                      border:'none', borderRadius:8, fontFamily:sans, fontSize:'1rem',
                      fontWeight:500, cursor:'pointer', opacity: status === 'loading' ? 0.7 : 1,
                      letterSpacing:'0.02em',
                    }}>
                      {status === 'loading' ? 'Sending...' : 'Send Me the Free Ebook →'}
                    </button>
                  </form>
                  <p style={{ fontSize:'0.78rem', color:C.muted, marginTop:'0.75rem', textAlign:'center', lineHeight:1.6 }}>
                    No spam, ever. You'll also be notified when the next cohort opens.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* What's inside */}
        <div style={{ maxWidth:800, margin:'0 auto', padding:'3rem 1.5rem' }}>
          <h2 style={{ fontFamily:serif, fontSize:'1.8rem', color:C.green, fontWeight:300, textAlign:'center', margin:'0 0 2rem' }}>What's Inside</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:'1.25rem' }}>
            {[
              { emoji:'🧠', title:'The Science & Spirit of the Third Eye', desc:'What the Ajna chakra actually is — beyond the myths and misconceptions.' },
              { emoji:'🌀', title:'Daily Activation Practices', desc:'Simple, grounded techniques you can start using immediately — no experience needed.' },
              { emoji:'🌙', title:'Dreams, Visions & Inner Sight', desc:'How to recognise and work with the subtle perceptions that arise as your awareness expands.' },
              { emoji:'🔑', title:'Removing the Blocks', desc:'Common obstacles to spiritual perception and how to move through them with patience and clarity.' },
            ].map(item => (
              <div key={item.title} style={{
                background:C.white, border:`1px solid ${C.border}`, borderRadius:12,
                padding:'1.5rem', textAlign:'center',
              }}>
                <div style={{ fontSize:'2rem', marginBottom:'0.5rem' }}>{item.emoji}</div>
                <h3 style={{ fontFamily:serif, fontSize:'1.15rem', color:C.green, fontWeight:400, margin:'0 0 0.4rem' }}>{item.title}</h3>
                <p style={{ fontSize:'0.85rem', color:C.muted, lineHeight:1.6, margin:0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Social proof */}
        <div style={{ background:C.green, padding:'3rem 1.5rem' }}>
          <div style={{ maxWidth:600, margin:'0 auto', textAlign:'center' }}>
            <p style={{ fontFamily:serif, fontSize:'1.3rem', fontStyle:'italic', color:'rgba(255,255,255,0.9)', lineHeight:1.8, margin:'0 0 1rem' }}>
              "This ebook was the beginning of everything for me. It gave me the language and the practices to finally trust what I'd been feeling for years."
            </p>
            <div style={{ color:'rgba(255,255,255,0.6)', fontSize:'0.85rem' }}>— Student, Nairobi</div>
          </div>
        </div>

        {/* About the author */}
        <div style={{ maxWidth:600, margin:'0 auto', padding:'3rem 1.5rem', textAlign:'center' }}>
          <div style={{ fontSize:'2.5rem', marginBottom:'0.75rem' }}>👁</div>
          <h2 style={{ fontFamily:serif, fontSize:'1.5rem', color:C.green, fontWeight:300, margin:'0 0 0.75rem' }}>About the Author</h2>
          <p style={{ color:C.muted, fontSize:'0.95rem', lineHeight:1.8, marginBottom:'1rem' }}>
            AS Davids is a writer and spiritual thinker whose work explores the intersection of faith, spirituality, prophetic insight, African history, and human psychology. He is the founder of The Clarity Institute.
          </p>
          <Link href="/about" style={{ color:C.green, textDecoration:'none', fontSize:'0.9rem', fontWeight:500 }}>Learn more about David →</Link>
        </div>

        {/* Footer */}
        <div style={{ textAlign:'center', padding:'2rem', borderTop:`1px solid ${C.border}`, fontSize:'0.82rem', color:C.muted }}>
          <Link href="/" style={{ color:C.green, textDecoration:'none' }}>← Return to home</Link>
          {' · '}
          <Link href="/privacy" style={{ color:C.muted, textDecoration:'none' }}>Privacy Policy</Link>
        </div>
      </div>
    </>
  )
}
