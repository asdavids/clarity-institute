// pages/week1-2.js — Protected: must be logged in AND paid
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../lib/useAuth'

// ── Gate component — shown while checking auth ──
function LoadingScreen() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FAF6F0', fontFamily: "'Jost', sans-serif" }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👁</div>
        <p style={{ color: '#7A6A5A' }}>Loading your practice space...</p>
      </div>
    </div>
  )
}

// ── Gate component — not paid ──
function LockedScreen() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FAF6F0', fontFamily: "'Jost', sans-serif", padding: '2rem' }}>
      <div style={{ maxWidth: 480, textAlign: 'center', background: 'white', border: '1px solid #E0D5C5', borderRadius: 16, padding: '3rem 2rem', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔒</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: '#3D5A3E', fontWeight: 400, fontSize: '1.8rem', margin: '0 0 0.75rem' }}>Course Access Required</h2>
        <p style={{ color: '#7A6A5A', lineHeight: 1.7, marginBottom: '2rem' }}>You need to enroll in a cohort to access the course content. Once you've completed payment, David will activate your access within 24 hours.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <a href="/#pricing" style={{ display: 'block', background: '#3D5A3E', color: 'white', padding: '0.9rem', borderRadius: 8, textDecoration: 'none', fontWeight: 500 }}>View Enrollment Options</a>
          <a href={`https://wa.me/27817904941?text=${encodeURIComponent('Hi David, I have completed payment and would like my course access activated.')}`} target="_blank" rel="noopener noreferrer" style={{ display: 'block', background: '#25D366', color: 'white', padding: '0.9rem', borderRadius: 8, textDecoration: 'none', fontWeight: 500 }}>💬 Message David on WhatsApp</a>
        </div>
      </div>
    </div>
  )
}

// ── The actual course content ──
function CourseContent() {
  const { user } = useAuth()

  // ════════════════════════════════════════════════════
  // PASTE YOUR ORIGINAL week1-2.js CONTENT BELOW HERE
  // (everything from the return statement of your
  //  original Week1_2 component goes inside this return)
  // ════════════════════════════════════════════════════

  return (
    <div style={{ fontFamily: "'Jost', sans-serif", background: '#FAF6F0', minHeight: '100vh' }}>
      {/* Your original week1-2 content goes here */}
      {/* This is a placeholder — see instructions below */}
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '4rem 2rem', textAlign: 'center' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👁</div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", color: '#3D5A3E', fontWeight: 300, fontSize: '2.5rem' }}>Weeks 1–2: Foundation</h1>
        <p style={{ color: '#7A6A5A', lineHeight: 1.7 }}>Welcome back, {user?.email}. Your practice space is ready.</p>
        <p style={{ color: '#7A6A5A', lineHeight: 1.7, marginTop: '1rem', fontSize: '0.9rem', background: 'white', border: '1px solid #E0D5C5', borderRadius: 8, padding: '1rem' }}>
          ⚠️ To complete setup: open your current <strong>week1-2.js</strong> file, copy the full content of your <strong>Week1_2</strong> component's return statement, and paste it into the <strong>CourseContent</strong> component above this message. Then delete this placeholder paragraph.
        </p>
      </div>
    </div>
  )
}

// ── Main export — handles all the access logic ──
export default function Week1_2() {
  const { user, loading, isPaid, isAdmin } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/login?redirect=/week1-2')
    }
  }, [loading, user, router])

  if (loading) return <LoadingScreen />
  if (!user) return <LoadingScreen />
  if (!isPaid && !isAdmin) return <LockedScreen />
  return <CourseContent />
}
