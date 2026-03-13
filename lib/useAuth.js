// lib/useAuth.js
// Reusable hook — checks if user is logged in AND paid
// Returns: { user, profile, loading, isPaid }

import { useState, useEffect } from 'react'
import { initializeApp, getApps } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

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

export function useAuth() {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser)
        // Fetch Firestore profile to check paid status
        try {
          const snap = await getDoc(doc(db, 'profiles', firebaseUser.uid))
          if (snap.exists()) {
            setProfile(snap.data())
          } else {
            setProfile({ paid: false })
          }
        } catch {
          setProfile({ paid: false })
        }
      } else {
        setUser(null)
        setProfile(null)
      }
      setLoading(false)
    })
    return () => unsub()
  }, [])

  return {
    user,
    profile,
    loading,
    isPaid: profile?.paid === true,
    isAdmin: user?.email === 'davidmuyunda@gmail.com',
  }
}
