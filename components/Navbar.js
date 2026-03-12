import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../lib/firebase'
import styles from './Navbar.module.css'

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
