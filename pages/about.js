// pages/about.js
import Head from 'next/head'
import Link from 'next/link'

const C = { green:'#3D5A3E', brown:'#6B4A2A', orange:'#C1581A', cream:'#FAF6F0', cream2:'#F2EBE0', text:'#2C1F14', muted:'#7A6A5A', border:'#E0D5C5', white:'#ffffff' }
const serif = "'Cormorant Garamond', serif"
const sans = "'Jost', sans-serif"

export default function About() {
  return (
    <>
      <Head>
        <title>About David — The Clarity Institute</title>
        <meta name="description" content="AS Davids is a writer and spiritual thinker whose work explores the intersection of faith, spirituality, prophetic insight, African history, and human psychology." />
        <meta property="og:title" content="About David — The Clarity Institute" />
        <meta property="og:description" content="Writer, spiritual guide, and founder of The Clarity Institute." />
        <meta property="og:image" content="https://www.theclarityinstitute.guru/og-image.png" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <div style={{ minHeight:'100vh', background:C.cream, fontFamily:sans }}>

        {/* Nav */}
        <nav style={{ background:C.white, borderBottom:`1px solid ${C.border}`, padding:'1rem 2rem', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <Link href="/" style={{ fontFamily:serif, fontSize:'1.3rem', color:C.green, textDecoration:'none', fontWeight:600 }}>The Clarity Institute</Link>
          <Link href="/" style={{ fontSize:'0.875rem', color:C.muted, textDecoration:'none' }}>← Home</Link>
        </nav>

        {/* Hero */}
        <div style={{ background:`linear-gradient(160deg, ${C.white} 0%, ${C.cream} 50%, ${C.cream2} 100%)`, padding:'4rem 2rem 3rem', textAlign:'center' }}>
          <div style={{
            width:140, height:140, borderRadius:'50%', margin:'0 auto 1.5rem',
            background:`radial-gradient(circle at 40% 40%, ${C.cream2}, ${C.cream})`,
            border:`1px solid ${C.border}`, display:'flex', alignItems:'center', justifyContent:'center',
            fontSize:'4rem', boxShadow:`0 12px 40px ${C.brown}15`,
          }}>👁</div>
          <span style={{ fontSize:'0.75rem', fontWeight:600, letterSpacing:'0.15em', textTransform:'uppercase', color:C.orange, display:'block', marginBottom:'0.75rem' }}>About the Guide</span>
          <h1 style={{ fontFamily:serif, fontSize:'clamp(2.2rem, 5vw, 3.2rem)', color:C.green, fontWeight:300, margin:'0 0 0.5rem' }}>AS Davids</h1>
          <p style={{ color:C.muted, fontSize:'1.05rem', maxWidth:480, margin:'0 auto', lineHeight:1.7 }}>Writer, spiritual thinker, and founder of The Clarity Institute</p>
        </div>

        {/* Main content */}
        <div style={{ maxWidth:720, margin:'0 auto', padding:'3rem 1.5rem' }}>

          {/* Bio */}
          <div style={{ marginBottom:'3rem' }}>
            <p style={{ fontSize:'1.1rem', color:C.text, lineHeight:1.9, marginBottom:'1.25rem' }}>
              AS Davids is a writer and spiritual thinker whose work explores the intersection of faith, spirituality, prophetic insight, African history, and human psychology.
            </p>
            <p style={{ fontSize:'1.05rem', color:C.text, lineHeight:1.9, marginBottom:'1.25rem' }}>
              Through books, teachings, and digital platforms, he reflects on spiritual perception, the mysteries of the human mind, and the deep wisdom found in African and biblical traditions. His writing blends storytelling with spiritual reflection, seeking to awaken deeper awareness, challenge conventional thinking, and guide readers toward greater understanding of themselves and the unseen dimensions of life.
            </p>
            <p style={{ fontSize:'1.05rem', color:C.text, lineHeight:1.9, marginBottom:'1.25rem' }}>
              With over a decade of practice in third eye activation, intuitive development, and consciousness expansion, David founded The Clarity Institute as a sacred space for those called to go deeper — beyond the noise of everyday life into the quiet knowing that lives within.
            </p>
            <p style={{ fontSize:'1.05rem', color:C.text, lineHeight:1.9 }}>
              Whether through the 8-week cohort, private mentorship, or one-on-one clarity sessions, David meets each person exactly where they are — with warmth, directness, and a commitment to genuine transformation.
            </p>
          </div>

          {/* Divider */}
          <div style={{ width:48, height:2, background:C.orange, margin:'0 auto 3rem' }} />

          {/* What I believe */}
          <div style={{ marginBottom:'3rem' }}>
            <h2 style={{ fontFamily:serif, fontSize:'1.8rem', color:C.green, fontWeight:300, margin:'0 0 1.25rem', textAlign:'center' }}>What I Believe</h2>
            <div style={{ display:'grid', gap:'1.25rem' }}>
              {[
                { title:'Clarity is your birthright', text:'You were born with an inner knowing. The work isn\'t to create something new — it\'s to remove what\'s blocking what\'s already there.' },
                { title:'The unseen is real', text:'There are dimensions of life beyond what the five senses can perceive. Learning to navigate them is not mysticism — it\'s maturity.' },
                { title:'Africa holds deep wisdom', text:'The spiritual traditions of the African continent carry ancient, profound knowledge that the modern world is only beginning to rediscover.' },
                { title:'Transformation is personal', text:'No two journeys are the same. That\'s why every program, session, and interaction is rooted in meeting you exactly where you are.' },
              ].map(item => (
                <div key={item.title} style={{ background:C.white, border:`1px solid ${C.border}`, borderRadius:14, padding:'1.5rem' }}>
                  <h3 style={{ fontFamily:serif, fontSize:'1.2rem', color:C.green, fontWeight:400, margin:'0 0 0.5rem' }}>{item.title}</h3>
                  <p style={{ color:C.muted, fontSize:'0.95rem', lineHeight:1.75, margin:0 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What I offer */}
          <div style={{ background:C.white, border:`1px solid ${C.border}`, borderRadius:16, padding:'2rem', marginBottom:'3rem' }}>
            <h2 style={{ fontFamily:serif, fontSize:'1.6rem', color:C.green, fontWeight:300, margin:'0 0 1.25rem', textAlign:'center' }}>What I Offer</h2>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:'1.25rem' }}>
              {[
                { emoji:'🌱', title:'8-Week Cohort', desc:'A guided group journey through third eye activation, from foundation to embodiment.', href:'/#pricing' },
                { emoji:'🕯', title:'Clarity Sessions', desc:'Powerful 60-minute one-on-one sessions for specific guidance and breakthroughs.', href:'/clarity-session' },
                { emoji:'🌀', title:'Private Mentorship', desc:'Ongoing 1:1 support with custom practice plans tailored to your path.', href:'/#mentorship' },
                { emoji:'📖', title:'Writing & Teaching', desc:'Books, blog posts, and digital content exploring faith, intuition, and the unseen.', href:'/blog' },
              ].map(item => (
                <Link key={item.title} href={item.href} style={{ textDecoration:'none' }}>
                  <div style={{ background:C.cream, borderRadius:12, padding:'1.25rem', textAlign:'center', height:'100%' }}>
                    <div style={{ fontSize:'1.75rem', marginBottom:'0.5rem' }}>{item.emoji}</div>
                    <div style={{ fontWeight:500, color:C.text, fontSize:'0.9rem', marginBottom:'0.3rem' }}>{item.title}</div>
                    <div style={{ fontSize:'0.82rem', color:C.muted, lineHeight:1.6 }}>{item.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div style={{ textAlign:'center', marginBottom:'2rem' }}>
            <h2 style={{ fontFamily:serif, fontSize:'1.6rem', color:C.green, fontWeight:300, margin:'0 0 0.75rem' }}>Connect with David</h2>
            <p style={{ color:C.muted, fontSize:'0.95rem', lineHeight:1.7, marginBottom:'1.5rem' }}>
              Whether you're curious about the cohort, ready to book a session, or just want to say hello — David personally responds to every message.
            </p>
            <div style={{ display:'flex', gap:'0.75rem', justifyContent:'center', flexWrap:'wrap' }}>
              <a href="https://wa.me/27817904941" target="_blank" rel="noopener noreferrer" style={{
                background:'#25D366', color:C.white, padding:'0.8rem 1.5rem',
                borderRadius:8, textDecoration:'none', fontSize:'0.9rem', fontWeight:500,
                display:'inline-flex', alignItems:'center', gap:'0.5rem',
              }}>💬 WhatsApp</a>
              <a href="https://www.tiktok.com/@asdavids1" target="_blank" rel="noopener noreferrer" style={{
                background:C.text, color:C.white, padding:'0.8rem 1.5rem',
                borderRadius:8, textDecoration:'none', fontSize:'0.9rem', fontWeight:500,
              }}>TikTok</a>
              <a href="mailto:davidmuyunda@gmail.com" style={{
                background:'transparent', color:C.green, padding:'0.8rem 1.5rem',
                borderRadius:8, textDecoration:'none', fontSize:'0.9rem', fontWeight:500,
                border:`1.5px solid ${C.green}`,
              }}>Email</a>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div style={{ textAlign:'center', padding:'2rem', borderTop:`1px solid ${C.border}`, fontSize:'0.82rem', color:C.muted }}>
          <Link href="/" style={{ color:C.green, textDecoration:'none' }}>← Return to home</Link>
        </div>
      </div>
    </>
  )
}
