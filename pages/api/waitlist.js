import { db } from '../../lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { email } = req.body
  if (!email) return res.status(400).json({ error: 'Email required' })

  try {
    await addDoc(collection(db, 'waitlist'), {
      email,
      createdAt: serverTimestamp()
    })
    res.status(200).json({ success: true })
  } catch (err) {
    res.status(500).json({ error: 'Failed to save email' })
  }
}
