// pages/index.js
import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const WHATSAPP_NUMBER = '27817904941'
const GOOGLE_DRIVE_PDF = 'https://drive.google.com/uc?export=download&id=1tlDSepusgZ16sB0_A3Edgu75azQtHGlz'

export default function Home() {
  const [waitlistEmail, setWaitlistEmail] = useState('')
  const [waitlistStatus, setWaitlistStatus] = useState('')
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' })
  const [contactStatus, setContactStatus] = useState('')

  const handleWaitlist = async (e) => {
    e.preventDefault()
    if (!waitlistEmail) return
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: waitlistEmail }),
      })
      if (res.ok) {
        setWaitlistStatus('success')
        setWaitlistEmail('')
      } else {
        setWaitlistStatus('error')
      }
    } catch {
      setWaitlistStatus('error')
    }
  }

  const handleContact = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm),
      })
      if (res.ok) {
        setContactStatus('success')
        setContactForm({ name: '', email: '', message: '' })
      } else {
        setContactStatus('error')
      }
    } catch {
      setContactStatus('error')
    }
  }

  return (
    <>
      <Head>
        <title>The Clarity Institute — Awaken Your Third Eye</title>
        <meta name="description" content="Transform your life through third eye awakening. Join our 8-week cohort, mentorship programs, and immersive spiritual learning experiences." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* ── Navbar ── */}
      <nav className={styles.navbar}>
        <div className={styles.navBrand}>The Clarity Institute</div>
        <div className={styles.navLinks}>
          <a href="#about">About</a>
          <a href="#cohort">The Cohort</a>
          <a href="#mentorship">Mentorship</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
        <div className={styles.navActions}>
          <Link href="/login" className={styles.navLogin}>Sign In</Link>
          <a href="#pricing" className={styles.navCta}>Enroll Now</a>
        </div>
      </nav>

      <main>

        {/* ── Hero ── */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.heroLabel}>Begin Your Awakening</span>
            <h1 className={styles.heroTitle}>
              See Beyond<br />
              <em>What You've Been Told</em>
            </h1>
            <p className={styles.heroSubtitle}>
              An 8-week journey to activate your third eye, sharpen your intuition,
              and step into the life you've always sensed was possible.
            </p>
            <div className={styles.heroBtns}>
              <a href="#pricing" className={styles.heroBtnPrimary}>Begin Your Journey</a>
              <a href={GOOGLE_DRIVE_PDF} target="_blank" rel="noopener noreferrer" className={styles.heroBtnSecondary}>
                THE THIRD EYE EBOOK ↓
              </a>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.eyeSymbol}>👁</div>
          </div>
        </section>

        {/* ── About ── */}
        <section id="about" className={styles.aboutSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>About</span>
            <h2 className={styles.sectionTitle}>What Is The Clarity Institute?</h2>
          </div>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <p>The Clarity Institute is a sacred space for those called to go deeper — beyond the noise of everyday life into the quiet knowing that lives within you.</p>
              <p>Founded by David, a spiritual guide with over a decade of practice in third eye activation, intuitive development, and consciousness expansion, The Clarity Institute brings together ancient wisdom and practical tools for modern seekers.</p>
              <p>Whether you're just beginning to sense there's more, or you've been walking this path for years, there's a place for you here.</p>
            </div>
            <div className={styles.aboutStats}>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Students Awakened</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>8</span>
                <span className={styles.statLabel}>Weeks to Transform</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>52</span>
                <span className={styles.statLabel}>Days of Guided Practice</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>∞</span>
                <span className={styles.statLabel}>Community Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Cohort ── */}
        <section id="cohort" className={styles.cohortSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>The Program</span>
            <h2 className={styles.sectionTitle}>The 8-Week Cohort</h2>
            <p className={styles.sectionSubtitle}>A complete journey from Foundation to Embodiment — 52 days of guided awakening.</p>
          </div>
          <div className={styles.weekGrid}>
            {[
              { weeks: 'Weeks 1–2', title: 'Foundation', desc: 'Establish your practice, understand the third eye, and begin daily activation rituals.' },
              { weeks: 'Weeks 3–5', title: 'Activation & Expansion', desc: 'Open the Ajna chakra, develop your intuitive gifts, and explore the subtle realms.' },
              { weeks: 'Weeks 6–8', title: 'Integration & Embodiment', desc: 'Ground your gifts into daily life, relationships, and your unique soul purpose.' },
            ].map((w) => (
              <div key={w.weeks} className={styles.weekCard}>
                <span className={styles.weekLabel}>{w.weeks}</span>
                <h3 className={styles.weekTitle}>{w.title}</h3>
                <p className={styles.weekDesc}>{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Mentorship ── */}
        <section id="mentorship" className={styles.mentorshipSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>1:1 Work</span>
            <h2 className={styles.sectionTitle}>Private Mentorship</h2>
            <p className={styles.sectionSubtitle}>For those who seek deeper, more personal guidance on their journey.</p>
          </div>
          <div className={styles.mentorGrid}>
            <div className={styles.mentorCard}>
              <div className={styles.mentorIcon}>🕯</div>
              <h3>Single Clarity Session</h3>
              <p>A powerful 60-minute one-on-one session to address a specific block, receive intuitive guidance, or deepen a particular practice.</p>
              <span className={styles.mentorTag}>One-time session</span>
              <Link href="/clarity-session" className={styles.mentorBtn}>Book a Session</Link>
            </div>
            <div className={styles.mentorCard}>
              <div className={styles.mentorIcon}>🌀</div>
              <h3>Monthly Mentorship</h3>
              <p>Ongoing 1:1 support with bi-weekly calls, voice message access, and a custom practice plan tailored to your path.</p>
              <span className={styles.mentorTag}>Ongoing support</span>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi David, I am interested in Monthly Mentorship.')}`} target="_blank" rel="noopener noreferrer" className={styles.mentorBtn}>Enquire Now</a>
            </div>
            <div className={styles.mentorCard}>
              <div className={styles.mentorIcon}>👁</div>
              <h3>90-Day Immersion</h3>
              <p>A complete transformation container with bi-weekly sessions, unlimited messaging, a custom curriculum, and lifetime community access.</p>
              <span className={styles.mentorTag}>Deep transformation</span>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi David, I am interested in the 90-Day Immersion.')}`} target="_blank" rel="noopener noreferrer" className={styles.mentorBtn}>Apply Now</a>
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className={styles.testimonialsSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Stories</span>
            <h2 className={styles.sectionTitle}>What Students Say</h2>
          </div>
          <div className={styles.testimonialGrid}>
            {[
              { quote: "I had been searching for years. The Clarity Institute gave me the tools, the community, and the courage to actually trust what I've always known inside.", name: 'Amara T.', location: 'Nairobi, Kenya' },
              { quote: "David's guidance is unlike anything I've experienced. He meets you exactly where you are and helps you see what was already there.", name: 'James M.', location: 'Johannesburg, South Africa' },
              { quote: "The 8-week cohort changed the way I move through every single day. I am clearer, calmer, and more myself than I've ever been.", name: 'Priya S.', location: 'London, UK' },
            ].map((t) => (
              <div key={t.name} className={styles.testimonialCard}>
                <p className={styles.testimonialQuote}>"{t.quote}"</p>
                <div className={styles.testimonialAuthor}>
                  <strong>{t.name}</strong>
                  <span>{t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Pricing ── */}
        <section id="pricing" className={styles.pricingSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Investment</span>
            <h2 className={styles.sectionTitle}>Choose Your Path</h2>
            <p className={styles.sectionSubtitle}>Every path leads to the same destination — clarity, presence, and an awakened inner life.</p>
          </div>

          <div className={styles.pricingGrid}>

            {/* Essentials */}
            <div className={styles.pricingCard}>
              <div className={styles.pricingTop}>
                <span className={styles.pricingTier}>Essentials</span>
                <h3 className={styles.pricingName}>The Cohort</h3>
                <div className={styles.pricingPrice}>
                  <span className={styles.pricingOriginal}>$444</span>
                  <span className={styles.pricingAmount}>$99</span>
                  <span className={styles.pricingPer}>8-week program</span>
                </div>
              </div>
              <ul className={styles.pricingFeatures}>
                <li>✦ 8 live group sessions</li>
                <li>✦ Full video library</li>
                <li>✦ Workbooks &amp; journals</li>
                <li>✦ Private community access</li>
                <li>✦ Guided meditations</li>
              </ul>
              <a href="https://www.paypal.com/paypalme/davidmuyunda/99" target="_blank" rel="noopener noreferrer" className={styles.pricingBtn}>
                Enroll Now
              </a>
            </div>

            {/* Most Popular */}
            <div className={`${styles.pricingCard} ${styles.pricingCardFeatured}`}>
              <div className={styles.popularBadge}>Most Popular</div>
              <div className={styles.pricingTop}>
                <span className={styles.pricingTier}>Most Popular</span>
                <h3 className={styles.pricingName}>Cohort + Mentorship</h3>
                <div className={styles.pricingPrice}>
                  <span className={styles.pricingOriginal}>$777</span>
                  <span className={styles.pricingAmount}>$199</span>
                  <span className={styles.pricingPer}>8 weeks + monthly calls</span>
                </div>
              </div>
              <ul className={styles.pricingFeatures}>
                <li>✦ Everything in The Cohort</li>
                <li>✦ 2 private 1:1 sessions</li>
                <li>✦ Email support access</li>
                <li>✦ Custom practice plan</li>
                <li>✦ Priority enrollment next cycle</li>
              </ul>
              <a href="https://www.paypal.com/paypalme/davidmuyunda/199" target="_blank" rel="noopener noreferrer" className={`${styles.pricingBtn} ${styles.pricingBtnFeatured}`}>
                Enroll Now
              </a>
            </div>

            {/* Deep Dive */}
            <div className={styles.pricingCard}>
              <div className={styles.pricingTop}>
                <span className={styles.pricingTier}>Deep Dive</span>
                <h3 className={styles.pricingName}>90-Day Immersion</h3>
                <div className={styles.pricingPrice}>
                  <span className={styles.pricingOriginal}>$1,444</span>
                  <span className={styles.pricingAmount}>$299</span>
                  <span className={styles.pricingPer}>3-month container</span>
                </div>
              </div>
              <ul className={styles.pricingFeatures}>
                <li>✦ Bi-weekly 1:1 sessions</li>
                <li>✦ Unlimited messaging</li>
                <li>✦ Custom curriculum</li>
                <li>✦ Full library + community</li>
                <li>✦ Lifetime resource access</li>
              </ul>
              <a href="https://www.paypal.com/paypalme/davidmuyunda/299" target="_blank" rel="noopener noreferrer" className={styles.pricingBtn}>
                Apply Now
              </a>
            </div>

          </div>
        </section>

        {/* ── Waitlist ── */}
        <section className={styles.waitlistSection}>
          <div className={styles.waitlistInner}>
            <h2 className={styles.waitlistTitle}>Join the Waitlist</h2>
            <p className={styles.waitlistSubtitle}>Be first to know when the next cohort opens. No spam, ever.</p>
            {waitlistStatus === 'success' ? (
              <p className={styles.successMsg}>✦ You're on the list. We'll be in touch.</p>
            ) : (
              <form onSubmit={handleWaitlist} className={styles.waitlistForm}>
                <input
                  type="email"
                  value={waitlistEmail}
                  onChange={(e) => setWaitlistEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className={styles.waitlistInput}
                />
                <button type="submit" className={styles.waitlistBtn}>Join Waitlist</button>
              </form>
            )}
            {waitlistStatus === 'error' && <p className={styles.errorMsg}>Something went wrong. Try again or message us on WhatsApp.</p>}
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className={styles.contactSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Get in Touch</span>
            <h2 className={styles.sectionTitle}>We'd Love to Hear From You</h2>
          </div>
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <p>Have questions about the cohort, mentorship, or which path is right for you? Reach out — David personally responds to every message.</p>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className={styles.whatsappLink}>
                💬 Message on WhatsApp
              </a>
            </div>
            <form onSubmit={handleContact} className={styles.contactForm}>
              <input
                type="text"
                placeholder="Your Name"
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                required
                className={styles.contactInput}
              />
              <input
                type="email"
                placeholder="Your Email"
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                required
                className={styles.contactInput}
              />
              <textarea
                placeholder="Your message..."
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                required
                rows={5}
                className={styles.contactTextarea}
              />
              {contactStatus === 'success' && <p className={styles.successMsg}>✦ Message sent. David will be in touch soon.</p>}
              {contactStatus === 'error' && <p className={styles.errorMsg}>Something went wrong. Please try WhatsApp instead.</p>}
              <button type="submit" className={styles.contactBtn}>Send Message</button>
            </form>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <span className={styles.footerLogo}>The Clarity Institute</span>
            <p>Awakening minds. Transforming lives.</p>
          </div>
          <div className={styles.footerLinks}>
            <a href="#about">About</a>
            <a href="#cohort">The Cohort</a>
            <a href="#mentorship">Mentorship</a>
            <a href="#pricing">Pricing</a>
            <Link href="/login">Student Login</Link>
          </div>
          <div className={styles.footerContact}>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} The Clarity Institute. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
