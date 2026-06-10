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
const resend = new Resend(process.env.RESEND_API_KEY)

// 🔒 Replace this with your actual Google Drive share link for The Rules of Life PDF
const BOOK_LINK = process.env.RULES_OF_LIFE_BOOK_LINK || 'https://drive.google.com/file/d/REPLACE_WITH_YOUR_FILE_ID/view?usp=sharing'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { name, email } = req.body
  if (!email) return res.status(400).json({ error: 'Email is required.' })

  const firstName = name?.split(' ')[0] || 'Friend'

  try {
    // 1. Save purchase to Firestore
    await addDoc(collection(db, 'book_purchases'), {
      name: name || '',
      email,
      book: 'the-rules-of-life',
      amount: 7.00,
      currency: 'USD',
      paymentMethod: 'paypal',
      createdAt: serverTimestamp(),
    })

    // 2. Send the book to the buyer
    await resend.emails.send({
      from: 'AS Davids — The Clarity Institute <david@theclarityinstitute.guru>',
      to: email,
      subject: 'Your copy of The Rules of Life ✦',
      html: `
        <div style="font-family: Georgia, serif; max-width: 580px; margin: 0 auto; padding: 0; color: #2C1F14; background: #FAF6F0;">

          <!-- Dark hero header -->
          <div style="background: linear-gradient(160deg, #1a1a1a 0%, #2C1F14 100%); padding: 2.5rem 2rem; text-align: center;">
            <div style="font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; color: #D4A843; margin-bottom: 0.75rem;">The Clarity Institute</div>
            <h1 style="font-family: Georgia, serif; font-size: 2rem; color: #ffffff; font-weight: 400; margin: 0 0 0.4rem; line-height: 1.2;">The Rules of Life</h1>
            <p style="color: rgba(255,255,255,0.5); font-style: italic; font-size: 0.95rem; margin: 0;">by AS Davids</p>
          </div>

          <!-- Body -->
          <div style="padding: 2rem;">
            <p style="font-size: 1rem; line-height: 1.85; color: #2C1F14; margin: 0 0 1.25rem;">
              ${firstName},
            </p>
            <p style="font-size: 1rem; line-height: 1.85; color: #2C1F14; margin: 0 0 1.5rem;">
              Thank you for your purchase. Your copy of <strong>The Rules of Life</strong> is ready.
              This book was written from a place of honest reckoning — not to comfort, but to clarify.
              May it serve you well.
            </p>

            <!-- Download button -->
            <div style="background: linear-gradient(135deg, #1a1a1a, #2C1F14); border-radius: 12px; padding: 2rem; text-align: center; margin: 1.75rem 0;">
              <div style="font-family: Georgia, serif; font-size: 1.2rem; color: #D4A843; font-weight: 400; margin-bottom: 0.4rem;">Your Book is Ready</div>
              <div style="font-size: 0.8rem; color: rgba(255,255,255,0.5); margin-bottom: 1.5rem;">382 pages · PDF format</div>
              <a href="${BOOK_LINK}"
                style="display: inline-block; background: #C1581A; color: #ffffff; padding: 0.95rem 2.25rem; border-radius: 8px; text-decoration: none; font-family: Arial, sans-serif; font-size: 1rem; font-weight: 700; letter-spacing: 0.02em;">
                Download The Rules of Life →
              </a>
              <p style="margin: 1rem 0 0; font-size: 0.78rem; color: rgba(255,255,255,0.4);">
                Opens in Google Drive. Sign in to download as PDF.
              </p>
            </div>

            <!-- Separator quote -->
            <div style="border-left: 3px solid #C1581A; padding: 0.75rem 1.25rem; margin: 1.75rem 0; background: #F2EBE0; border-radius: 0 8px 8px 0;">
              <p style="font-style: italic; color: #6B4A2A; font-size: 1rem; line-height: 1.7; margin: 0;">
                "Most people are living inside a set of rules they never agreed to. This book names them — and shows you the door."
              </p>
            </div>

            <!-- Go deeper -->
            <div style="background: #ffffff; border: 1px solid #E0D5C5; border-radius: 12px; padding: 1.5rem; margin: 1.75rem 0; text-align: center;">
              <p style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.1em; color: #7A6A5A; margin: 0 0 0.5rem;">Want to go deeper?</p>
              <p style="color: #2C1F14; font-size: 0.95rem; line-height: 1.7; margin: 0 0 1.25rem;">
                The Clarity Institute offers one-on-one sessions and immersive programmes for those ready to walk out the truths this book uncovers.
              </p>
              <a href="https://www.theclarityinstitute.guru/clarity-session"
                style="display: inline-block; background: #3D5A3E; color: #ffffff; padding: 0.75rem 1.75rem; border-radius: 8px; text-decoration: none; font-family: Arial, sans-serif; font-size: 0.9rem; font-weight: 600;">
                Book a Clarity Session →
              </a>
            </div>

            <!-- WhatsApp -->
            <div style="text-align: center; margin: 1.5rem 0 0;">
              <p style="color: #7A6A5A; font-size: 0.9rem; margin-bottom: 0.6rem;">Any questions? I respond personally.</p>
              <a href="https://wa.me/27817904941"
                style="display: inline-block; background: #25D366; color: #ffffff; padding: 0.65rem 1.5rem; border-radius: 8px; text-decoration: none; font-family: Arial, sans-serif; font-size: 0.88rem; font-weight: 600;">
                💬 WhatsApp AS Davids
              </a>
            </div>
          </div>

          <!-- Footer -->
          <div style="border-top: 1px solid #E0D5C5; padding: 1.25rem 2rem; text-align: center;">
            <p style="color: #aaa; font-size: 0.78rem; margin: 0; line-height: 1.6;">
              The Clarity Institute · <a href="https://www.theclarityinstitute.guru" style="color: #7A6A5A;">theclarityinstitute.guru</a>
            </p>
          </div>
        </div>
      `,
    })

    // 3. Notify AS Davids
    await resend.emails.send({
      from: 'The Clarity Institute <david@theclarityinstitute.guru>',
      to: 'davidmuyunda@gmail.com',
      subject: `📚 Book Sale — ${name || email} · $7.00`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 480px; margin: 0 auto; padding: 2rem; color: #2C1F14;">
          <h2 style="color: #3D5A3E; font-weight: 400; margin: 0 0 0.5rem;">New Book Sale</h2>
          <p style="color: #7A6A5A; margin: 0 0 1.5rem; font-size: 0.9rem;">Someone just purchased The Rules of Life.</p>
          <div style="background: #FAF6F0; border: 1px solid #E0D5C5; border-radius: 10px; padding: 1.25rem; margin-bottom: 1.5rem;">
            ${name ? `<p style="margin: 0 0 0.3rem; font-weight: 600; font-size: 1rem;">${name}</p>` : ''}
            <p style="margin: 0 0 0.3rem;"><a href="mailto:${email}" style="color: #3D5A3E;">${email}</a></p>
            <p style="margin: 0; color: #7A6A5A; font-size: 0.85rem;">Amount: $7.00 USD via PayPal</p>
          </div>
          <a href="mailto:${email}?subject=Thank you for The Rules of Life" style="display: inline-block; background: #3D5A3E; color: white; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-family: Arial, sans-serif; font-size: 0.9rem;">
            Email ${firstName}
          </a>
          <p style="margin-top: 2rem; font-size: 0.78rem; color: #aaa;">The Clarity Institute · theclarityinstitute.guru</p>
        </div>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('[Book Purchase] Error name:', error?.name)
    console.error('[Book Purchase] Error message:', error?.message)
    console.error('[Book Purchase] Error stack:', error?.stack?.slice(0, 500))
    console.error('[Book Purchase] RESEND_API_KEY set:', !!process.env.RESEND_API_KEY)
    console.error('[Book Purchase] BOOK_LINK set:', !!process.env.RULES_OF_LIFE_BOOK_LINK)
    console.error('[Book Purchase] FIREBASE_KEY set:', !!process.env.NEXT_PUBLIC_FIREBASE_API_KEY)
    return res.status(500).json({ error: 'Failed to process. Please contact david@theclarityinstitute.guru' })
  }
}
