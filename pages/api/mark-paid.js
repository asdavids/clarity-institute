// pages/api/mark-paid.js
// David calls this to mark a student as paid after confirming their PayPal payment
// Protected — only works when called by admin (davidmuyunda@gmail.com)

import { initializeApp, getApps } from 'firebase/app'
import { getFirestore, doc, updateDoc, getDoc, query, collection, where, getDocs } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

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

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { studentEmail, paid, plan, adminSecret } = req.body

  // Simple secret check — add ADMIN_SECRET to your Vercel env vars
  if (adminSecret !== process.env.ADMIN_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  if (!studentEmail) return res.status(400).json({ error: 'Student email is required.' })

  try {
    // Find the user profile by email
    const q = query(collection(db, 'profiles'), where('email', '==', studentEmail))
    const snap = await getDocs(q)

    if (snap.empty) {
      return res.status(404).json({ error: `No profile found for ${studentEmail}. They may not have registered yet.` })
    }

    // Update their profile
    const userDoc = snap.docs[0]
    await updateDoc(doc(db, 'profiles', userDoc.id), {
      paid: paid !== false, // defaults to true
      plan: plan || 'cohort', // 'cohort' | 'cohort_mentorship' | 'immersion'
      paidAt: new Date().toISOString(),
      paidBy: 'admin',
    })

    return res.status(200).json({
      success: true,
      message: `${studentEmail} has been marked as ${paid !== false ? 'PAID ✅' : 'UNPAID ❌'}`,
      plan: plan || 'cohort',
    })

  } catch (error) {
    console.error('Mark paid error:', error)
    return res.status(500).json({ error: 'Failed to update student.' })
  }
}
