// lib/useProgress.js
// Tracks which lessons a student has completed
// Saves to Firestore → 'progress' collection
// Usage: const { completed, markDone, loading } = useProgress(userId, 'week1-2')

import { useState, useEffect } from 'react'
import { initializeApp, getApps } from 'firebase/app'
import { getFirestore, doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore'

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

export function useProgress(userId, week) {
  const [completed, setCompleted] = useState([]) // array of completed day numbers e.g. [1, 2, 3]
  const [loading, setLoading] = useState(true)

  // Load progress from Firestore on mount
  useEffect(() => {
    if (!userId || !week) { setLoading(false); return }

    const load = async () => {
      try {
        const ref = doc(db, 'progress', `${userId}_${week}`)
        const snap = await getDoc(ref)
        if (snap.exists()) {
          setCompleted(snap.data().completedDays || [])
        }
      } catch (e) {
        console.error('Progress load error:', e)
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [userId, week])

  // Mark a day as complete
  const markDone = async (dayNumber) => {
    if (!userId || completed.includes(dayNumber)) return
    const newCompleted = [...completed, dayNumber]
    setCompleted(newCompleted) // optimistic update

    try {
      const ref = doc(db, 'progress', `${userId}_${week}`)
      const snap = await getDoc(ref)
      if (snap.exists()) {
        await updateDoc(ref, { completedDays: arrayUnion(dayNumber), lastUpdated: new Date().toISOString() })
      } else {
        await setDoc(ref, {
          userId, week,
          completedDays: [dayNumber],
          startedAt: new Date().toISOString(),
          lastUpdated: new Date().toISOString(),
        })
      }
    } catch (e) {
      console.error('Progress save error:', e)
      setCompleted(completed) // revert on error
    }
  }

  // Unmark a day (in case of mistake)
  const markUndone = async (dayNumber) => {
    if (!userId || !completed.includes(dayNumber)) return
    const newCompleted = completed.filter(d => d !== dayNumber)
    setCompleted(newCompleted)

    try {
      const ref = doc(db, 'progress', `${userId}_${week}`)
      await updateDoc(ref, { completedDays: arrayRemove(dayNumber), lastUpdated: new Date().toISOString() })
    } catch (e) {
      console.error('Progress save error:', e)
      setCompleted(completed)
    }
  }

  const isDone = (dayNumber) => completed.includes(dayNumber)
  const percentDone = (totalDays) => Math.round((completed.length / totalDays) * 100)

  return { completed, markDone, markUndone, isDone, percentDone, loading }
}

// Load ALL progress for a user across all weeks (for dashboard)
export async function getAllProgress(userId) {
  if (!userId) return {}
  try {
    const weeks = ['week1-2', 'week3-5', 'week6-8']
    const results = {}
    await Promise.all(weeks.map(async (week) => {
      const snap = await getDoc(doc(db, 'progress', `${userId}_${week}`))
      results[week] = snap.exists() ? snap.data().completedDays || [] : []
    }))
    return results
  } catch (e) {
    console.error('Get all progress error:', e)
    return {}
  }
}
