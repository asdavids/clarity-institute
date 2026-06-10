// pages/api/book-purchase.js
import { initializeApp, getApps } from 'firebase/app'
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { Resend } from 'resend'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'clarity-institute.firebaseapp.com',
  projectId: 'clarity-institute',
  storageBucket: 'clarity-institute.firebasestorage.app',
  messagingSenderId: '505987977417',
  appId: '1:505987977417:web:546a9ba1998328f1617d18',
}

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
const db = getFirestore(app)

const BOOK_LINK = process.env.RULES_OF_LIFE_BOOK_LINK || 'https://drive.google.com/file/d/1nzi0zJP7SZhVlE-wPH3ntH7czWRkRCdQ/view?usp=sharing'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { name, email } = req.body
  if (!email) return res.status(400).json({ error: 'Email is required.' })

  const firstName = name?.split(' ')[0] || 'Friend'

  // Debug env vars
  const resendKey = process.env.RESEND_API_KEY
  if (!resendKey) {
    return res.status(500).json({ error: 'Failed to process. Please contact david@theclarityinstitute.guru', debug: 'RESEND_API_KEY missing' })
  }

  const resend = new Resend(resendKey)

  try {
    // 1. Save purchase to Firestore
    try {
      await addDoc(collection(db, 'book_purchases'), {
        name: name || '',
        email,
        book: 'the-rules-of-life',
        amount: 7.00,
        currency: 'USD',
        paymentMethod: 'paypal',
        createdAt: serverTimestamp(),
      })
    } catch (fbErr) {
      console.error('[Book Purchase] Firestore error:', fbErr?.message)
      // Non-fatal — continue with email
    }

    // 2. Send the book to the buyer
    const { error: sendErr } = await resend.emails.send({
      from: 'AS Davids — The Clarity Institute <david@theclarityinstitute.guru>',
      to: email,
      subject: 'Your copy of The Rules of Life ✦',
      html: `
        <div style="font-family: Georgia, serif; max-width: 580px; margin: 0 auto; padding: 0; color: #2C1F14; background: #FAF6F0;">
          <div style="background: linear-gradient(160deg, #1a1a1a 0%, #2C1F14 100%); padding: 2.5rem 2rem; text-align: center;">
            <div style="font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; color: #D4A843; margin-bottom: 0.75rem;">The Clarity Institute</div>
            <h1 style="font-family: Georgia, serif; font-size: 2rem; color: #ffffff; font-weight: 400; margin: 0 0 0.4rem; line-height: 1.2;">The Rules of Life</h1>
            <p style="color: rgba(255,255,255,0.5); font-style: italic; font-size: 0.95rem; margin: 0;">by AS Davids</p>
          </div>
          <div style="padding: 2rem;">
            <p style="font-size: 1rem; line-height: 1.85; color: #2C1F14; margin: 0 0 1.25rem;">${firstName},</p>
            <p style="font-size: 1rem; line-height: 1.85; color: #2C1F14; margin: 0 0 1.5rem;">
              Thank you for your purchase. Your copy of <strong>The Rules of Life</strong> is ready.
            </p>
            <div style="background: linear-gradient(135deg, #1a1a1a, #2C1F14); border-radius: 12px; padding: 2rem; text-align: center; margin: 1.75rem 0;">
              <div style="font-family: Georgia, serif; font-size: 1.2rem; color: #D4A843; margin-bottom: 1.5rem;">Your Book is Ready</div>
              <a href="${BOOK_LINK}" style="display: inline-block; background: #C1581A; color: #ffffff; padding: 0.95rem 2.25rem; border-radius: 8px; text-decoration: none; font-family: Arial, sans-serif; font-size: 1rem; font-weight: 700;">
                Download The Rules of Life →
              </a>
            </div>
            <div style="text-align: center; margin: 1.5rem 0 0;">
              <a href="https://wa.me/27817904941" style="display: inline-block; background: #25D366; color: #ffffff; padding: 0.65rem 1.5rem; border-radius: 8px; text-decoration: none; font-family: Arial, sans-serif; font-size: 0.88rem; font-weight: 600;">💬 WhatsApp AS Davids</a>
            </div>
          </div>
          <div style="border-top: 1px solid #E0D5C5; padding: 1.25rem 2rem; text-align: center;">
            <p style="color: #aaa; font-size: 0.78rem; margin: 0;">The Clarity Institute · theclarityinstitute.guru</p>
          </div>
        </div>
      `,
    })

    if (sendErr) {
      return res.status(500).json({ error: 'Failed to process. Please contact david@theclarityinstitute.guru', debug: sendErr })
    }

    // 3. Notify AS Davids
    await resend.emails.send({
      from: 'The Clarity Institute <david@theclarityinstitute.guru>',
      to: 'davidmuyunda@gmail.com',
      subject: `📚 Book Sale — ${name || email} · $7.00`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 480px; margin: 0 auto; padding: 2rem; color: #2C1F14;">
          <h2 style="color: #3D5A3E; font-weight: 400;">New Book Sale</h2>
          <div style="background: #FAF6F0; border: 1px solid #E0D5C5; border-radius: 10px; padding: 1.25rem; margin-bottom: 1.5rem;">
            ${name ? `<p style="margin: 0 0 0.3rem; font-weight: 600;">${name}</p>` : ''}
            <p style="margin: 0 0 0.3rem;"><a href="mailto:${email}" style="color: #3D5A3E;">${email}</a></p>
            <p style="margin: 0; color: #7A6A5A; font-size: 0.85rem;">Amount: $7.00 USD via PayPal</p>
          </div>
          <a href="mailto:${email}" style="display: inline-block; background: #3D5A3E; color: white; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-size: 0.9rem;">Email ${firstName}</a>
        </div>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    return res.status(500).json({
      error: 'Failed to process. Please contact david@theclarityinstitute.guru',
      debug: { message: error?.message, name: error?.name }
    })
  }
}
