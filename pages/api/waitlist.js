// pages/api/waitlist.js
import { initializeApp, getApps } from 'firebase/app'
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { Resend } from 'resend'

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
const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { email } = req.body
  if (!email) return res.status(400).json({ error: 'Email is required.' })

  try {
    // 1. Save to Firestore
    await addDoc(collection(db, 'waitlist'), {
      email,
      createdAt: serverTimestamp(),
    })

    // 2. Notify David
    await resend.emails.send({
      from: 'The Clarity Institute <notifications@theclarityinstitute.vercel.app>',
      to: 'davidmuyunda@gmail.com',
      subject: `✦ New Waitlist Signup — ${email}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 500px; margin: 0 auto; padding: 2rem; color: #2C1F14;">
          <h2 style="color: #3D5A3E; font-weight: 300;">New Waitlist Signup</h2>
          <p style="color: #7A6A5A;">Someone just joined the waitlist for the next cohort.</p>
          <div style="background: #FAF6F0; border: 1px solid #E0D5C5; border-radius: 10px; padding: 1.25rem; margin: 1.5rem 0;">
            <p style="margin: 0; font-size: 1.1rem;"><strong>${email}</strong></p>
          </div>
          <a href="mailto:${email}" style="display: inline-block; background: #3D5A3E; color: white; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-size: 0.9rem;">Reply to ${email}</a>
          <p style="margin-top: 2rem; font-size: 0.8rem; color: #aaa;">The Clarity Institute · theclarityinstitute.vercel.app</p>
        </div>
      `,
    })

    // 3. Welcome email to new signup
    await resend.emails.send({
      from: 'David at The Clarity Institute <notifications@theclarityinstitute.vercel.app>',
      to: email,
      subject: `You're on the waitlist ✦ The Clarity Institute`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 580px; margin: 0 auto; padding: 2rem; color: #2C1F14; background: #FAF6F0;">
          <div style="text-align: center; padding: 2rem 0 1.5rem;">
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">👁</div>
            <h1 style="color: #3D5A3E; font-weight: 300; font-size: 1.8rem; margin: 0 0 0.5rem;">You're on the list.</h1>
            <p style="color: #7A6A5A; margin: 0; line-height: 1.7;">Thank you for your interest in The Clarity Institute. You'll be among the first to know when the next cohort opens.</p>
          </div>

          <div style="background: white; border: 1px solid #E0D5C5; border-radius: 12px; padding: 1.75rem; margin: 1.5rem 0;">
            <h3 style="color: #3D5A3E; font-weight: 400; margin: 0 0 0.75rem;">While you wait...</h3>
            <p style="color: #7A6A5A; line-height: 1.7; margin: 0 0 1rem;">Download the free Third Eye Ebook — a powerful introduction to the practices we use in the cohort.</p>
            <a href="https://drive.google.com/uc?export=download&id=1tlDSepusgZ16sB0_A3Edgu75azQtHGlz" style="display: inline-block; border: 1.5px solid #6B4A2A; color: #6B4A2A; padding: 0.65rem 1.5rem; border-radius: 8px; text-decoration: none; font-size: 0.9rem;">Download Free Ebook ↓</a>
          </div>

          <div style="text-align: center; margin: 1.5rem 0;">
            <p style="color: #7A6A5A; font-size: 0.9rem; margin-bottom: 1rem;">Have questions? David responds personally.</p>
            <a href="https://wa.me/27817904941" style="display: inline-block; background: #25D366; color: white; padding: 0.65rem 1.5rem; border-radius: 8px; text-decoration: none; font-size: 0.9rem;">💬 WhatsApp David</a>
          </div>

          <div style="border-top: 1px solid #E0D5C5; padding-top: 1.5rem; text-align: center;">
            <p style="font-style: italic; color: #7A6A5A; font-size: 0.9rem; line-height: 1.7; margin: 0;">"The quieter you become, the more you can hear."</p>
            <p style="color: #aaa; font-size: 0.8rem; margin-top: 1rem;">The Clarity Institute · theclarityinstitute.vercel.app</p>
          </div>
        </div>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Waitlist error:', error)
    return res.status(500).json({ error: 'Failed to join waitlist.' })
  }
}
