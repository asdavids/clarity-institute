// pages/dashboard.js
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { initializeApp, getApps } from 'firebase/app'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { getAllProgress } from '../lib/useProgress'

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

const C = { green:'#3D5A3E', brown:'#6B4A2A', orange:'#C1581A', cream:'#FAF6F0', text:'#2C1F14', muted:'#7A6A5A', border:'#E0D5C5', white:'#ffffff' }

const ZOOM_LINK = "https://us05web.zoom.us/j/5541552777?pwd=hVLUx0faojiPboPB1AYOrUBANDFnI5.1"

const WEEKS = [
  { id: 'week1-2', label: 'Weeks 1–2', title: 'Foundation', emoji: '🌱', days: 14, href: '/week1-2', color: C.green },
  { id: 'week3-5', label: 'Weeks 3–5', title: 'Activation & Expansion', emoji: '🔥', days: 20, href: '/week3-5', color: C.orange },
  { id: 'week6-8', label: 'Weeks 6–8', title: 'Integration & Embodiment', emoji: '🌿', days: 18, href: '/week6-8', color: C.brown },
]

const TOTAL_DAYS = 52

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [progress, setProgress] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) { router.replace('/login'); return }
      setUser(firebaseUser)

      // Load profile
      try {
        const snap = await getDoc(doc(db, 'profiles', firebaseUser.uid))
        if (snap.exists()) setProfile(snap.data())
      } catch (e) { console.error(e) }

      // Load all progress
      try {
        const allProgress = await getAllProgress(firebaseUser.uid)
        setProgress(allProgress)
      } catch (e) { console.error(e) }

      setLoading(false)
    })
    return () => unsub()
  }, [router])

  const handleSignOut = async () => {
    await signOut(auth)
    router.push('/')
  }

  // Calculate total completed days across all weeks
  const totalCompleted = Object.values(progress).reduce((sum, days) => sum + days.length, 0)
  const totalPercent = Math.round((totalCompleted / TOTAL_DAYS) * 100)
  const isPaid = profile?.paid === true
  const isAdmin = user?.email === 'davidmuyunda@gmail.com'
  const hasAccess = isPaid || isAdmin

  if (loading) return (
    <div style={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', background:C.cream, fontFamily:"'Jost', sans-serif" }}>
      <div style={{ textAlign:'center' }}>
        <div style={{ fontSize:'3rem', marginBottom:'1rem' }}>👁</div>
        <p style={{ color:C.muted }}>Loading your dashboard...</p>
      </div>
    </div>
  )

  return (
    <>
      <Head>
        <title>Dashboard — The Clarity Institute</title>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <div style={{ minHeight:'100vh', background:C.cream, fontFamily:"'Jost', sans-serif" }}>

        {/* Nav */}
        <nav style={{ background:C.white, borderBottom:`1px solid ${C.border}`, padding:'1rem 2rem', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <Link href="/" style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'1.3rem', color:C.green, textDecoration:'none', fontWeight:600 }}>The Clarity Institute</Link>
          <div style={{ display:'flex', alignItems:'center', gap:'1rem' }}>
            {isAdmin && (
              <>
                <Link href="/admin/students" style={{ fontSize:'0.8rem', color:C.orange, textDecoration:'none', fontWeight:500 }}>👥 Students</Link>
                <Link href="/admin/sessions" style={{ fontSize:'0.8rem', color:C.orange, textDecoration:'none', fontWeight:500 }}>📅 Sessions</Link>
              </>
            )}
            <span style={{ fontSize:'0.85rem', color:C.muted }}>{user?.email}</span>
            <button onClick={handleSignOut} style={{ fontSize:'0.8rem', color:C.muted, background:'none', border:`1px solid ${C.border}`, padding:'0.35rem 0.85rem', borderRadius:6, cursor:'pointer', fontFamily:"'Jost', sans-serif" }}>Sign Out</button>
          </div>
        </nav>

        <div style={{ maxWidth:900, margin:'0 auto', padding:'2.5rem 1.5rem' }}>

          {/* Welcome */}
          <div style={{ marginBottom:'2rem' }}>
            <h1 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'2.2rem', color:C.green, fontWeight:300, margin:'0 0 0.25rem' }}>
              Welcome back, {profile?.name?.split(' ')[0] || user?.displayName?.split(' ')[0] || 'Seeker'}.
            </h1>
            <p style={{ color:C.muted, margin:0 }}>
              {hasAccess ? 'Your practice space is ready.' : 'Complete your enrollment to unlock the full course.'}
            </p>
          </div>

          {/* Access banner for unpaid students */}
          {!hasAccess && (
            <div style={{ background:'#FFF8E1', border:'1px solid #F0C040', borderRadius:12, padding:'1.25rem 1.5rem', marginBottom:'2rem', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'1rem' }}>
              <div>
                <div style={{ fontWeight:500, color:'#7A6000', marginBottom:'0.25rem' }}>⏳ Course access pending</div>
                <div style={{ fontSize:'0.85rem', color:'#7A6000' }}>Once David confirms your payment, your course will unlock within 24 hours.</div>
              </div>
              <a href={`https://wa.me/27817904941?text=${encodeURIComponent('Hi David, I have completed payment and would like my course access activated.')}`} target="_blank" rel="noopener noreferrer" style={{ background:'#25D366', color:C.white, padding:'0.6rem 1.25rem', borderRadius:8, textDecoration:'none', fontSize:'0.875rem', fontWeight:500, whiteSpace:'nowrap' }}>
                💬 Message David
              </a>
            </div>
          )}

          {/* ── ZOOM LINK CARD — only visible after payment ── */}
          {hasAccess && (
            <div style={{
              background: 'linear-gradient(135deg, #f0f4f0, #faf6f0)',
              border: `1.5px solid ${C.green}40`,
              borderRadius: 14, padding: '1.5rem 1.75rem', marginBottom: '2rem',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              flexWrap: 'wrap', gap: '1rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: C.green, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.4rem', flexShrink: 0,
                }}>📹</div>
                <div>
                  <div style={{ fontWeight: 500, color: C.text, marginBottom: '0.15rem' }}>Your Zoom Session Link</div>
                  <div style={{ fontSize: '0.85rem', color: C.muted }}>Use this link to join your live sessions and 1:1 calls with David.</div>
                </div>
              </div>
              <a href={ZOOM_LINK} target="_blank" rel="noopener noreferrer" style={{
                background: C.green, color: C.white, padding: '0.7rem 1.5rem',
                borderRadius: 8, textDecoration: 'none', fontSize: '0.875rem',
                fontWeight: 500, whiteSpace: 'nowrap', display: 'inline-flex',
                alignItems: 'center', gap: '0.5rem',
              }}>
                Join Zoom Session →
              </a>
            </div>
          )}

          {/* Overall progress */}
          {hasAccess && (
            <div style={{ background:C.white, border:`1px solid ${C.border}`, borderRadius:14, padding:'1.75rem', marginBottom:'2rem' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:'1rem', flexWrap:'wrap', gap:'0.5rem' }}>
                <div>
                  <h2 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'1.4rem', color:C.green, margin:'0 0 0.2rem', fontWeight:400 }}>Your Journey</h2>
                  <p style={{ color:C.muted, margin:0, fontSize:'0.875rem' }}>{totalCompleted} of {TOTAL_DAYS} days completed</p>
                </div>
                <span style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'2.5rem', color:C.green, fontWeight:300, lineHeight:1 }}>{totalPercent}%</span>
              </div>
              {/* Progress bar */}
              <div style={{ background:C.cream, borderRadius:999, height:10, overflow:'hidden' }}>
                <div style={{ height:'100%', width:`${totalPercent}%`, background:`linear-gradient(to right, ${C.green}, ${C.orange})`, borderRadius:999, transition:'width 0.5s ease' }} />
              </div>
              {/* Week breakdown */}
              <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'0.75rem', marginTop:'1.25rem' }}>
                {WEEKS.map(w => {
                  const done = progress[w.id]?.length || 0
                  const pct = Math.round((done / w.days) * 100)
                  return (
                    <div key={w.id} style={{ textAlign:'center' }}>
                      <div style={{ fontSize:'0.75rem', color:C.muted, marginBottom:'0.3rem' }}>{w.label}</div>
                      <div style={{ background:C.cream, borderRadius:999, height:6, overflow:'hidden', marginBottom:'0.3rem' }}>
                        <div style={{ height:'100%', width:`${pct}%`, background:w.color, borderRadius:999, transition:'width 0.5s ease' }} />
                      </div>
                      <div style={{ fontSize:'0.75rem', color:w.color, fontWeight:500 }}>{done}/{w.days} days</div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Course modules */}
          <h2 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'1.4rem', color:C.green, fontWeight:400, margin:'0 0 1rem' }}>Course Modules</h2>
          <div style={{ display:'grid', gap:'1rem', marginBottom:'2rem' }}>
            {WEEKS.map((w, i) => {
              const done = progress[w.id]?.length || 0
              const pct = Math.round((done / w.days) * 100)
              const unlocked = hasAccess

              return (
                <div key={w.id} style={{ background:C.white, border:`1px solid ${C.border}`, borderRadius:14, padding:'1.5rem', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'1rem', opacity: unlocked ? 1 : 0.7 }}>
                  <div style={{ display:'flex', alignItems:'center', gap:'1rem', flex:1 }}>
                    <div style={{ fontSize:'2rem' }}>{w.emoji}</div>
                    <div style={{ flex:1 }}>
                      <div style={{ fontSize:'0.75rem', color:C.muted, textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:'0.2rem' }}>{w.label}</div>
                      <div style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'1.25rem', color:C.green, fontWeight:400, marginBottom:'0.5rem' }}>{w.title}</div>
                      {unlocked ? (
                        <>
                          <div style={{ background:C.cream, borderRadius:999, height:6, overflow:'hidden', maxWidth:300, marginBottom:'0.3rem' }}>
                            <div style={{ height:'100%', width:`${pct}%`, background:w.color, borderRadius:999, transition:'width 0.5s ease' }} />
                          </div>
                          <div style={{ fontSize:'0.78rem', color:C.muted }}>{done} of {w.days} days complete · {pct}%</div>
                        </>
                      ) : (
                        <div style={{ fontSize:'0.8rem', color:C.muted }}>🔒 Enroll to unlock</div>
                      )}
                    </div>
                  </div>
                  {unlocked ? (
                    <Link href={w.href} style={{ background:C.green, color:C.white, padding:'0.7rem 1.5rem', borderRadius:8, textDecoration:'none', fontSize:'0.875rem', fontWeight:500, whiteSpace:'nowrap' }}>
                      {done === 0 ? 'Begin' : done === w.days ? '✓ Revisit' : 'Continue →'}
                    </Link>
                  ) : (
                    <a href="/#pricing" style={{ background:C.cream, color:C.muted, padding:'0.7rem 1.5rem', borderRadius:8, textDecoration:'none', fontSize:'0.875rem', border:`1px solid ${C.border}`, whiteSpace:'nowrap' }}>
                      Enroll
                    </a>
                  )}
                </div>
              )
            })}
          </div>

          {/* Quick links */}
          <h2 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'1.4rem', color:C.green, fontWeight:400, margin:'0 0 1rem' }}>Quick Links</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:'1rem' }}>
            {[
              { label:'Join Zoom Session', desc:'Live sessions & 1:1 calls', href: ZOOM_LINK, emoji:'📹', external:true },
              { label:'Book a Session', desc:'1:1 with David', href:'/clarity-session', emoji:'🕯' },
              { label:'Download Ebook', desc:'The Inner Eye Awakening', href:'https://drive.google.com/uc?export=download&id=1tlDSepusgZ16sB0_A3Edgu75azQtHGlz', emoji:'📖', external:true },
              { label:'WhatsApp David', desc:'Direct support', href:`https://wa.me/27817904941`, emoji:'💬', external:true },
            ].map(l => (
              <a key={l.label} href={l.href} target={l.external ? '_blank' : '_self'} rel={l.external ? 'noopener noreferrer' : ''} style={{ background:C.white, border:`1px solid ${C.border}`, borderRadius:12, padding:'1.25rem', textDecoration:'none', display:'flex', alignItems:'center', gap:'0.75rem' }}>
                <span style={{ fontSize:'1.5rem' }}>{l.emoji}</span>
                <div>
                  <div style={{ fontWeight:500, color:C.text, fontSize:'0.9rem' }}>{l.label}</div>
                  <div style={{ fontSize:'0.78rem', color:C.muted }}>{l.desc}</div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </>
  )
}
