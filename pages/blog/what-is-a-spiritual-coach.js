// pages/blog/what-is-a-spiritual-coach.js
import Head from 'next/head'
import Link from 'next/link'

const C = { green:'#3D5A3E', brown:'#6B4A2A', orange:'#C1581A', cream:'#FAF6F0', text:'#2C1F14', muted:'#7A6A5A', border:'#E0D5C5', white:'#ffffff' }
const serif = "'Cormorant Garamond', serif"
const sans = "'Jost', sans-serif"

const P = ({ children }) => <p style={{ color:C.text, fontSize:'1rem', lineHeight:1.85, margin:'0 0 1.25rem' }}>{children}</p>
const H2 = ({ children }) => <h2 style={{ fontFamily:serif, fontSize:'1.6rem', color:C.green, fontWeight:400, margin:'2rem 0 0.75rem' }}>{children}</h2>
const FAQ = ({ q, a }) => (
  <div style={{ borderTop:`1px solid ${C.border}`, paddingTop:'1rem', marginTop:'1rem' }}>
    <p style={{ fontWeight:600, color:C.text, fontSize:'0.95rem', margin:'0 0 0.4rem' }}>{q}</p>
    <p style={{ color:C.muted, fontSize:'0.9rem', lineHeight:1.75, margin:0 }}>{a}</p>
  </div>
)

