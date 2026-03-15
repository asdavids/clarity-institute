// pages/blog/spiritual-growth-where-to-begin.js
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
        <title>Spiritual Growth: Where to Begin — The Clarity Institute</title>
        <meta name="description" content="Starting a spiritual journey can feel overwhelming. Here's a grounded, honest guide to beginning — no jargon, no gatekeeping, just the essentials." />
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
              <span style={{ fontSize:'0.8rem', color:C.muted }}>February 7, 2026</span>
              <span style={{ fontSize:'0.8rem', color:C.orange }}>6 min read</span>
            </div>
            <h1 style={{ fontFamily:serif, fontSize:'clamp(2rem, 5vw, 2.8rem)', color:C.green, fontWeight:300, margin:'0 0 1rem', lineHeight:1.2 }}>
              Spiritual Growth: Where to Begin When You Don't Know Where to Start
            </h1>
            <div style={{ width:48, height:2, background:C.orange, marginBottom:'1.5rem' }} />
          </div>

          <P>You feel it. Something stirring beneath the surface of your ordinary life. A sense that there's more — more meaning, more depth, more to you — than what you've been living. Maybe it came after a loss, a crisis, or a quiet moment that cracked something open. Whatever triggered it, the pull is real.</P>

          <P>But where do you actually begin?</P>

          <P>The spiritual world can feel overwhelming. There are so many traditions, so many teachers, so many practices — and much of it is contradictory. Crystals or prayer? Meditation or movement? Chakras or scripture? It's easy to get lost before you even start.</P>

          <P>Here's the truth: the starting point is simpler than you think.</P>

          <H2>Begin with Stillness</H2>

          <P>Every genuine spiritual tradition — from African indigenous practices to Buddhist meditation to Christian contemplation — begins with the same thing: learning to be still. Stillness is the foundation because it creates the conditions for everything else. You cannot hear the quiet voice within if your inner world is constantly noisy.</P>

          <P>You don't need a technique. Sit somewhere quiet for five minutes and do nothing. Don't try to meditate. Don't try to have an experience. Just sit with yourself. Notice your breath. Notice your thoughts. That's it.</P>

          <H2>Follow Your Curiosity, Not a Curriculum</H2>

          <P>There is no single correct path. The path that's right for you is the one you're drawn to. If you're curious about meditation, start there. If dreams fascinate you, start keeping a dream journal. If prayer feels natural, pray. If you're drawn to energy work, explore it.</P>

          <P>Your curiosity is not random — it's guidance. The things that pull your attention are often exactly what your soul needs next. Trust that.</P>

          <H2>Find One Practice and Commit</H2>

          <P>The most common mistake beginners make is trying everything at once. They meditate on Monday, do breathwork on Tuesday, try a crystal grid on Wednesday, and burn out by Friday. Depth comes from consistency, not variety.</P>

          <P>Choose one practice. Do it daily for 30 days. Even if it's just five minutes of sitting in silence. The commitment to return — day after day, regardless of whether it feels "productive" — is what transforms a technique into a practice, and a practice into a way of being.</P>

          <H2>Be Honest About What You're Seeking</H2>

          <P>Are you seeking peace? Answers? Healing? Power? Connection? Purpose? There's no wrong answer, but being honest about your motivation matters. It shapes which teachers you resonate with, which practices serve you, and what kind of growth you'll experience.</P>

          <P>Be especially honest about whether you're running toward something or away from something. Spiritual growth that's rooted in avoidance — trying to escape pain, bypass grief, or transcend the messiness of being human — tends to create more suffering, not less. The deepest growth happens when you're willing to turn toward your life, not away from it.</P>

          <H2>Seek Community, But Trust Yourself</H2>

          <P>Walking this path alone is possible, but having companions makes it richer and more sustainable. Find people who are exploring similar questions — whether online, in person, or through a structured programme like a cohort. The shared journey provides accountability, perspective, and the comfort of knowing you're not the only one feeling what you're feeling.</P>

          <P>But never hand your authority over to anyone else. No teacher, no tradition, no book should override your own inner knowing. The best guides don't create dependence — they help you trust yourself more deeply.</P>

          <H2>Be Patient</H2>

          <P>Spiritual growth is not linear. There will be periods of rapid insight followed by long plateaus. There will be moments of profound clarity followed by confusion. There will be days when you feel deeply connected and days when the whole thing feels pointless.</P>

          <P>This is the path. All of it. The doubt is part of it. The confusion is part of it. The patience you're being asked to develop is itself the growth.</P>

          <div style={{ background:`linear-gradient(135deg, #f0f4f0, ${C.cream})`, border:`1px solid ${C.green}30`, borderRadius:14, padding:'1.75rem', marginTop:'2.5rem', textAlign:'center' }}>
            <p style={{ fontFamily:serif, fontSize:'1.2rem', color:C.green, margin:'0 0 0.5rem' }}>Ready to begin with guidance?</p>
            <p style={{ color:C.muted, fontSize:'0.9rem', margin:'0 0 1rem', lineHeight:1.7 }}>The 8-week cohort gives you a structured starting point with community and personal support.</p>
            <Link href="/#pricing" style={{ display:'inline-block', background:C.green, color:C.white, padding:'0.75rem 1.5rem', borderRadius:8, textDecoration:'none', fontSize:'0.9rem', fontWeight:500 }}>Explore the Cohort →</Link>
          </div>
        </article>
      </div>
    </>
  )
}
