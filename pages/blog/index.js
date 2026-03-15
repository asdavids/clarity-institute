// pages/blog/index.js
import Head from 'next/head'
import Link from 'next/link'

const C = { green:'#3D5A3E', brown:'#6B4A2A', orange:'#C1581A', cream:'#FAF6F0', text:'#2C1F14', muted:'#7A6A5A', border:'#E0D5C5', white:'#ffffff' }
const serif = "'Cormorant Garamond', serif"
const sans = "'Jost', sans-serif"

const posts = [
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
]

const formatDate = (d) => new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog — The Clarity Institute</title>
        <meta name="description" content="Articles on third eye awakening, meditation, intuition, and spiritual growth from The Clarity Institute." />
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
                  transition:'box-shadow 0.2s, transform 0.2s',
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
