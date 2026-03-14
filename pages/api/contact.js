// pages/api/contact.js
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

  const { name, email, message } = req.body
  if (!name || !email || !message) return res.status(400).json({ error: 'All fields are required.' })

  try {
    // 1. Save to Firestore
    await addDoc(collection(db, 'contact_submissions'), {
      name, email, message,
      createdAt: serverTimestamp(),
    })

    // 2. Notify David
    await resend.emails.send({
      from: 'The Clarity Institute <david@theclarityinstitute.guru>',
      to: 'davidmuyunda@gmail.com',
      subject: `💬 New Contact Message — ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; padding: 2rem; color: #2C1F14;">
          <h2 style="color: #3D5A3E; font-weight: 300;">New Contact Message</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;">
            <tr style="border-bottom: 1px solid #E0D5C5;">
              <td style="padding: 0.65rem 0; color: #7A6A5A; font-size: 0.85rem; width: 30%;">Name</td>
              <td style="padding: 0.65rem 0; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 0.65rem 0; color: #7A6A5A; font-size: 0.85rem;">Email</td>
              <td style="padding: 0.65rem 0;"><a href="mailto:${email}" style="color: #3D5A3E;">${email}</a></td>
            </tr>
          </table>
          <div style="background: #FAF6F0; border-left: 3px solid #C1581A; padding: 1.25rem 1.5rem; border-radius: 0 8px 8px 0;">
            <p style="margin: 0 0 0.5rem; font-size: 0.8rem; color: #7A6A5A; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
            <p style="margin: 0; line-height: 1.7;">${message}</p>
          </div>
          <a href="mailto:${email}?subject=Re: Your message to The Clarity Institute" style="display: inline-block; margin-top: 1.5rem; background: #3D5A3E; color: white; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-size: 0.9rem;">Reply to ${name}</a>
          <p style="margin-top: 2rem; font-size: 0.8rem; color: #aaa;">The Clarity Institute · theclarityinstitute.guru</p>
        </div>
      `,
    })

    // 3. Auto-reply to sender
    await resend.emails.send({
      from: 'David at The Clarity Institute <david@theclarityinstitute.guru>',
      to: email,
      subject: `Thank you for reaching out, ${name.split(' ')[0]} ✦`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; padding: 2rem; color: #2C1F14; background: #FAF6F0;">
          <div style="text-align: center; padding: 1.5rem 0;">
            <div style="font-size: 2rem; margin-bottom: 1rem;">👁</div>
            <h1 style="color: #3D5A3E; font-weight: 300; font-size: 1.6rem; margin: 0 0 0.5rem;">Message received, ${name.split(' ')[0]}.</h1>
            <p style="color: #7A6A5A; line-height: 1.7; margin: 0;">Thank you for reaching out. I personally read every message and will get back to you within 24–48 hours.</p>
          </div>

          <div style="background: white; border: 1px solid #E0D5C5; border-radius: 10px; padding: 1.25rem; margin: 1.5rem 0;">
            <p style="margin: 0 0 0.4rem; font-size: 0.8rem; color: #7A6A5A; text-transform: uppercase; letter-spacing: 0.05em;">Your message</p>
            <p style="margin: 0; font-style: italic; color: #7A6A5A; line-height: 1.7; font-size: 0.9rem;">"${message}"</p>
          </div>

          <p style="color: #7A6A5A; line-height: 1.7; text-align: center; margin: 1.5rem 0;">Need a faster response? Message me directly on WhatsApp.</p>
          <div style="text-align: center;">
            <a href="https://wa.me/27817904941" style="display: inline-block; background: #25D366; color: white; padding: 0.65rem 1.5rem; border-radius: 8px; text-decoration: none; font-size: 0.9rem;">💬 WhatsApp David</a>
          </div>

          <div style="border-top: 1px solid #E0D5C5; margin-top: 2rem; padding-top: 1.5rem; text-align: center;">
            <p style="color: #aaa; font-size: 0.8rem; margin: 0;">The Clarity Institute · theclarityinstitute.guru</p>
          </div>
        </div>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Contact error:', error)
    return res.status(500).json({ error: 'Failed to send message.' })
  }
}
