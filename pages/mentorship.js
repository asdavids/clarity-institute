// pages/mentorship.js
import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

const C = { green:'#3D5A3E', brown:'#6B4A2A', orange:'#C1581A', cream:'#FAF6F0', cream2:'#F2EBE0', text:'#2C1F14', muted:'#7A6A5A', border:'#E0D5C5', white:'#ffffff' }
const serif = "'Cormorant Garamond', serif"
const sans = "'Jost', sans-serif"
const WHATSAPP = '27817904941'
const PRICE = 99.99
const PAYPAL_LINK = `https://www.paypal.com/paypalme/Xhantipta/${PRICE}`

const FOCUS_OPTIONS = [
  'Deepening my third eye / intuitive practice',
  'Navigating a major life transition',
  'Healing and emotional clearing',
  'Developing my spiritual gifts professionally',
  'Understanding dreams, visions, and inner experiences',
  'Finding clarity on life purpose and vocation',
  'Relationship and energetic boundary work',
  'Building a consistent daily spiritual practice',
  'Other (describe below)',
]

export default function MentorshipPage() {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name:'', email:'', phone:'', location:'',
    focus:'', background:'', intention:'', experience:'',
    howHeard:'', paypalConfirmation:'',
  })

  const handle = (e) => { setForm({...form, [e.target.name]: e.target.value}); setError('') }

  const validateStep1 = () => {
    if (!form.name.trim()) return 'Please enter your name.'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) return 'Please enter a valid email.'
    if (!form.focus) return 'Please select your primary focus.'
    if (!form.intention.trim()) return 'Please share your intention — this helps David prepare.'
    return null
  }

  const submitApplication = async () => {
    if (!form.paypalConfirmation.trim()) { setError('Please enter your PayPal transaction ID.'); return }
    setLoading(true); setError('')
    try {
      const res = await fetch('/api/mentorship-application', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, price: PRICE }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Application failed')
      setStep(4)
    } catch (err) { setError(err.message) } finally { setLoading(false) }
  }

  const inp = { padding:'0.75rem 1rem', border:`1.5px solid ${C.border}`, borderRadius:8, fontFamily:sans, fontSize:'0.95rem', color:C.text, background:C.cream, width:'100%', boxSizing:'border-box', outline:'none' }
  const lbl = { fontSize:'0.8rem', fontWeight:500, color:C.brown, textTransform:'uppercase', letterSpacing:'0.05em', display:'block', marginBottom:'0.4rem' }
  const fld = { marginBottom:'1.25rem' }
  const btnP = { width:'100%', padding:'0.95rem', background:C.green, color:'white', border:'none', borderRadius:8, fontFamily:sans, fontSize:'1rem', fontWeight:500, cursor:'pointer' }
  const btnS = { padding:'0.95rem 1.5rem', background:'white', color:C.green, border:`1.5px solid ${C.green}`, borderRadius:8, fontFamily:sans, fontSize:'1rem', cursor:'pointer' }
  const crd = { maxWidth:660, margin:'0 auto 3rem', background:'white', border:`1px solid ${C.border}`, borderRadius:16, padding:'2.5rem', boxShadow:'0 4px 24px rgba(0,0,0,0.06)' }
  const errBox = { color:'#c0392b', background:'#fdf2f2', border:'1px solid #f5c6cb', padding:'0.75rem 1rem', borderRadius:8, fontSize:'0.875rem', marginBottom:'1rem' }

  return (
    <>
      <Head>
        <title>Monthly Mentorship — The Clarity Institute</title>
        <meta name="description" content="Ongoing 1:1 spiritual mentorship with David. Bi-weekly calls, voice message access, and a custom practice plan tailored to your path." />
        <meta property="og:title" content="Monthly Mentorship — The Clarity Institute" />
        <meta property="og:description" content="Deep, personalised spiritual guidance with AS Davids. $99.99/month." />
        <meta property="og:image" content="https://www.theclarityinstitute.guru/og-image.png" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <div style={{ minHeight:'100vh', background:C.cream, color:C.text, fontFamily:sans }}>

        {/* Nav */}
        <nav style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'1.25rem 2rem', borderBottom:`1px solid ${C.border}`, background:'white' }}>
          <Link href="/" style={{ fontFamily:serif, fontSize:'1.3rem', color:C.green, textDecoration:'none', fontWeight:600 }}>The Clarity Institute</Link>
          <Link href="/#mentorship" style={{ fontSize:'0.875rem', color:C.muted, textDecoration:'none' }}>← Back</Link>
        </nav>

        {/* Hero */}
        <div style={{ textAlign:'center', padding:'4rem 2rem 2.5rem', background:`linear-gradient(to bottom, ${C.white}, ${C.cream})` }}>
          <div style={{ fontSize:'3rem', marginBottom:'1rem' }}>🌀</div>
          <h1 style={{ fontFamily:serif, fontSize:'clamp(2.2rem, 5vw, 3.5rem)', fontWeight:300, color:C.green, margin:'0 0 0.5rem' }}>Monthly Mentorship</h1>
          <p style={{ fontSize:'1.1rem', color:C.muted, margin:'0 0 1.5rem', fontWeight:300, maxWidth:560, marginLeft:'auto', marginRight:'auto', lineHeight:1.7 }}>
            Deep, ongoing 1:1 spiritual guidance with David. Walk your path with a committed companion who sees you clearly and meets you where you are.
          </p>
          <div style={{ display:'flex', justifyContent:'center', gap:'0.75rem', flexWrap:'wrap' }}>
            {['Bi-Weekly Calls', 'Voice Message Access', 'Custom Practice Plan', `$${PRICE}/month`].map(p => (
              <span key={p} style={{ background:'white', border:`1px solid ${C.border}`, color:C.brown, padding:'0.35rem 1rem', borderRadius:999, fontSize:'0.85rem', fontWeight:500 }}>{p}</span>
            ))}
          </div>
        </div>

        {/* What's included */}
        <div style={{ maxWidth:900, margin:'0 auto', padding:'2rem 2rem 3rem' }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))', gap:'1.5rem' }}>
            {[
              ['📞', 'Bi-Weekly Calls', 'Two 45-minute video calls per month with David. Deep, focused sessions on whatever is most alive in your journey.'],
              ['🎙', 'Voice Message Access', 'Send David voice messages between calls when something arises that cannot wait. Receive thoughtful, personalised responses.'],
              ['📋', 'Custom Practice Plan', 'A spiritual practice plan designed specifically for you — your gifts, your blocks, your life. Adjusted monthly as you grow.'],
              ['🔮', 'Intuitive Guidance', 'David brings his full intuitive perception to every interaction. Not generic advice — direct, grounded spiritual sight applied to your specific situation.'],
              ['📖', 'Full Course Access', 'Complete access to the 8-week cohort materials, video library, workbooks, guided meditations, and community.'],
              ['♾️', 'Ongoing Support', 'This is not a programme with an end date. Continue for as long as the mentorship serves your growth. Cancel anytime.'],
            ].map(([icon, title, desc]) => (
              <div key={title} style={{ background:'white', border:`1px solid ${C.border}`, borderRadius:12, padding:'1.75rem 1.5rem', textAlign:'center' }}>
                <div style={{ fontSize:'2rem', marginBottom:'0.75rem' }}>{icon}</div>
                <h3 style={{ fontFamily:serif, fontSize:'1.2rem', color:C.green, margin:'0 0 0.5rem' }}>{title}</h3>
                <p style={{ fontSize:'0.88rem', color:C.muted, margin:0, lineHeight:1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Who it's for */}
        <div style={{ background:C.green, padding:'3rem 2rem', textAlign:'center' }}>
          <div style={{ maxWidth:600, margin:'0 auto' }}>
            <h2 style={{ fontFamily:serif, fontSize:'1.8rem', color:C.white, fontWeight:300, margin:'0 0 1rem' }}>Who This Is For</h2>
            <p style={{ color:'rgba(255,255,255,0.8)', fontSize:'1rem', lineHeight:1.8 }}>
              Monthly mentorship is for those who sense that their spiritual development requires more than a programme — it requires a relationship. A committed guide who knows your story, sees your patterns, and can speak into your life with both honesty and tenderness. If you are ready to go deeper than you can go alone, this is your container.
            </p>
          </div>
        </div>

        {/* Step indicator */}
        {step < 4 && (
          <div style={{ display:'flex', justifyContent:'center', maxWidth:500, margin:'2.5rem auto 2rem', padding:'0 2rem' }}>
            {['Your Details', 'Payment', 'Confirm'].map((label, i) => (
              <div key={i} style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', gap:'0.4rem', fontSize:'0.8rem', color: step === i+1 ? C.green : C.muted, fontWeight: step === i+1 ? 500 : 400 }}>
                <div style={{ width:32, height:32, borderRadius:'50%', border:`2px solid ${step >= i+1 ? C.green : C.border}`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'0.85rem', background: step === i+1 ? C.green : 'white', color: step === i+1 ? 'white' : C.muted }}>
                  {step > i+1 ? '✓' : i+1}
                </div>
                <span>{label}</span>
              </div>
            ))}
          </div>
        )}

        {/* STEP 1 — Application */}
        {step === 1 && (
          <div style={crd}>
            <h2 style={{ fontFamily:serif, fontSize:'1.8rem', fontWeight:400, color:C.green, margin:'0 0 0.4rem' }}>Tell us about yourself</h2>
            <p style={{ color:C.muted, fontSize:'0.95rem', margin:'0 0 2rem', lineHeight:1.6 }}>David reads every application personally. The more openly you share, the better he can serve you.</p>

            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1.25rem' }}>
              <div style={fld}><label style={lbl}>Full Name *</label><input style={inp} name="name" value={form.name} onChange={handle} placeholder="Your name" /></div>
              <div style={fld}><label style={lbl}>Email Address *</label><input style={inp} name="email" type="email" value={form.email} onChange={handle} placeholder="your@email.com" /></div>
              <div style={fld}><label style={lbl}>WhatsApp / Phone</label><input style={inp} name="phone" value={form.phone} onChange={handle} placeholder="+27 81 790 4941" /></div>
              <div style={fld}><label style={lbl}>Location</label><input style={inp} name="location" value={form.location} onChange={handle} placeholder="City, Country" /></div>
            </div>

            <div style={fld}><label style={lbl}>Primary Focus *</label><select style={inp} name="focus" value={form.focus} onChange={handle}><option value="">What do you most want to work on?</option>{FOCUS_OPTIONS.map(o => <option key={o}>{o}</option>)}</select></div>

            <div style={fld}><label style={lbl}>Spiritual Background</label><textarea style={{...inp, resize:'vertical', lineHeight:1.6}} name="background" value={form.background} onChange={handle} rows={3} placeholder="Briefly describe your spiritual journey so far — practices, traditions, experiences. No judgment. Where you are is perfect." /></div>

            <div style={fld}><label style={lbl}>Your Intention *</label><textarea style={{...inp, resize:'vertical', lineHeight:1.6}} name="intention" value={form.intention} onChange={handle} rows={5} placeholder="What are you seeking from mentorship? What would a breakthrough look like for you? What is the inner change you most desire?" /></div>

            <div style={fld}><label style={lbl}>Have you completed the 8-week cohort?</label><select style={inp} name="experience" value={form.experience} onChange={handle}><option value="">Select one</option><option>Yes, I completed the cohort</option><option>I am currently in the cohort</option><option>No, but I have my own practice</option><option>I am new to this work</option></select></div>

            <div style={fld}><label style={lbl}>How did you hear about us?</label><select style={inp} name="howHeard" value={form.howHeard} onChange={handle}><option value="">Select one</option>{['TikTok','Instagram','WhatsApp','Friend / Word of Mouth','Cohort referral','Blog','Other'].map(o => <option key={o}>{o}</option>)}</select></div>

            {error && <p style={errBox}>{error}</p>}
            <button style={btnP} onClick={() => { const e = validateStep1(); if (e) { setError(e); return } setStep(2) }}>Continue to Payment →</button>
          </div>
        )}

        {/* STEP 2 — Payment */}
        {step === 2 && (
          <div style={crd}>
            <h2 style={{ fontFamily:serif, fontSize:'1.8rem', fontWeight:400, color:C.green, margin:'0 0 0.4rem' }}>Secure your mentorship</h2>
            <p style={{ color:C.muted, fontSize:'0.95rem', margin:'0 0 2rem', lineHeight:1.6 }}>Complete your first month's payment via PayPal, then paste your confirmation below.</p>

            <div style={{ background:`linear-gradient(135deg, #f0f4f0, ${C.cream})`, border:`1px solid ${C.border}`, borderRadius:12, padding:'2rem', textAlign:'center', marginBottom:'1.5rem' }}>
              <div style={{ fontSize:'0.8rem', color:C.muted, textTransform:'uppercase', letterSpacing:'0.1em' }}>Monthly</div>
              <div style={{ fontFamily:serif, fontSize:'4rem', fontWeight:300, color:C.green, lineHeight:1, margin:'0.25rem 0' }}>${PRICE}</div>
              <div style={{ fontSize:'0.9rem', color:C.muted, marginBottom:'1.5rem' }}>Monthly Mentorship · Bi-weekly calls + ongoing support</div>
              <a href={PAYPAL_LINK} target="_blank" rel="noopener noreferrer" style={{ display:'inline-flex', alignItems:'center', gap:'0.6rem', background:'#0070BA', color:'white', padding:'0.85rem 2rem', borderRadius:8, fontSize:'1rem', fontWeight:500, textDecoration:'none' }}>
                💳 Pay ${PRICE} via PayPal
              </a>
              <p style={{ fontSize:'0.875rem', color:C.muted, marginTop:'1rem', lineHeight:1.6, marginBottom:0 }}>After paying, copy your <strong>transaction ID</strong> from your PayPal receipt and paste it below.</p>
            </div>

            <div style={fld}>
              <label style={lbl}>PayPal Transaction ID *</label>
              <input style={inp} name="paypalConfirmation" value={form.paypalConfirmation} onChange={handle} placeholder="e.g. 3FX29847AB123456C" />
              <small style={{ fontSize:'0.8rem', color:C.muted, marginTop:'0.3rem', display:'block' }}>Found in your PayPal receipt email or transaction history.</small>
            </div>

            {error && <p style={errBox}>{error}</p>}
            <div style={{ display:'flex', gap:'1rem' }}>
              <button style={btnS} onClick={() => setStep(1)}>← Back</button>
              <button style={{...btnP, flex:1, width:'auto'}} onClick={() => { if (!form.paypalConfirmation.trim()) { setError('Please enter your PayPal transaction ID.'); return } setStep(3) }}>Review Application →</button>
            </div>
          </div>
        )}

        {/* STEP 3 — Review */}
        {step === 3 && (
          <div style={crd}>
            <h2 style={{ fontFamily:serif, fontSize:'1.8rem', fontWeight:400, color:C.green, margin:'0 0 0.4rem' }}>Review your application</h2>
            <p style={{ color:C.muted, fontSize:'0.95rem', margin:'0 0 2rem', lineHeight:1.6 }}>Confirm everything looks correct before submitting.</p>

            <div style={{ border:`1px solid ${C.border}`, borderRadius:10, overflow:'hidden', marginBottom:'1.5rem' }}>
              {[['Name', form.name], ['Email', form.email], form.phone && ['Phone', form.phone], form.location && ['Location', form.location], ['Primary Focus', form.focus], form.experience && ['Experience', form.experience], ['PayPal Ref', form.paypalConfirmation], ['Amount', `$${PRICE}/month`]].filter(Boolean).map(([l, v], i, arr) => (
                <div key={l} style={{ display:'flex', justifyContent:'space-between', padding:'0.85rem 1.25rem', borderBottom: i < arr.length-1 ? `1px solid ${C.border}` : 'none', fontSize:'0.9rem' }}>
                  <span style={{ color:C.muted, fontSize:'0.85rem' }}>{l}</span>
                  <strong style={{ color:C.text, textAlign:'right', maxWidth:'60%' }}>{v}</strong>
                </div>
              ))}
            </div>

            <div style={{ background:C.cream, border:`1px solid ${C.border}`, borderRadius:10, padding:'1.25rem', marginBottom:'1.5rem' }}>
              <div style={{ fontSize:'0.75rem', fontWeight:500, color:C.brown, textTransform:'uppercase', letterSpacing:'0.05em', marginBottom:'0.5rem' }}>Your Intention</div>
              <p style={{ fontSize:'0.9rem', color:C.text, lineHeight:1.7, margin:0, fontStyle:'italic' }}>{form.intention}</p>
            </div>

            {error && <p style={errBox}>{error}</p>}
            <div style={{ display:'flex', gap:'1rem' }}>
              <button style={btnS} onClick={() => setStep(2)}>← Back</button>
              <button style={{...btnP, flex:1, width:'auto', opacity: loading ? 0.6 : 1}} onClick={submitApplication} disabled={loading}>{loading ? 'Submitting…' : 'Confirm & Begin Mentorship ✓'}</button>
            </div>
          </div>
        )}

        {/* STEP 4 — Success */}
        {step === 4 && (
          <div style={{...crd, textAlign:'center', maxWidth:560}}>
            <div style={{ fontSize:'3.5rem', marginBottom:'1.25rem' }}>🌀</div>
            <h2 style={{ fontFamily:serif, fontSize:'2rem', fontWeight:400, color:C.green, margin:'0 0 0.75rem' }}>Welcome to mentorship, {form.name.split(' ')[0]}.</h2>
            <p style={{ color:C.muted, fontSize:'1rem', lineHeight:1.7, margin:'0 0 2rem' }}>
              David has received your application and will reach out within <strong>24 hours</strong> to schedule your first call.
            </p>

            <div style={{ background:`linear-gradient(135deg, #f0f4f0, ${C.cream})`, borderRadius:12, padding:'1.5rem', textAlign:'left', marginBottom:'2rem' }}>
              <h3 style={{ fontFamily:serif, fontSize:'1.25rem', color:C.green, margin:'0 0 0.75rem' }}>What happens next?</h3>
              <ol style={{ paddingLeft:'1.25rem', margin:0 }}>
                <li style={{ fontSize:'0.9rem', color:C.text, lineHeight:1.7, marginBottom:'0.4rem' }}>David reviews your application and prepares for your journey together.</li>
                <li style={{ fontSize:'0.9rem', color:C.text, lineHeight:1.7, marginBottom:'0.4rem' }}>You will receive a welcome email with your Zoom link, scheduling details, and your initial practice plan within 24 hours.</li>
                <li style={{ fontSize:'0.9rem', color:C.text, lineHeight:1.7, marginBottom:'0.4rem' }}>Your first bi-weekly call will be scheduled at a time that works for both of you.</li>
                <li style={{ fontSize:'0.9rem', color:C.text, lineHeight:1.7 }}>Between calls, you can reach David via voice message anytime something arises.</li>
              </ol>
            </div>

            <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hi David, I just signed up for Monthly Mentorship. My name is ' + form.name + '. Looking forward to working together!')}`} target="_blank" rel="noopener noreferrer" style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'0.6rem', background:'#25D366', color:'white', padding:'0.85rem 1.75rem', borderRadius:8, fontSize:'0.95rem', fontWeight:500, textDecoration:'none', marginBottom:'1.25rem' }}>
              💬 Message David on WhatsApp
            </a>
            <Link href="/" style={{ display:'block', color:C.muted, fontSize:'0.875rem', textDecoration:'none' }}>← Return to home</Link>
          </div>
        )}

        {/* Testimonial */}
        {step < 4 && (
          <div style={{ maxWidth:560, margin:'0 auto', padding:'2rem 2rem 3rem', textAlign:'center' }}>
            <p style={{ fontFamily:serif, fontSize:'1.15rem', fontStyle:'italic', color:C.muted, lineHeight:1.8, marginBottom:'0.75rem' }}>
              "David's guidance is unlike anything I've experienced. He meets you exactly where you are and helps you see what was already there."
            </p>
            <p style={{ fontSize:'0.85rem', color:C.brown }}>— James M., Johannesburg</p>
          </div>
        )}

        {/* Footer */}
        <div style={{ textAlign:'center', padding:'2rem', borderTop:`1px solid ${C.border}`, fontSize:'0.875rem', color:C.muted }}>
          Questions? Reach David on{' '}
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" style={{ color:C.green }}>WhatsApp</a>.
        </div>
      </div>
    </>
  )
}
