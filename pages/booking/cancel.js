// pages/booking/cancel.js
import Head from 'next/head'
import Link from 'next/link'

const C = { green:'#3D5A3E', brown:'#6B4A2A', cream:'#FAF6F0', text:'#2C1F14', muted:'#7A6A5A', border:'#E0D5C5', white:'#ffffff' }

export default function BookingCancel() {
  return (
    <>
      <Head>
        <title>Payment Cancelled — The Clarity Institute</title>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>
      <div style={{ minHeight:'100vh', background:C.cream, display:'flex', alignItems:'center', justifyContent:'center', padding:'2rem', fontFamily:"'Jost', sans-serif" }}>
        <div style={{ width:'100%', maxWidth:480, textAlign:'center' }}>

          {/* Logo */}
          <div style={{ marginBottom:'2rem' }}>
            <div style={{ fontSize:'3.5rem', marginBottom:'0.75rem' }}>👁</div>
            <Link href="/" style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'1.4rem', color:C.green, textDecoration:'none', fontWeight:400 }}>
              The Clarity Institute
            </Link>
          </div>

          {/* Card */}
          <div style={{ background:C.white, border:`1px solid ${C.border}`, borderRadius:16, padding:'2.5rem', boxShadow:'0 4px 24px rgba(0,0,0,0.06)' }}>
            <div style={{ width:64, height:64, borderRadius:'50%', background:'#FFF8E1', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 1.25rem', fontSize:'1.75rem' }}>
              ⏸
            </div>
            <h1 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'2rem', fontWeight:400, color:C.brown, margin:'0 0 0.5rem' }}>Payment Cancelled</h1>
            <p style={{ color:C.muted, fontSize:'1rem', lineHeight:1.7, margin:'0 0 2rem' }}>
              No worries — your payment was not processed and you have not been charged. Your spot is still available when you're ready.
            </p>

            {/* CTA buttons */}
            <div style={{ display:'flex', flexDirection:'column', gap:'0.75rem', alignItems:'center' }}>
              <a href="/#pricing" style={{
                background:C.green, color:C.white, padding:'0.85rem 2rem',
                borderRadius:8, textDecoration:'none', fontSize:'0.95rem', fontWeight:500,
                display:'inline-block',
              }}>Try Again →</a>
              <a href="https://wa.me/27817904941?text=Hi%20David%2C%20I%20had%20trouble%20completing%20my%20payment.%20Can%20you%20help%3F" target="_blank" rel="noopener noreferrer" style={{
                color:C.green, textDecoration:'none', fontSize:'0.9rem', fontWeight:500,
                display:'inline-flex', alignItems:'center', gap:'0.4rem',
              }}>
                💬 Need help? Message David
              </a>
            </div>
          </div>

          <p style={{ marginTop:'1.5rem', fontSize:'0.82rem', color:C.muted }}>
            <Link href="/" style={{ color:C.green, textDecoration:'none' }}>← Return to home</Link>
          </p>
        </div>
      </div>
    </>
  )
}
