// pages/booking/success.js
import Head from 'next/head'
import Link from 'next/link'

const C = { green:'#3D5A3E', brown:'#6B4A2A', cream:'#FAF6F0', text:'#2C1F14', muted:'#7A6A5A', border:'#E0D5C5', white:'#ffffff' }
const ZOOM_LINK = "https://us05web.zoom.us/j/5541552777?pwd=hVLUx0faojiPboPB1AYOrUBANDFnI5.1"

export default function BookingSuccess() {
  return (
    <>
      <Head>
        <title>Payment Successful — The Clarity Institute</title>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>
      <div style={{ minHeight:'100vh', background:C.cream, display:'flex', alignItems:'center', justifyContent:'center', padding:'2rem', fontFamily:"'Jost', sans-serif" }}>
        <div style={{ width:'100%', maxWidth:520, textAlign:'center' }}>

          {/* Logo */}
          <div style={{ marginBottom:'2rem' }}>
            <div style={{ fontSize:'3.5rem', marginBottom:'0.75rem' }}>👁</div>
            <Link href="/" style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'1.4rem', color:C.green, textDecoration:'none', fontWeight:400 }}>
              The Clarity Institute
            </Link>
          </div>

          {/* Card */}
          <div style={{ background:C.white, border:`1px solid ${C.border}`, borderRadius:16, padding:'2.5rem', boxShadow:'0 4px 24px rgba(0,0,0,0.06)' }}>
            <div style={{ width:64, height:64, borderRadius:'50%', background:'#E8F5E9', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 1.25rem', fontSize:'1.75rem' }}>
              ✓
            </div>
            <h1 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'2rem', fontWeight:400, color:C.green, margin:'0 0 0.5rem' }}>Payment Received</h1>
            <p style={{ color:C.muted, fontSize:'1rem', lineHeight:1.7, margin:'0 0 2rem' }}>
              Thank you for your payment. A confirmation email is on its way to your inbox with all the details.
            </p>

            {/* Zoom link */}
            <div style={{ background:'linear-gradient(135deg, #f0f4f0, #faf6f0)', border:`1px solid ${C.green}30`, borderRadius:12, padding:'1.25rem', marginBottom:'1.5rem' }}>
              <p style={{ fontSize:'0.8rem', textTransform:'uppercase', letterSpacing:'0.1em', color:C.muted, margin:'0 0 0.75rem' }}>Your Zoom Session Link</p>
              <a href={ZOOM_LINK} target="_blank" rel="noopener noreferrer" style={{
                display:'inline-flex', alignItems:'center', gap:'0.5rem',
                background:C.green, color:C.white, padding:'0.75rem 1.5rem',
                borderRadius:8, textDecoration:'none', fontSize:'0.95rem', fontWeight:500,
              }}>
                📹 Join Zoom Session
              </a>
              <p style={{ fontSize:'0.82rem', color:C.muted, margin:'0.75rem 0 0', lineHeight:1.6 }}>Save this link — use it to join at your scheduled time.</p>
            </div>

            {/* What's next */}
            <div style={{ background:C.cream, borderRadius:12, padding:'1.25rem', marginBottom:'1.5rem', textAlign:'left' }}>
              <h3 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'1.15rem', color:C.green, margin:'0 0 0.75rem', fontWeight:400 }}>What happens next?</h3>
              <ol style={{ paddingLeft:'1.25rem', margin:0 }}>
                <li style={{ fontSize:'0.875rem', color:C.text, lineHeight:1.7, marginBottom:'0.4rem' }}>Check your email for the confirmation and receipt.</li>
                <li style={{ fontSize:'0.875rem', color:C.text, lineHeight:1.7, marginBottom:'0.4rem' }}>David will reach out within 24 hours to confirm your session time.</li>
                <li style={{ fontSize:'0.875rem', color:C.text, lineHeight:1.7 }}>Log in to your dashboard to access your course materials.</li>
              </ol>
            </div>

            {/* CTA buttons */}
            <div style={{ display:'flex', gap:'0.75rem', flexWrap:'wrap', justifyContent:'center' }}>
              <Link href="/dashboard" style={{
                background:C.green, color:C.white, padding:'0.8rem 1.5rem',
                borderRadius:8, textDecoration:'none', fontSize:'0.9rem', fontWeight:500,
              }}>Go to Dashboard</Link>
              <a href="https://wa.me/27817904941" target="_blank" rel="noopener noreferrer" style={{
                background:'#25D366', color:C.white, padding:'0.8rem 1.5rem',
                borderRadius:8, textDecoration:'none', fontSize:'0.9rem', fontWeight:500,
              }}>💬 Message David</a>
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
