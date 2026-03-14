// pages/terms.js
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

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service — The Clarity Institute</title>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>
      <div style={{ minHeight:'100vh', background:C.cream, fontFamily:sans }}>

        {/* Nav */}
        <nav style={{ background:C.white, borderBottom:`1px solid ${C.border}`, padding:'1rem 2rem', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <Link href="/" style={{ fontFamily:serif, fontSize:'1.3rem', color:C.green, textDecoration:'none', fontWeight:600 }}>The Clarity Institute</Link>
          <Link href="/" style={{ fontSize:'0.875rem', color:C.muted, textDecoration:'none' }}>← Home</Link>
        </nav>

        <div style={{ maxWidth:720, margin:'0 auto', padding:'3rem 1.5rem' }}>
          <h1 style={{ fontFamily:serif, fontSize:'2.5rem', color:C.green, fontWeight:300, margin:'0 0 0.5rem' }}>Terms of Service</h1>
          <p style={{ color:C.muted, fontSize:'0.875rem', marginBottom:'2.5rem' }}>Last updated: March 2026</p>

          <Section title="1. Overview">
            <p>These Terms of Service govern your use of The Clarity Institute website (theclarityinstitute.guru) and all services provided through it, including cohort programs, mentorship, sessions, and digital content. By accessing or using the website, you agree to be bound by these terms.</p>
            <p style={{ marginTop:'0.75rem' }}>The Clarity Institute is operated by David Muyunda, based in South Africa.</p>
          </Section>

          <Section title="2. Services">
            <p>The Clarity Institute offers spiritual education, coaching, and mentorship programs. These services are for personal development purposes only and do not constitute medical, psychological, or professional advice. You should consult a qualified professional for any health or mental health concerns.</p>
          </Section>

          <Section title="3. Accounts & Registration">
            <p>To access course materials and certain features, you must create an account. You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. You agree to provide accurate and complete information during registration.</p>
          </Section>

          <Section title="4. Payments & Refund Policy">
            <p>All prices are listed in US Dollars (USD). Payment is processed securely through PayPal. By completing a purchase, you agree to the following:</p>
            <p style={{ marginTop:'0.75rem' }}><strong>All sales are final. Due to the nature of digital content and personalised services, The Clarity Institute does not offer refunds.</strong></p>
            <p style={{ marginTop:'0.75rem' }}>If you experience a technical issue preventing access to content you have paid for, please contact us and we will resolve it promptly.</p>
          </Section>

          <Section title="5. Intellectual Property">
            <p>All content on this website — including course materials, videos, workbooks, meditations, and written content — is the intellectual property of The Clarity Institute. You may not reproduce, distribute, or share this content without written permission. Your purchase grants you a personal, non-transferable license to access the materials for your own use.</p>
          </Section>

          <Section title="6. Code of Conduct">
            <p>Participants in cohort programs, community spaces, and sessions are expected to treat all members with respect and kindness. The Clarity Institute reserves the right to remove any participant who engages in harassment, discrimination, or behaviour that disrupts the community — without refund.</p>
          </Section>

          <Section title="7. Session Bookings">
            <p>Session times are confirmed within 24 hours of booking. If you need to reschedule, please provide at least 24 hours' notice via WhatsApp or email. Missed sessions without notice are non-refundable and non-reschedulable.</p>
          </Section>

          <Section title="8. Limitation of Liability">
            <p>The Clarity Institute provides spiritual education and guidance. Results vary by individual. We make no guarantees regarding specific outcomes from our programs or sessions. To the fullest extent permitted by South African law, The Clarity Institute shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services.</p>
          </Section>

          <Section title="9. Changes to Terms">
            <p>We may update these terms from time to time. The updated version will be posted on this page with a revised "Last updated" date. Continued use of the website after changes constitutes acceptance of the new terms.</p>
          </Section>

          <Section title="10. Contact">
            <p>If you have any questions about these terms, please reach out:</p>
            <p style={{ marginTop:'0.5rem' }}>
              Email: <a href="mailto:davidmuyunda@gmail.com" style={{ color:C.green }}>davidmuyunda@gmail.com</a><br/>
              WhatsApp: <a href="https://wa.me/27817904941" style={{ color:C.green }}>+27 81 790 4941</a>
            </p>
          </Section>

        </div>
      </div>
    </>
  )
}
