// pages/forgot-password.js
import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { initializeApp, getApps } from 'firebase/app'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "clarity-institute.firebaseapp.com",
  projectId: "clarity-institute",
  storageBucket: "clarity-institute.firebasestorage.app",
  messagingSenderId: "505987977417",
  appId: "1:505987977417:web:546a9ba1998328f1617d18"
}

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
const auth = getAuth(app)

const C = { green:'#3D5A3E', brown:'#6B4A2A', cream:'#FAF6F0', text:'#2C1F14', muted:'#7A6A5A', border:'#E0D5C5', white:'#ffffff' }

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await sendPasswordResetEmail(auth, email)
      setSent(true)
    } catch (err) {
      if (err.code === 'auth/user-not-found') {
        setError('No account found with this email address.')
      } else {
        setError('Something went wrong. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Reset Password — The Clarity Institute</title>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>
      <div style={{ minHeight:'100vh', background:C.cream, display:'flex', alignItems:'center', justifyContent:'center', padding:'2rem', fontFamily:"'Jost', sans-serif" }}>
        <div style={{ width:'100%', maxWidth:420 }}>

          {/* Logo */}
          <div style={{ textAlign:'center', marginBottom:'2rem' }}>
            <div style={{ fontSize:'2.5rem', marginBottom:'0.5rem' }}>👁</div>
            <Link href="/" style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'1.4rem', color:C.green, textDecoration:'none' }}>
              The Clarity Institute
            </Link>
          </div>

          <div style={{ background:C.white, border:`1px solid ${C.border}`, borderRadius:16, padding:'2.5rem', boxShadow:'0 4px 24px rgba(0,0,0,0.06)' }}>

            {sent ? (
              <div style={{ textAlign:'center' }}>
                <div style={{ fontSize:'2.5rem', marginBottom:'1rem' }}>📧</div>
                <h2 style={{ fontFamily:"'Cormorant Garamond', serif", color:C.green, fontWeight:400, margin:'0 0 0.75rem' }}>Check your email</h2>
                <p style={{ color:C.muted, lineHeight:1.7, marginBottom:'2rem' }}>We've sent a password reset link to <strong>{email}</strong>. Check your inbox and follow the link to reset your password.</p>
                <Link href="/login" style={{ display:'block', background:C.green, color:C.white, padding:'0.9rem', borderRadius:8, textDecoration:'none', fontWeight:500, textAlign:'center' }}>Back to Sign In</Link>
              </div>
            ) : (
              <>
                <h1 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'1.8rem', fontWeight:400, color:C.green, margin:'0 0 0.25rem' }}>Reset your password</h1>
                <p style={{ color:C.muted, fontSize:'0.9rem', margin:'0 0 2rem', lineHeight:1.6 }}>Enter your email and we'll send you a link to reset your password.</p>

                <form onSubmit={handleSubmit}>
                  <label style={{ fontSize:'0.8rem', fontWeight:500, color:C.brown, textTransform:'uppercase', letterSpacing:'0.05em', display:'block', marginBottom:'0.4rem' }}>Email Address</label>
                  <input
                    type="email" value={email} onChange={e => setEmail(e.target.value)}
                    placeholder="your@email.com" required
                    style={{ width:'100%', padding:'0.8rem 1rem', border:`1.5px solid ${C.border}`, borderRadius:8, fontFamily:"'Jost', sans-serif", fontSize:'0.95rem', color:C.text, background:C.cream, outline:'none', boxSizing:'border-box', marginBottom:'1.5rem' }}
                  />
                  {error && <p style={{ color:'#c0392b', fontSize:'0.875rem', background:'#fdf2f2', border:'1px solid #f5c6cb', padding:'0.75rem 1rem', borderRadius:8, marginBottom:'1rem' }}>{error}</p>}
                  <button type="submit" disabled={loading} style={{ width:'100%', padding:'0.9rem', background:C.green, color:C.white, border:'none', borderRadius:8, fontFamily:"'Jost', sans-serif", fontSize:'1rem', fontWeight:500, cursor:'pointer', opacity: loading ? 0.7 : 1 }}>
                    {loading ? 'Sending...' : 'Send Reset Link'}
                  </button>
                </form>
              </>
            )}
          </div>

          <p style={{ textAlign:'center', marginTop:'1.5rem', fontSize:'0.875rem', color:C.muted }}>
            <Link href="/login" style={{ color:C.green, textDecoration:'none' }}>← Back to Sign In</Link>
          </p>

        </div>
      </div>
    </>
  )
}
