// pages/blog/index.js
import Head from 'next/head'
import Link from 'next/link'

const C = { green:'#3D5A3E', brown:'#6B4A2A', orange:'#C1581A', cream:'#FAF6F0', text:'#2C1F14', muted:'#7A6A5A', border:'#E0D5C5', white:'#ffffff' }
const serif = "'Cormorant Garamond', serif"
const sans = "'Jost', sans-serif"

const posts = [
  {
    slug: 'what-is-spiritual-awakening',
    title: 'What Is Spiritual Awakening? Signs, Stages and What Comes Next',
    excerpt: 'Spiritual awakening is a shift in consciousness in which you begin to see beyond your conditioned identity. Here\'s what it actually is, what triggers it, and how to navigate what comes next.',
    date: '2026-05-28',
    readTime: '9 min read',
    emoji: '✨',
  },
  {
    slug: 'what-does-it-mean-to-dream-about-someone',
    title: 'What Does It Mean When You Dream About Someone?',
    excerpt: 'When you dream about someone — a loved one, an ex, a stranger — the dream is rarely about that person. It\'s about you. Here\'s how to understand what your psyche is actually communicating.',
    date: '2026-05-27',
    readTime: '7 min read',
    emoji: '🌙',
  },
  {
    slug: 'how-to-develop-your-intuition',
    title: 'How to Develop Your Intuition: A Practical Guide',
    excerpt: 'Intuition is not a gift you either have or don\'t — it\'s a faculty you can develop. Here\'s a grounded, practical guide to strengthening your inner knowing and learning to trust it.',
    date: '2026-05-26',
    readTime: '8 min read',
    emoji: '🧭',
  },
  {
    slug: 'dark-night-of-the-soul',
    title: 'Dark Night of the Soul: What It Is and How to Move Through It',
    excerpt: 'The dark night of the soul is not depression — it\'s a profound spiritual passage. Here\'s what it actually is, how to recognise it, and what it takes to move through it with integrity.',
    date: '2026-05-25',
    readTime: '8 min read',
    emoji: '🕯',
  },
  {
    slug: 'what-is-a-spiritual-coach',
    title: 'What Is a Spiritual Coach and How Do You Choose One?',
    excerpt: 'A spiritual coach helps you understand and navigate your inner life. Here\'s what they actually do, how they differ from therapists and mentors, and how to find the right one for you.',
    date: '2026-05-24',
    readTime: '7 min read',
    emoji: '👁',
  },
  {
    slug: 'recurring-dreams',
    title: 'Recurring Dreams: What They Mean and Why They Keep Coming Back',
    excerpt: 'Recurring dreams are your psyche\'s most persistent messages. Here\'s what they mean, why they repeat, and how to finally understand — and resolve — what they\'re asking of you.',
    date: '2026-05-23',
    readTime: '7 min read',
    emoji: '🔁',
  },
  {
    slug: 'african-spirituality-and-the-third-eye',
    title: 'African Spirituality and the Third Eye: An Ancient Perspective',
    excerpt: 'Long before the third eye became a western spiritual concept, African traditions held deep understandings of inner sight. Here\'s what those traditions reveal — and why it matters today.',
    date: '2026-05-22',
    readTime: '9 min read',
    emoji: '🌍',
  },
  {
    slug: 'what-is-shadow-work',
    title: 'What Is Shadow Work? A Beginner\'s Guide to the Shadow Self',
    excerpt: 'Shadow work is the process of integrating the hidden, rejected parts of yourself. Here\'s what the shadow actually is, how it shapes your life, and how to begin working with it.',
    date: '2026-05-21',
    readTime: '8 min read',
    emoji: '🪞',
  },
  {
    slug: 'astral-projection-beginners-guide',
    title: 'Astral Projection: A Beginner\'s Guide to Travelling Beyond the Body',
    excerpt: 'Astral projection — the experience of consciousness separating from the physical body — has been reported across cultures and centuries. Here\'s what it is and how to begin safely.',
    date: '2026-03-12',
    readTime: '8 min read',
    emoji: '🌌',
  },
  {
    slug: 'what-is-the-third-eye',
    title: 'What Is the Third Eye? A Beginner\'s Guide',
    excerpt: 'The third eye, or Ajna chakra, is far more than a mystical concept. It\'s a gateway to intuition, clarity, and deeper awareness that lives within each of us.',
    date: '2026-03-10',
    readTime: '6 min read',
    emoji: '👁',
  },
  {
    slug: '5-signs-your-third-eye-is-opening',
    title: '5 Signs Your Third Eye Is Opening',
    excerpt: 'Many people experience subtle shifts when their third eye begins to activate. Here are five common signs — and what they mean for your journey.',
    date: '2026-03-05',
    readTime: '5 min read',
    emoji: '🔥',
  },
  {
    slug: 'daily-meditation-practice',
    title: 'How to Build a Daily Meditation Practice That Actually Sticks',
    excerpt: 'The secret isn\'t discipline — it\'s design. Here\'s how to create a meditation practice that fits your real life, not an idealised version of it.',
    date: '2026-02-28',
    readTime: '7 min read',
    emoji: '🌿',
  },
  {
    slug: 'understanding-your-dreams',
    title: 'Understanding Your Dreams: Messages from the Unseen',
    excerpt: 'Dreams are not random. They are a language — your subconscious and spiritual self communicating what your waking mind can\'t yet see.',
    date: '2026-02-20',
    readTime: '6 min read',
    emoji: '🌙',
  },
  {
    slug: 'what-is-remote-viewing',
    title: 'What Is Remote Viewing? Seeing Beyond the Eyes',
    excerpt: 'Remote viewing is the practice of perceiving information about a distant target using nothing but the mind. Here\'s what science and spirituality say.',
    date: '2026-02-14',
    readTime: '7 min read',
    emoji: '🔮',
  },
  {
    slug: 'spiritual-growth-where-to-begin',
    title: 'Spiritual Growth: Where to Begin When You Don\'t Know Where to Start',
    excerpt: 'Starting a spiritual journey can feel overwhelming. Here\'s a grounded, honest guide to beginning — no jargon, no gatekeeping, just the essentials.',
    date: '2026-02-07',
    readTime: '6 min read',
    emoji: '🌱',
  },
]

