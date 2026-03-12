import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { supabase } from '../lib/supabase'
import Navbar from '../components/Navbar'
import styles from '../styles/Auth.module.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setStatus({ type: 'error', message: error.message })
    } else {
      router.push('/dashboard')
    }
    setLoading(false)
  }

  return (
    <>
      <Navbar />
      <div className={styles.authPage}>
        <div className={styles.authCard}>
          <div className={styles.authHeader}>
            <p className="section-label">Welcome Back</p>
            <h1 className={styles.authTitle}>Sign In to Your<br /><em>Sacred Space</em></h1>
          </div>
          {status && <div className={`alert-${status.type}`}>{status.message}</div>}
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" required placeholder="your@email.com"
                value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" required placeholder="••••••••"
                value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button type="submit" className={`btn-primary ${styles.authBtn}`} disabled={loading}>
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
          <p className={styles.authFooter}>
            Don't have an account? <Link href="/register">Create one</Link>
          </p>
        </div>
      </div>
    </>
  )
}
