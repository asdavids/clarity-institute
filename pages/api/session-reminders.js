// pages/api/session-reminders.js
// Sends reminder emails to clients with sessions scheduled for tomorrow.
// Set up as a Vercel Cron Job to run daily.
//
// In vercel.json add:
// { "crons": [{ "path": "/api/session-reminders", "schedule": "0 8 * * *" }] }

import { initializeApp, getApps } from 'firebase/app'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
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

const ZOOM_LINK = process.env.ZOOM_LINK || "https://us05web.zoom.us/j/5541552777?pwd=hVLUx0faojiPboPB1AYOrUBANDFnI5.1"

export default async function handler(req, res) {
  // Only allow GET (for cron) or POST
  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Optional: protect with a secret so only Vercel cron can call it
  const authHeader = req.headers.authorization
  if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  try {
    // Get tomorrow's date in YYYY-MM-DD format
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    const tomorrowStr = tomorrow.toISOString().split('T')[0]

    // Find confirmed sessions scheduled for tomorrow
    const sessionsSnap = await getDocs(
      query(
        collection(db, 'clarity_sessions'),
        where('preferredDate', '==', tomorrowStr),
        where('status', '==', 'confirmed')
      )
    )

    if (sessionsSnap.empty) {
      return res.status(200).json({ message: 'No sessions tomorrow.', sent: 0 })
    }

    let sent = 0

    for (const doc of sessionsSnap.docs) {
      const session = doc.data()

      try {
        await resend.emails.send({
          from: 'David at The Clarity Institute <david@theclarityinstitute.guru>',
          to: session.email,
          subject: `Reminder: Your Clarity Session is Tomorrow ✦`,
          html: `
            <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; padding: 2rem; color: #2C1F14; background: #FAF6F0;">
              <div style="text-align: center; padding: 1.5rem 0;">
                <div style="font-size: 2.5rem; margin-bottom: 1rem;">👁</div>
                <h1 style="color: #3D5A3E; font-weight: 300; font-size: 1.8rem; margin: 0 0 0.5rem;">See you tomorrow, ${session.name?.split(' ')[0] || 'there'}.</h1>
                <p style="color: #7A6A5A; margin: 0; line-height: 1.7;">Your Clarity Session is scheduled for tomorrow.</p>
              </div>

              <div style="background: white; border: 1px solid #E0D5C5; border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr style="border-bottom: 1px solid #E0D5C5;">
                    <td style="padding: 0.65rem 0; color: #7A6A5A; font-size: 0.85rem;">Date</td>
                    <td style="padding: 0.65rem 0; text-align: right; font-weight: 500;">${session.preferredDate}</td>
                  </tr>
                  ${session.preferredTime ? `<tr style="border-bottom: 1px solid #E0D5C5;"><td style="padding: 0.65rem 0; color: #7A6A5A; font-size: 0.85rem;">Time</td><td style="padding: 0.65rem 0; text-align: right; font-weight: 500;">${session.preferredTime}${session.timezone ? ` (${session.timezone})` : ''}</td></tr>` : ''}
                  <tr>
                    <td style="padding: 0.65rem 0; color: #7A6A5A; font-size: 0.85rem;">Focus</td>
                    <td style="padding: 0.65rem 0; text-align: right;">${session.sessionFocus || 'General guidance'}</td>
                  </tr>
                </table>
              </div>

              <div style="background: #3D5A3E; border-radius: 12px; padding: 1.5rem; text-align: center; margin: 1.5rem 0;">
                <p style="color: rgba(255,255,255,0.7); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 0.75rem;">Your Zoom Link</p>
                <a href="${ZOOM_LINK}" style="display: inline-block; background: white; color: #3D5A3E; padding: 0.85rem 2rem; border-radius: 8px; text-decoration: none; font-size: 1rem; font-weight: 600;">
                  Join Zoom Session →
                </a>
                <p style="color: rgba(255,255,255,0.5); font-size: 0.8rem; margin: 0.75rem 0 0;">Save this link — click it at your session time.</p>
              </div>

              <div style="background: white; border: 1px solid #E0D5C5; border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0;">
                <h3 style="color: #3D5A3E; font-weight: 400; margin: 0 0 0.75rem; font-size: 1.1rem;">Before your session:</h3>
                <ol style="padding-left: 1.25rem; margin: 0; color: #7A6A5A; line-height: 1.8; font-size: 0.9rem;">
                  <li>Find a quiet, private space where you won't be interrupted.</li>
                  <li>Have a journal and pen nearby.</li>
                  <li>Take a few deep breaths before we begin.</li>
                  <li>Come as you are — there's no preparation needed beyond your openness.</li>
                </ol>
              </div>

              <div style="text-align: center; margin: 1.5rem 0;">
                <p style="color: #7A6A5A; font-size: 0.9rem; margin-bottom: 1rem;">Need to reschedule? Message David at least 24 hours in advance.</p>
                <a href="https://wa.me/27817904941" style="display: inline-block; background: #25D366; color: white; padding: 0.65rem 1.5rem; border-radius: 8px; text-decoration: none; font-size: 0.9rem;">💬 WhatsApp David</a>
              </div>

              <div style="border-top: 1px solid #E0D5C5; padding-top: 1.5rem; text-align: center;">
                <p style="color: #aaa; font-size: 0.8rem; margin: 0;">The Clarity Institute · theclarityinstitute.guru</p>
              </div>
            </div>
          `,
        })
        sent++
      } catch (emailErr) {
        console.error(`[Reminder] Failed to send to ${session.email}:`, emailErr)
      }
    }

    // Also notify David about tomorrow's sessions
    const sessionList = sessionsSnap.docs.map(d => d.data())
    try {
      await resend.emails.send({
        from: 'The Clarity Institute <david@theclarityinstitute.guru>',
        to: 'davidmuyunda@gmail.com',
        subject: `📅 You have ${sessionList.length} session${sessionList.length > 1 ? 's' : ''} tomorrow`,
        html: `
          <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; padding: 2rem; color: #2C1F14;">
            <h2 style="color: #3D5A3E; font-weight: 300;">Tomorrow's Sessions</h2>
            <p style="color: #7A6A5A;">You have ${sessionList.length} session${sessionList.length > 1 ? 's' : ''} scheduled for ${tomorrowStr}.</p>
            ${sessionList.map(s => `
              <div style="background: #FAF6F0; border: 1px solid #E0D5C5; border-radius: 10px; padding: 1.25rem; margin: 1rem 0;">
                <div style="font-weight: 500; margin-bottom: 0.3rem;">${s.name}</div>
                <div style="font-size: 0.85rem; color: #7A6A5A;">${s.email}</div>
                ${s.preferredTime ? `<div style="font-size: 0.85rem; color: #6B4A2A; margin-top: 0.3rem;">🕐 ${s.preferredTime}${s.timezone ? ` (${s.timezone})` : ''}</div>` : ''}
                <div style="font-size: 0.85rem; color: #7A6A5A; margin-top: 0.3rem;">${s.sessionFocus}</div>
              </div>
            `).join('')}
            <a href="https://www.theclarityinstitute.guru/admin" style="display: inline-block; margin-top: 1rem; background: #3D5A3E; color: white; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-size: 0.9rem;">View in Admin Dashboard</a>
            <p style="margin-top: 2rem; font-size: 0.8rem; color: #aaa;">The Clarity Institute · theclarityinstitute.guru</p>
          </div>
        `,
      })
    } catch (e) {
      console.error('[Reminder] Failed to notify admin:', e)
    }

    return res.status(200).json({ message: `Sent ${sent} reminder(s) for ${tomorrowStr}.`, sent })

  } catch (error) {
    console.error('[Session Reminders] Error:', error)
    return res.status(500).json({ error: 'Failed to send reminders.' })
  }
}
