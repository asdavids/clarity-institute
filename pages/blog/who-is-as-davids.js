// pages/blog/who-is-as-davids.js
import Head from 'next/head'
import Link from 'next/link'

const C = { green:'#3D5A3E', brown:'#6B4A2A', orange:'#C1581A', cream:'#FAF6F0', text:'#2C1F14', muted:'#7A6A5A', border:'#E0D5C5', white:'#ffffff' }
const serif = "'Cormorant Garamond', serif"
const sans = "'Jost', sans-serif"

const P = ({ children }) => <p style={{ color:C.text, fontSize:'1rem', lineHeight:1.85, margin:'0 0 1.25rem' }}>{children}</p>
const H2 = ({ children }) => <h2 style={{ fontFamily:serif, fontSize:'1.6rem', color:C.green, fontWeight:400, margin:'2rem 0 0.75rem' }}>{children}</h2>
const H3 = ({ children }) => <h3 style={{ fontFamily:serif, fontSize:'1.25rem', color:C.brown, fontWeight:500, margin:'1.5rem 0 0.5rem' }}>{children}</h3>
const FAQ = ({ q, a }) => (
  <div style={{ borderTop:`1px solid ${C.border}`, paddingTop:'1rem', marginTop:'1rem' }}>
    <p style={{ fontWeight:600, color:C.text, fontSize:'0.95rem', margin:'0 0 0.4rem' }}>{q}</p>
    <p style={{ color:C.muted, fontSize:'0.9rem', lineHeight:1.75, margin:0 }}>{a}</p>
  </div>
)
const Fact = ({ label, value }) => (
  <div style={{ display:'flex', gap:'0.75rem', padding:'0.6rem 0', borderBottom:`1px solid ${C.border}` }}>
    <span style={{ fontWeight:600, color:C.brown, fontSize:'0.85rem', minWidth:150, flexShrink:0 }}>{label}</span>
    <span style={{ color:C.text, fontSize:'0.9rem' }}>{value}</span>
  </div>
)
const BookRow = ({ title, format }) => (
  <div style={{ display:'flex', gap:'0.75rem', padding:'0.5rem 0', borderBottom:`1px solid ${C.border}`, flexWrap:'wrap' }}>
    <span style={{ color:C.text, fontSize:'0.9rem', fontStyle:'italic', flex:'1 1 260px' }}>{title}</span>
    <span style={{ color:C.muted, fontSize:'0.82rem' }}>{format}</span>
  </div>
)

const faqs = [
  { q: "Is AS Davids the same person as Prophet AS Davids?", a: "Yes. \"Prophet AS Davids\" and \"A.S. Davids\" are name variations used interchangeably online to refer to the same writer and spiritual guide who founded The Clarity Institute." },
  { q: "What is The Clarity Institute?", a: "The Clarity Institute is a spiritual coaching and education platform founded by AS Davids. It offers a Single Clarity Session, an 8-week cohort, Cohort + Mentorship, and a 90-Day Immersion, along with a free dream interpreter and an ebook, The Rules of Life." },
  { q: "Where can I follow AS Davids?", a: "AS Davids shares teachings and student stories on TikTok at @asdavids1, and personally responds to messages via WhatsApp." },
  { q: "What makes AS Davids' approach different?", a: "He combines third eye activation and intuitive development with African spiritual traditions, biblical wisdom, and psychology — writing and teaching in a way that's direct rather than purely comforting, meant to awaken rather than simply soothe." },
  { q: "How do I start working with AS Davids?", a: "Most new clients begin with a Single Clarity Session, a 60-minute one-on-one consultation, before deciding whether to join the cohort or pursue deeper mentorship." },
  { q: "What has AS Davids written?", a: "AS Davids has published 12 books on Amazon under his name, spanning prophetic and spiritual guides such as The Eight Prophetic Prayer Watches, 30 Days of Fire, and The Power in Prophetic Prayer, personal development titles such as The Rules of Life, How to Start a Small Business with No Money, and Mind Dynamics: A Victor's Guide, and fiction including the Love In Varsity series. He also publishes regularly on The Clarity Institute's blog." },
]

