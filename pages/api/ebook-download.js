// pages/api/ebook-download.js
import { initializeApp, getApps } from 'firebase/app'
import { getFirestore, collection, addDoc, serverTimestamp, query, where, getDocs } from 'firebase/firestore'
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

const EBOOK_LINK = 'https://drive.google.com/file/d/1tlDSepusgZ16sB0_A3Edgu75azQtHGlz/view?usp=drive_link'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { name, email } = req.body
  if (!email) return res.status(400).json({ error: 'Email is required.' })

  const firstName = name?.split(' ')[0] || 'there'

  try {
    // 1. Save to ebook_downloads collection
    await addDoc(collection(db, 'ebook_downloads'), {
      name: name || '',
      email,
      source: 'ebook_landing_page',
      createdAt: serverTimestamp(),
    })

    // 2. Also add to waitlist (if not already on it)
    const existing = await getDocs(
      query(collection(db, 'waitlist'), where('email', '==', email))
    )
    if (existing.empty) {
      await addDoc(collection(db, 'waitlist'), {
        email,
        name: name || '',
        source: 'ebook_download',
        createdAt: serverTimestamp(),
      })
    }

    // 3. Send ebook download email to user
    await resend.emails.send({
      from: 'David at The Clarity Institute <david@theclarityinstitute.guru>',
      to: email,
      subject: `Your Free Ebook: The Third Eye Awakening ✦`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 580px; margin: 0 auto; padding: 2rem; color: #2C1F14; background: #FAF6F0;">
          <div style="text-align: center; padding: 2rem 0 1.5rem;">
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">👁</div>
            <h1 style="color: #3D5A3E; font-weight: 300; font-size: 1.8rem; margin: 0 0 0.5rem;">Your ebook is ready, ${firstName}.</h1>
            <p style="color: #7A6A5A; margin: 0; line-height: 1.7;">Thank you for your interest in the inner work. Here's your free copy.</p>
          </div>

          <div style="background: linear-gradient(145deg, #3D5A3E, #2e4530); border-radius: 12px; padding: 2rem; text-align: center; margin: 1.5rem 0;">
            <div style="font-family: Georgia, serif; font-size: 1.4rem; color: white; font-weight: 300; margin-bottom: 0.5rem;">The Third Eye Awakening</div>
            <div style="font-size: 0.8rem; color: rgba(255,255,255,0.6); margin-bottom: 1.25rem;">by AS Davids</div>
            <a href="${EBOOK_LINK}" style="display: inline-block; background: #C1581A; color: white; padding: 0.85rem 2rem; border-radius: 8px; text-decoration: none; font-size: 1rem; font-weight: 600;">
              Download Your Free Ebook →
            </a>
          </div>

          <div style="background: white; border: 1px solid #E0D5C5; border-radius: 12px; padding: 1.75rem; margin: 1.5rem 0;">
            <h3 style="color: #3D5A3E; font-weight: 400; margin: 0 0 0.75rem;">What's inside:</h3>
            <ul style="padding-left: 1.25rem; margin: 0; color: #7A6A5A; line-height: 1.9; font-size: 0.9rem;">
              <li>The science and spirit of the third eye</li>
              <li>Daily activation practices you can start today</li>
              <li>How to work with dreams, visions, and inner sight</li>
              <li>Common blocks and how to move through them</li>
            </ul>
          </div>

          <div style="text-align: center; margin: 2rem 0;">
            <p style="color: #7A6A5A; font-size: 0.95rem; line-height: 1.7; margin-bottom: 1rem;">When you're ready to go deeper, the 8-week cohort provides a complete guided journey.</p>
            <a href="https://www.theclarityinstitute.guru/#pricing" style="display: inline-block; background: #3D5A3E; color: white; padding: 0.75rem 1.75rem; border-radius: 8px; text-decoration: none; font-size: 0.9rem;">Explore the Cohort →</a>
          </div>

          <div style="text-align: center; margin: 1.5rem 0;">
            <p style="color: #7A6A5A; font-size: 0.9rem; margin-bottom: 0.75rem;">Questions? David responds personally.</p>
            <a href="https://wa.me/27817904941" style="display: inline-block; background: #25D366; color: white; padding: 0.65rem 1.5rem; border-radius: 8px; text-decoration: none; font-size: 0.9rem;">💬 WhatsApp David</a>
          </div>

          <div style="border-top: 1px solid #E0D5C5; padding-top: 1.5rem; text-align: center;">
            <p style="font-style: italic; color: #7A6A5A; font-size: 0.9rem; line-height: 1.7; margin: 0;">"The quieter you become, the more you can hear."</p>
            <p style="color: #aaa; font-size: 0.8rem; margin-top: 1rem;">The Clarity Institute · theclarityinstitute.guru</p>
          </div>
        </div>
      `,
    })

    // 4. Notify David
    await resend.emails.send({
      from: 'The Clarity Institute <david@theclarityinstitute.guru>',
      to: 'davidmuyunda@gmail.com',
      subject: `📖 Ebook Downloaded — ${name || email}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 500px; margin: 0 auto; padding: 2rem; color: #2C1F14;">
          <h2 style="color: #3D5A3E; font-weight: 300;">New Ebook Download</h2>
          <p style="color: #7A6A5A;">Someone just downloaded The Third Eye Awakening.</p>
          <div style="background: #FAF6F0; border: 1px solid #E0D5C5; border-radius: 10px; padding: 1.25rem; margin: 1.5rem 0;">
            ${name ? `<p style="margin: 0 0 0.3rem; font-weight: 500;">${name}</p>` : ''}
            <p style="margin: 0; font-size: 1.05rem;"><a href="mailto:${email}" style="color: #3D5A3E;">${email}</a></p>
          </div>
          <p style="color: #7A6A5A; font-size: 0.85rem;">Also added to waitlist.</p>
          <a href="mailto:${email}?subject=Welcome to The Clarity Institute" style="display: inline-block; background: #3D5A3E; color: white; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-size: 0.9rem;">Email ${firstName}</a>
          <p style="margin-top: 2rem; font-size: 0.8rem; color: #aaa;">The Clarity Institute · theclarityinstitute.guru</p>
        </div>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Ebook download error:', error)
    return res.status(500).json({ error: 'Failed to process download.' })
  }
}