const formatDate = (d) => new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog — The Clarity Institute</title>
        <meta name="description" content="Articles on third eye awakening, meditation, intuition, astral projection, dreams, and spiritual growth from The Clarity Institute." />
        <meta property="og:title" content="The Clarity Blog — The Clarity Institute" />
        <meta property="og:description" content="Reflections on awakening, intuition, and the inner life." />
        <meta property="og:image" content="https://www.theclarityinstitute.guru/og-image.png" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <div style={{ minHeight:'100vh', background:C.cream, fontFamily:sans }}>

        {/* Nav */}
        <nav style={{ background:C.white, borderBottom:`1px solid ${C.border}`, padding:'1rem 2rem', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <Link href="/" style={{ fontFamily:serif, fontSize:'1.3rem', color:C.green, textDecoration:'none', fontWeight:600 }}>The Clarity Institute</Link>
          <Link href="/" style={{ fontSize:'0.875rem', color:C.muted, textDecoration:'none' }}>← Home</Link>
        </nav>

        <div style={{ maxWidth:760, margin:'0 auto', padding:'3rem 1.5rem' }}>
          <div style={{ textAlign:'center', marginBottom:'3rem' }}>
            <span style={{ fontSize:'0.75rem', fontWeight:600, letterSpacing:'0.15em', textTransform:'uppercase', color:C.orange, display:'block', marginBottom:'0.75rem' }}>Insights</span>
            <h1 style={{ fontFamily:serif, fontSize:'clamp(2rem, 4vw, 3rem)', color:C.green, fontWeight:300, margin:'0 0 0.75rem' }}>The Clarity Blog</h1>
            <p style={{ color:C.muted, fontSize:'1.05rem', lineHeight:1.7, maxWidth:500, margin:'0 auto' }}>
              Reflections on awakening, intuition, and the inner life.
            </p>
          </div>

          <div style={{ display:'grid', gap:'1.5rem' }}>
            {posts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration:'none' }}>
                <article style={{
                  background:C.white, border:`1px solid ${C.border}`, borderRadius:14,
                  padding:'2rem', display:'flex', gap:'1.5rem', alignItems:'flex-start',
                  cursor:'pointer',
                }}>
                  <div style={{ fontSize:'2.5rem', flexShrink:0, marginTop:'0.25rem' }}>{post.emoji}</div>
                  <div>
                    <div style={{ display:'flex', gap:'1rem', marginBottom:'0.5rem', flexWrap:'wrap' }}>
                      <span style={{ fontSize:'0.78rem', color:C.muted }}>{formatDate(post.date)}</span>
                      <span style={{ fontSize:'0.78rem', color:C.orange }}>{post.readTime}</span>
                    </div>
                    <h2 style={{ fontFamily:serif, fontSize:'1.4rem', color:C.green, fontWeight:400, margin:'0 0 0.5rem', lineHeight:1.3 }}>{post.title}</h2>
                    <p style={{ color:C.muted, fontSize:'0.92rem', lineHeight:1.7, margin:0 }}>{post.excerpt}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
