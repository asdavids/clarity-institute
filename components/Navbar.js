import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { supabase } from '../lib/supabase'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
    })
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null)
    })
    return () => subscription.unsubscribe()
  }, [])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        The <span>Clarity</span> Institute
      </Link>
      <ul className={styles.links}>
        <li><Link href="/#about">About</Link></li>
        <li><Link href="/#cohort">Cohort</Link></li>
        <li><Link href="/#mentorship">Mentorship</Link></li>
        <li><Link href="/#blog">Resources</Link></li>
        {user ? (
          <>
            <li><Link href="/dashboard" className={styles.cta}>My Dashboard</Link></li>
            <li><button onClick={handleSignOut} className={styles.signout}>Sign Out</button></li>
          </>
        ) : (
          <>
            <li><Link href="/login" className={styles.login}>Login</Link></li>
            <li><Link href="/#pricing" className={styles.cta}>Enroll Now</Link></li>
          </>
        )}
      </ul>
    </nav>
  )
}
