// pages/login.js
import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { initializeApp, getApps } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'

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
const db = getFirestore(app)
const googleProvider = new GoogleAuthProvider()

const C = { green:'#3D5A3E', brown:'#6B4A2A', cream:'#FAF6F0', text:'#2C1F14', muted:'#7A6A5A', border:'#E0D5C5', white:'#ffffff' }

export default function Login() {
  const router = useRouter()
  const { redirect } = router.query
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)

  const destination = redirect || '/dashboard'

  const handleEmail = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.push(destination)
    } catch (err) {
      setError(getFriendlyError(err.code))
    } finally {
      setLoading(false)
    }
  }

  const handleGoogle = async () => {
    setGoogleLoading(true)
    setError('')
    try {
      const result = await signInWithPopup(auth, googleProvider)
      const user = result.user

      // Create or update Firestore profile for Google users
      const profileRef = doc(db, 'profiles', user.uid)
      const profileSnap = await getDoc(profileRef)
      if (!profileSnap.exists()) {
        await setDoc(profileRef, {
          name: user.displayName || '',
          email: user.email,
          photoURL: user.photoURL || '',
          provider: 'google',
          paid: false,
          createdAt: serverTimestamp(),
        })
      }

      router.push(destination)
    } catch (err) {
      setError(getFriendlyError(err.code))
    } finally {
      setGoogleLoading(false)
    }
  }

  const getFriendlyError = (code) => {
    switch (code) {
      case 'auth/user-not-found': return 'No account found with this email.'
      case 'auth/wrong-password': return 'Incorrect password. Please try again.'
      case 'auth/invalid-email': return 'Please enter a valid email address.'
      case 'auth/too-many-requests': return 'Too many attempts. Please try again later.'
      case 'auth/popup-closed-by-user': return 'Google sign-in was cancelled.'
      case 'auth/invalid-credential': return 'Invalid email or password.'
      default: return 'Something went wrong. Please try again.'
    }
  }

  const inp = { width:'100%', padding:'0.8rem 1rem', border:`1.5px solid ${C.border}`, borderRadius:8, fontFamily:"'Jost', sans-serif", fontSize:'0.95rem', color:C.text, background:C.cream, outline:'none', boxSizing:'border-box', marginBottom:'1rem' }

  return (
    <>
      <Head>
        <title>Sign In — The Clarity Institute</title>
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
            <h1 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'1.8rem', fontWeight:400, color:C.green, margin:'0 0 0.25rem' }}>Welcome back</h1>
            <p style={{ color:C.muted, fontSize:'0.9rem', margin:'0 0 2rem' }}>Sign in to access your practice space.</p>

            {/* Google button */}
            <button
              onClick={handleGoogle}
              disabled={googleLoading}
              style={{ width:'100%', padding:'0.85rem', background:C.white, border:`1.5px solid ${C.border}`, borderRadius:8, fontFamily:"'Jost', sans-serif", fontSize:'0.95rem', color:C.text, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:'0.75rem', marginBottom:'1.25rem', fontWeight:500, opacity: googleLoading ? 0.7 : 1 }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18">
                <path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18z"/>
                <path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2.04a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17z"/>
                <path fill="#FBBC05" d="M4.5 10.48A4.8 4.8 0 0 1 4.5 7.5V5.43H1.83a8 8 0 0 0 0 7.14l2.67-2.09z"/>
                <path fill="#EA4335" d="M8.98 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58A8 8 0 0 0 1.83 5.43L4.5 7.5a4.77 4.77 0 0 1 4.48-3.92z"/>
              </svg>
              {googleLoading ? 'Signing in...' : 'Continue with Google'}
            </button>

            {/* Divider */}
            <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'1.25rem' }}>
              <div style={{ flex:1, height:1, background:C.border }} />
              <span style={{ fontSize:'0.8rem', color:C.muted }}>or</span>
              <div style={{ flex:1, height:1, background:C.border }} />
            </div>

            {/* Email/password form */}
            <form onSubmit={handleEmail}>
              <label style={{ fontSize:'0.8rem', fontWeight:500, color:C.brown, textTransform:'uppercase', letterSpacing:'0.05em', display:'block', marginBottom:'0.4rem' }}>Email</label>
              <input style={inp} type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" required />

              <label style={{ fontSize:'0.8rem', fontWeight:500, color:C.brown, textTransform:'uppercase', letterSpacing:'0.05em', display:'block', marginBottom:'0.4rem' }}>Password</label>
              <input style={inp} type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" required />

              <div style={{ textAlign:'right', marginTop:'-0.5rem', marginBottom:'1.25rem' }}>
                <Link href="/forgot-password" style={{ fontSize:'0.8rem', color:C.muted, textDecoration:'none' }}>Forgot password?</Link>
              </div>

              {error && <p style={{ color:'#c0392b', fontSize:'0.875rem', background:'#fdf2f2', border:'1px solid #f5c6cb', padding:'0.75rem 1rem', borderRadius:8, marginBottom:'1rem' }}>{error}</p>}

              <button type="submit" disabled={loading} style={{ width:'100%', padding:'0.9rem', background:C.green, color:C.white, border:'none', borderRadius:8, fontFamily:"'Jost', sans-serif", fontSize:'1rem', fontWeight:500, cursor:'pointer', opacity: loading ? 0.7 : 1 }}>
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>
          </div>

          <p style={{ textAlign:'center', marginTop:'1.5rem', fontSize:'0.875rem', color:C.muted }}>
            Don't have an account?{' '}
            <Link href="/register" style={{ color:C.green, textDecoration:'none', fontWeight:500 }}>Register</Link>
          </p>

        </div>
      </div>
    </>
  )
}
