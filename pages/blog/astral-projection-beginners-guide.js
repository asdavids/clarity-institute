// pages/blog/astral-projection-beginners-guide.js
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
        <title>Astral Projection: A Beginner's Guide — The Clarity Institute</title>
        <meta name="description" content="Astral projection is the experience of consciousness separating from the physical body. Here's what it is, how it works, and how to begin safely." />
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
              <span style={{ fontSize:'0.8rem', color:C.muted }}>March 12, 2026</span>
              <span style={{ fontSize:'0.8rem', color:C.orange }}>8 min read</span>
            </div>
            <h1 style={{ fontFamily:serif, fontSize:'clamp(2rem, 5vw, 2.8rem)', color:C.green, fontWeight:300, margin:'0 0 1rem', lineHeight:1.2 }}>
              Astral Projection: A Beginner's Guide to Travelling Beyond the Body
            </h1>
            <div style={{ width:48, height:2, background:C.orange, marginBottom:'1.5rem' }} />
          </div>

          <P>Astral projection — the experience of consciousness separating from the physical body and travelling through non-physical realms — has been reported across cultures and centuries. From the ancient Egyptians to Tibetan monks, from indigenous African traditions to modern Western explorers, the out-of-body experience is one of humanity's most consistent spiritual phenomena.</P>

          <P>Yet for many people, it remains shrouded in mystery, fear, or scepticism. Let's bring some clarity to what astral projection actually is, how it works, and how you can begin exploring it safely.</P>

          <H2>What Is Astral Projection?</H2>

          <P>At its core, astral projection is the conscious experience of existing outside your physical body. Unlike a dream — where you're passively swept along by the subconscious — astral projection involves a clear, lucid awareness that you are somewhere other than your body, often with heightened perception and a profound sense of freedom.</P>

          <P>Many traditions teach that we are not our bodies. We are consciousness — spiritual beings inhabiting a physical form. Astral projection is simply the experience of that truth becoming tangible.</P>

          <H2>Is It Safe?</H2>

          <P>This is the most common question, and the answer is straightforward: yes, when approached with respect and groundedness. You cannot get "stuck" outside your body. Your consciousness is always connected to your physical form by what many traditions call the silver cord — an unbreakable energetic link.</P>

          <P>That said, the astral plane is vast, and like any unfamiliar territory, it's wise to enter with preparation. A strong meditation practice, emotional stability, and clear intention are your best protections.</P>

          <H2>How Does It Happen?</H2>

          <P>Astral projection typically occurs in the hypnagogic state — the borderland between waking and sleeping. Your body falls asleep while your mind stays alert. From this state, many people report feeling vibrations, hearing a buzzing sound, or sensing a shift — followed by the experience of rising, floating, or rolling out of their body.</P>

          <P>Some people experience it spontaneously. Others cultivate it through dedicated practice. Both are valid.</P>

          <H2>A Simple Practice to Begin</H2>

          <P>Lie down in a comfortable position, flat on your back. Close your eyes and progressively relax every part of your body, starting from your feet and moving up to the crown of your head. This may take 15–20 minutes. The goal is complete physical relaxation while maintaining mental alertness.</P>

          <P>Once deeply relaxed, imagine a rope hanging above you. Without moving your physical body, visualise yourself reaching up and pulling on that rope — hand over hand — as though climbing out of your body. Don't worry if nothing happens immediately. The intention itself begins to train your consciousness.</P>

          <P>Practice this for 20 minutes daily, preferably in the early morning or after a nap when your body is already close to the sleep threshold.</P>

          <H2>What to Expect</H2>

          <P>Your first experiences may be brief — a few seconds of floating, a flash of seeing your room from above, or simply an intensification of the vibrational state. This is progress. With consistent practice, the experiences lengthen and deepen.</P>

          <P>Keep a journal beside your bed. Write down everything immediately upon returning — the sensations, the visuals, the emotions. This strengthens the bridge between your astral experiences and waking memory.</P>

          <div style={{ background:`linear-gradient(135deg, #f0f4f0, ${C.cream})`, border:`1px solid ${C.green}30`, borderRadius:14, padding:'1.75rem', marginTop:'2.5rem', textAlign:'center' }}>
            <p style={{ fontFamily:serif, fontSize:'1.2rem', color:C.green, margin:'0 0 0.5rem' }}>Want personalised guidance?</p>
            <p style={{ color:C.muted, fontSize:'0.9rem', margin:'0 0 1rem', lineHeight:1.7 }}>Book a Clarity Session to explore astral projection with David's direct support.</p>
            <Link href="/clarity-session" style={{ display:'inline-block', background:C.green, color:C.white, padding:'0.75rem 1.5rem', borderRadius:8, textDecoration:'none', fontSize:'0.9rem', fontWeight:500 }}>Book a Session →</Link>
          </div>
        </article>
      </div>
    </>
  )
}