export default function Post() {
  return (
    <>
      <Head>
        <title>What Is a Spiritual Coach and How Do You Choose One? — The Clarity Institute</title>
        <meta name="description" content="A spiritual coach helps you understand and navigate your inner life. Here's what they do, how they differ from therapists and mentors, and how to choose the right one." />
        <meta property="og:title" content="What Is a Spiritual Coach and How Do You Choose One?" />
        <meta property="og:description" content="A spiritual coach helps you navigate your inner life. Here's what they do, how they differ from therapists, and how to choose the right one." />
        <meta property="og:image" content="https://www.theclarityinstitute.guru/og-image.png" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="What Is a Spiritual Coach and How Do You Choose One?" />
        <meta name="twitter:description" content="A spiritual coach helps you navigate your inner life. Here's what they do, how they differ from therapists, and how to choose the right one." />
        <meta name="twitter:image" content="https://www.theclarityinstitute.guru/og-image.png" />
        <link rel="canonical" href="https://www.theclarityinstitute.guru/blog/what-is-a-spiritual-coach" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "What is a spiritual coach?", "acceptedAnswer": { "@type": "Answer", "text": "A spiritual coach is someone who helps you understand and navigate your inner life — including questions of purpose, identity, awakening, intuition, and the deeper dimensions of experience. They combine spiritual insight with practical guidance to help you move from confusion or stagnation to clarity and direction." } },
            { "@type": "Question", "name": "What is the difference between a spiritual coach and a therapist?", "acceptedAnswer": { "@type": "Answer", "text": "A therapist typically works with the healing of past wounds, psychological diagnoses, and emotional disorders, using evidence-based clinical methods. A spiritual coach works primarily with the present and future — helping you understand your spiritual experiences, clarify your purpose, and develop your inner life. The two are complementary, not competing, and many people benefit from both." } },
            { "@type": "Question", "name": "What does a spiritual coach actually do?", "acceptedAnswer": { "@type": "Answer", "text": "A spiritual coach might help you interpret significant dreams or spiritual experiences, understand a period of awakening or crisis, discern your life purpose and calling, develop your intuition, navigate a major life transition from a place of inner clarity, or build a consistent spiritual practice tailored to your path." } },
            { "@type": "Question", "name": "How do you choose a spiritual coach?", "acceptedAnswer": { "@type": "Answer", "text": "Look for someone whose own path and lineage resonates with you. Notice whether they have walked through the territory they are guiding you through — not just studied it. Pay attention to how you feel in their presence: do you feel seen, safe, and challenged in useful ways? Be wary of coaches who claim to have all the answers or who create dependency rather than developing your own inner authority." } }
          ]
        })}} />
      </Head>
      <div style={{ minHeight:'100vh', background:C.cream, fontFamily:sans }}>
        <nav style={{ background:C.white, borderBottom:`1px solid ${C.border}`, padding:'1rem 2rem', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <Link href="/" style={{ fontFamily:serif, fontSize:'1.3rem', color:C.green, textDecoration:'none', fontWeight:600 }}>The Clarity Institute</Link>
          <Link href="/blog" style={{ fontSize:'0.875rem', color:C.muted, textDecoration:'none' }}>← All Posts</Link>
        </nav>

        <article style={{ maxWidth:680, margin:'0 auto', padding:'3rem 1.5rem' }}>
          <div style={{ marginBottom:'2rem' }}>
            <div style={{ display:'flex', gap:'1rem', marginBottom:'0.75rem' }}>
              <span style={{ fontSize:'0.8rem', color:C.muted }}>May 24, 2026</span>
              <span style={{ fontSize:'0.8rem', color:C.orange }}>7 min read</span>
            </div>
            <h1 style={{ fontFamily:serif, fontSize:'clamp(2rem, 5vw, 2.8rem)', color:C.green, fontWeight:300, margin:'0 0 1rem', lineHeight:1.2 }}>
              What Is a Spiritual Coach and How Do You Choose One?
            </h1>
            <div style={{ width:48, height:2, background:C.orange, marginBottom:'1.5rem' }} />
          </div>

          <P><strong>A spiritual coach is someone who helps you understand and navigate your inner life — the questions of purpose, identity, awakening, and the deeper dimensions of human experience that conventional support systems are rarely equipped to address.</strong> They bring both personal wisdom and structured guidance to the parts of your life that feel most alive, most confusing, and most significant.</P>

          <H2>What does a spiritual coach actually do?</H2>
          <P>The work looks different depending on the coach and the client, but at its core, a spiritual coach helps you develop your relationship with your own inner knowing, interpret and integrate significant spiritual experiences, move through periods of awakening, transition, or crisis with greater clarity, discern your purpose and calling, and build a spiritual practice that is genuinely yours — not borrowed from someone else's tradition.</P>
          <P>A good spiritual coach is part guide, part mirror, and part challenger. They see things in you that you cannot yet see in yourself, and they help you develop the inner authority to trust your own perception rather than becoming dependent on theirs.</P>

          <H2>How is a spiritual coach different from a therapist?</H2>
          <P>This is one of the most important distinctions to understand. A therapist works primarily with the healing of past wounds — emotional disorders, psychological trauma, and clinical conditions — using evidence-based methods within a regulated professional framework. This work is essential and irreplaceable when it is needed.</P>
          <P>A spiritual coach works primarily with the present and future. They are not treating pathology; they are supporting development. The questions they help you navigate are less "why am I like this?" and more "who am I becoming?" and "what is trying to emerge in my life?"</P>
          <P>The two are complementary. Many people benefit from both simultaneously — a therapist to help with healing, a spiritual coach to help with becoming.</P>

          <H2>How is a spiritual coach different from a religious leader or mentor?</H2>
          <P>A religious leader typically operates within a specific tradition and offers guidance from within that tradition's framework. A spiritual coach tends to be less tradition-bound — drawing on multiple lineages, wisdom sources, and their own direct experience. They are less interested in having you adopt a particular set of beliefs and more interested in helping you discover and trust what is already true for you.</P>
          <P>A mentor shares their experience and knowledge for you to learn from. A coach uses your experience as the primary material and helps you extract what is yours to know and do.</P>

          <H2>How do you choose the right spiritual coach?</H2>
          <P>Start with resonance. Read their writing, listen to how they speak, sense how you feel in their presence — even digitally. The right guide will not make you feel smaller. They will make you feel more of yourself.</P>
          <P>Look for someone who has walked the territory they are guiding you through — not just studied it. Ask about their own path, their training, what has shaped them. A coach who has genuinely moved through awakening, loss, and transformation will engage your experience differently from someone who has only read about it.</P>
          <P>Be cautious of coaches who claim absolute authority, who create dependency rather than developing your own discernment, or who are primarily interested in selling you a system. The goal of a genuine spiritual guide is ultimately to make themselves unnecessary — to develop your own inner authority until you no longer need theirs.</P>
          <P>Finally: trust your gut. If something feels off, it probably is. And if something feels right — that quiet recognition, that sense of being seen — pay attention to that too.</P>

          <div style={{ background:`linear-gradient(135deg, #f0f4f0, ${C.cream})`, border:`1px solid ${C.green}30`, borderRadius:14, padding:'1.75rem', marginTop:'2.5rem', textAlign:'center' }}>
            <p style={{ fontFamily:serif, fontSize:'1.2rem', color:C.green, margin:'0 0 0.5rem' }}>Something in you already knows it's time.</p>
            <p style={{ color:C.muted, fontSize:'0.9rem', margin:'0 0 1rem', lineHeight:1.7 }}>A single Clarity Session with AS Davids is the first step — a conversation that meets you exactly where you are.</p>
            <Link href="/clarity-session" style={{ display:'inline-block', background:C.green, color:C.white, padding:'0.75rem 1.5rem', borderRadius:8, textDecoration:'none', fontSize:'0.9rem', fontWeight:500 }}>Book a Clarity Session →</Link>
          </div>

          <div style={{ marginTop:'3rem', padding:'1.5rem 0', borderTop:`1px solid ${C.border}` }}>
            <p style={{ fontSize:'0.8rem', color:C.muted, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.08em', margin:'0 0 0.5rem' }}>Frequently asked questions</p>
            <FAQ q="What is a spiritual coach?" a="A spiritual coach helps you understand and navigate your inner life — including questions of purpose, identity, awakening, and intuition. They combine spiritual insight with practical guidance to help you move from confusion to clarity and direction." />
            <FAQ q="What is the difference between a spiritual coach and a therapist?" a="A therapist works with healing past wounds and clinical conditions using evidence-based methods. A spiritual coach works with the present and future — helping you understand spiritual experiences, clarify purpose, and develop your inner life. The two are complementary." />
            <FAQ q="What does a spiritual coach actually do?" a="A spiritual coach helps you interpret significant experiences, understand periods of awakening or crisis, discern your calling, develop your intuition, navigate major transitions, and build a spiritual practice tailored to your path." />
            <FAQ q="How do you choose a spiritual coach?" a="Look for resonance, someone who has personally walked the territory they guide others through, and someone whose goal is to develop your own inner authority rather than create dependency. Trust your gut — the right guide will make you feel more of yourself, not less." />
          </div>

          <div style={{ marginTop:'2rem', padding:'1.25rem', background:C.white, border:`1px solid ${C.border}`, borderRadius:12 }}>
            <p style={{ fontSize:'0.78rem', color:C.muted, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.08em', margin:'0 0 0.4rem' }}>About the author</p>
            <p style={{ fontSize:'0.875rem', color:C.text, lineHeight:1.75, margin:0 }}>
              <strong>AS Davids (David)</strong> is the founder of The Clarity Institute — a spiritual coaching practice rooted in prophetic insight, African wisdom traditions, and depth psychology. He works with individuals navigating awakening, calling, and the inner life. <Link href="/clarity-session" style={{ color:C.green }}>Book a session →</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  )
}
