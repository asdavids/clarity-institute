// components/Navbar.js
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { initializeApp, getApps } from 'firebase/app'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

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

const C = { green:'#3D5A3E', cream:'#FAF6F0', text:'#2C1F14', muted:'#7A6A5A', border:'#E0D5C5', white:'#ffffff' }

export default function Navbar() {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u))
    return () => unsub()
  }, [])

  const handleSignOut = async () => {
    await signOut(auth)
    router.push('/')
  }

  return (
    <nav style={{ background: C.white, borderBottom: `1px solid ${C.border}`, padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: "'Jost', sans-serif" }}>
      <Link href="/" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', color: C.green, textDecoration: 'none', fontWeight: 600 }}>
        The Clarity Institute
      </Link>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <Link href="/#about" style={{ fontSize: '0.875rem', color: C.text, textDecoration: 'none' }}>About</Link>
        <Link href="/#cohort" style={{ fontSize: '0.875rem', color: C.text, textDecoration: 'none' }}>Cohort</Link>
        <Link href="/#pricing" style={{ fontSize: '0.875rem', color: C.text, textDecoration: 'none' }}>Pricing</Link>
        {user ? (
          <>
            <Link href="/dashboard" style={{ fontSize: '0.875rem', color: C.green, textDecoration: 'none', fontWeight: 500 }}>Dashboard</Link>
            <button onClick={handleSignOut} style={{ fontSize: '0.875rem', color: C.muted, background: 'none', border: `1px solid ${C.border}`, padding: '0.35rem 0.85rem', borderRadius: 6, cursor: 'pointer', fontFamily: "'Jost', sans-serif" }}>
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link href="/login" style={{ fontSize: '0.875rem', color: C.muted, textDecoration: 'none' }}>Sign In</Link>
            <Link href="/#pricing" style={{ background: C.green, color: C.white, padding: '0.5rem 1.25rem', borderRadius: 6, fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none' }}>
              Enroll Now
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}
