// pages/blog/what-is-shadow-work.js
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
        <title>What Is Shadow Work? A Beginner's Guide to the Shadow Self — The Clarity Institute</title>
        <meta name="description" content="Shadow work is the process of integrating the hidden, rejected parts of yourself. Here's what the shadow actually is, why it matters, and how to begin working with it." />
        <meta property="og:title" content="What Is Shadow Work? A Beginner's Guide to the Shadow Self" />
        <meta property="og:description" content="Shadow work is the process of integrating the hidden, rejected parts of yourself. Here's what the shadow is and how to begin working with it." />
        <meta property="og:image" content="https://www.theclarityinstitute.guru/og-blog.png" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="What Is Shadow Work? A Beginner's Guide to the Shadow Self" />
        <meta name="twitter:description" content="Shadow work is the process of integrating the hidden, rejected parts of yourself. Here's what the shadow is and how to begin working with it." />
        <meta name="twitter:image" content="https://www.theclarityinstitute.guru/og-blog.png" />
        <link rel="canonical" href="https://www.theclarityinstitute.guru/blog/what-is-shadow-work" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "What is shadow work?", "acceptedAnswer": { "@type": "Answer", "text": "Shadow work is the process of bringing unconscious, rejected, or hidden parts of the self into conscious awareness and integrating them. Coined by Carl Jung, the shadow refers to the aspects of yourself — traits, impulses, wounds, desires — that you learned to deny, suppress, or disown, typically in childhood. Shadow work involves meeting these parts of yourself honestly and learning to include them as part of a whole self rather than continuing to suppress or project them." } },
            { "@type": "Question", "name": "What is the shadow self?", "acceptedAnswer": { "@type": "Answer", "text": "The shadow self is the unconscious part of the psyche that contains everything a person has rejected about themselves — traits considered bad, weak, shameful, or unacceptable. The shadow is not inherently dark or evil; it simply contains what was not allowed. It also holds positive qualities that were suppressed, which Jung called the golden shadow. Integrating the shadow does not mean becoming your worst impulses; it means becoming whole." } },
            { "@type": "Question", "name": "How do you do shadow work?", "acceptedAnswer": { "@type": "Answer", "text": "Shadow work involves practices such as: noticing what triggers strong reactions in others (your strongest reactions often point to shadow material); journalling honestly about recurring patterns, shame, and disowned feelings; working with dreams, which often carry shadow content in symbolic form; and working with a skilled guide or therapist who can help you see what you cannot yet see about yourself. The goal is not to eliminate the shadow but to build a conscious relationship with it." } },
            { "@type": "Question", "name": "Is shadow work dangerous?", "acceptedAnswer": { "@type": "Answer", "text": "Shadow work is not inherently dangerous, but it can be destabilising if done without sufficient support, especially if it surfaces significant trauma. It is always wise to work with a guide or therapist, particularly when engaging with deeply painful material. The shadow is part of every human being — the work is simply becoming conscious of what is already there, rather than allowing it to operate from the darkness of unconscious projection and behaviour." } }
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
              <span style={{ fontSize:'0.8rem', color:C.muted }}>May 21, 2026</span>
              <span style={{ fontSize:'0.8rem', color:C.orange }}>8 min read</span>
            </div>
            <h1 style={{ fontFamily:serif, fontSize:'clamp(2rem, 5vw, 2.8rem)', color:C.green, fontWeight:300, margin:'0 0 1rem', lineHeight:1.2 }}>
              What Is Shadow Work? A Beginner's Guide to the Shadow Self
            </h1>
            <div style={{ width:48, height:2, background:C.orange, marginBottom:'1.5rem' }} />
          </div>
          <P><strong>Shadow work is the process of bringing the hidden, rejected parts of yourself into conscious awareness — and learning to include them as part of a whole self rather than continuing to deny, suppress, or project them.</strong> The concept was developed by the Swiss psychologist Carl Jung, who observed that what we cannot face within ourselves does not disappear; it goes underground, and from there, it runs our lives.</P>
          <H2>What is the shadow self?</H2>
          <P>The shadow is everything about yourself that you have learned is unacceptable. In childhood, we adapt to survive: we learn which parts of us are welcome and which are not, which emotions are safe to express and which must be hidden. What gets hidden does not go away — it forms the shadow.</P>
          <P>The shadow contains what we conventionally think of as darkness: rage, jealousy, lust, greed, cowardice. But Jung made an important observation that is often overlooked: the shadow also contains what he called the golden shadow — positive qualities that were suppressed. Creativity that was mocked. Ambition that was shamed. Sensitivity that was called weakness. These disowned gifts live in the shadow alongside the wounds.</P>
          <H2>How does the shadow affect your life?</H2>
          <P>Primarily through projection and repetition. We project our shadow onto other people — seeing in them the qualities we cannot acknowledge in ourselves. The person whose anger enrages you is often someone who is expressing something you have buried. The quality you most admire in someone else is often the golden shadow reaching toward you from the outside because you will not let it in from the inside.</P>
          <P>Shadow also operates through repetition: the same relationship dynamic appearing with different people, the same self-sabotage arriving just before breakthrough, the same patterns of conflict or avoidance playing out decade after decade. This is not weakness or failure — it is the shadow doing what it does, which is seek integration by any means available.</P>
          <H2>What does shadow work actually involve?</H2>
          <P>It begins with noticing. Your reactions are the most reliable map of your shadow. What triggers a disproportionately strong response in you — anger, contempt, envy, fascination — is almost always pointing to shadow material. Begin there.</P>
          <P>Keep a journal of your reactions, your recurring patterns, and the qualities in others that most strongly repel or attract you. Write without editing — the shadow speaks in the unguarded moment, not the polished one.</P>
          <P>Work with your dreams. The shadow appears regularly in dreams, often as a figure of the same gender who is threatening, shameful, or powerfully attractive. These figures are not enemies; they are parts of you seeking recognition. When you engage with them — in the dream, in your journal, in therapy — they tend to stop threatening and start offering.</P>
          <P>And find a witness. Shadow work is not easily done alone, because the shadow is, by definition, what you cannot see in yourself. A skilled therapist, guide, or spiritual director can reflect what they observe in you with the kind of compassionate honesty that accelerates integration more than any solo practice.</P>
          <H2>What happens when you integrate your shadow?</H2>
          <P>You stop fighting yourself. The energy that was spent suppressing disowned parts of yourself becomes available for living. Relationships improve — not because the people around you change, but because you stop projecting onto them. You become less reactive, more spacious, more genuinely yourself.</P>
          <P>Jung's famous formulation remains the clearest: "Until you make the unconscious conscious, it will direct your life and you will call it fate." Shadow work is the process of making the unconscious conscious — and reclaiming the authorship of your own life.</P>
          <div style={{ background:`linear-gradient(135deg, #f0f4f0, ${C.cream})`, border:`1px solid ${C.green}30`, borderRadius:14, padding:'1.75rem', marginTop:'2.5rem', textAlign:'center' }}>
            <p style={{ fontFamily:serif, fontSize:'1.2rem', color:C.green, margin:'0 0 0.5rem' }}>Ready to meet what you've been avoiding?</p>
            <p style={{ color:C.muted, fontSize:'0.9rem', margin:'0 0 1rem', lineHeight:1.7 }}>A Clarity Session with AS Davids creates a grounded, safe space to begin the work of integration — with guidance from someone who has walked this territory.</p>
            <Link href="/clarity-session" style={{ display:'inline-block', background:C.green, color:C.white, padding:'0.75rem 1.5rem', borderRadius:8, textDecoration:'none', fontSize:'0.9rem', fontWeight:500 }}>Book a Clarity Session →</Link>
          </div>
          <div style={{ marginTop:'3rem', padding:'1.5rem 0', borderTop:`1px solid ${C.border}` }}>
            <p style={{ fontSize:'0.8rem', color:C.muted, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.08em', margin:'0 0 0.5rem' }}>Frequently asked questions</p>
            <FAQ q="What is shadow work?" a="Shadow work is the process of bringing unconscious, rejected parts of the self into conscious awareness and integrating them. It involves meeting disowned aspects of yourself honestly and learning to include them as part of a whole rather than suppressing or projecting them." />
            <FAQ q="What is the shadow self?" a="The shadow self contains everything a person has rejected about themselves — traits considered bad, weak, or unacceptable. It also holds suppressed positive qualities (the golden shadow). Integrating the shadow means becoming whole, not becoming your worst impulses." />
            <FAQ q="How do you do shadow work?" a="Notice your strongest reactions to others (they point to shadow material), journal honestly about recurring patterns and shame, work with dreams, and find a skilled guide or therapist. The goal is a conscious relationship with the shadow, not its elimination." />
            <FAQ q="Is shadow work dangerous?" a="It can be destabilising if done without support, especially when significant trauma surfaces. Working with a guide or therapist is wise. The shadow is part of every human being — the work is simply becoming conscious of what is already there." />
          </div>
          <div style={{ marginTop:'2rem', padding:'1.25rem', background:C.white, border:`1px solid ${C.border}`, borderRadius:12 }}>
            <p style={{ fontSize:'0.78rem', color:C.muted, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.08em', margin:'0 0 0.4rem' }}>Continue reading</p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:'0.75rem', marginBottom:'1rem' }}>
              {[
                { slug:'dark-night-of-the-soul', title:'Dark Night of the Soul: What It Is and How to Move Through It' },
                { slug:'what-is-spiritual-awakening', title:'What Is Spiritual Awakening? Signs, Stages and What Comes Next' },
              ].map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`} style={{ background:C.cream, border:`1px solid ${C.border}`, borderRadius:10, padding:'1rem', textDecoration:'none', display:'block' }}>
                  <span style={{ fontSize:'0.875rem', color:C.green, fontFamily:serif, lineHeight:1.4 }}>{p.title} →</span>
                </Link>
              ))}
            </div>
          </div>

          <div style={{ marginTop:'1rem', padding:'1.25rem', background:C.white, border:`1px solid ${C.border}`, borderRadius:12 }}>
            <p style={{ fontSize:'0.78rem', color:C.muted, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.08em', margin:'0 0 0.4rem' }}>About the author</p>
            <p style={{ fontSize:'0.875rem', color:C.text, lineHeight:1.75, margin:0 }}>
              <strong>AS Davids (David)</strong> is the founder of The Clarity Institute — a spiritual coaching practice rooted in prophetic insight, African wisdom traditions, and depth psychology. <Link href="/clarity-session" style={{ color:C.green }}>Book a session →</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  )
}
