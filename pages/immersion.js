// pages/immersion.js
import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

const C = { green:'#3D5A3E', brown:'#6B4A2A', orange:'#C1581A', cream:'#FAF6F0', cream2:'#F2EBE0', text:'#2C1F14', muted:'#7A6A5A', border:'#E0D5C5', white:'#ffffff' }
const serif = "'Cormorant Garamond', serif"
const sans = "'Jost', sans-serif"
const WHATSAPP = '27817904941'
const PRICE = 299.99
const PAYPAL_LINK = `https://www.paypal.com/paypalme/Xhantipta/${PRICE}`

const FOCUS_OPTIONS = [
  'Complete spiritual transformation and awakening',
  'Deep third eye activation and intuitive development',
  'Healing from trauma, grief, or emotional blockages',
  'Discovering and stepping into my life purpose',
  'Developing my gifts to serve others professionally',
  'Breaking free from patterns that keep me stuck',
  'Deepening my connection to ancestral wisdom',
  'Building an unshakeable daily spiritual practice',
  'Navigating a major life transition with spiritual clarity',
  'Other (describe below)',
]

export default function ImmersionPage() {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name:'', email:'', phone:'', location:'',
    focus:'', background:'', intention:'', experience:'',
    commitment:'', howHeard:'', paypalConfirmation:'',
  })

  const handle = (e) => { setForm({...form, [e.target.name]: e.target.value}); setError('') }

  const validateStep1 = () => {
    if (!form.name.trim()) return 'Please enter your name.'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) return 'Please enter a valid email.'
    if (!form.focus) return 'Please select your primary focus.'
    if (!form.intention.trim()) return 'Please share your intention — this helps David prepare your custom curriculum.'
    return null
  }

  const submitApplication = async () => {
    if (!form.paypalConfirmation.trim()) { setError('Please enter your PayPal transaction ID.'); return }
    setLoading(true); setError('')
    try {
      const res = await fetch('/api/immersion-application', {
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
  const btnP = { width:'100%', padding:'0.95rem', background:C.brown, color:'white', border:'none', borderRadius:8, fontFamily:sans, fontSize:'1rem', fontWeight:500, cursor:'pointer' }
  const btnS = { padding:'0.95rem 1.5rem', background:'white', color:C.brown, border:`1.5px solid ${C.brown}`, borderRadius:8, fontFamily:sans, fontSize:'1rem', cursor:'pointer' }
  const crd = { maxWidth:660, margin:'0 auto 3rem', background:'white', border:`1px solid ${C.border}`, borderRadius:16, padding:'2.5rem', boxShadow:'0 4px 24px rgba(0,0,0,0.06)' }
  const errBox = { color:'#c0392b', background:'#fdf2f2', border:'1px solid #f5c6cb', padding:'0.75rem 1rem', borderRadius:8, fontSize:'0.875rem', marginBottom:'1rem' }

  return (
    <>
      <Head>
        <title>90-Day Immersion — The Clarity Institute</title>
        <meta name="description" content="A complete 90-day transformation container with bi-weekly sessions, unlimited messaging, custom curriculum, and lifetime community access." />
        <meta property="og:title" content="90-Day Immersion — The Clarity Institute" />
        <meta property="og:description" content="The deepest transformation container The Clarity Institute offers. 90 days with David. $299.99." />
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
        <div style={{ textAlign:'center', padding:'4rem 2rem 2.5rem', background:`linear-gradient(160deg, ${C.white} 0%, ${C.cream} 40%, ${C.cream2} 100%)`, position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:'10%', right:'8%', width:300, height:300, borderRadius:'50%', background:`radial-gradient(circle, ${C.brown}10 0%, transparent 70%)`, pointerEvents:'none' }} />
          <div style={{ fontSize:'3rem', marginBottom:'1rem' }}>👁</div>
          <span style={{ fontSize:'0.72rem', fontWeight:600, letterSpacing:'0.18em', textTransform:'uppercase', color:C.orange, display:'block', marginBottom:'0.75rem' }}>The Deepest Container</span>
          <h1 style={{ fontFamily:serif, fontSize:'clamp(2.2rem, 5vw, 3.5rem)', fontWeight:300, color:C.green, margin:'0 0 0.5rem' }}>90-Day <em style={{ color:C.brown }}>Immersion</em></h1>
          <p style={{ fontSize:'1.1rem', color:C.muted, margin:'0 0 1.5rem', fontWeight:300, maxWidth:560, marginLeft:'auto', marginRight:'auto', lineHeight:1.7 }}>
            A complete transformation container. Three months of deep, sustained spiritual work with David — designed to fundamentally shift who you are and how you move through the world.
          </p>
          <div style={{ display:'flex', justifyContent:'center', gap:'0.75rem', flexWrap:'wrap' }}>
            {['Bi-Weekly Sessions', 'Unlimited Messaging', 'Custom Curriculum', 'Lifetime Access', `$${PRICE}`].map(p => (
              <span key={p} style={{ background:'white', border:`1px solid ${C.border}`, color:C.brown, padding:'0.35rem 1rem', borderRadius:999, fontSize:'0.85rem', fontWeight:500 }}>{p}</span>
            ))}
          </div>
        </div>

        {/* What's included */}
        <div style={{ maxWidth:900, margin:'0 auto', padding:'2.5rem 2rem 3rem' }}>
          <h2 style={{ fontFamily:serif, fontSize:'1.8rem', color:C.green, fontWeight:300, textAlign:'center', margin:'0 0 2rem' }}>Everything You Receive</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))', gap:'1.5rem' }}>
            {[
              ['🕯', 'Bi-Weekly 1:1 Sessions', 'Six deep, 60-minute sessions with David over 90 days. Each one builds on the last, creating a sustained arc of transformation that a single session cannot achieve.'],
              ['💬', 'Unlimited Voice Messaging', 'Reach David anytime between sessions via WhatsApp voice message. When something arises — a dream, a breakthrough, a question, a crisis — you are never alone with it.'],
              ['📋', 'Custom Curriculum', 'David designs a personalised 90-day practice plan built around your specific gifts, blocks, life circumstances, and goals. No generic programme. This is yours.'],
              ['📚', 'Full Course Library', 'Complete access to the 52-day cohort course, all video teachings, workbooks, guided meditations, and supplementary materials. Yours for life.'],
              ['👥', 'Lifetime Community Access', 'Permanent membership in The Clarity Institute community — a space of fellow seekers who understand the path you are walking.'],
              ['🔮', 'Intuitive Deep Dives', 'During your sessions, David brings his full spiritual perception to your situation — seeing what is hidden, naming what is unspoken, and illuminating the path forward with clarity and care.'],
            ].map(([icon, title, desc]) => (
              <div key={title} style={{ background:'white', border:`1px solid ${C.border}`, borderRadius:12, padding:'1.75rem 1.5rem' }}>
                <div style={{ fontSize:'2rem', marginBottom:'0.75rem' }}>{icon}</div>
                <h3 style={{ fontFamily:serif, fontSize:'1.2rem', color:C.green, margin:'0 0 0.5rem' }}>{title}</h3>
                <p style={{ fontSize:'0.88rem', color:C.muted, margin:0, lineHeight:1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* The journey */}
        <div style={{ background:C.green, padding:'3rem 2rem' }}>
          <div style={{ maxWidth:700, margin:'0 auto' }}>
            <h2 style={{ fontFamily:serif, fontSize:'1.8rem', color:C.white, fontWeight:300, textAlign:'center', margin:'0 0 2rem' }}>The 90-Day Arc</h2>
            <div style={{ display:'grid', gap:'1.5rem' }}>
              {[
                ['Month 1: Excavation', 'We go beneath the surface. David works with you to identify the core patterns, wounds, and blocks that have been shaping your life from the shadows. We clear what is ready to be cleared and name what is ready to be seen. This is the foundation of genuine transformation.'],
                ['Month 2: Activation', 'With the ground cleared, we activate. Your specific intuitive gifts are identified and developed. Your daily practice is refined and deepened. You begin to perceive and navigate the subtle dimensions of your life with increasing confidence and clarity.'],
                ['Month 3: Embodiment', 'The final month is about integration — making the transformation permanent. We align your outer life with your inner vision. Relationships, vocation, creative expression, and daily habits are all brought into coherence with who you are becoming. You leave with a clear personal vision and a practice that will sustain you for life.'],
              ].map(([title, desc]) => (
                <div key={title} style={{ background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.15)', borderRadius:14, padding:'1.75rem' }}>
                  <h3 style={{ fontFamily:serif, fontSize:'1.3rem', color:C.white, fontWeight:400, margin:'0 0 0.5rem' }}>{title}</h3>
                  <p style={{ color:'rgba(255,255,255,0.8)', fontSize:'0.92rem', lineHeight:1.75, margin:0 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Who it's for */}
        <div style={{ maxWidth:600, margin:'0 auto', padding:'3rem 2rem', textAlign:'center' }}>
          <h2 style={{ fontFamily:serif, fontSize:'1.6rem', color:C.green, fontWeight:300, margin:'0 0 1rem' }}>This Is For You If...</h2>
          <div style={{ textAlign:'left' }}>
            {[
              'You sense you are at a turning point and need sustained guidance to navigate it',
              'You have done some inner work but know there are deeper layers waiting',
              'You want a committed spiritual companion, not just an occasional session',
              'You are ready to align your outer life with your inner truth',
              'You feel called to develop your spiritual gifts for service to others',
              'You want transformation that lasts, not just temporary inspiration',
            ].map((item, i) => (
              <div key={i} style={{ display:'flex', gap:'0.75rem', marginBottom:'0.75rem', alignItems:'flex-start' }}>
                <span style={{ color:C.green, fontWeight:600, flexShrink:0, marginTop:'0.15rem' }}>✦</span>
                <span style={{ color:C.text, fontSize:'0.95rem', lineHeight:1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Step indicator */}
        {step < 4 && (
          <div style={{ display:'flex', justifyContent:'center', maxWidth:500, margin:'1rem auto 2rem', padding:'0 2rem' }}>
            {['Your Details', 'Payment', 'Confirm'].map((label, i) => (
              <div key={i} style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', gap:'0.4rem', fontSize:'0.8rem', color: step === i+1 ? C.brown : C.muted, fontWeight: step === i+1 ? 500 : 400 }}>
                <div style={{ width:32, height:32, borderRadius:'50%', border:`2px solid ${step >= i+1 ? C.brown : C.border}`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'0.85rem', background: step === i+1 ? C.brown : 'white', color: step === i+1 ? 'white' : C.muted }}>
                  {step > i+1 ? '✓' : i+1}
                </div>
                <span>{label}</span>
              </div>
            ))}
          </div>
        )}

        {/* STEP 1 */}
        {step === 1 && (
          <div style={crd}>
            <h2 style={{ fontFamily:serif, fontSize:'1.8rem', fontWeight:400, color:C.green, margin:'0 0 0.4rem' }}>Begin your application</h2>
            <p style={{ color:C.muted, fontSize:'0.95rem', margin:'0 0 2rem', lineHeight:1.6 }}>David reads every immersion application personally and designs your custom curriculum before your first session.</p>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1.25rem' }}>
              <div style={fld}><label style={lbl}>Full Name *</label><input style={inp} name="name" value={form.name} onChange={handle} placeholder="Your name" /></div>
              <div style={fld}><label style={lbl}>Email Address *</label><input style={inp} name="email" type="email" value={form.email} onChange={handle} placeholder="your@email.com" /></div>
              <div style={fld}><label style={lbl}>WhatsApp / Phone</label><input style={inp} name="phone" value={form.phone} onChange={handle} placeholder="+27 81 790 4941" /></div>
              <div style={fld}><label style={lbl}>Location</label><input style={inp} name="location" value={form.location} onChange={handle} placeholder="City, Country" /></div>
            </div>
            <div style={fld}><label style={lbl}>Primary Focus *</label><select style={inp} name="focus" value={form.focus} onChange={handle}><option value="">What is the transformation you are seeking?</option>{FOCUS_OPTIONS.map(o => <option key={o}>{o}</option>)}</select></div>
            <div style={fld}><label style={lbl}>Spiritual Background</label><textarea style={{...inp, resize:'vertical', lineHeight:1.6}} name="background" value={form.background} onChange={handle} rows={3} placeholder="Describe your spiritual journey so far — practices, traditions, significant experiences. Where you are is perfect." /></div>
            <div style={fld}><label style={lbl}>Your Intention *</label><textarea style={{...inp, resize:'vertical', lineHeight:1.6}} name="intention" value={form.intention} onChange={handle} rows={5} placeholder="What brought you to this point? What is the deep change you are seeking? What would your life look like on the other side of this immersion? Be as open as you can — David uses this to design your curriculum." /></div>
            <div style={fld}><label style={lbl}>What can you commit to for 90 days?</label><textarea style={{...inp, resize:'vertical', lineHeight:1.6}} name="commitment" value={form.commitment} onChange={handle} rows={3} placeholder="Daily practice time, willingness to change habits, openness to discomfort, etc. Honesty here serves you." /></div>
            <div style={fld}><label style={lbl}>Previous experience with The Clarity Institute?</label><select style={inp} name="experience" value={form.experience} onChange={handle}><option value="">Select one</option><option>Completed the 8-week cohort</option><option>Currently in the cohort</option><option>Had a Clarity Session</option><option>Currently in Monthly Mentorship</option><option>No previous experience</option></select></div>
            <div style={fld}><label style={lbl}>How did you hear about us?</label><select style={inp} name="howHeard" value={form.howHeard} onChange={handle}><option value="">Select one</option>{['TikTok','Instagram','WhatsApp','Friend / Word of Mouth','Cohort referral','Blog','Other'].map(o => <option key={o}>{o}</option>)}</select></div>
            {error && <p style={errBox}>{error}</p>}
            <button style={btnP} onClick={() => { const e = validateStep1(); if (e) { setError(e); return } setStep(2) }}>Continue to Payment →</button>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div style={crd}>
            <h2 style={{ fontFamily:serif, fontSize:'1.8rem', fontWeight:400, color:C.green, margin:'0 0 0.4rem' }}>Secure your immersion</h2>
            <p style={{ color:C.muted, fontSize:'0.95rem', margin:'0 0 2rem', lineHeight:1.6 }}>Complete your payment via PayPal, then paste your confirmation below.</p>
            <div style={{ background:`linear-gradient(135deg, ${C.green}, ${C.green}dd)`, borderRadius:12, padding:'2rem', textAlign:'center', marginBottom:'1.5rem' }}>
              <div style={{ fontSize:'0.8rem', color:'rgba(255,255,255,0.7)', textTransform:'uppercase', letterSpacing:'0.1em' }}>90-Day Immersion</div>
              <div style={{ fontFamily:serif, fontSize:'4rem', fontWeight:300, color:C.white, lineHeight:1, margin:'0.25rem 0' }}>${PRICE}</div>
              <div style={{ fontSize:'0.9rem', color:'rgba(255,255,255,0.7)', marginBottom:'1.5rem' }}>One-time payment · 3-month container</div>
              <a href={PAYPAL_LINK} target="_blank" rel="noopener noreferrer" style={{ display:'inline-flex', alignItems:'center', gap:'0.6rem', background:C.white, color:C.green, padding:'0.85rem 2rem', borderRadius:8, fontSize:'1rem', fontWeight:600, textDecoration:'none' }}>
                💳 Pay ${PRICE} via PayPal
              </a>
              <p style={{ fontSize:'0.85rem', color:'rgba(255,255,255,0.6)', marginTop:'1rem', lineHeight:1.6, marginBottom:0 }}>After paying, copy your <strong style={{ color:'rgba(255,255,255,0.9)' }}>transaction ID</strong> from your PayPal receipt and paste it below.</p>
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

        {/* STEP 3 */}
        {step === 3 && (
          <div style={crd}>
            <h2 style={{ fontFamily:serif, fontSize:'1.8rem', fontWeight:400, color:C.green, margin:'0 0 0.4rem' }}>Review your application</h2>
            <p style={{ color:C.muted, fontSize:'0.95rem', margin:'0 0 2rem', lineHeight:1.6 }}>Confirm everything looks correct before submitting.</p>
            <div style={{ border:`1px solid ${C.border}`, borderRadius:10, overflow:'hidden', marginBottom:'1.5rem' }}>
              {[['Name', form.name], ['Email', form.email], form.phone && ['Phone', form.phone], form.location && ['Location', form.location], ['Focus', form.focus], form.experience && ['Experience', form.experience], ['PayPal Ref', form.paypalConfirmation], ['Programme', '90-Day Immersion'], ['Amount', `$${PRICE}`]].filter(Boolean).map(([l, v], i, arr) => (
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
              <button style={{...btnP, flex:1, width:'auto', opacity: loading ? 0.6 : 1}} onClick={submitApplication} disabled={loading}>{loading ? 'Submitting…' : 'Begin My Immersion ✓'}</button>
            </div>
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div style={{...crd, textAlign:'center', maxWidth:560}}>
            <div style={{ fontSize:'3.5rem', marginBottom:'1.25rem' }}>👁</div>
            <h2 style={{ fontFamily:serif, fontSize:'2rem', fontWeight:400, color:C.green, margin:'0 0 0.75rem' }}>Your immersion begins, {form.name.split(' ')[0]}.</h2>
            <p style={{ color:C.muted, fontSize:'1rem', lineHeight:1.7, margin:'0 0 2rem' }}>
              David has received your application and will reach out within <strong>24 hours</strong> with your custom curriculum and first session details.
            </p>
            <div style={{ background:`linear-gradient(135deg, #f0f4f0, ${C.cream})`, borderRadius:12, padding:'1.5rem', textAlign:'left', marginBottom:'2rem' }}>
              <h3 style={{ fontFamily:serif, fontSize:'1.25rem', color:C.green, margin:'0 0 0.75rem' }}>What happens next?</h3>
              <ol style={{ paddingLeft:'1.25rem', margin:0 }}>
                <li style={{ fontSize:'0.9rem', color:C.text, lineHeight:1.7, marginBottom:'0.4rem' }}>David reviews your application and designs your personal 90-day curriculum.</li>
                <li style={{ fontSize:'0.9rem', color:C.text, lineHeight:1.7, marginBottom:'0.4rem' }}>You receive a welcome package with your Zoom link, curriculum outline, and initial practice plan within 24 hours.</li>
                <li style={{ fontSize:'0.9rem', color:C.text, lineHeight:1.7, marginBottom:'0.4rem' }}>Your first bi-weekly session is scheduled at a time that works for you.</li>
                <li style={{ fontSize:'0.9rem', color:C.text, lineHeight:1.7 }}>From day one, you have unlimited voice message access to David via WhatsApp.</li>
              </ol>
            </div>
            <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hi David, I just signed up for the 90-Day Immersion. My name is ' + form.name + '. I am ready to begin.')}`} target="_blank" rel="noopener noreferrer" style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'0.6rem', background:'#25D366', color:'white', padding:'0.85rem 1.75rem', borderRadius:8, fontSize:'0.95rem', fontWeight:500, textDecoration:'none', marginBottom:'1.25rem' }}>
              💬 Message David on WhatsApp
            </a>
            <Link href="/" style={{ display:'block', color:C.muted, fontSize:'0.875rem', textDecoration:'none' }}>← Return to home</Link>
          </div>
        )}

        {/* Testimonial */}
        {step < 4 && (
          <div style={{ maxWidth:560, margin:'0 auto', padding:'2rem 2rem 3rem', textAlign:'center' }}>
            <p style={{ fontFamily:serif, fontSize:'1.15rem', fontStyle:'italic', color:C.muted, lineHeight:1.8, marginBottom:'0.75rem' }}>
              "The 8-week cohort changed the way I move through every single day. I am clearer, calmer, and more myself than I've ever been."
            </p>
            <p style={{ fontSize:'0.85rem', color:C.brown }}>— Priya S., London</p>
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
