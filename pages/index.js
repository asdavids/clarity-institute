import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

const PDF_LINK = 'https://drive.google.com/uc?export=download&id=1tlDSepusgZ16sB0_A3Edgu75azQtHGlz'

export default function Home() {
  const [waitlistEmail, setWaitlistEmail] = useState('')
  const [waitlistStatus, setWaitlistStatus] = useState(null)
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '', interest: 'cohort' })
  const [contactStatus, setContactStatus] = useState(null)
  const [loadingWaitlist, setLoadingWaitlist] = useState(false)
  const [loadingContact, setLoadingContact] = useState(false)

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80)
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })
    reveals.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleWaitlist = async (e) => {
    e.preventDefault()
    setLoadingWaitlist(true)
    setWaitlistStatus(null)
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: waitlistEmail })
      })
      const data = await res.json()
      if (res.ok) {
        setWaitlistStatus({ type: 'success', message: 'You\'re on the list! We\'ll be in touch soon.' })
        setWaitlistEmail('')
      } else {
        setWaitlistStatus({ type: 'error', message: data.error || 'Something went wrong.' })
      }
    } catch {
      setWaitlistStatus({ type: 'error', message: 'Network error. Please try again.' })
    }
    setLoadingWaitlist(false)
  }

  const handleContact = async (e) => {
    e.preventDefault()
    setLoadingContact(true)
    setContactStatus(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm)
      })
      const data = await res.json()
      if (res.ok) {
        setContactStatus({ type: 'success', message: 'Message received. We\'ll respond within 48 hours.' })
        setContactForm({ name: '', email: '', message: '', interest: 'cohort' })
      } else {
        setContactStatus({ type: 'error', message: data.error || 'Something went wrong.' })
      }
    } catch {
      setContactStatus({ type: 'error', message: 'Network error. Please try again.' })
    }
    setLoadingContact(false)
  }

  return (
    <>
      <Navbar />

      {/* ─── HERO ─── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}></div>
        <div className={styles.heroLeft}>
          <p className={`${styles.heroEyebrow} section-label`}>Open Your Third Eye</p>
          <h1 className={styles.heroTitle}>Awaken Your<br /><em>Inner Vision</em></h1>
          <p className={styles.heroSubtitle}>A transformative online learning experience for seekers ready to expand consciousness, unlock intuition, and step into their highest clarity. Join our intimate cohort or walk the path one-on-one.</p>
          <div className={styles.heroActions}>
            <Link href="#pricing" className="btn-primary">Join the Cohort</Link>
            <Link href="#mentorship" className="btn-outline">Explore Mentorship</Link>
          </div>

          {/* ─── FREE PDF DOWNLOAD ─── */}
          <a href={PDF_LINK} target="_blank" rel="noopener noreferrer" className={styles.pdfBtn}>
            <span className={styles.pdfIcon}>📄</span>
            <span className={styles.pdfText}>
              <span className={styles.pdfLabel}>Free Download</span>
              <span className={styles.pdfTitle}>The Eye That Sees</span>
            </span>
            <span className={styles.pdfArrow}>↓</span>
          </a>

          {/* Waitlist signup */}
          <div className={styles.waitlistBox}>
            <p className={styles.waitlistLabel}>Next cohort opens soon — save your spot</p>
            <form onSubmit={handleWaitlist} className={styles.waitlistForm}>
              <input
                type="email" required placeholder="your@email.com"
                value={waitlistEmail}
                onChange={e => setWaitlistEmail(e.target.value)}
                className={styles.waitlistInput}
              />
              <button type="submit" className="btn-primary" disabled={loadingWaitlist}>
                {loadingWaitlist ? 'Saving...' : 'Notify Me'}
              </button>
            </form>
            {waitlistStatus && (
              <p className={waitlistStatus.type === 'success' ? 'alert-success' : 'alert-error'}
                style={{marginTop:'0.8rem'}}>
                {waitlistStatus.message}
              </p>
            )}
          </div>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.heroVisual}>
            <div className={styles.heroCardMain}>
              <p className={styles.heroCardText}>"The eye through which I see the universe is the same eye through which it sees me."</p>
            </div>
            <div className={styles.heroCardSmall}>
              <div className={styles.heroStat}>200+</div>
              <div className={styles.heroStatLabel}>Lives Transformed</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className={styles.about}>
        <div className={`${styles.aboutLeft} reveal`}>
          <p className="section-label">Who We Are</p>
          <h2 className="section-title">Grounded in <em>Ancient Wisdom</em>, Guided for Today</h2>
          <div className="divider"></div>
          <p className="section-body">The Clarity Institute is a sacred online space for those called to deepen their intuitive gifts and awaken the third eye — the seat of inner knowing. Through our structured cohort program and intimate mentorship offerings, we bridge timeless spiritual teachings with the grounded rhythms of modern life.</p>
          <div className={styles.pillars}>
            {[
              { icon: '👁', title: 'Third Eye Activation', text: 'Practices to open and strengthen your intuitive center.' },
              { icon: '🌿', title: 'Embodied Learning', text: 'Grounded methods that integrate mind, body & spirit.' },
              { icon: '🔥', title: 'Community', text: 'A warm circle of seekers walking the path together.' },
              { icon: '🌱', title: 'Ongoing Growth', text: 'Tools and practices that evolve with your journey.' },
            ].map((p, i) => (
              <div key={i} className={styles.pillar}>
                <div className={styles.pillarIcon}>{p.icon}</div>
                <div className={styles.pillarTitle}>{p.title}</div>
                <div className={styles.pillarText}>{p.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={`${styles.aboutRight} reveal`}>
          <div className={styles.aboutImgFrame}></div>
          <div className={styles.aboutBadge}>
            <div className={styles.aboutBadgeNum}>7</div>
            <div className={styles.aboutBadgeText}>Years of Practice</div>
          </div>
        </div>
      </section>

      {/* ─── COHORT ─── */}
      <section id="cohort" className={styles.cohort}>
        <div className={`${styles.cohortHeader} reveal`}>
          <p className="section-label">The Program</p>
          <h2 className="section-title">The <em>Clarity Cohort</em></h2>
          <div className="divider"></div>
          <p className="section-body">An intimate 8-week online program for those ready to unlock their intuitive intelligence. Live sessions, guided practices, and a soulful community — all in one transformative container.</p>
        </div>
        <div className={styles.cohortGrid}>
          {[
            { num: '01', weeks: 'Weeks 1–2', title: 'Foundation & Stillness', desc: 'Establish your daily practice, learn the anatomy of intuition, and cultivate deep inner listening through meditation and breathwork.', featured: false },
            { num: '02', weeks: 'Weeks 3–5', title: 'Activation & Expansion', desc: 'Third eye activation techniques, energy clearing, dream journaling, and accessing the subtle realms of perception.', featured: true },
            { num: '03', weeks: 'Weeks 6–8', title: 'Integration & Embodiment', desc: 'Ground your gifts into daily life, receive feedback on your practice, and step forward with clarity as a confident intuitive.', featured: false },
          ].map((c, i) => (
            <div key={i} className={`${styles.cohortCard} ${c.featured ? styles.featured : ''} reveal`}>
              <div className={styles.cohortCardNum}>{c.num}</div>
              <div className={styles.cohortCardWeek}>{c.weeks}</div>
              <h3 className={styles.cohortCardTitle}>{c.title}</h3>
              <p className={styles.cohortCardDesc}>{c.desc}</p>
            </div>
          ))}
        </div>
        <div className={`${styles.cohortIncludes} reveal`}>
          {['8 Live Group Sessions','Video Library Access','Workbooks & Journals','Private Community','Guided Meditations','Certificate of Completion'].map((item, i) => (
            <div key={i} className={styles.includeItem}>
              <div className={styles.includeDot}></div>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ─── MENTORSHIP ─── */}
      <section id="mentorship" className={styles.mentorship}>
        <div className="reveal">
          <p className="section-label" style={{color:'var(--burnt-orange-light)'}}>1-on-1 Support</p>
          <h2 className="section-title" style={{color:'white'}}>Walk the Path with a <em style={{color:'var(--burnt-orange-light)'}}>Guide</em></h2>
          <div className="divider" style={{background:'var(--burnt-orange-light)'}}></div>
          <p className="section-body" style={{color:'rgba(255,255,255,0.72)'}}>For those who desire a deeply personal journey, our mentorship offerings provide direct, tailored guidance to accelerate your awakening.</p>
        </div>
        <div className={styles.mentorshipGrid}>
          {[
            { icon: '🌕', title: 'Single Clarity Session', desc: 'A powerful 60-minute one-on-one session to address a specific block, receive intuitive guidance, or deepen a particular practice.', price: 'One-time session' },
            { icon: '🌿', title: 'Monthly Mentorship', desc: 'Four sessions per month, email support between calls, and personalized practice recommendations for consistent breakthroughs.', price: 'Per month' },
            { icon: '🔥', title: '90-Day Immersion', desc: 'The deepest container offered. Bi-weekly calls, unlimited messaging, custom curriculum, and a complete third eye activation journey.', price: '3-month container' },
            { icon: '👁', title: 'Cohort + Mentorship Bundle', desc: 'Combine the group cohort with monthly one-on-one sessions for the most complete transformation available.', price: 'Best value' },
          ].map((m, i) => (
            <div key={i} className={`${styles.mentorshipCard} reveal`}>
              <div className={styles.mentorshipIcon}>{m.icon}</div>
              <h3 className={styles.mentorshipTitle}>{m.title}</h3>
              <p className={styles.mentorshipDesc}>{m.desc}</p>
              <div className={styles.mentorshipPrice}>{m.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section id="testimonials" className={styles.testimonials}>
        <div className="reveal">
          <p className="section-label">Student Stories</p>
          <h2 className="section-title">Words of <em>Transformation</em></h2>
          <div className="divider"></div>
        </div>
        <div className={styles.testimonialsGrid}>
          {[
            { text: 'The Clarity Institute completely rewired how I perceive my own intuition. Within weeks I was receiving downloads I had never experienced before.', name: 'Amara O.', role: 'Cohort Graduate · Cycle 3', initial: 'A' },
            { text: 'I came in skeptical and left with an open third eye and a daily practice that has changed every area of my life. The community alone is worth it.', name: 'Jordan T.', role: 'Mentorship Client', initial: 'J' },
            { text: 'Warm, soulful, and deeply effective. The 90-day immersion was the most transformative thing I\'ve ever done. I found myself — truly.', name: 'Nia W.', role: '90-Day Immersion · 2024', initial: 'N' },
          ].map((t, i) => (
            <div key={i} className={`${styles.testimonialCard} reveal`}>
              <span className={styles.testimonialQuote}>"</span>
              <p className={styles.testimonialText}>{t.text}</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>{t.initial}</div>
                <div>
                  <div className={styles.testimonialName}>{t.name}</div>
                  <div className={styles.testimonialRole}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section id="pricing" className={styles.pricing}>
        <div className="reveal">
          <p className="section-label">Investment</p>
          <h2 className="section-title">Choose Your <em>Path</em></h2>
          <div className="divider"></div>
          <p className="section-body">Every offering is an investment in your highest self. Payment plans available — reach out to discuss what works for you.</p>
        </div>
        <div className={styles.pricingGrid}>
          {[
            { tier: 'Essentials', name: 'The Cohort', amount: '$444', period: '8-week program', features: ['8 live group sessions','Full video library','Workbooks & journals','Private community access','Guided meditations'], highlighted: false },
            { tier: 'Most Popular', name: 'Cohort + Mentorship', amount: '$777', period: '8 weeks + monthly calls', features: ['Everything in The Cohort','2 private 1:1 sessions','Email support access','Custom practice plan','Priority enrollment next cycle'], highlighted: true },
            { tier: 'Deep Dive', name: '90-Day Immersion', amount: '$1,444', period: '3-month container', features: ['Bi-weekly 1:1 sessions','Unlimited messaging','Custom curriculum','Full library + community','Lifetime resource access'], highlighted: false },
          ].map((p, i) => (
            <div key={i} className={`${styles.pricingCard} ${p.highlighted ? styles.pricingHighlighted : ''} reveal`}>
              <div className={styles.pricingHeader}>
                <div className={styles.pricingTier}>{p.tier}</div>
                <div className={styles.pricingName}>{p.name}</div>
                <div className={styles.pricingAmount}>{p.amount}</div>
                <div className={styles.pricingPeriod}>{p.period}</div>
              </div>
              <div className={styles.pricingBody}>
                <ul className={styles.pricingFeatures}>
                  {p.features.map((f, j) => <li key={j}>{f}</li>)}
                </ul>
                <Link href="/register" className={`${p.highlighted ? 'btn-primary' : 'btn-outline'} ${styles.btnFull}`}>
                  {p.tier === 'Deep Dive' ? 'Apply Now' : 'Enroll Now'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── BLOG ─── */}
      <section id="blog" className={styles.blog}>
        <div className="reveal">
          <p className="section-label">The Journal</p>
          <h2 className="section-title">Resources & <em>Reflections</em></h2>
          <div className="divider"></div>
        </div>
        <div className={styles.blogGrid}>
          {[
            { color: styles.blogImg1, icon: '👁', tag: 'Practice', title: '5 Signs Your Third Eye Is Opening', excerpt: 'Subtle shifts in perception, vivid dreams, and heightened sensitivity are all part of the awakening process.', read: '8 min', date: 'Mar 2025' },
            { color: styles.blogImg2, icon: '🌿', tag: 'Ritual', title: 'A Morning Ritual for Deep Intuitive Clarity', excerpt: 'How you begin the day sets the tone for everything. This 20-minute practice trains your inner eye before the noise begins.', read: '6 min', date: 'Feb 2025' },
            { color: styles.blogImg3, icon: '🔥', tag: 'Community', title: 'What Cohort Learning Does That Solo Study Can\'t', excerpt: 'There\'s a reason ancient wisdom was passed through circles. The mirrors and energy of community accelerate everything.', read: '5 min', date: 'Jan 2025' },
          ].map((b, i) => (
            <div key={i} className={`${styles.blogCard} reveal`}>
              <div className={`${styles.blogImg} ${b.color}`}>
                <div className={styles.blogImgPattern}>{b.icon}</div>
              </div>
              <div className={styles.blogBody}>
                <div className={styles.blogTag}>{b.tag}</div>
                <h3 className={styles.blogTitle}>{b.title}</h3>
                <p className={styles.blogExcerpt}>{b.excerpt}</p>
                <div className={styles.blogMeta}><span>{b.read} read</span><span>{b.date}</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className={styles.contact}>
        <div className={styles.contactGrid}>
          <div className="reveal">
            <p className="section-label">Get in Touch</p>
            <h2 className="section-title">Ready to Begin Your <em>Journey?</em></h2>
            <div className="divider"></div>
            <p className="section-body">Have questions about the cohort, mentorship, or which path is right for you? We'd love to connect.</p>
            <div className={styles.contactInfo}>
              <div className={styles.contactInfoItem}>
                <span className={styles.contactIcon}>✉</span>
                <span>hello@clarityinstitute.com</span>
              </div>
              <div className={styles.contactInfoItem}>
                <span className={styles.contactIcon}>📍</span>
                <span>Online — Worldwide</span>
              </div>
            </div>
          </div>
          <div className={`${styles.contactForm} reveal`}>
            {contactStatus && (
              <div className={contactStatus.type === 'success' ? 'alert-success' : 'alert-error'}>
                {contactStatus.message}
              </div>
            )}
            <form onSubmit={handleContact}>
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" required placeholder="Full name" value={contactForm.name}
                  onChange={e => setContactForm({...contactForm, name: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" required placeholder="your@email.com" value={contactForm.email}
                  onChange={e => setContactForm({...contactForm, email: e.target.value})} />
              </div>
              <div className="form-group">
                <label>I'm interested in</label>
                <select value={contactForm.interest}
                  onChange={e => setContactForm({...contactForm, interest: e.target.value})}>
                  <option value="cohort">The Cohort Program</option>
                  <option value="mentorship">1:1 Mentorship</option>
                  <option value="immersion">90-Day Immersion</option>
                  <option value="bundle">Cohort + Mentorship Bundle</option>
                  <option value="other">General Inquiry</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="4" required placeholder="Tell us a little about where you are on your journey..."
                  value={contactForm.message}
                  onChange={e => setContactForm({...contactForm, message: e.target.value})}></textarea>
              </div>
              <button type="submit" className="btn-primary" disabled={loadingContact}>
                {loadingContact ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div>
            <div className={styles.footerBrand}>The <span>Clarity</span> Institute</div>
            <p className={styles.footerTagline}>A sacred space for awakening the third eye and living from the inside out. Rooted in ancient wisdom. Built for your modern life.</p>
          </div>
          <div>
            <div className={styles.footerColTitle}>Programs</div>
            <ul className={styles.footerLinks}>
              <li><Link href="#cohort">The Cohort</Link></li>
              <li><Link href="#mentorship">1:1 Mentorship</Link></li>
              <li><Link href="#mentorship">90-Day Immersion</Link></li>
              <li><Link href="#pricing">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <div className={styles.footerColTitle}>Resources</div>
            <ul className={styles.footerLinks}>
              <li><Link href="#blog">The Journal</Link></li>
              <li><Link href="/dashboard">Student Portal</Link></li>
              <li><Link href="#contact">Contact</Link></li>
              <li><Link href="/register">Join Waitlist</Link></li>
            </ul>
          </div>
          <div>
            <div className={styles.footerColTitle}>Account</div>
            <ul className={styles.footerLinks}>
              <li><Link href="/login">Student Login</Link></li>
              <li><Link href="/register">Create Account</Link></li>
              <li><Link href="#contact">Newsletter</Link></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span>© 2025 The Clarity Institute. All rights reserved.</span>
          <span>Made with intention.</span>
        </div>
      </footer>

      <style jsx global>{`
        .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
      `}</style>
    </>
  )
}
