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
        <title>What Are Spiritual Gifts? How to Identify and Develop Yours — The Clarity Institute</title>
        <meta name="description" content="Spiritual gifts are innate capacities for perception, healing, and service that go beyond ordinary ability. Here's how to identify yours and begin developing them." />
        <meta property="og:title" content="What Are Spiritual Gifts? How to Identify and Develop Yours" />
        <meta property="og:description" content="Spiritual gifts are innate capacities for perception and service. Here's how to identify and develop yours." />
        <meta property="og:image" content="https://www.theclarityinstitute.guru/og-image.png" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://www.theclarityinstitute.guru/blog/what-are-spiritual-gifts" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "What are spiritual gifts?", "acceptedAnswer": { "@type": "Answer", "text": "Spiritual gifts are innate capacities — ways of perceiving, knowing, healing, or serving — that operate beyond the range of ordinary sensory and analytical ability. They include gifts of intuition, prophetic insight, healing, discernment, empathy, and spiritual vision. Every person carries some form of spiritual gifting, though most never consciously develop it." } },
            { "@type": "Question", "name": "How do you know if you have spiritual gifts?", "acceptedAnswer": { "@type": "Answer", "text": "Signs include: consistently knowing things before they happen, sensing other people's emotions and states without being told, receiving accurate impressions about people or situations that later prove correct, unusually vivid or prophetic dreams, the ability to bring calm or healing to others simply through presence, and a sense of being called to a particular form of service that you cannot fully explain rationally." } },
            { "@type": "Question", "name": "What are the types of spiritual gifts?", "acceptedAnswer": { "@type": "Answer", "text": "Common spiritual gifts include: prophecy (receiving insight about future or hidden things), discernment (the ability to sense spiritual truth and distinguish authentic from false), empathy (deep perception of others' inner states), healing (the ability to facilitate physical or emotional restoration in others), teaching (conveying spiritual truth in ways that open others), and intercession (the gift of effective spiritual prayer and advocacy)." } },
            { "@type": "Question", "name": "How do you develop your spiritual gifts?", "acceptedAnswer": { "@type": "Answer", "text": "Development requires consistent practice in the specific gift, a disciplined inner life including meditation and self-awareness, community with others who take spiritual development seriously, and accountability to someone further along the path. Gifts developed in isolation, without grounding and community, can become distorted or used in ways that harm rather than serve." } }
          ]
        })}} />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <div style={{ minHeight:'100vh', background:C.cream, fontFamily:sans }}>
        <nav style={{ background:C.white, borderBottom:`1px solid ${C.border}`, padding:'1rem 2rem', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <Link href="/" style={{ fontFamily:serif, fontSize:'1.3rem', color:C.green, textDecoration:'none', fontWeight:600 }}>The Clarity Institute</Link>
          <Link href="/blog" style={{ fontSize:'0.875rem', color:C.muted, textDecoration:'none' }}>← All Posts</Link>
        </nav>
        <article style={{ maxWidth:680, margin:'0 auto', padding:'3rem 1.5rem' }}>
          <div style={{ marginBottom:'2rem' }}>
            <div style={{ display:'flex', gap:'1rem', marginBottom:'0.75rem' }}>
              <span style={{ fontSize:'0.8rem', color:C.muted }}>May 15, 2026</span>
              <span style={{ fontSize:'0.8rem', color:C.orange }}>8 min read</span>
            </div>
            <h1 style={{ fontFamily:serif, fontSize:'clamp(2rem,5vw,2.8rem)', color:C.green, fontWeight:300, margin:'0 0 1rem', lineHeight:1.2 }}>What Are Spiritual Gifts? How to Identify and Develop Yours</h1>
            <div style={{ width:48, height:2, background:C.orange, marginBottom:'1.5rem' }} />
          </div>

          <P><strong>Every human being is born with spiritual gifts — innate capacities for perception, knowing, and service that extend beyond the range of ordinary ability.</strong> Most people spend their entire lives carrying gifts they have never named, never developed, and never understood as gifts at all. They simply noticed that they seemed to know things they shouldn't, feel things others didn't, or affect rooms and people in ways they couldn't explain — and then they learned to suppress it, explain it away, or feel strange about it.</P>

          <H2>What spiritual gifts actually are</H2>
          <P>Spiritual gifts are not supernatural exceptions reserved for prophets and healers. They are dimensions of human perception that every person carries in varying degrees. The difference between a person who has recognised and developed their gifts and one who hasn't is not fundamentally about ability — it is about attention, cultivation, and the willingness to take what you perceive seriously.</P>
          <P>Across traditions — biblical, African, indigenous, and mystical — the understanding is consistent: gifts are given for service, not status. They are capacities entrusted to individuals for the benefit of others. The person who develops their discernment and keeps it to themselves has not fully received the gift. The gift completes itself when it is used.</P>

          <H2>Common spiritual gifts and their signs</H2>
          <P><strong>Prophecy and prophetic insight</strong> — receiving impressions, images, words, or knowing about situations, people, or future events before they occur. Signs: consistently accurate impressions, vivid prophetic dreams, a sense of "downloading" information about people you meet, and the experience of speaking words in conversation that later prove surprisingly accurate or timely.</P>
          <P><strong>Discernment</strong> — the ability to perceive spiritual truth, distinguish authentic from false, and sense what is really operating beneath the surface of a situation or person. Signs: you often sense dishonesty or hidden agendas before they are revealed, you can tell when something feels spiritually off even when everything appears fine, and you are rarely fooled by appearances.</P>
          <P><strong>Empathy and spiritual sensitivity</strong> — deep perception of others' inner states, often experienced as feeling another person's emotions in your own body. Signs: you leave crowded places exhausted without knowing why, you often know what people are feeling before they say it, and you absorb the emotional atmosphere of rooms and situations involuntarily.</P>
          <P><strong>Healing</strong> — the capacity to facilitate restoration in others through presence, prayer, touch, or words. Signs: people feel calmer and clearer after spending time with you, people spontaneously share their pain with you and leave feeling lighter, and you have an instinctive knowing about what another person needs in moments of suffering.</P>
          <P><strong>Prophetic intercession</strong> — the gift of effective prayer and spiritual advocacy — knowing specifically how to pray, for whom, and with what intensity, and receiving confirmations that the intercession has been heard. Signs: you are drawn to pray for specific people or situations at seemingly random moments, and those prayers are often followed by shifts in circumstances.</P>

          <H2>Why most people don't develop their gifts</H2>
          <P>The most common reason is that the gift was never named. A child who knew things and was told they were imagining it learns to distrust their perception. A person who felt everything in rooms learned to manage it rather than develop it. Without someone to recognise and name what they carry, the gift remains latent.</P>
          <P>The second reason is fear — of being wrong, of being seen as strange, of the responsibility that comes with genuine capacity. And the third is the absence of community: gifts develop in relationship, through testing, feedback, and the accountability of others who take these things seriously.</P>

          <H2>How to begin developing your gifts</H2>
          <P>Start by paying attention. Keep a journal of every impression, knowing, and perception that seems to go beyond what you could have ordinarily known. Note when it is accurate. Begin to trust it incrementally, in low-stakes situations, before bringing it into high-stakes ones. Find community — even one other person — who takes this dimension of life seriously. And seek guidance from someone who has already walked this path, who can help you understand what you are carrying and how to steward it well.</P>

          <div style={{ background:`linear-gradient(135deg, #f0f4f0, ${C.cream})`, border:`1px solid ${C.green}30`, borderRadius:14, padding:'1.75rem', marginTop:'2.5rem', textAlign:'center' }}>
            <p style={{ fontFamily:serif, fontSize:'1.2rem', color:C.green, margin:'0 0 0.5rem' }}>Sensing a gift you haven't fully named or understood?</p>
            <p style={{ color:C.muted, fontSize:'0.9rem', margin:'0 0 1rem', lineHeight:1.7 }}>A Clarity Session with David is a space to name what you carry, understand it more clearly, and begin developing it with intention.</p>
            <Link href="/clarity-session" style={{ display:'inline-block', background:C.green, color:C.white, padding:'0.75rem 1.5rem', borderRadius:8, textDecoration:'none', fontSize:'0.9rem', fontWeight:500 }}>Book a Clarity Session →</Link>
          </div>

          <div style={{ marginTop:'3rem', padding:'1.5rem 0', borderTop:`1px solid ${C.border}` }}>
            <p style={{ fontSize:'0.8rem', color:C.muted, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.08em', margin:'0 0 0.5rem' }}>Frequently asked questions</p>
            <FAQ q="What are spiritual gifts?" a="Spiritual gifts are innate capacities for perception, knowing, healing, or service that operate beyond ordinary sensory and analytical ability. Every person carries some form of spiritual gifting, though most never consciously develop it." />
            <FAQ q="How do you know if you have spiritual gifts?" a="Signs include knowing things before they happen, sensing others' emotions without being told, consistently accurate impressions, prophetic dreams, and a calling to service you cannot fully explain rationally." />
            <FAQ q="What are the types of spiritual gifts?" a="Common gifts include prophecy, discernment, spiritual empathy, healing, teaching, and intercession — each with specific signs and ways of operating." />
            <FAQ q="How do you develop your spiritual gifts?" a="Through consistent practice, a disciplined inner life, community with others who take spiritual development seriously, and accountability to someone further along the path." />
          </div>

          <div style={{ marginTop:'2rem', padding:'1.25rem', background:C.white, border:`1px solid ${C.border}`, borderRadius:12 }}>
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
