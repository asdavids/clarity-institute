// pages/api/clarity-session.js
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

  const { name, email, phone, preferredDate, preferredTime, timezone, sessionFocus, intention, howHeard, paypalConfirmation } = req.body

  if (!name || !email || !sessionFocus) {
    return res.status(400).json({ error: 'Name, email, and session focus are required.' })
  }

  try {
    // 1. Save to Firestore
    const docRef = await addDoc(collection(db, 'clarity_sessions'), {
      name, email, phone: phone || '',
      preferredDate: preferredDate || '',
      preferredTime: preferredTime || '',
      timezone: timezone || '',
      sessionFocus,
      intention: intention || '',
      howHeard: howHeard || '',
      paypalConfirmation: paypalConfirmation || '',
      status: 'pending',
      sessionType: 'single_clarity_session',
      price: 99,
      currency: 'USD',
      createdAt: serverTimestamp(),
    })

    const bookingRef = docRef.id.slice(0, 8).toUpperCase()

    // 2. Email to David
    await resend.emails.send({
      from: 'The Clarity Institute <notifications@theclarityinstitute.vercel.app>',
      to: 'davidmuyunda@gmail.com',
      subject: `🕯 New Session Booking — ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 2rem; color: #2C1F14;">
          <h1 style="color: #3D5A3E; font-weight: 300; font-size: 2rem; margin-bottom: 0.5rem;">New Session Booking</h1>
          <p style="color: #7A6A5A; margin-top: 0;">A client has booked a Single Clarity Session.</p>

          <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0;">
            <tr style="border-bottom: 1px solid #E0D5C5;">
              <td style="padding: 0.75rem 0; color: #7A6A5A; font-size: 0.9rem; width: 40%;">Booking Ref</td>
              <td style="padding: 0.75rem 0; font-weight: 600; color: #3D5A3E; font-family: monospace;">${bookingRef}</td>
            </tr>
            <tr style="border-bottom: 1px solid #E0D5C5;">
              <td style="padding: 0.75rem 0; color: #7A6A5A; font-size: 0.9rem;">Name</td>
              <td style="padding: 0.75rem 0; font-weight: 500;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #E0D5C5;">
              <td style="padding: 0.75rem 0; color: #7A6A5A; font-size: 0.9rem;">Email</td>
              <td style="padding: 0.75rem 0;"><a href="mailto:${email}" style="color: #3D5A3E;">${email}</a></td>
            </tr>
            ${phone ? `<tr style="border-bottom: 1px solid #E0D5C5;"><td style="padding: 0.75rem 0; color: #7A6A5A; font-size: 0.9rem;">Phone / WhatsApp</td><td style="padding: 0.75rem 0;"><a href="https://wa.me/${phone.replace(/\D/g,'')}" style="color: #25D366;">${phone}</a></td></tr>` : ''}
            ${preferredDate ? `<tr style="border-bottom: 1px solid #E0D5C5;"><td style="padding: 0.75rem 0; color: #7A6A5A; font-size: 0.9rem;">Preferred Date</td><td style="padding: 0.75rem 0;">${preferredDate}</td></tr>` : ''}
            ${preferredTime ? `<tr style="border-bottom: 1px solid #E0D5C5;"><td style="padding: 0.75rem 0; color: #7A6A5A; font-size: 0.9rem;">Preferred Time</td><td style="padding: 0.75rem 0;">${preferredTime} (${timezone})</td></tr>` : ''}
            <tr style="border-bottom: 1px solid #E0D5C5;">
              <td style="padding: 0.75rem 0; color: #7A6A5A; font-size: 0.9rem;">Session Focus</td>
              <td style="padding: 0.75rem 0;">${sessionFocus}</td>
            </tr>
            <tr style="border-bottom: 1px solid #E0D5C5;">
              <td style="padding: 0.75rem 0; color: #7A6A5A; font-size: 0.9rem;">PayPal Ref</td>
              <td style="padding: 0.75rem 0; font-family: monospace;">${paypalConfirmation}</td>
            </tr>
            ${howHeard ? `<tr><td style="padding: 0.75rem 0; color: #7A6A5A; font-size: 0.9rem;">How They Heard</td><td style="padding: 0.75rem 0;">${howHeard}</td></tr>` : ''}
          </table>

          <div style="background: #FAF6F0; border-left: 3px solid #3D5A3E; padding: 1.25rem 1.5rem; border-radius: 0 8px 8px 0; margin: 1.5rem 0;">
            <p style="margin: 0 0 0.5rem; font-size: 0.8rem; color: #7A6A5A; text-transform: uppercase; letter-spacing: 0.05em;">Their Intention</p>
            <p style="margin: 0; font-style: italic; line-height: 1.7; color: #2C1F14;">${intention}</p>
          </div>

          <div style="margin-top: 2rem; display: flex; gap: 1rem;">
            <a href="mailto:${email}?subject=Your Clarity Session Booking — ${bookingRef}" style="display: inline-block; background: #3D5A3E; color: white; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-size: 0.9rem; margin-right: 0.75rem;">Reply by Email</a>
            ${phone ? `<a href="https://wa.me/${phone.replace(/\D/g,'')}?text=${encodeURIComponent(`Hi ${name.split(' ')[0]}, this is David from The Clarity Institute. Thank you for booking a Clarity Session! I'm confirming your booking (ref: ${bookingRef}). Let's find a time that works for you.`)}" style="display: inline-block; background: #25D366; color: white; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-size: 0.9rem;">WhatsApp ${name.split(' ')[0]}</a>` : ''}
          </div>

          <p style="margin-top: 2rem; font-size: 0.8rem; color: #aaa;">The Clarity Institute · theclarityinstitute.vercel.app</p>
        </div>
      `,
    })

    // 3. Confirmation email to student
    await resend.emails.send({
      from: 'David at The Clarity Institute <notifications@theclarityinstitute.vercel.app>',
      to: email,
      subject: `Your Clarity Session is Booked ✦ Ref: ${bookingRef}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 2rem; color: #2C1F14; background: #FAF6F0;">
          <div style="text-align: center; padding: 2rem 0;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">👁</div>
            <h1 style="color: #3D5A3E; font-weight: 300; font-size: 2rem; margin: 0 0 0.5rem;">Your session is booked, ${name.split(' ')[0]}.</h1>
            <p style="color: #7A6A5A; margin: 0;">I've received your intention and will be in touch within 24 hours.</p>
          </div>

          <div style="background: white; border: 1px solid #E0D5C5; border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #E0D5C5;">
                <td style="padding: 0.65rem 0; color: #7A6A5A; font-size: 0.85rem;">Booking Reference</td>
                <td style="padding: 0.65rem 0; font-weight: 600; color: #3D5A3E; font-family: monospace; text-align: right;">${bookingRef}</td>
              </tr>
              <tr style="border-bottom: 1px solid #E0D5C5;">
                <td style="padding: 0.65rem 0; color: #7A6A5A; font-size: 0.85rem;">Session Type</td>
                <td style="padding: 0.65rem 0; text-align: right;">Single Clarity Session · 60 min</td>
              </tr>
              <tr>
                <td style="padding: 0.65rem 0; color: #7A6A5A; font-size: 0.85rem;">Session Focus</td>
                <td style="padding: 0.65rem 0; text-align: right;">${sessionFocus}</td>
              </tr>
            </table>
          </div>

          <div style="background: #3D5A3E; color: white; border-radius: 12px; padding: 1.75rem; margin: 1.5rem 0;">
            <h3 style="margin: 0 0 1rem; font-weight: 400; font-size: 1.2rem;">What happens next?</h3>
            <ol style="padding-left: 1.25rem; margin: 0;">
              <li style="margin-bottom: 0.6rem; line-height: 1.6; opacity: 0.9;">I'll review your intention and prepare for our time together.</li>
              <li style="margin-bottom: 0.6rem; line-height: 1.6; opacity: 0.9;">You'll receive a Zoom link and confirmed time within 24 hours.</li>
              <li style="line-height: 1.6; opacity: 0.9;">Show up as you are. The session holds space for exactly what you need.</li>
            </ol>
          </div>

          <div style="text-align: center; margin: 2rem 0;">
            <p style="color: #7A6A5A; font-size: 0.9rem; margin-bottom: 1rem;">Any questions? Message me directly:</p>
            <a href="https://wa.me/27817904941" style="display: inline-block; background: #25D366; color: white; padding: 0.75rem 1.75rem; border-radius: 8px; text-decoration: none; font-size: 0.9rem;">💬 WhatsApp David</a>
          </div>

          <div style="border-top: 1px solid #E0D5C5; padding-top: 1.5rem; text-align: center;">
            <p style="font-style: italic; color: #7A6A5A; font-size: 0.95rem; line-height: 1.7; margin: 0;">"The eye through which I see God is the same eye through which God sees me."</p>
            <p style="color: #aaa; font-size: 0.8rem; margin-top: 1rem;">The Clarity Institute · theclarityinstitute.vercel.app</p>
          </div>
        </div>
      `,
    })

    return res.status(200).json({
      success: true,
      bookingId: docRef.id,
      message: 'Your session has been booked! Check your email for confirmation.',
    })

  } catch (error) {
    console.error('Clarity session error:', error)
    return res.status(500).json({ error: 'Booking failed. Please try again or reach out via WhatsApp.' })
  }
}
