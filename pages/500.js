// pages/500.js
import Head from 'next/head'
import Link from 'next/link'

const C = { green:'#3D5A3E', brown:'#6B4A2A', cream:'#FAF6F0', text:'#2C1F14', muted:'#7A6A5A', border:'#E0D5C5', white:'#ffffff' }

export default function Custom500() {
  return (
    <>
      <Head>
        <title>Something Went Wrong — The Clarity Institute</title>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>
      <div style={{ minHeight:'100vh', background:C.cream, display:'flex', alignItems:'center', justifyContent:'center', padding:'2rem', fontFamily:"'Jost', sans-serif" }}>
        <div style={{ textAlign:'center', maxWidth:480 }}>
          <div style={{ fontSize:'4rem', marginBottom:'1rem' }}>🌀</div>
          <h1 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'2.5rem', color:C.brown, fontWeight:300, margin:'0 0 0.5rem' }}>A Momentary Disruption</h1>
          <p style={{ color:C.muted, fontSize:'1.05rem', lineHeight:1.7, marginBottom:'2rem' }}>
            Something went wrong on our end. Take a breath — we're working on it.
          </p>
          <div style={{ display:'flex', gap:'0.75rem', justifyContent:'center', flexWrap:'wrap' }}>
            <Link href="/" style={{
              background:C.green, color:C.white, padding:'0.8rem 1.75rem',
              borderRadius:8, textDecoration:'none', fontSize:'0.95rem', fontWeight:500,
            }}>Return Home</Link>
            <a href="https://wa.me/27817904941?text=Hi%20David%2C%20I'm%20getting%20an%20error%20on%20the%20website." target="_blank" rel="noopener noreferrer" style={{
              background:'#25D366', color:C.white, padding:'0.8rem 1.75rem',
              borderRadius:8, textDecoration:'none', fontSize:'0.95rem', fontWeight:500,
            }}>💬 Report to David</a>
          </div>
        </div>
      </div>
    </>
  )
}
