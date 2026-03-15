// pages/blog/what-is-the-third-eye.js
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
        <title>What Is the Third Eye? A Beginner's Guide — The Clarity Institute</title>
        <meta name="description" content="The third eye, or Ajna chakra, is far more than a mystical concept. It's a gateway to intuition, clarity, and deeper awareness." />
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
              <span style={{ fontSize:'0.8rem', color:C.muted }}>March 10, 2026</span>
              <span style={{ fontSize:'0.8rem', color:C.orange }}>6 min read</span>
            </div>
            <h1 style={{ fontFamily:serif, fontSize:'clamp(2rem, 5vw, 2.8rem)', color:C.green, fontWeight:300, margin:'0 0 1rem', lineHeight:1.2 }}>
              What Is the Third Eye? A Beginner's Guide
            </h1>
            <div style={{ width:48, height:2, background:C.orange, marginBottom:'1.5rem' }} />
          </div>

          <P>The third eye — known in Sanskrit as the Ajna chakra — has captivated seekers, mystics, and curious minds for thousands of years. But what is it, really? And why does it matter for your everyday life?</P>

          <P>At its simplest, the third eye is the seat of intuition. It's the part of you that knows things before your logical mind catches up. That feeling when you sense something is off before you can explain why. The flash of insight that comes in the shower. The quiet knowing that guides you when you finally stop overthinking.</P>

          <H2>Where Does It Come From?</H2>

          <P>The concept of the third eye appears across nearly every spiritual tradition. In Hinduism and Buddhism, it's the sixth chakra, located between the eyebrows — the point where individual consciousness meets universal awareness. In ancient Egypt, the Eye of Horus represented protection, health, and spiritual sight. Even Descartes, the father of Western rationalism, called the pineal gland "the seat of the soul."</P>

          <P>These traditions may use different language, but they all point to the same truth: there is a faculty of perception within you that goes beyond the five physical senses.</P>

          <H2>What Does "Opening" the Third Eye Mean?</H2>

          <P>Opening your third eye doesn't mean you'll suddenly see visions or hallucinate. For most people, it's far more subtle and far more useful than that.</P>

          <P>It means developing sharper intuition — the ability to sense what's right for you without needing external validation. It means seeing situations clearly, without the fog of anxiety, fear, or conditioning. It means accessing a kind of inner knowing that feels like remembering something you've always known but had forgotten.</P>

          <H2>How Do You Begin?</H2>

          <P>The foundation of third eye work is simple: learn to be still. Meditation, breathwork, and mindful awareness create the conditions for your intuitive faculty to strengthen. Just as a muscle grows with consistent use, your inner sight deepens with regular practice.</P>

          <P>You don't need to be a monk or a mystic. You need 10 minutes a day and the willingness to listen to what arises when the noise settles down.</P>

          <H2>A Practice to Try Today</H2>

          <P>Sit comfortably and close your eyes. Bring your attention to the space between your eyebrows — not with effort, but with gentle curiosity. Breathe naturally. Simply notice what you feel in that area. Warmth, tingling, pressure, or nothing at all — there's no wrong answer. Stay here for five minutes.</P>

          <P>Do this daily for a week and notice what shifts — in your dreams, your decisions, and your sense of inner clarity.</P>

          <div style={{ background:`linear-gradient(135deg, #f0f4f0, ${C.cream})`, border:`1px solid ${C.green}30`, borderRadius:14, padding:'1.75rem', marginTop:'2.5rem', textAlign:'center' }}>
            <p style={{ fontFamily:serif, fontSize:'1.2rem', color:C.green, margin:'0 0 0.5rem' }}>Ready to go deeper?</p>
            <p style={{ color:C.muted, fontSize:'0.9rem', margin:'0 0 1rem', lineHeight:1.7 }}>The 8-week cohort provides a complete, guided framework for third eye activation.</p>
            <Link href="/#pricing" style={{ display:'inline-block', background:C.green, color:C.white, padding:'0.75rem 1.5rem', borderRadius:8, textDecoration:'none', fontSize:'0.9rem', fontWeight:500 }}>Explore the Cohort →</Link>
          </div>
        </article>
      </div>
    </>
  )
}
