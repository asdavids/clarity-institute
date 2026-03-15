// pages/api/immersion-application.js
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

  const { name, email, phone, location, focus, background, intention, commitment, experience, howHeard, paypalConfirmation, price } = req.body

  if (!name || !email || !focus || !intention) {
    return res.status(400).json({ error: 'Name, email, focus, and intention are required.' })
  }

  const firstName = name.split(' ')[0]

  try {
    const docRef = await addDoc(collection(db, 'immersion_clients'), {
      name, email, phone: phone || '', location: location || '',
      focus, background: background || '', intention,
      commitment: commitment || '', experience: experience || '',
      howHeard: howHeard || '', paypalConfirmation: paypalConfirmation || '',
      price: price || 299.99, currency: 'USD',
      status: 'active', type: '90_day_immersion',
      startDate: new Date().toISOString(),
      createdAt: serverTimestamp(),
    })

    const refId = docRef.id.slice(0, 8).toUpperCase()

    // Welcome email
    await resend.emails.send({
      from: 'David at The Clarity Institute <david@theclarityinstitute.guru>',
      to: email,
      subject: `Your 90-Day Immersion Begins, ${firstName} ✦`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 580px; margin: 0 auto; padding: 2rem; color: #2C1F14; background: #FAF6F0;">
          <div style="text-align: center; padding: 2rem 0 1.5rem;">
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">👁</div>
            <h1 style="color: #3D5A3E; font-weight: 300; font-size: 1.8rem; margin: 0 0 0.5rem;">Welcome to the Immersion, ${firstName}.</h1>
            <p style="color: #7A6A5A; margin: 0; line-height: 1.7;">The deepest journey begins now.</p>
          </div>
          <div style="background: white; border: 1px solid #E0D5C5; border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #E0D5C5;"><td style="padding: 0.65rem 0; color: #7A6A5A; font-size: 0.85rem;">Reference</td><td style="padding: 0.65rem 0; text-align: right; font-weight: 600; color: #3D5A3E; font-family: monospace;">${refId}</td></tr>
              <tr style="border-bottom: 1px solid #E0D5C5;"><td style="padding: 0.65rem 0; color: #7A6A5A; font-size: 0.85rem;">Programme</td><td style="padding: 0.65rem 0; text-align: right;">90-Day Immersion</td></tr>
              <tr style="border-bottom: 1px solid #E0D5C5;"><td style="padding: 0.65rem 0; color: #7A6A5A; font-size: 0.85rem;">Investment</td><td style="padding: 0.65rem 0; text-align: right;">$${price || 299.99}</td></tr>
              <tr><td style="padding: 0.65rem 0; color: #7A6A5A; font-size: 0.85rem;">Focus</td><td style="padding: 0.65rem 0; text-align: right;">${focus}</td></tr>
            </table>
          </div>
          <div style="background: #3D5A3E; border-radius: 12px; padding: 1.5rem; text-align: center; margin: 1.5rem 0;">
            <p style="color: rgba(255,255,255,0.7); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 0.75rem;">Your Zoom Link</p>
            <a href="${ZOOM_LINK}" style="display: inline-block; background: white; color: #3D5A3E; padding: 0.85rem 2rem; border-radius: 8px; text-decoration: none; font-size: 1rem; font-weight: 600;">Join Zoom Session →</a>
            <p style="color: rgba(255,255,255,0.5); font-size: 0.8rem; margin: 0.75rem 0 0;">Save this link — you'll use it for all sessions.</p>
          </div>
          <div style="background: white; border: 1px solid #E0D5C5; border-radius: 12px; padding: 1.75rem; margin: 1.5rem 0;">
            <h3 style="color: #3D5A3E; font-weight: 400; margin: 0 0 0.75rem;">Your 90-Day Journey:</h3>
            <ol style="padding-left: 1.25rem; margin: 0; color: #7A6A5A; line-height: 1.8; font-size: 0.9rem;">
              <li>David designs your custom curriculum based on your application (within 24 hours).</li>
              <li>Your first bi-weekly session is scheduled at a time that works for you.</li>
              <li>Month 1: Excavation — uncovering and clearing core patterns.</li>
              <li>Month 2: Activation — developing your specific gifts and perceptions.</li>
              <li>Month 3: Embodiment — integrating transformation into daily life.</li>
              <li>Between all sessions, you have unlimited voice message access via WhatsApp.</li>
            </ol>
          </div>
          <div style="text-align: center; margin: 2rem 0;">
            <a href="https://wa.me/27817904941" style="display: inline-block; background: #25D366; color: white; padding: 0.75rem 1.75rem; border-radius: 8px; text-decoration: none; font-size: 0.9rem;">💬 Message David on WhatsApp</a>
          </div>
          <div style="border-top: 1px solid #E0D5C5; padding-top: 1.5rem; text-align: center;">
            <p style="font-style: italic; color: #7A6A5A; font-size: 0.9rem; line-height: 1.7; margin: 0;">"The wound is the place where the Light enters you."</p>
            <p style="color: #aaa; font-size: 0.8rem; margin-top: 1rem;">The Clarity Institute · theclarityinstitute.guru</p>
          </div>
        </div>
      `,
    })

    // Notify David
    await resend.emails.send({
      from: 'The Clarity Institute <david@theclarityinstitute.guru>',
      to: 'davidmuyunda@gmail.com',
      subject: `👁 New 90-Day Immersion Client — ${name} ($${price || 299.99})`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 2rem; color: #2C1F14;">
          <h1 style="color: #3D5A3E; font-weight: 300; font-size: 2rem; margin-bottom: 0.5rem;">New Immersion Client</h1>
          <p style="color: #7A6A5A; margin-top: 0;">Someone has committed to the 90-Day Immersion.</p>
          <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0;">
            <tr style="border-bottom: 1px solid #E0D5C5;"><td style="padding: 0.75rem 0; color: #7A6A5A; width: 35%;">Ref</td><td style="padding: 0.75rem 0; font-weight: 600; color: #3D5A3E; font-family: monospace;">${refId}</td></tr>
            <tr style="border-bottom: 1px solid #E0D5C5;"><td style="padding: 0.75rem 0; color: #7A6A5A;">Name</td><td style="padding: 0.75rem 0; font-weight: 500;">${name}</td></tr>
            <tr style="border-bottom: 1px solid #E0D5C5;"><td style="padding: 0.75rem 0; color: #7A6A5A;">Email</td><td style="padding: 0.75rem 0;"><a href="mailto:${email}" style="color: #3D5A3E;">${email}</a></td></tr>
            ${phone ? `<tr style="border-bottom: 1px solid #E0D5C5;"><td style="padding: 0.75rem 0; color: #7A6A5A;">Phone</td><td style="padding: 0.75rem 0;"><a href="https://wa.me/${phone.replace(/\D/g, '')}" style="color: #25D366;">${phone}</a></td></tr>` : ''}
            ${location ? `<tr style="border-bottom: 1px solid #E0D5C5;"><td style="padding: 0.75rem 0; color: #7A6A5A;">Location</td><td style="padding: 0.75rem 0;">${location}</td></tr>` : ''}
            <tr style="border-bottom: 1px solid #E0D5C5;"><td style="padding: 0.75rem 0; color: #7A6A5A;">Focus</td><td style="padding: 0.75rem 0;">${focus}</td></tr>
            <tr><td style="padding: 0.75rem 0; color: #7A6A5A;">Amount</td><td style="padding: 0.75rem 0; font-weight: 600; color: #3D5A3E; font-size: 1.1rem;">$${price || 299.99}</td></tr>
          </table>
          ${background ? `<div style="background: #FAF6F0; border: 1px solid #E0D5C5; border-radius: 8px; padding: 1.25rem; margin: 1rem 0;"><p style="margin: 0 0 0.5rem; font-size: 0.8rem; color: #7A6A5A; text-transform: uppercase;">Background</p><p style="margin: 0; line-height: 1.7; font-size: 0.9rem;">${background}</p></div>` : ''}
          <div style="background: #FAF6F0; border-left: 3px solid #6B4A2A; padding: 1.25rem 1.5rem; border-radius: 0 8px 8px 0; margin: 1rem 0;">
            <p style="margin: 0 0 0.5rem; font-size: 0.8rem; color: #7A6A5A; text-transform: uppercase;">Their Intention</p>
            <p style="margin: 0; font-style: italic; line-height: 1.7;">${intention}</p>
          </div>
          ${commitment ? `<div style="background: #FAF6F0; border-left: 3px solid #3D5A3E; padding: 1.25rem 1.5rem; border-radius: 0 8px 8px 0; margin: 1rem 0;"><p style="margin: 0 0 0.5rem; font-size: 0.8rem; color: #7A6A5A; text-transform: uppercase;">Their Commitment</p><p style="margin: 0; line-height: 1.7; font-size: 0.9rem;">${commitment}</p></div>` : ''}
          <div style="margin-top: 2rem;">
            <a href="mailto:${email}?subject=Welcome to the 90-Day Immersion — ${refId}" style="display: inline-block; background: #3D5A3E; color: white; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-size: 0.9rem; margin-right: 0.75rem;">Reply by Email</a>
            ${phone ? `<a href="https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(`Hi ${firstName}, this is David from The Clarity Institute. Welcome to the 90-Day Immersion! I've received your application (ref: ${refId}) and I'm designing your custom curriculum now. Let's schedule your first session.`)}" style="display: inline-block; background: #25D366; color: white; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-size: 0.9rem;">WhatsApp ${firstName}</a>` : ''}
          </div>
          <p style="margin-top: 2rem; font-size: 0.8rem; color: #aaa;">The Clarity Institute · theclarityinstitute.guru</p>
        </div>
      `,
    })

    return res.status(200).json({ success: true, refId })
  } catch (error) {
    console.error('Immersion application error:', error)
    return res.status(500).json({ error: 'Application failed. Please try again or reach out via WhatsApp.' })
  }
}