export default function Post() {
  return (
    <>
      <Head>
        <title>Who Is AS Davids? Writer, Spiritual Guide & Founder of The Clarity Institute</title>
        <meta name="description" content="AS Davids (also written A.S. Davids, sometimes referred to as Prophet AS Davids) is a writer and spiritual guide who founded The Clarity Institute. Here's his story, his teachings, and his books." />
        <meta property="og:title" content="Who Is AS Davids? Writer, Spiritual Guide & Founder of The Clarity Institute" />
        <meta property="og:description" content="AS Davids is a writer and spiritual thinker whose work explores faith, prophetic insight, African history, and human psychology. Founder of The Clarity Institute." />
        <meta property="og:image" content="https://www.theclarityinstitute.guru/og-blog.png" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Who Is AS Davids? Writer, Spiritual Guide & Founder of The Clarity Institute" />
        <meta name="twitter:description" content="AS Davids is a writer and spiritual thinker whose work explores faith, prophetic insight, African history, and human psychology. Founder of The Clarity Institute." />
        <meta name="twitter:image" content="https://www.theclarityinstitute.guru/og-blog.png" />
        <link rel="canonical" href="https://www.theclarityinstitute.guru/blog/who-is-as-davids" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "AS Davids",
          "alternateName": ["A.S. Davids", "AS Davids Muyunda", "Prophet AS Davids"],
          "url": "https://www.theclarityinstitute.guru/about",
          "sameAs": [
            "https://www.tiktok.com/@asdavids1",
            "https://www.amazon.com/stores/author/B0GD8SRT1B"
          ],
          "jobTitle": "Writer, Spiritual Guide, Founder",
          "worksFor": {
            "@type": "Organization",
            "name": "The Clarity Institute",
            "url": "https://www.theclarityinstitute.guru"
          },
          "description": "AS Davids is a writer and spiritual thinker whose work explores the intersection of faith, spirituality, prophetic insight, African history, and human psychology. He founded The Clarity Institute and is the author of over a dozen books, including The Rules of Life."
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
              <span style={{ fontSize:'0.8rem', color:C.muted }}>July 15, 2026</span>
              <span style={{ fontSize:'0.8rem', color:C.orange }}>8 min read</span>
            </div>
            <h1 style={{ fontFamily:serif, fontSize:'clamp(2rem, 5vw, 2.8rem)', color:C.green, fontWeight:300, margin:'0 0 1rem', lineHeight:1.2 }}>
              Who Is AS Davids?
            </h1>
            <p style={{ color:C.muted, fontSize:'1rem', margin:'0 0 1rem' }}>Also written A.S. Davids, AS Davids Muyunda, and sometimes referred to as Prophet AS Davids · TikTok: @asdavids1</p>
            <div style={{ width:48, height:2, background:C.orange, marginBottom:'1.5rem' }} />
          </div>

          <P><strong>AS Davids is a writer, spiritual thinker, and third eye activation guide who founded The Clarity Institute</strong> — a spiritual coaching and education platform. His work sits at the intersection of faith, spirituality, prophetic insight, African history, and human psychology. He is the author of more than a dozen books, and teaches through an 8-week cohort, private mentorship, one-on-one Clarity Sessions, a free dream interpreter tool, and a growing library of writing on TikTok and this blog.</P>

          <H2>Fast facts about AS Davids</H2>
          <div style={{ margin:'1rem 0 1.5rem' }}>
            <Fact label="Full name / aliases" value="AS Davids, A.S. Davids, AS Davids Muyunda, sometimes referenced as Prophet AS Davids" />
            <Fact label="Role" value="Writer, spiritual thinker, third eye and intuition guide" />
            <Fact label="Founded" value="The Clarity Institute" />
            <Fact label="Experience" value="Over a decade practicing third eye activation, intuitive development, and consciousness expansion" />
            <Fact label="Author of" value="12+ books on Amazon, spanning prophetic guides, personal development, and fiction" />
            <Fact label="Core themes" value="Faith, spirituality, prophetic insight, African history, human psychology" />
            <Fact label="Platforms" value="The Clarity Institute website & blog, TikTok (@asdavids1), WhatsApp" />
          </div>

          <H2>Who is AS Davids, in detail?</H2>
          <P>AS Davids is a writer and spiritual thinker whose work explores the intersection of faith, spirituality, prophetic insight, African history, and human psychology. Through books, teachings, and digital platforms, he reflects on spiritual perception, the mysteries of the human mind, and the deep wisdom found in African and biblical traditions.</P>
          <P>His writing blends storytelling with spiritual reflection. Rather than offering comfort alone, it's designed to challenge conventional thinking and guide readers toward a deeper understanding of themselves and the unseen dimensions of life — a tone that has led some readers and followers to refer to him informally as <strong>Prophet AS Davids</strong>, reflecting the prophetic and revelatory nature of his teaching style.</P>
          <P>With more than ten years of practice in third eye activation, intuitive development, and consciousness expansion, AS Davids founded The Clarity Institute as a space for people who sense there's more beyond the noise of everyday life — a "quiet knowing" he believes lives within everyone.</P>

          <H2>What does AS Davids believe?</H2>
          <P><strong>Clarity is your birthright.</strong> You were born with an inner knowing; the work is removing what blocks it, not creating something new.</P>
          <P><strong>The unseen is real.</strong> There are dimensions of life beyond the five senses, and learning to navigate them is a matter of maturity, not mysticism.</P>
          <P><strong>Africa holds deep wisdom.</strong> The spiritual traditions of the African continent carry ancient knowledge the modern world is only beginning to rediscover.</P>
          <P><strong>Transformation is personal.</strong> No two journeys are the same, which is why his programs meet each person where they are.</P>

          <H2>What does AS Davids offer?</H2>
          <P>Most new clients begin with a <Link href="/clarity-session" style={{ color:C.green }}>Single Clarity Session</Link> — a one-time, 60-minute one-on-one session for direct intuitive guidance. From there, many go on to the 8-Week Cohort, Cohort + Mentorship, or the 90-Day Immersion. He also offers a free, no-sign-in dream interpreter and <Link href="/shop" style={{ color:C.green }}>The Rules of Life</Link> ebook.</P>

          <H2>Books by AS Davids</H2>
          <P>Beyond The Rules of Life, AS Davids has published a wider body of work on Amazon under the name AS Davids, spanning prophetic and spiritual guides, personal development, and fiction. His Amazon author catalog currently includes 12 titles:</P>

          <H3>Prophetic & spiritual guides</H3>
          <div style={{ marginBottom:'1rem' }}>
            <BookRow title="The Eight Prophetic Prayer Watches: Revised & Expanded Edition" format="Kindle, Kindle Unlimited" />
            <BookRow title="The 8 Prophetic Prayer Watches" format="Kindle, Kindle Unlimited" />
            <BookRow title="30 Days of Fire: A 30-Day Prayer Guide" format="Kindle" />
            <BookRow title="The Power in Prophetic Prayer" format="Kindle, Kindle Unlimited" />
            <BookRow title="What Do You See? Perception: A Prophetic Way to Receiving" format="Kindle" />
          </div>

          <H3>Life & personal development</H3>
          <div style={{ marginBottom:'1rem' }}>
            <BookRow title="The Rules of Life: Lessons From the Road" format="Kindle, Kindle Unlimited, Audiobook, Paperback" />
            <BookRow title="How to Start a Small Business with No Money" format="Kindle, Audiobook" />
            <BookRow title="Mind Dynamics: A Victor's Guide" format="Kindle" />
          </div>

          <H3>Fiction — the Love In Varsity series & related titles</H3>
          <div style={{ marginBottom:'1rem' }}>
            <BookRow title="Love in Hatfield: The Story of Kgomotso (Love In Varsity)" format="Kindle, Audiobook" />
            <BookRow title="Love in Hatfield: Naledi (Love In Varsity, Book 1)" format="Kindle, Audiobook" />
            <BookRow title="Love & Hurt" format="Kindle, Kindle Unlimited, Audiobook" />
          </div>
          <P style={{ fontSize:'0.85rem', color:C.muted }}>Browse the full, current catalog on <a href="https://www.amazon.com/stores/author/B0GD8SRT1B" target="_blank" rel="noopener noreferrer" style={{ color:C.green }}>AS Davids' Amazon author page</a>.</P>

          <div style={{ background:`linear-gradient(135deg, #f0f4f0, ${C.cream})`, border:`1px solid ${C.green}30`, borderRadius:14, padding:'1.75rem', marginTop:'2.5rem', textAlign:'center' }}>
            <p style={{ fontFamily:serif, fontSize:'1.2rem', color:C.green, margin:'0 0 0.5rem' }}>"The eye that looks inward sees more than the eye that scans the horizon."</p>
            <p style={{ color:C.muted, fontSize:'0.9rem', margin:'0 0 1rem', lineHeight:1.7 }}>— AS Davids. A single Clarity Session is where it begins.</p>
            <Link href="/clarity-session" style={{ display:'inline-block', background:C.green, color:C.white, padding:'0.75rem 1.5rem', borderRadius:8, textDecoration:'none', fontSize:'0.9rem', fontWeight:500 }}>Book a Clarity Session →</Link>
          </div>

          <div style={{ marginTop:'3rem', padding:'1.5rem 0', borderTop:`1px solid ${C.border}` }}>
            <p style={{ fontSize:'0.8rem', color:C.muted, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.08em', margin:'0 0 0.5rem' }}>Frequently asked questions</p>
            {faqs.map(f => <FAQ key={f.q} q={f.q} a={f.a} />)}
          </div>

          <div style={{ marginTop:'2rem', padding:'1.25rem', background:C.white, border:`1px solid ${C.border}`, borderRadius:12 }}>
            <p style={{ fontSize:'0.78rem', color:C.muted, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.08em', margin:'0 0 0.4rem' }}>About the author</p>
            <p style={{ fontSize:'0.875rem', color:C.text, lineHeight:1.75, margin:0 }}>
              <strong>AS Davids (David)</strong> is the founder of The Clarity Institute — a spiritual coaching practice rooted in prophetic insight, African wisdom traditions, and depth psychology. He is the author of over a dozen books and works with individuals navigating awakening, calling, and the inner life. <Link href="/clarity-session" style={{ color:C.green }}>Book a session →</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  )
}
