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
  const [status, setStatus] = useState('') // '', 'success', 'error'
  const [errorMsg, setErrorMsg] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')
    setErrorMsg('')
    try {
      await sendPasswordResetEmail(auth, email)
      setStatus('success')
    } catch (err) {
      setStatus('error')
      switch (err.code) {
        case 'auth/user-not-found': setErrorMsg('No account found with this email.'); break
        case 'auth/invalid-email': setErrorMsg('Please enter a valid email address.'); break
        case 'auth/too-many-requests': setErrorMsg('Too many attempts. Please try again later.'); break
        default: setErrorMsg('Something went wrong. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  const inp = { width:'100%', padding:'0.8rem 1rem', border:`1.5px solid ${C.border}`, borderRadius:8, fontFamily:"'Jost', sans-serif", fontSize:'0.95rem', color:C.text, background:C.cream, outline:'none', boxSizing:'border-box', marginBottom:'1rem' }

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
            <Link href="/" style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'1.4rem', color:C.green, textDecoration:'none', fontWeight:400 }}>
              The Clarity Institute
            </Link>
          </div>

          {/* Card */}
          <div style={{ background:C.white, border:`1px solid ${C.border}`, borderRadius:16, padding:'2.5rem', boxShadow:'0 4px 24px rgba(0,0,0,0.06)' }}>
            <h1 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'1.8rem', fontWeight:400, color:C.green, margin:'0 0 0.25rem' }}>Reset your password</h1>
            <p style={{ color:C.muted, fontSize:'0.9rem', margin:'0 0 2rem', lineHeight:1.6 }}>
              Enter the email you used to register. We'll send you a link to reset your password.
            </p>

            {status === 'success' ? (
              <div style={{ textAlign:'center' }}>
                <div style={{ fontSize:'2.5rem', marginBottom:'1rem' }}>✉️</div>
                <h2 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'1.4rem', color:C.green, fontWeight:400, margin:'0 0 0.5rem' }}>Check your inbox</h2>
                <p style={{ color:C.muted, fontSize:'0.9rem', lineHeight:1.6, marginBottom:'1.5rem' }}>
                  We've sent a password reset link to <strong>{email}</strong>. It may take a minute to arrive — check your spam folder too.
                </p>
                <button onClick={() => { setStatus(''); setEmail(''); }} style={{ fontSize:'0.875rem', color:C.green, background:'none', border:`1px solid ${C.border}`, padding:'0.6rem 1.25rem', borderRadius:8, cursor:'pointer', fontFamily:"'Jost', sans-serif", marginBottom:'0.5rem' }}>
                  Send again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <label style={{ fontSize:'0.8rem', fontWeight:500, color:C.brown, textTransform:'uppercase', letterSpacing:'0.05em', display:'block', marginBottom:'0.4rem' }}>Email</label>
                <input style={inp} type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" required />

                {status === 'error' && (
                  <p style={{ color:'#c0392b', fontSize:'0.875rem', background:'#fdf2f2', border:'1px solid #f5c6cb', padding:'0.75rem 1rem', borderRadius:8, marginBottom:'1rem' }}>{errorMsg}</p>
                )}

                <button type="submit" disabled={loading} style={{ width:'100%', padding:'0.9rem', background:C.green, color:C.white, border:'none', borderRadius:8, fontFamily:"'Jost', sans-serif", fontSize:'1rem', fontWeight:500, cursor:'pointer', opacity: loading ? 0.7 : 1 }}>
                  {loading ? 'Sending...' : 'Send Reset Link'}
                </button>
              </form>
            )}
          </div>

          <p style={{ textAlign:'center', marginTop:'1.5rem', fontSize:'0.875rem', color:C.muted }}>
            Remember your password?{' '}
            <Link href="/login" style={{ color:C.green, textDecoration:'none', fontWeight:500 }}>Sign In</Link>
          </p>
        </div>
      </div>
    </>
  )
}
