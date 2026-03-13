import { db } from '../../lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { name, email, message, interest } = req.body
  if (!name || !email || !message) return res.status(400).json({ error: 'Missing fields' })

  try {
    await addDoc(collection(db, 'contact_submissions'), {
      name, email, message, interest,
      createdAt: serverTimestamp()
    })
    res.status(200).json({ success: true })
  } catch (err) {
    res.status(500).json({ error: 'Failed to save message' })
  }
}
