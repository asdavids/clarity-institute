// pages/admin/index.js
// Full admin overview dashboard for David
// Shows: revenue, students, sessions, waitlist, contacts — all in one place
// Protected — only accessible when logged in as davidmuyunda@gmail.com

import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { initializeApp, getApps } from 'firebase/app'
import { getFirestore, collection, getDocs, orderBy, query, doc, updateDoc } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "clarity-institute.firebaseapp.com",
  projectId: "clarity-institute",
  storageBucket: "clarity-institute.firebasestorage.app",
  messagingSenderId: "505987977417",
  appId: "1:505987977417:web:546a9ba1998328f1617d18"
}

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
const db = getFirestore(app)
const auth = getAuth(app)
const ADMIN_EMAIL = 'davidmuyunda@gmail.com'

const C = {
  green:'#3D5A3E', green2:'#2e4530', brown:'#6B4A2A',
  orange:'#C1581A', cream:'#FAF6F0', text:'#2C1F14',
  muted:'#7A6A5A', border:'#E0D5C5', white:'#ffffff'
}
const serif = "'Cormorant Garamond', serif"
const sans  = "'Jost', sans-serif"

export default function AdminDashboard() {
  const [authChecked, setAuthChecked] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('overview')

  // Data
  const [students, setStudents]   = useState([])
  const [sessions, setSessions]   = useState([])
  const [waitlist, setWaitlist]   = useState([])
  const [contacts, setContacts]   = useState([])

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user?.email === ADMIN_EMAIL) {
        setIsAdmin(true)
        await loadAll()
      } else {
        setIsAdmin(false)
        setLoading(false)
      }
      setAuthChecked(true)
    })
    return () => unsub()
  }, [])

  const loadAll = async () => {
    try {
      const [studSnap, sessSnap, waitSnap, contSnap] = await Promise.all([
        getDocs(query(collection(db, 'profiles'),             orderBy('createdAt', 'desc'))),
        getDocs(query(collection(db, 'clarity_sessions'),     orderBy('createdAt', 'desc'))),
        getDocs(query(collection(db, 'waitlist'),             orderBy('createdAt', 'desc'))),
        getDocs(query(collection(db, 'contact_submissions'),  orderBy('createdAt', 'desc'))),
      ])
      setStudents(studSnap.docs.map(d => ({ id: d.id, ...d.data() })))
      setSessions(sessSnap.docs.map(d => ({ id: d.id, ...d.data() })))
      setWaitlist(waitSnap.docs.map(d => ({ id: d.id, ...d.data() })))
      setContacts(contSnap.docs.map(d => ({ id: d.id, ...d.data() })))
    } catch (e) { console.error(e) }
    finally { setLoading(false) }
  }

  const updateSessionStatus = async (id, status) => {
    try {
      await updateDoc(doc(db, 'clarity_sessions', id), { status })
      setSessions(prev => prev.map(s => s.id === id ? { ...s, status } : s))
    } catch (e) { console.error(e) }
  }

  // ── Computed stats ──
  const paidStudents    = students.filter(s => s.paid)
  const pendingSessions = sessions.filter(s => s.status === 'pending')
  const revenue = {
    cohort:    paidStudents.filter(s => s.plan === 'cohort').length * 99,
    mentorship:paidStudents.filter(s => s.plan === 'cohort_mentorship').length * 199,
    immersion: paidStudents.filter(s => s.plan === 'immersion').length * 299,
    sessions:  sessions.filter(s => s.status === 'completed').length * 99,
  }
  const totalRevenue = Object.values(revenue).reduce((a, b) => a + b, 0)

  const STATUS_STYLE = {
    pending:   { bg:'#FFF8E1', color:'#B8860B' },
    confirmed: { bg:'#E8F5E9', color:'#2E7D32' },
    completed: { bg:'#E3F2FD', color:'#1565C0' },
    cancelled: { bg:'#FFEBEE', color:'#C62828' },
  }

  const fmt = (ts) => {
    if (!ts) return '—'
    const d = ts.toDate ? ts.toDate() : new Date(ts)
    return d.toLocaleDateString('en-ZA', { day:'numeric', month:'short', year:'numeric' })
  }

  if (!authChecked) return <Loading />
  if (!isAdmin) return <NotAdmin />
  if (loading)   return <Loading />

  const TABS = [
    { id:'overview',  label:'Overview',  emoji:'📊' },
    { id:'students',  label:'Students',  emoji:'👥', count: students.length },
    { id:'sessions',  label:'Sessions',  emoji:'🕯', count: pendingSessions.length },
    { id:'waitlist',  label:'Waitlist',  emoji:'📋', count: waitlist.length },
    { id:'contacts',  label:'Messages',  emoji:'💬', count: contacts.length },
  ]

  return (
    <>
      <Head>
        <title>Admin Dashboard — The Clarity Institute</title>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <div style={{ minHeight:'100vh', background:C.cream, fontFamily:sans }}>

        {/* ── Top nav ── */}
        <nav style={{ background:C.white, borderBottom:`1px solid ${C.border}`, padding:'1rem 2rem', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'1.5rem' }}>
            <Link href="/" style={{ fontFamily:serif, fontSize:'1.2rem', color:C.green, textDecoration:'none', fontWeight:600 }}>
              The Clarity Institute
            </Link>
            <span style={{ color:C.border }}>|</span>
            <span style={{ fontSize:'0.8rem', color:C.orange, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.1em' }}>Admin</span>
          </div>
          <div style={{ display:'flex', gap:'1rem', alignItems:'center' }}>
            <Link href="/dashboard" style={{ fontSize:'0.8rem', color:C.muted, textDecoration:'none' }}>← Back to Dashboard</Link>
          </div>
        </nav>

        <div style={{ maxWidth:1200, margin:'0 auto', padding:'2rem 1.5rem' }}>

          {/* ── Page title ── */}
          <div style={{ marginBottom:'2rem' }}>
            <h1 style={{ fontFamily:serif, fontSize:'2.2rem', color:C.green, fontWeight:300, margin:'0 0 0.25rem' }}>Admin Overview</h1>
            <p style={{ color:C.muted, margin:0, fontSize:'0.9rem' }}>Everything at a glance — students, sessions, revenue, messages.</p>
          </div>

          {/* ── Tabs ── */}
          <div style={{ display:'flex', gap:'0.5rem', marginBottom:'2rem', flexWrap:'wrap', borderBottom:`1px solid ${C.border}`, paddingBottom:'0' }}>
            {TABS.map(t => (
              <button key={t.id} onClick={() => setActiveTab(t.id)} style={{
                padding:'0.65rem 1.25rem', borderRadius:'8px 8px 0 0',
                border:`1px solid ${activeTab === t.id ? C.border : 'transparent'}`,
                borderBottom: activeTab === t.id ? `1px solid ${C.white}` : `1px solid ${C.border}`,
                background: activeTab === t.id ? C.white : 'transparent',
                color: activeTab === t.id ? C.green : C.muted,
                fontFamily:sans, fontSize:'0.875rem', fontWeight: activeTab === t.id ? 600 : 400,
                cursor:'pointer', display:'flex', alignItems:'center', gap:'0.4rem',
                marginBottom: activeTab === t.id ? '-1px' : '0',
              }}>
                {t.emoji} {t.label}
                {t.count > 0 && (
                  <span style={{ background: t.id === 'sessions' && t.count > 0 ? C.orange : C.green, color:C.white, fontSize:'0.7rem', padding:'0.1rem 0.4rem', borderRadius:999, fontWeight:600 }}>
                    {t.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* ══════════════════════════════
              TAB: OVERVIEW
          ══════════════════════════════ */}
          {activeTab === 'overview' && (
            <div>
              {/* Revenue cards */}
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(180px, 1fr))', gap:'1rem', marginBottom:'2rem' }}>
                {[
                  { label:'Total Revenue', value:`$${totalRevenue.toLocaleString()}`, color:C.green, big:true },
                  { label:'Paid Students', value:paidStudents.length, color:C.green },
                  { label:'Total Students', value:students.length, color:C.brown },
                  { label:'Pending Sessions', value:pendingSessions.length, color:C.orange },
                  { label:'Waitlist', value:waitlist.length, color:C.brown },
                  { label:'Messages', value:contacts.length, color:C.muted },
                ].map(s => (
                  <div key={s.label} style={{ background:C.white, border:`1px solid ${C.border}`, borderRadius:12, padding:'1.25rem', borderTop:`3px solid ${s.color}` }}>
                    <div style={{ fontFamily:serif, fontSize: s.big ? '2.2rem' : '2rem', color:s.color, fontWeight:300, lineHeight:1 }}>{s.value}</div>
                    <div style={{ fontSize:'0.8rem', color:C.muted, marginTop:'0.4rem' }}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Revenue breakdown */}
              <div style={{ background:C.white, border:`1px solid ${C.border}`, borderRadius:14, padding:'1.75rem', marginBottom:'2rem' }}>
                <h2 style={{ fontFamily:serif, fontSize:'1.4rem', color:C.green, fontWeight:400, margin:'0 0 1.25rem' }}>Revenue Breakdown</h2>
                <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(180px, 1fr))', gap:'1rem' }}>
                  {[
                    { label:'The Cohort ($99)', value:`$${revenue.cohort}`, count: paidStudents.filter(s=>s.plan==='cohort').length },
                    { label:'Cohort + Mentorship ($199)', value:`$${revenue.mentorship}`, count: paidStudents.filter(s=>s.plan==='cohort_mentorship').length },
                    { label:'90-Day Immersion ($299)', value:`$${revenue.immersion}`, count: paidStudents.filter(s=>s.plan==='immersion').length },
                    { label:'Clarity Sessions ($99)', value:`$${revenue.sessions}`, count: sessions.filter(s=>s.status==='completed').length },
                  ].map(r => (
                    <div key={r.label} style={{ background:C.cream, borderRadius:10, padding:'1rem' }}>
                      <div style={{ fontFamily:serif, fontSize:'1.5rem', color:C.green, fontWeight:300 }}>{r.value}</div>
                      <div style={{ fontSize:'0.8rem', color:C.muted, margin:'0.2rem 0' }}>{r.label}</div>
                      <div style={{ fontSize:'0.75rem', color:C.brown, fontWeight:500 }}>{r.count} student{r.count !== 1 ? 's' : ''}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent activity */}
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1.5rem' }}>
                {/* Recent signups */}
                <div style={{ background:C.white, border:`1px solid ${C.border}`, borderRadius:14, padding:'1.5rem' }}>
                  <h3 style={{ fontFamily:serif, fontSize:'1.2rem', color:C.green, fontWeight:400, margin:'0 0 1rem' }}>Recent Signups</h3>
                  {students.slice(0,5).map(s => (
                    <div key={s.id} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'0.6rem 0', borderBottom:`1px solid ${C.border}` }}>
                      <div>
                        <div style={{ fontSize:'0.875rem', fontWeight:500, color:C.text }}>{s.name || 'No name'}</div>
                        <div style={{ fontSize:'0.78rem', color:C.muted }}>{s.email}</div>
                      </div>
                      <span style={{ fontSize:'0.75rem', padding:'0.2rem 0.6rem', borderRadius:999, background: s.paid ? '#E8F5E9' : '#FFF8E1', color: s.paid ? '#2E7D32' : '#B8860B', fontWeight:500 }}>
                        {s.paid ? '✓ Paid' : 'Unpaid'}
                      </span>
                    </div>
                  ))}
                  <Link href="#" onClick={() => setActiveTab('students')} style={{ fontSize:'0.8rem', color:C.green, textDecoration:'none', display:'block', marginTop:'0.75rem' }}>View all students →</Link>
                </div>

                {/* Pending sessions */}
                <div style={{ background:C.white, border:`1px solid ${C.border}`, borderRadius:14, padding:'1.5rem' }}>
                  <h3 style={{ fontFamily:serif, fontSize:'1.2rem', color:C.green, fontWeight:400, margin:'0 0 1rem' }}>Pending Sessions</h3>
                  {pendingSessions.length === 0 ? (
                    <p style={{ color:C.muted, fontSize:'0.875rem' }}>No pending sessions 🎉</p>
                  ) : pendingSessions.slice(0,5).map(s => (
                    <div key={s.id} style={{ padding:'0.6rem 0', borderBottom:`1px solid ${C.border}` }}>
                      <div style={{ display:'flex', justifyContent:'space-between' }}>
                        <div style={{ fontSize:'0.875rem', fontWeight:500, color:C.text }}>{s.name}</div>
                        <span style={{ fontSize:'0.75rem', color:C.orange, fontWeight:500 }}>Pending</span>
                      </div>
                      <div style={{ fontSize:'0.78rem', color:C.muted }}>{s.sessionFocus}</div>
                      {s.preferredDate && <div style={{ fontSize:'0.75rem', color:C.brown, marginTop:'0.2rem' }}>📅 {s.preferredDate} {s.preferredTime}</div>}
                    </div>
                  ))}
                  <Link href="#" onClick={() => setActiveTab('sessions')} style={{ fontSize:'0.8rem', color:C.green, textDecoration:'none', display:'block', marginTop:'0.75rem' }}>View all sessions →</Link>
                </div>
              </div>
            </div>
          )}

          {/* ══════════════════════════════
              TAB: STUDENTS
          ══════════════════════════════ */}
          {activeTab === 'students' && (
            <div>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'1.25rem' }}>
                <h2 style={{ fontFamily:serif, fontSize:'1.5rem', color:C.green, fontWeight:400, margin:0 }}>All Students ({students.length})</h2>
                <Link href="/admin/students" style={{ fontSize:'0.875rem', color:C.green, textDecoration:'none', border:`1px solid ${C.border}`, padding:'0.4rem 1rem', borderRadius:6, background:C.white }}>
                  Manage Access →
                </Link>
              </div>
              <div style={{ background:C.white, border:`1px solid ${C.border}`, borderRadius:12, overflow:'hidden' }}>
                {students.length === 0 ? (
                  <p style={{ padding:'2rem', textAlign:'center', color:C.muted }}>No students yet.</p>
                ) : students.map((s, i) => (
                  <div key={s.id} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'1rem 1.25rem', borderBottom: i < students.length-1 ? `1px solid ${C.border}` : 'none', flexWrap:'wrap', gap:'0.5rem' }}>
                    <div>
                      <div style={{ fontWeight:500, color:C.text, marginBottom:'0.15rem' }}>{s.name || 'No name'}</div>
                      <div style={{ fontSize:'0.85rem', color:C.muted }}>{s.email}</div>
                      {s.plan && <div style={{ fontSize:'0.75rem', color:C.orange, marginTop:'0.2rem', textTransform:'capitalize' }}>{s.plan.replace('_', ' + ')}</div>}
                    </div>
                    <div style={{ display:'flex', alignItems:'center', gap:'0.75rem' }}>
                      <span style={{ fontSize:'0.75rem', color:C.muted }}>{fmt(s.createdAt)}</span>
                      <span style={{ padding:'0.25rem 0.75rem', borderRadius:999, fontSize:'0.8rem', fontWeight:500, background: s.paid ? '#E8F5E9' : '#FFF8E1', color: s.paid ? '#2E7D32' : '#B8860B' }}>
                        {s.paid ? '✓ Active' : '⏳ Unpaid'}
                      </span>
                      <a href={`mailto:${s.email}`} style={{ fontSize:'0.8rem', color:C.green, textDecoration:'none', border:`1px solid ${C.border}`, padding:'0.3rem 0.75rem', borderRadius:6 }}>Email</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ══════════════════════════════
              TAB: SESSIONS
          ══════════════════════════════ */}
          {activeTab === 'sessions' && (
            <div>
              <h2 style={{ fontFamily:serif, fontSize:'1.5rem', color:C.green, fontWeight:400, margin:'0 0 1.25rem' }}>Session Bookings ({sessions.length})</h2>
              <div style={{ background:C.white, border:`1px solid ${C.border}`, borderRadius:12, overflow:'hidden' }}>
                {sessions.length === 0 ? (
                  <p style={{ padding:'2rem', textAlign:'center', color:C.muted }}>No sessions booked yet.</p>
                ) : sessions.map((s, i) => (
                  <div key={s.id} style={{ padding:'1.25rem', borderBottom: i < sessions.length-1 ? `1px solid ${C.border}` : 'none' }}>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:'0.75rem' }}>
                      <div style={{ flex:1 }}>
                        <div style={{ display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'0.3rem' }}>
                          <span style={{ fontWeight:500, color:C.text }}>{s.name}</span>
                          <span style={{ fontSize:'0.75rem', padding:'0.2rem 0.6rem', borderRadius:999, background: STATUS_STYLE[s.status]?.bg || '#f5f5f5', color: STATUS_STYLE[s.status]?.color || '#666', fontWeight:500 }}>
                            {s.status}
                          </span>
                        </div>
                        <div style={{ fontSize:'0.85rem', color:C.muted, marginBottom:'0.25rem' }}>{s.email}</div>
                        <div style={{ fontSize:'0.85rem', color:C.brown, marginBottom:'0.25rem' }}>{s.sessionFocus}</div>
                        {s.preferredDate && <div style={{ fontSize:'0.8rem', color:C.muted }}>📅 {s.preferredDate} {s.preferredTime && `at ${s.preferredTime}`} {s.timezone && `(${s.timezone})`}</div>}
                        {s.intention && <div style={{ fontSize:'0.8rem', color:C.muted, fontStyle:'italic', marginTop:'0.4rem', maxWidth:500 }}>"{s.intention?.slice(0,120)}{s.intention?.length > 120 ? '...' : ''}"</div>}
                      </div>
                      <div style={{ display:'flex', flexDirection:'column', gap:'0.5rem', alignItems:'flex-end' }}>
                        <div style={{ fontSize:'0.75rem', color:C.muted }}>{fmt(s.createdAt)}</div>
                        <div style={{ display:'flex', gap:'0.4rem', flexWrap:'wrap' }}>
                          {['pending','confirmed','completed','cancelled'].map(st => (
                            <button key={st} disabled={s.status === st} onClick={() => updateSessionStatus(s.id, st)} style={{
                              padding:'0.3rem 0.6rem', borderRadius:5, border:`1px solid ${STATUS_STYLE[st]?.color || '#ccc'}`,
                              background: s.status === st ? STATUS_STYLE[st]?.bg : C.white,
                              color: STATUS_STYLE[st]?.color, fontSize:'0.72rem', cursor: s.status === st ? 'default' : 'pointer',
                              fontFamily:sans, fontWeight: s.status === st ? 600 : 400, opacity: s.status === st ? 1 : 0.7,
                            }}>{st}</button>
                          ))}
                        </div>
                        <div style={{ display:'flex', gap:'0.4rem' }}>
                          <a href={`mailto:${s.email}`} style={{ fontSize:'0.75rem', color:C.green, textDecoration:'none', border:`1px solid ${C.border}`, padding:'0.3rem 0.6rem', borderRadius:5 }}>Email</a>
                          {s.phone && <a href={`https://wa.me/${s.phone.replace(/\D/g,'')}`} target="_blank" rel="noopener noreferrer" style={{ fontSize:'0.75rem', color:C.white, background:'#25D366', textDecoration:'none', padding:'0.3rem 0.6rem', borderRadius:5 }}>WhatsApp</a>}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ══════════════════════════════
              TAB: WAITLIST
          ══════════════════════════════ */}
          {activeTab === 'waitlist' && (
            <div>
              <h2 style={{ fontFamily:serif, fontSize:'1.5rem', color:C.green, fontWeight:400, margin:'0 0 1.25rem' }}>Waitlist ({waitlist.length})</h2>
              <div style={{ background:C.white, border:`1px solid ${C.border}`, borderRadius:12, overflow:'hidden' }}>
                {waitlist.length === 0 ? (
                  <p style={{ padding:'2rem', textAlign:'center', color:C.muted }}>No waitlist signups yet.</p>
                ) : waitlist.map((w, i) => (
                  <div key={w.id} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'1rem 1.25rem', borderBottom: i < waitlist.length-1 ? `1px solid ${C.border}` : 'none', flexWrap:'wrap', gap:'0.5rem' }}>
                    <div style={{ fontWeight:500, color:C.text }}>{w.email}</div>
                    <div style={{ display:'flex', alignItems:'center', gap:'0.75rem' }}>
                      <span style={{ fontSize:'0.8rem', color:C.muted }}>{fmt(w.createdAt)}</span>
                      <a href={`mailto:${w.email}?subject=The Clarity Institute — Cohort is Open!`} style={{ fontSize:'0.8rem', color:C.green, textDecoration:'none', border:`1px solid ${C.border}`, padding:'0.3rem 0.75rem', borderRadius:6 }}>Email</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ══════════════════════════════
              TAB: CONTACTS
          ══════════════════════════════ */}
          {activeTab === 'contacts' && (
            <div>
              <h2 style={{ fontFamily:serif, fontSize:'1.5rem', color:C.green, fontWeight:400, margin:'0 0 1.25rem' }}>Contact Messages ({contacts.length})</h2>
              <div style={{ display:'grid', gap:'1rem' }}>
                {contacts.length === 0 ? (
                  <p style={{ padding:'2rem', textAlign:'center', color:C.muted, background:C.white, borderRadius:12 }}>No messages yet.</p>
                ) : contacts.map(c => (
                  <div key={c.id} style={{ background:C.white, border:`1px solid ${C.border}`, borderRadius:12, padding:'1.5rem' }}>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'0.75rem', flexWrap:'wrap', gap:'0.5rem' }}>
                      <div>
                        <div style={{ fontWeight:500, color:C.text, marginBottom:'0.15rem' }}>{c.name}</div>
                        <div style={{ fontSize:'0.85rem', color:C.muted }}>{c.email}</div>
                      </div>
                      <div style={{ display:'flex', alignItems:'center', gap:'0.75rem' }}>
                        <span style={{ fontSize:'0.8rem', color:C.muted }}>{fmt(c.createdAt)}</span>
                        <a href={`mailto:${c.email}?subject=Re: Your message to The Clarity Institute`} style={{ fontSize:'0.8rem', color:C.white, background:C.green, textDecoration:'none', padding:'0.4rem 0.85rem', borderRadius:6 }}>Reply</a>
                      </div>
                    </div>
                    <div style={{ background:C.cream, borderLeft:`3px solid ${C.orange}`, padding:'0.75rem 1rem', borderRadius:'0 8px 8px 0', fontSize:'0.875rem', color:C.text, lineHeight:1.7 }}>
                      {c.message}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  )
}

function Loading() {
  return (
    <div style={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', background:'#FAF6F0', fontFamily:"'Jost', sans-serif" }}>
      <div style={{ textAlign:'center' }}>
        <div style={{ fontSize:'3rem', marginBottom:'1rem' }}>👁</div>
        <p style={{ color:'#7A6A5A' }}>Loading dashboard...</p>
      </div>
    </div>
  )
}

function NotAdmin() {
  return (
    <div style={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', background:'#FAF6F0', fontFamily:"'Jost', sans-serif" }}>
      <div style={{ textAlign:'center', background:'#fff', border:'1px solid #E0D5C5', borderRadius:12, padding:'2.5rem', maxWidth:400 }}>
        <h2 style={{ fontFamily:"'Cormorant Garamond', serif", color:'#3D5A3E' }}>Admin Only</h2>
        <p style={{ color:'#7A6A5A' }}>Please <Link href="/login" style={{ color:'#3D5A3E' }}>log in</Link> with your admin account.</p>
      </div>
    </div>
  )
}
