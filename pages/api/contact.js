import { initializeApp, getApps } from 'firebase/app'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCGgUL7S9GwTHzSIkXbwDS3cH7YVbQA6S0",
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

  const { name, email, message, interest } = req.body
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' })
  }

  try {
    await addDoc(collection(db, 'contact_submissions'), {
      name,
      email,
      message,
      interest: interest || 'general',
      status: 'new',
      created_at: new Date().toISOString()
    })
    return res.status(200).json({ success: true })
  } catch (error) {
    return res.status(500).json({ error: 'Could not submit. Please try again.' })
  }
}
