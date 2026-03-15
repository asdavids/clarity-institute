// pages/blog/understanding-your-dreams.js
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
        <title>Understanding Your Dreams: Messages from the Unseen — The Clarity Institute</title>
        <meta name="description" content="Dreams are not random. They are a language — your subconscious and spiritual self communicating what your waking mind can't yet see." />
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
              <span style={{ fontSize:'0.8rem', color:C.muted }}>February 20, 2026</span>
              <span style={{ fontSize:'0.8rem', color:C.orange }}>6 min read</span>
            </div>
            <h1 style={{ fontFamily:serif, fontSize:'clamp(2rem, 5vw, 2.8rem)', color:C.green, fontWeight:300, margin:'0 0 1rem', lineHeight:1.2 }}>
              Understanding Your Dreams: Messages from the Unseen
            </h1>
            <div style={{ width:48, height:2, background:C.orange, marginBottom:'1.5rem' }} />
          </div>

          <P>Every night, you enter another world. Your body rests, but your consciousness continues — weaving stories, revisiting memories, encountering symbols, and sometimes receiving information that your waking mind could never access. Dreams are not random noise. They are a language.</P>

          <P>In African spiritual traditions, dreams have always been treated with reverence — as messages from ancestors, from the divine, from the deeper self. The Bible is filled with dreams that changed the course of history. Even modern psychology, through Jung and others, has come to recognise dreams as a direct line to the unconscious mind.</P>

          <H2>Why Do We Dream?</H2>

          <P>Dreams serve multiple purposes. On a psychological level, they help process emotions, consolidate memories, and work through unresolved experiences. On a spiritual level, they serve as a bridge between your conscious self and the vast unseen world that your waking awareness filters out.</P>

          <P>When your third eye is opening, dreams often intensify. They become more vivid, more symbolic, and sometimes prophetic. This is because the same faculty that governs intuition and spiritual sight — the Ajna chakra — is most active during sleep.</P>

          <H2>Common Dream Types</H2>

          <P><strong>Processing dreams</strong> are the most common — your mind sorting through the day's events, emotions, and stresses. They often feel mundane or fragmented. These are your psyche's housekeeping.</P>

          <P><strong>Symbolic dreams</strong> communicate through metaphor. Water often represents emotions. Flying can represent freedom or spiritual elevation. Being chased may point to something you're avoiding in waking life. The key is learning your own symbol language — because while there are universal archetypes, your subconscious has its own vocabulary.</P>

          <P><strong>Visitation dreams</strong> involve encounters with deceased loved ones, spiritual figures, or beings of light. These dreams have a distinct quality — they feel more real than regular dreams, carry a strong emotional charge, and are remembered clearly upon waking. In many African traditions, these are understood as genuine spiritual encounters.</P>

          <P><strong>Prophetic dreams</strong> reveal future events. They may be literal or symbolic. You dream of a phone call, and it happens the next day. You dream of water rising, and an emotional upheaval follows. These experiences increase as your intuitive faculty develops.</P>

          <H2>How to Work with Your Dreams</H2>

          <P>The single most important practice is keeping a dream journal. Place a notebook and pen beside your bed. The moment you wake — before checking your phone, before getting up — write down everything you remember. Even fragments. Even feelings without images.</P>

          <P>Over weeks and months, patterns emerge. You begin to recognise recurring symbols, themes, and messages. Your relationship with your dream life deepens, and the barrier between your waking and sleeping consciousness becomes thinner.</P>

          <P>Before sleep, set an intention. It can be as simple as: "Show me what I need to see." This primes your subconscious to deliver more meaningful content. It's like tuning a radio to a specific frequency.</P>

          <H2>Dreams and the Third Eye</H2>

          <P>As your third eye practice deepens, expect your dreams to transform. Lucid dreaming — the ability to become aware that you're dreaming while still in the dream — often develops naturally. This is a powerful state that bridges meditation, astral projection, and dream work.</P>

          <P>Pay special attention to dreams that occur between 3am and 5am. In many spiritual traditions, this is considered the thinnest veil between worlds — a time when the subconscious is most receptive to spiritual communication.</P>

          <div style={{ background:`linear-gradient(135deg, #f0f4f0, ${C.cream})`, border:`1px solid ${C.green}30`, borderRadius:14, padding:'1.75rem', marginTop:'2.5rem', textAlign:'center' }}>
            <p style={{ fontFamily:serif, fontSize:'1.2rem', color:C.green, margin:'0 0 0.5rem' }}>Have a recurring dream you can't decode?</p>
            <p style={{ color:C.muted, fontSize:'0.9rem', margin:'0 0 1rem', lineHeight:1.7 }}>A Clarity Session can help you understand the messages your dreams are carrying.</p>
            <Link href="/clarity-session" style={{ display:'inline-block', background:C.green, color:C.white, padding:'0.75rem 1.5rem', borderRadius:8, textDecoration:'none', fontSize:'0.9rem', fontWeight:500 }}>Book a Session →</Link>
          </div>
        </article>
      </div>
    </>
  )
}
