// pages/privacy.js
import Head from 'next/head'
import Link from 'next/link'

const C = { green:'#3D5A3E', brown:'#6B4A2A', cream:'#FAF6F0', text:'#2C1F14', muted:'#7A6A5A', border:'#E0D5C5', white:'#ffffff' }
const serif = "'Cormorant Garamond', serif"
const sans = "'Jost', sans-serif"

const Section = ({ title, children }) => (
  <div style={{ marginBottom:'2rem' }}>
    <h2 style={{ fontFamily:serif, fontSize:'1.4rem', color:C.green, fontWeight:400, margin:'0 0 0.75rem' }}>{title}</h2>
    <div style={{ color:C.text, fontSize:'0.92rem', lineHeight:1.8 }}>{children}</div>
  </div>
)

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — The Clarity Institute</title>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>
      <div style={{ minHeight:'100vh', background:C.cream, fontFamily:sans }}>

        {/* Nav */}
        <nav style={{ background:C.white, borderBottom:`1px solid ${C.border}`, padding:'1rem 2rem', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <Link href="/" style={{ fontFamily:serif, fontSize:'1.3rem', color:C.green, textDecoration:'none', fontWeight:600 }}>The Clarity Institute</Link>
          <Link href="/" style={{ fontSize:'0.875rem', color:C.muted, textDecoration:'none' }}>← Home</Link>
        </nav>

        <div style={{ maxWidth:720, margin:'0 auto', padding:'3rem 1.5rem' }}>
          <h1 style={{ fontFamily:serif, fontSize:'2.5rem', color:C.green, fontWeight:300, margin:'0 0 0.5rem' }}>Privacy Policy</h1>
          <p style={{ color:C.muted, fontSize:'0.875rem', marginBottom:'2.5rem' }}>Last updated: March 2026</p>

          <Section title="1. Who We Are">
            <p>The Clarity Institute is operated by David Muyunda, based in South Africa. This privacy policy explains how we collect, use, and protect your personal information when you use our website (theclarityinstitute.guru) and services.</p>
          </Section>

          <Section title="2. Information We Collect">
            <p><strong>Information you provide:</strong> When you register, book a session, join the waitlist, or contact us, we collect your name, email address, phone number (optional), and any information you share in forms such as session intentions.</p>
            <p style={{ marginTop:'0.75rem' }}><strong>Payment information:</strong> Payments are processed by PayPal. We do not store your credit card or bank details. We receive transaction confirmation details from PayPal (transaction ID, amount, payer email).</p>
            <p style={{ marginTop:'0.75rem' }}><strong>Automatically collected:</strong> Our hosting provider (Vercel) may collect basic technical data such as IP address, browser type, and pages visited for performance and security purposes.</p>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use your information to: provide access to courses and sessions you've purchased; send confirmation emails and session reminders; respond to your questions and messages; improve our services; and communicate about new programs or cohort openings (only if you've opted in via the waitlist).</p>
          </Section>

          <Section title="4. Data Storage & Security">
            <p>Your data is stored securely using Google Firebase (Cloud Firestore) with industry-standard encryption. Our website is hosted on Vercel. We take reasonable measures to protect your information, but no method of internet transmission is 100% secure.</p>
          </Section>

          <Section title="5. Third-Party Services">
            <p>We use the following third-party services that may process your data:</p>
            <p style={{ marginTop:'0.5rem' }}>
              <strong>Firebase</strong> (Google) — authentication and data storage<br/>
              <strong>PayPal</strong> — payment processing<br/>
              <strong>Resend</strong> — transactional emails<br/>
              <strong>Vercel</strong> — website hosting<br/>
              <strong>Zoom</strong> — live sessions
            </p>
            <p style={{ marginTop:'0.75rem' }}>Each of these services has its own privacy policy governing how they handle your data.</p>
          </Section>

          <Section title="6. Your Rights">
            <p>Under South Africa's Protection of Personal Information Act (POPIA), you have the right to: access the personal information we hold about you; request correction of inaccurate information; request deletion of your personal information; and object to processing of your data.</p>
            <p style={{ marginTop:'0.75rem' }}>To exercise any of these rights, contact us using the details below.</p>
          </Section>

          <Section title="7. Data Retention">
            <p>We retain your personal information for as long as your account is active or as needed to provide services. If you request account deletion, we will remove your data within 30 days, except where we are required by law to retain it.</p>
          </Section>

          <Section title="8. Children">
            <p>Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from minors.</p>
          </Section>

          <Section title="9. Changes to This Policy">
            <p>We may update this policy from time to time. The revised version will be posted on this page with an updated date. We encourage you to review this page periodically.</p>
          </Section>

          <Section title="10. Contact">
            <p>If you have questions about this privacy policy or your data, please contact:</p>
            <p style={{ marginTop:'0.5rem' }}>
              David Muyunda<br/>
              Email: <a href="mailto:davidmuyunda@gmail.com" style={{ color:C.green }}>davidmuyunda@gmail.com</a><br/>
              WhatsApp: <a href="https://wa.me/27817904941" style={{ color:C.green }}>+27 81 790 4941</a>
            </p>
          </Section>

        </div>
      </div>
    </>
  )
}
