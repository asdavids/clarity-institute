import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { supabase } from '../lib/supabase'
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
    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: { full_name: form.name, program: form.program }
      }
    })
    if (error) {
      setStatus({ type: 'error', message: error.message })
    } else {
      setStatus({ type: 'success', message: 'Account created! Check your email to confirm, then sign in.' })
      setTimeout(() => router.push('/login'), 3000)
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
              <input type="password" required placeholder="Min 8 characters" minLength={8}
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
