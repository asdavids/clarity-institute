// pages/admin/students.js
// David uses this to activate course access for paying students
// Protected — only accessible when logged in as davidmuyunda@gmail.com

import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { initializeApp, getApps } from 'firebase/app'
import { getFirestore, collection, getDocs, orderBy, query } from 'firebase/firestore'
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

const C = { green:'#3D5A3E', brown:'#6B4A2A', orange:'#C1581A', cream:'#FAF6F0', text:'#2C1F14', muted:'#7A6A5A', border:'#E0D5C5', white:'#ffffff' }

export default function AdminStudents() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)
  const [authChecked, setAuthChecked] = useState(false)
  const [activating, setActivating] = useState(null)
  const [message, setMessage] = useState('')
  const [search, setSearch] = useState('')
  const [adminSecret, setAdminSecret] = useState('')

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user?.email === ADMIN_EMAIL) {
        setIsAdmin(true)
        loadStudents()
      } else {
        setIsAdmin(false)
        setLoading(false)
      }
      setAuthChecked(true)
    })
    return () => unsub()
  }, [])

  const loadStudents = async () => {
    try {
      const q = query(collection(db, 'profiles'), orderBy('createdAt', 'desc'))
      const snap = await getDocs(q)
      setStudents(snap.docs.map(d => ({ id: d.id, ...d.data() })))
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  const togglePaid = async (student, newPaidStatus) => {
    if (!adminSecret) {
      setMessage('⚠️ Please enter your Admin Secret first (see the field at the top)')
      return
    }
    setActivating(student.id)
    setMessage('')
    try {
      const res = await fetch('/api/mark-paid', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentEmail: student.email,
          paid: newPaidStatus,
          plan: student.plan || 'cohort',
          adminSecret,
        }),
      })
      const data = await res.json()
      if (res.ok) {
        setMessage(data.message)
        setStudents(prev => prev.map(s => s.id === student.id ? { ...s, paid: newPaidStatus } : s))
      } else {
        setMessage('❌ ' + data.error)
      }
    } catch (e) {
      setMessage('❌ Something went wrong')
    }
    setActivating(null)
  }

  const filtered = students.filter(s =>
    s.email?.toLowerCase().includes(search.toLowerCase()) ||
    s.name?.toLowerCase().includes(search.toLowerCase())
  )

  const paidCount = students.filter(s => s.paid).length

  if (!authChecked) return <div style={{ padding: '4rem', textAlign: 'center', fontFamily: "'Jost', sans-serif" }}>Loading...</div>

  if (!isAdmin) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: C.cream, fontFamily: "'Jost', sans-serif" }}>
      <div style={{ textAlign: 'center', background: C.white, border: `1px solid ${C.border}`, borderRadius: 12, padding: '2.5rem', maxWidth: 400 }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: C.green }}>Admin Only</h2>
        <p style={{ color: C.muted }}>Please <Link href="/login" style={{ color: C.green }}>log in</Link> with your admin account.</p>
      </div>
    </div>
  )

  return (
    <>
      <Head><title>Students — Admin</title></Head>
      <div style={{ minHeight: '100vh', background: C.cream, padding: '2rem', fontFamily: "'Jost', sans-serif" }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', color: C.green, margin: 0 }}>Students</h1>
            <p style={{ color: C.muted, margin: '0.25rem 0 0', fontSize: '0.9rem' }}>Manage course access for enrolled students</p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <Link href="/admin/sessions" style={{ fontSize: '0.875rem', color: C.green, textDecoration: 'none', padding: '0.5rem 1rem', border: `1px solid ${C.border}`, borderRadius: 6, background: C.white }}>Session Bookings</Link>
            <Link href="/dashboard" style={{ fontSize: '0.875rem', color: C.muted, textDecoration: 'none' }}>← Dashboard</Link>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
          {[
            { label: 'Total Students', value: students.length, color: C.green },
            { label: 'Paid / Active', value: paidCount, color: '#2E7D32' },
            { label: 'Unpaid', value: students.length - paidCount, color: '#B8860B' },
          ].map(s => (
            <div key={s.label} style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 10, padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 600, color: s.color, fontFamily: "'Cormorant Garamond', serif" }}>{s.value}</div>
              <div style={{ fontSize: '0.8rem', color: C.muted, marginTop: '0.25rem' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Admin secret input */}
        <div style={{ background: '#FFF8E1', border: '1px solid #F0C040', borderRadius: 10, padding: '1rem 1.25rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.85rem', color: '#7A6000', fontWeight: 500 }}>🔑 Admin Secret (required to activate students):</span>
          <input
            type="password"
            value={adminSecret}
            onChange={e => setAdminSecret(e.target.value)}
            placeholder="Enter your ADMIN_SECRET"
            style={{ padding: '0.5rem 0.75rem', border: '1.5px solid #F0C040', borderRadius: 6, fontFamily: "'Jost', sans-serif", fontSize: '0.875rem', flex: 1, minWidth: 200 }}
          />
        </div>

        {/* Message */}
        {message && (
          <div style={{ padding: '0.75rem 1rem', borderRadius: 8, marginBottom: '1rem', background: message.startsWith('❌') || message.startsWith('⚠️') ? '#FDF2F2' : '#E8F5E9', border: `1px solid ${message.startsWith('❌') || message.startsWith('⚠️') ? '#F5C6CB' : '#A5D6A7'}`, color: message.startsWith('❌') || message.startsWith('⚠️') ? '#C62828' : '#1B5E20', fontSize: '0.875rem' }}>
            {message}
          </div>
        )}

        {/* Search */}
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search by name or email..."
          style={{ width: '100%', padding: '0.75rem 1rem', border: `1.5px solid ${C.border}`, borderRadius: 8, fontFamily: "'Jost', sans-serif", fontSize: '0.95rem', background: C.white, marginBottom: '1rem', boxSizing: 'border-box' }}
        />

        {/* Students table */}
        <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 12, overflow: 'hidden' }}>
          {loading ? (
            <p style={{ padding: '2rem', textAlign: 'center', color: C.muted }}>Loading students...</p>
          ) : filtered.length === 0 ? (
            <p style={{ padding: '2rem', textAlign: 'center', color: C.muted }}>No students found.</p>
          ) : filtered.map((student, i) => (
            <div key={student.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.25rem', borderBottom: i < filtered.length - 1 ? `1px solid ${C.border}` : 'none', flexWrap: 'wrap', gap: '0.75rem' }}>
              <div>
                <div style={{ fontWeight: 500, color: C.text, marginBottom: '0.15rem' }}>{student.name || 'No name'}</div>
                <div style={{ fontSize: '0.85rem', color: C.muted }}>{student.email}</div>
                {student.plan && <div style={{ fontSize: '0.75rem', color: C.orange, marginTop: '0.2rem', textTransform: 'capitalize' }}>{student.plan.replace('_', ' + ')}</div>}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{
                  padding: '0.25rem 0.75rem', borderRadius: 999, fontSize: '0.8rem', fontWeight: 500,
                  background: student.paid ? '#E8F5E9' : '#FFF8E1',
                  color: student.paid ? '#2E7D32' : '#B8860B',
                }}>
                  {student.paid ? '✓ Active' : '⏳ Unpaid'}
                </span>
                <button
                  disabled={activating === student.id}
                  onClick={() => togglePaid(student, !student.paid)}
                  style={{
                    padding: '0.5rem 1rem', borderRadius: 6, border: 'none', cursor: 'pointer',
                    fontFamily: "'Jost', sans-serif", fontSize: '0.8rem', fontWeight: 500,
                    background: student.paid ? '#FFEBEE' : C.green,
                    color: student.paid ? '#C62828' : C.white,
                    opacity: activating === student.id ? 0.6 : 1,
                  }}
                >
                  {activating === student.id ? '...' : student.paid ? 'Revoke Access' : '✓ Activate Access'}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}
