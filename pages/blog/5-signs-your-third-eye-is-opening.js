// pages/blog/5-signs-your-third-eye-is-opening.js
import Head from 'next/head'
import Link from 'next/link'

const C = { green:'#3D5A3E', brown:'#6B4A2A', orange:'#C1581A', cream:'#FAF6F0', text:'#2C1F14', muted:'#7A6A5A', border:'#E0D5C5', white:'#ffffff' }
const serif = "'Cormorant Garamond', serif"
const sans = "'Jost', sans-serif"

const P = ({ children }) => <p style={{ color:C.text, fontSize:'1rem', lineHeight:1.85, margin:'0 0 1.25rem' }}>{children}</p>
const H2 = ({ children }) => <h2 style={{ fontFamily:serif, fontSize:'1.6rem', color:C.green, fontWeight:400, margin:'2rem 0 0.75rem' }}>{children}</h2>

export default function Post() {
  return (
    <>
      <Head>
        <title>5 Signs Your Third Eye Is Opening — The Clarity Institute</title>
        <meta name="description" content="Many people experience subtle shifts when their third eye begins to activate. Here are five common signs and what they mean." />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>
      <div style={{ minHeight:'100vh', background:C.cream, fontFamily:sans }}>
        <nav style={{ background:C.white, borderBottom:`1px solid ${C.border}`, padding:'1rem 2rem', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <Link href="/" style={{ fontFamily:serif, fontSize:'1.3rem', color:C.green, textDecoration:'none', fontWeight:600 }}>The Clarity Institute</Link>
          <Link href="/blog" style={{ fontSize:'0.875rem', color:C.muted, textDecoration:'none' }}>← All Posts</Link>
        </nav>

        <article style={{ maxWidth:680, margin:'0 auto', padding:'3rem 1.5rem' }}>
          <div style={{ marginBottom:'2rem' }}>
            <div style={{ display:'flex', gap:'1rem', marginBottom:'0.75rem' }}>
              <span style={{ fontSize:'0.8rem', color:C.muted }}>March 5, 2026</span>
              <span style={{ fontSize:'0.8rem', color:C.orange }}>5 min read</span>
            </div>
            <h1 style={{ fontFamily:serif, fontSize:'clamp(2rem, 5vw, 2.8rem)', color:C.green, fontWeight:300, margin:'0 0 1rem', lineHeight:1.2 }}>
              5 Signs Your Third Eye Is Opening
            </h1>
            <div style={{ width:48, height:2, background:C.orange, marginBottom:'1.5rem' }} />
          </div>

          <P>When the third eye begins to activate, it rarely announces itself with fireworks. The shifts are often quiet, subtle, and easy to dismiss — until you learn to recognise them. Here are five of the most common signs that something is awakening within you.</P>

          <H2>1. Heightened Intuition</H2>

          <P>You start "knowing" things without logical explanation. You think of someone and they call minutes later. You get a strong feeling about a decision and it turns out to be right. This isn't coincidence — it's your intuitive faculty strengthening. The more you trust it, the louder it becomes.</P>

          <H2>2. Vivid or Lucid Dreams</H2>

          <P>Your dream life becomes more active, more colourful, and more meaningful. You might start remembering dreams in detail, experiencing lucid dreams for the first time, or receiving messages and symbols in your sleep that feel significant. This happens because the third eye is closely connected to the subconscious mind — and dreams are its language.</P>

          <H2>3. Pressure or Tingling Between the Eyebrows</H2>

          <P>Many people report a gentle pressure, warmth, or pulsing sensation in the area between the eyebrows — especially during meditation or moments of deep focus. This is the physical sensation of energy moving through the Ajna chakra. It's not something to force or chase; simply notice it when it arises.</P>

          <H2>4. Increased Sensitivity to Energy</H2>

          <P>You become more attuned to the "energy" of people, places, and situations. Crowded spaces might feel draining. Certain people might feel heavy to be around. Nature might feel more alive and nourishing than before. This sensitivity is a sign that your perception is expanding beyond the physical.</P>

          <H2>5. A Deep Pull Toward Purpose</H2>

          <P>Perhaps the most profound sign: you feel a growing inner pull toward something meaningful. A sense that there's more to life than what you've been living. A quiet urgency to align your outer life with your inner truth. This isn't restlessness — it's your soul signalling that you're ready for the next level of your journey.</P>

          <P>If you're experiencing any of these signs, trust what's happening. You're not imagining it. Your inner eye is waking up — and the best thing you can do is create the conditions for it to keep opening.</P>

          <div style={{ background:`linear-gradient(135deg, #f0f4f0, ${C.cream})`, border:`1px solid ${C.green}30`, borderRadius:14, padding:'1.75rem', marginTop:'2.5rem', textAlign:'center' }}>
            <p style={{ fontFamily:serif, fontSize:'1.2rem', color:C.green, margin:'0 0 0.5rem' }}>Want guided support?</p>
            <p style={{ color:C.muted, fontSize:'0.9rem', margin:'0 0 1rem', lineHeight:1.7 }}>Book a 1:1 Clarity Session with David to explore what's opening in you.</p>
            <Link href="/clarity-session" style={{ display:'inline-block', background:C.green, color:C.white, padding:'0.75rem 1.5rem', borderRadius:8, textDecoration:'none', fontSize:'0.9rem', fontWeight:500 }}>Book a Session →</Link>
          </div>
        </article>
      </div>
    </>
  )
}
