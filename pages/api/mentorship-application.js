// pages/api/mentorship-application.js
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
const ZOOM_LINK = process.env.ZOOM_LINK || "https://us05web.zoom.us/j/5541552777?pwd=hVLUx0faojiPboPB1AYOrUBANDFnI5.1"

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { name, email, phone, location, focus, background, intention, experience, howHeard, paypalConfirmation, price } = req.body

  if (!name || !email || !focus || !intention) {
    return res.status(400).json({ error: 'Name, email, focus, and intention are required.' })
  }

  const firstName = name.split(' ')[0]

  try {
    // 1. Save to Firestore
    const docRef = await addDoc(collection(db, 'mentorship_clients'), {
      name, email, phone: phone || '', location: location || '',
      focus, background: background || '', intention,
      experience: experience || '', howHeard: howHeard || '',
      paypalConfirmation: paypalConfirmation || '',
      price: price || 99.99, currency: 'USD',
      status: 'active',
      type: 'monthly_mentorship',
      startDate: new Date().toISOString(),
      createdAt: serverTimestamp(),
    })

    const refId = docRef.id.slice(0, 8).toUpperCase()

    // 2. Welcome email to client
    await resend.emails.send({
      from: 'David at The Clarity Institute <david@theclarityinstitute.guru>',
      to: email,
      subject: `Welcome to Mentorship, ${firstName} ✦`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 580px; margin: 0 auto; padding: 2rem; color: #2C1F14; background: #FAF6F0;">
          <div style="text-align: center; padding: 2rem 0 1.5rem;">
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">🌀</div>
            <h1 style="color: #3D5A3E; font-weight: 300; font-size: 1.8rem; margin: 0 0 0.5rem;">Welcome, ${firstName}.</h1>
            <p style="color: #7A6A5A; margin: 0; line-height: 1.7;">Your mentorship journey with David begins now.</p>
          </div>

          <div style="background: white; border: 1px solid #E0D5C5; border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #E0D5C5;">
                <td style="padding: 0.65rem 0; color: #7A6A5A; font-size: 0.85rem;">Reference</td>
                <td style="padding: 0.65rem 0; text-align: right; font-weight: 600; color: #3D5A3E; font-family: monospace;">${refId}</td>
              </tr>
              <tr style="border-bottom: 1px solid #E0D5C5;">
                <td style="padding: 0.65rem 0; color: #7A6A5A; font-size: 0.85rem;">Programme</td>
                <td style="padding: 0.65rem 0; text-align: right;">Monthly Mentorship</td>
              </tr>
              <tr style="border-bottom: 1px solid #E0D5C5;">
                <td style="padding: 0.65rem 0; color: #7A6A5A; font-size: 0.85rem;">Investment</td>
                <td style="padding: 0.65rem 0; text-align: right;">$${price || 99.99}/month</td>
              </tr>
              <tr>
                <td style="padding: 0.65rem 0; color: #7A6A5A; font-size: 0.85rem;">Focus</td>
                <td style="padding: 0.65rem 0; text-align: right;">${focus}</td>
              </tr>
            </table>
          </div>

          <div style="background: #3D5A3E; border-radius: 12px; padding: 1.5rem; text-align: center; margin: 1.5rem 0;">
            <p style="color: rgba(255,255,255,0.7); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 0.75rem;">Your Zoom Link</p>
            <a href="${ZOOM_LINK}" style="display: inline-block; background: white; color: #3D5A3E; padding: 0.85rem 2rem; border-radius: 8px; text-decoration: none; font-size: 1rem; font-weight: 600;">
              Join Zoom Session →
            </a>
            <p style="color: rgba(255,255,255,0.5); font-size: 0.8rem; margin: 0.75rem 0 0;">Save this link — you'll use it for all your calls with David.</p>
          </div>

          <div style="background: white; border: 1px solid #E0D5C5; border-radius: 12px; padding: 1.75rem; margin: 1.5rem 0;">
            <h3 style="color: #3D5A3E; font-weight: 400; margin: 0 0 0.75rem;">What happens next:</h3>
            <ol style="padding-left: 1.25rem; margin: 0; color: #7A6A5A; line-height: 1.8; font-size: 0.9rem;">
              <li>David will review your application and reach out within 24 hours.</li>
              <li>Your first bi-weekly call will be scheduled at a mutually convenient time.</li>
              <li>You will receive your custom practice plan before or during your first call.</li>
              <li>Between calls, you can send David voice messages anytime via WhatsApp.</li>
            </ol>
          </div>

          <div style="text-align: center; margin: 2rem 0;">
            <a href="https://wa.me/27817904941" style="display: inline-block; background: #25D366; color: white; padding: 0.75rem 1.75rem; border-radius: 8px; text-decoration: none; font-size: 0.9rem;">💬 Message David on WhatsApp</a>
          </div>

          <div style="border-top: 1px solid #E0D5C5; padding-top: 1.5rem; text-align: center;">
            <p style="font-style: italic; color: #7A6A5A; font-size: 0.9rem; line-height: 1.7; margin: 0;">"The teacher who is indeed wise does not bid you to enter the house of his wisdom but rather leads you to the threshold of your mind."</p>
            <p style="color: #aaa; font-size: 0.8rem; margin-top: 1rem;">The Clarity Institute · theclarityinstitute.guru</p>
          </div>
        </div>
      `,
    })

    // 3. Notify David
    await resend.emails.send({
      from: 'The Clarity Institute <david@theclarityinstitute.guru>',
      to: 'davidmuyunda@gmail.com',
      subject: `🌀 New Mentorship Client — ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 2rem; color: #2C1F14;">
          <h1 style="color: #3D5A3E; font-weight: 300; font-size: 2rem; margin-bottom: 0.5rem;">New Mentorship Client</h1>
          <p style="color: #7A6A5A; margin-top: 0;">Someone has signed up for Monthly Mentorship.</p>

          <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0;">
            <tr style="border-bottom: 1px solid #E0D5C5;"><td style="padding: 0.75rem 0; color: #7A6A5A; font-size: 0.9rem; width: 35%;">Ref</td><td style="padding: 0.75rem 0; font-weight: 600; color: #3D5A3E; font-family: monospace;">${refId}</td></tr>
            <tr style="border-bottom: 1px solid #E0D5C5;"><td style="padding: 0.75rem 0; color: #7A6A5A; font-size: 0.9rem;">Name</td><td style="padding: 0.75rem 0; font-weight: 500;">${name}</td></tr>
            <tr style="border-bottom: 1px solid #E0D5C5;"><td style="padding: 0.75rem 0; color: #7A6A5A; font-size: 0.9rem;">Email</td><td style="padding: 0.75rem 0;"><a href="mailto:${email}" style="color: #3D5A3E;">${email}</a></td></tr>
            ${phone ? `<tr style="border-bottom: 1px solid #E0D5C5;"><td style="padding: 0.75rem 0; color: #7A6A5A; font-size: 0.9rem;">Phone</td><td style="padding: 0.75rem 0;"><a href="https://wa.me/${phone.replace(/\D/g, '')}" style="color: #25D366;">${phone}</a></td></tr>` : ''}
            ${location ? `<tr style="border-bottom: 1px solid #E0D5C5;"><td style="padding: 0.75rem 0; color: #7A6A5A; font-size: 0.9rem;">Location</td><td style="padding: 0.75rem 0;">${location}</td></tr>` : ''}
            <tr style="border-bottom: 1px solid #E0D5C5;"><td style="padding: 0.75rem 0; color: #7A6A5A; font-size: 0.9rem;">Focus</td><td style="padding: 0.75rem 0;">${focus}</td></tr>
            ${experience ? `<tr style="border-bottom: 1px solid #E0D5C5;"><td style="padding: 0.75rem 0; color: #7A6A5A; font-size: 0.9rem;">Experience</td><td style="padding: 0.75rem 0;">${experience}</td></tr>` : ''}
            <tr style="border-bottom: 1px solid #E0D5C5;"><td style="padding: 0.75rem 0; color: #7A6A5A; font-size: 0.9rem;">PayPal Ref</td><td style="padding: 0.75rem 0; font-family: monospace;">${paypalConfirmation}</td></tr>
            <tr><td style="padding: 0.75rem 0; color: #7A6A5A; font-size: 0.9rem;">Amount</td><td style="padding: 0.75rem 0; font-weight: 600; color: #3D5A3E;">$${price || 99.99}/month</td></tr>
          </table>

          ${background ? `<div style="background: #FAF6F0; border: 1px solid #E0D5C5; border-radius: 8px; padding: 1.25rem; margin: 1rem 0;"><p style="margin: 0 0 0.5rem; font-size: 0.8rem; color: #7A6A5A; text-transform: uppercase; letter-spacing: 0.05em;">Spiritual Background</p><p style="margin: 0; line-height: 1.7; font-size: 0.9rem;">${background}</p></div>` : ''}

          <div style="background: #FAF6F0; border-left: 3px solid #3D5A3E; padding: 1.25rem 1.5rem; border-radius: 0 8px 8px 0; margin: 1rem 0;">
            <p style="margin: 0 0 0.5rem; font-size: 0.8rem; color: #7A6A5A; text-transform: uppercase; letter-spacing: 0.05em;">Their Intention</p>
            <p style="margin: 0; font-style: italic; line-height: 1.7;">${intention}</p>
          </div>

          <div style="margin-top: 2rem;">
            <a href="mailto:${email}?subject=Welcome to Mentorship — ${refId}" style="display: inline-block; background: #3D5A3E; color: white; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-size: 0.9rem; margin-right: 0.75rem;">Reply by Email</a>
            ${phone ? `<a href="https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(`Hi ${firstName}, this is David from The Clarity Institute. Welcome to mentorship! I've received your application (ref: ${refId}) and I'm looking forward to our journey together. Let's schedule your first call.`)}" style="display: inline-block; background: #25D366; color: white; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-size: 0.9rem;">WhatsApp ${firstName}</a>` : ''}
          </div>

          <p style="margin-top: 2rem; font-size: 0.8rem; color: #aaa;">The Clarity Institute · theclarityinstitute.guru</p>
        </div>
      `,
    })

    return res.status(200).json({ success: true, refId })
  } catch (error) {
    console.error('Mentorship application error:', error)
    return res.status(500).json({ error: 'Application failed. Please try again or reach out via WhatsApp.' })
  }
}
