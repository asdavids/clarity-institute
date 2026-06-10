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
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u))
    return () => unsub()
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [router.pathname])

  const handleSignOut = async () => {
    await signOut(auth)
    router.push('/')
  }

  const linkStyle = { fontSize: '0.875rem', color: C.text, textDecoration: 'none' }

  return (
    <>
      <style>{`
        .navbar-links {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .navbar-hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          flex-direction: column;
          gap: 5px;
          padding: 8px;
          z-index: 200;
        }
        .navbar-hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: #2C1F14;
          transition: all 0.3s;
        }
        @media (max-width: 768px) {
          .navbar-hamburger { display: flex; }
          .navbar-links {
            display: none;
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(250,246,240,0.98);
            backdrop-filter: blur(12px);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1.75rem;
            z-index: 150;
          }
          .navbar-links.open { display: flex; }
          .navbar-links a, .navbar-links button {
            font-size: 1.1rem !important;
          }
        }
      `}</style>
      <nav style={{ background: C.white, borderBottom: `1px solid ${C.border}`, padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: "'Jost', sans-serif", position: 'relative', zIndex: 100 }}>
        <Link href="/" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', color: C.green, textDecoration: 'none', fontWeight: 600 }}>
          The Clarity Institute
        </Link>

        {/* Hamburger */}
        <button className="navbar-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span style={menuOpen ? { transform: 'rotate(45deg) translateY(7px)' } : {}} />
          <span style={menuOpen ? { opacity: 0 } : {}} />
          <span style={menuOpen ? { transform: 'rotate(-45deg) translateY(-7px)' } : {}} />
        </button>

        <div className={`navbar-links${menuOpen ? ' open' : ''}`}>
          <Link href="/#about" style={linkStyle} onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/#cohort" style={linkStyle} onClick={() => setMenuOpen(false)}>Cohort</Link>
          <Link href="/dream-interpreter" style={linkStyle} onClick={() => setMenuOpen(false)}>Dream Interpreter</Link>
          <Link href="/shop" style={{ fontSize: '0.875rem', color: C.green, textDecoration: 'none', fontWeight: 500 }} onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link href="/waitlist" style={linkStyle} onClick={() => setMenuOpen(false)}>Waitlist</Link>
          {user ? (
            <>
              <Link href="/dashboard" style={{ fontSize: '0.875rem', color: C.green, textDecoration: 'none', fontWeight: 500 }} onClick={() => setMenuOpen(false)}>Dashboard</Link>
              <button onClick={handleSignOut} style={{ fontSize: '0.875rem', color: C.muted, background: 'none', border: `1px solid ${C.border}`, padding: '0.35rem 0.85rem', borderRadius: 6, cursor: 'pointer', fontFamily: "'Jost', sans-serif" }}>
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link href="/login" style={{ fontSize: '0.875rem', color: C.muted, textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>Sign In</Link>
              <Link href="/clarity-session" style={{ background: C.green, color: C.white, padding: '0.5rem 1.25rem', borderRadius: 6, fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>
                Book a Session
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  )
}
