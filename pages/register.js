import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { auth, db } from '../lib/firebase'
import Navbar from '../components/Navbar'
import styles from '../styles/Auth.module.css'

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', program: 'cohort' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)
  const router = useRouter()

  const handleRegister = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const { user } = await createUserWithEmailAndPassword(auth, form.email, form.password)
      await updateProfile(user, { displayName: form.name })
      await setDoc(doc(db, 'profiles', user.uid), {
        full_name: form.name,
        email: form.email,
        program: form.program,
        enrolled_at: new Date().toISOString(),
        progress: 0
      })
      setStatus({ type: 'success', message: 'Account created! Taking you to your dashboard...' })
      setTimeout(() => router.push('/dashboard'), 1500)
    } catch (error) {
      const messages = {
        'auth/email-already-in-use': 'An account with this email already exists.',
        'auth/weak-password': 'Password must be at least 6 characters.',
        'auth/invalid-email': 'Please enter a valid email address.',
      }
      setStatus({ type: 'error', message: messages[error.code] || 'Something went wrong. Please try again.' })
    }
    setLoading(false)
  }

  return (
    <>
      <Navbar />
      <div className={styles.authPage}>
        <div className={styles.authCard}>
          <div className={styles.authHeader}>
            <p className="section-label">Begin Your Journey</p>
            <h1 className={styles.authTitle}>Create Your<br /><em>Account</em></h1>
          </div>
          {status && <div className={status.type === 'success' ? 'alert-success' : 'alert-error'}>{status.message}</div>}
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" required placeholder="Your name"
                value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" required placeholder="your@email.com"
                value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" required placeholder="Min 6 characters" minLength={6}
                value={form.password} onChange={e => setForm({...form, password: e.target.value})} />
            </div>
            <div className="form-group">
              <label>Program Interest</label>
              <select value={form.program} onChange={e => setForm({...form, program: e.target.value})}>
                <option value="cohort">The Cohort ($444)</option>
                <option value="bundle">Cohort + Mentorship ($777)</option>
                <option value="immersion">90-Day Immersion ($1,444)</option>
                <option value="waitlist">Join Waitlist</option>
              </select>
            </div>
            <button type="submit" className={`btn-primary ${styles.authBtn}`} disabled={loading}>
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>
          <p className={styles.authFooter}>
            Already have an account? <Link href="/login">Sign in</Link>
          </p>
        </div>
      </div>
    </>
  )
}
