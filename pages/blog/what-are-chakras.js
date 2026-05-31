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
        <title>What Are Chakras? A Complete Guide to the 7 Energy Centers — The Clarity Institute</title>
        <meta name="description" content="Chakras are the seven energy centers of the body. Here's what each one governs, how to know when they're blocked, and how to bring them back into alignment." />
        <meta property="og:title" content="What Are Chakras? A Complete Guide to the 7 Energy Centers" />
        <meta property="og:description" content="Chakras are the seven energy centers of the body. Here's what each one governs and how to bring them into alignment." />
        <meta property="og:image" content="https://www.theclarityinstitute.guru/og-image.png" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="What Are Chakras? A Complete Guide to the 7 Energy Centers" />
        <meta name="twitter:description" content="Chakras are the seven energy centers of the body. Here's what each one governs and how to bring them into alignment." />
        <meta name="twitter:image" content="https://www.theclarityinstitute.guru/og-image.png" />
        <link rel="canonical" href="https://www.theclarityinstitute.guru/blog/what-are-chakras" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "What are chakras?", "acceptedAnswer": { "@type": "Answer", "text": "Chakras are seven energy centers located along the spine, from the base to the crown of the head. Each chakra governs specific physical, emotional, and spiritual functions. When they are open and balanced, energy flows freely through the body. When they are blocked or overactive, physical symptoms, emotional imbalance, and spiritual disconnection can follow." } },
            { "@type": "Question", "name": "What are the 7 chakras and their meanings?", "acceptedAnswer": { "@type": "Answer", "text": "The seven chakras are: Root (survival, safety, grounding), Sacral (creativity, pleasure, emotion), Solar Plexus (personal power, confidence, will), Heart (love, compassion, connection), Throat (communication, truth, expression), Third Eye (intuition, perception, inner vision), and Crown (spiritual connection, consciousness, divine awareness)." } },
            { "@type": "Question", "name": "How do you know if your chakras are blocked?", "acceptedAnswer": { "@type": "Answer", "text": "Signs of blocked chakras vary by location. A blocked root chakra may cause chronic anxiety or financial fear. A blocked heart chakra may manifest as difficulty giving or receiving love. A blocked throat chakra often shows up as an inability to speak your truth or constant throat tension. Each chakra has physical, emotional, and relational indicators when out of balance." } },
            { "@type": "Question", "name": "How do you unblock chakras?", "acceptedAnswer": { "@type": "Answer", "text": "Chakra clearing can happen through breathwork, meditation, yoga, sound healing, journalling, emotional processing, and working with a spiritual guide. The most effective approach addresses not just the energy center itself but the underlying beliefs, experiences, and patterns that caused the blockage." } }
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
              <span style={{ fontSize:'0.8rem', color:C.muted }}>May 20, 2026</span>
              <span style={{ fontSize:'0.8rem', color:C.orange }}>9 min read</span>
            </div>
            <h1 style={{ fontFamily:serif, fontSize:'clamp(2rem,5vw,2.8rem)', color:C.green, fontWeight:300, margin:'0 0 1rem', lineHeight:1.2 }}>What Are Chakras? A Complete Guide to the 7 Energy Centers</h1>
            <div style={{ width:48, height:2, background:C.orange, marginBottom:'1.5rem' }} />
          </div>

          <P><strong>Chakras are seven energy centers located along the central channel of the body, from the base of the spine to the crown of the head.</strong> The word comes from Sanskrit, meaning "wheel" or "circle" — reflecting the spinning, vortex-like nature of these centers as they process and distribute life energy throughout the physical, emotional, and spiritual dimensions of a person.</P>
          <P>Chakra systems appear across Hindu, Buddhist, and tantric traditions, with some of the earliest references found in ancient Indian texts over three thousand years old. They are not a new age invention but a sophisticated map of human consciousness that practitioners across traditions have validated through direct experience for millennia.</P>

          <H2>The 7 chakras explained</H2>
          <P><strong>1. Root Chakra (Muladhara)</strong> — Located at the base of the spine. Governs survival, safety, grounding, belonging, and the physical body. When balanced: you feel secure, stable, and at home in your body and life. When blocked: chronic anxiety, financial fear, digestive issues, feeling ungrounded or unwelcome in the world.</P>
          <P><strong>2. Sacral Chakra (Svadhisthana)</strong> — Located below the navel. Governs creativity, pleasure, emotion, sexuality, and flow. When balanced: you feel alive, creative, emotionally fluid, and comfortable with intimacy. When blocked: numbness, creative blocks, shame around pleasure, emotional rigidity.</P>
          <P><strong>3. Solar Plexus Chakra (Manipura)</strong> — Located in the upper abdomen. Governs personal power, confidence, will, and identity. When balanced: you feel capable, purposeful, and clear in who you are. When blocked: people-pleasing, lack of direction, difficulty making decisions, stomach tension.</P>
          <P><strong>4. Heart Chakra (Anahata)</strong> — Located at the centre of the chest. Governs love, compassion, connection, and the bridge between lower and higher centres. When balanced: you love freely, forgive easily, and feel genuinely connected to others. When blocked: grief that won't move, difficulty with intimacy, chest tightness, isolation.</P>
          <P><strong>5. Throat Chakra (Vishuddha)</strong> — Located at the throat. Governs communication, truth, expression, and the ability to be heard. When balanced: you speak clearly and honestly, and your words carry weight. When blocked: chronic throat issues, swallowed truths, fear of speaking up, or compulsive talking.</P>
          <P><strong>6. Third Eye Chakra (Ajna)</strong> — Located between the eyebrows. Governs intuition, perception, inner vision, and spiritual sight. When balanced: your intuition is sharp, your perspective is clear, and you sense what others miss. When blocked: confusion, poor judgment, headaches, spiritual disconnection.</P>
          <P><strong>7. Crown Chakra (Sahasrara)</strong> — Located at the top of the head. Governs spiritual connection, consciousness, and the sense of divine presence. When balanced: there is a quiet knowing, a sense of being held by something larger than the personal self. When blocked: spiritual emptiness, meaninglessness, or rigid attachment to belief without lived experience.</P>

          <H2>How do chakras become blocked?</H2>
          <P>Blockages form through experience — trauma, chronic stress, unprocessed emotion, repeated suppression of natural expression, or simply the accumulated weight of a life lived without adequate self-awareness. A child who learned that anger was unsafe may develop a solar plexus blockage. Someone who experienced betrayal may close their heart. These are not failures — they are adaptations that once served a purpose and now ask to be released.</P>

          <H2>How do you work with your chakras?</H2>
          <P>The most effective chakra work addresses root causes rather than surface symptoms. Breathwork, meditation, movement, sound, and journalling all support the process. But the real work is emotional and spiritual — identifying the beliefs and experiences that created the blockage, processing them honestly, and consciously choosing to open where you have contracted.</P>
          <P>Working with a skilled guide accelerates this significantly. A practitioner who can hold space for your process, reflect what they see, and help you navigate the deeper layers of each centre will take you further than any practice performed in isolation.</P>

          <div style={{ background:`linear-gradient(135deg, #f0f4f0, ${C.cream})`, border:`1px solid ${C.green}30`, borderRadius:14, padding:'1.75rem', marginTop:'2.5rem', textAlign:'center' }}>
            <p style={{ fontFamily:serif, fontSize:'1.2rem', color:C.green, margin:'0 0 0.5rem' }}>Ready to work with your energy centres?</p>
            <p style={{ color:C.muted, fontSize:'0.9rem', margin:'0 0 1rem', lineHeight:1.7 }}>A Clarity Session with AS Davids offers a grounded space to understand which centres are calling for attention and what to do about it.</p>
            <Link href="/clarity-session" style={{ display:'inline-block', background:C.green, color:C.white, padding:'0.75rem 1.5rem', borderRadius:8, textDecoration:'none', fontSize:'0.9rem', fontWeight:500 }}>Book a Clarity Session →</Link>
          </div>

          <div style={{ marginTop:'3rem', padding:'1.5rem 0', borderTop:`1px solid ${C.border}` }}>
            <p style={{ fontSize:'0.8rem', color:C.muted, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.08em', margin:'0 0 0.5rem' }}>Frequently asked questions</p>
            <FAQ q="What are chakras?" a="Chakras are seven energy centers located along the spine, from the base to the crown. Each governs specific physical, emotional, and spiritual functions. When balanced, energy flows freely. When blocked, imbalance follows." />
            <FAQ q="What are the 7 chakras and their meanings?" a="Root (survival/grounding), Sacral (creativity/emotion), Solar Plexus (personal power), Heart (love/connection), Throat (communication/truth), Third Eye (intuition/perception), Crown (spiritual connection/consciousness)." />
            <FAQ q="How do you know if your chakras are blocked?" a="Signs vary by chakra — chronic anxiety may indicate a blocked root, difficulty speaking truth a blocked throat, poor intuition a blocked third eye. Each centre has physical, emotional, and relational indicators when out of balance." />
            <FAQ q="How do you unblock chakras?" a="Through breathwork, meditation, movement, sound, emotional processing, and working with a spiritual guide. The most effective approach addresses the underlying beliefs and experiences that created the blockage." />
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
