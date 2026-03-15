// pages/clarity-session.js
import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

const PAYPAL_EMAIL = 'davidmuyunda@gmail.com'
const WHATSAPP_NUMBER = '27817904941'
const SESSION_PRICE = 49.99

const SESSION_FOCUS_OPTIONS = [
  'Breaking through a specific block',
  'Receiving intuitive guidance on a life decision',
  'Deepening my meditation or third eye practice',
  'Understanding a recurring dream or vision',
  'Navigating a relationship or emotional challenge',
  'Career, purpose, or vocation clarity',
  'Chakra or energy field work',
  'General spiritual guidance',
  'Other (describe in intention field)',
]

const TIME_OPTIONS = ['07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00']

const C = { green:'#3D5A3E', brown:'#6B4A2A', orange:'#C1581A', cream:'#FAF6F0', text:'#2C1F14', muted:'#7A6A5A', border:'#E0D5C5' }

export default function ClaritySessionPage() {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [bookingId, setBookingId] = useState('')
  const [form, setForm] = useState({
    name:'', email:'', phone:'', preferredDate:'', preferredTime:'',
    timezone:(typeof Intl!=='undefined'?Intl.DateTimeFormat().resolvedOptions().timeZone:'')||'',
    sessionFocus:'', intention:'', howHeard:'', paypalConfirmation:'',
  })

  const handle = (e) => { setForm({...form,[e.target.name]:e.target.value}); setError('') }

  const validateStep1 = () => {
    if(!form.name.trim()) return 'Please enter your name.'
    if(!form.email.trim()||!/\S+@\S+\.\S+/.test(form.email)) return 'Please enter a valid email.'
    if(!form.sessionFocus) return 'Please select a session focus.'
    if(!form.intention.trim()) return 'Please share your intention — this helps David prepare.'
    return null
  }

  const submitBooking = async () => {
    if(!form.paypalConfirmation.trim()){setError('Please enter your PayPal transaction ID.');return}
    setLoading(true);setError('')
    try {
      const res = await fetch('/api/clarity-session',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)})
      const data = await res.json()
      if(!res.ok) throw new Error(data.error||'Booking failed')
      setBookingId(data.bookingId)
      setStep(4)
    } catch(err){setError(err.message)} finally{setLoading(false)}
  }

  const paypalLink = `https://www.paypal.com/paypalme/${PAYPAL_EMAIL.split('@')[0]}/${SESSION_PRICE}`
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi David, I just booked a Single Clarity Session. My name is '+form.name+' and my email is '+form.email+'. Looking forward to connecting!')}`

  const inp = {padding:'0.75rem 1rem',border:`1.5px solid ${C.border}`,borderRadius:'8px',fontFamily:"'Jost',sans-serif",fontSize:'0.95rem',color:C.text,background:C.cream,width:'100%',boxSizing:'border-box',outline:'none'}
  const lbl = {fontSize:'0.8rem',fontWeight:'500',color:C.brown,textTransform:'uppercase',letterSpacing:'0.05em',display:'block',marginBottom:'0.4rem'}
  const fld = {marginBottom:'1.25rem'}
  const btnP = {width:'100%',padding:'0.95rem',background:C.green,color:'white',border:'none',borderRadius:'8px',fontFamily:"'Jost',sans-serif",fontSize:'1rem',fontWeight:'500',cursor:'pointer'}
  const btnS = {padding:'0.95rem 1.5rem',background:'white',color:C.green,border:`1.5px solid ${C.green}`,borderRadius:'8px',fontFamily:"'Jost',sans-serif",fontSize:'1rem',cursor:'pointer'}
  const crd = {maxWidth:'660px',margin:'0 auto 4rem',background:'white',border:`1px solid ${C.border}`,borderRadius:'16px',padding:'2.5rem',boxShadow:'0 4px 24px rgba(0,0,0,0.06)'}
  const errBox = {color:'#c0392b',background:'#fdf2f2',border:'1px solid #f5c6cb',padding:'0.75rem 1rem',borderRadius:'8px',fontSize:'0.875rem',marginBottom:'1rem'}
  const ttl = {fontFamily:"'Cormorant Garamond',serif",fontSize:'1.8rem',fontWeight:'400',color:C.green,margin:'0 0 0.4rem'}
  const sub = {color:C.muted,fontSize:'0.95rem',margin:'0 0 2rem',lineHeight:'1.6'}

  return (
    <>
      <Head>
        <title>Single Clarity Session — The Clarity Institute</title>
        <meta name="description" content="Book a powerful 60-minute one-on-one session with David." />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>
      <div style={{minHeight:'100vh',background:C.cream,color:C.text,fontFamily:"'Jost',sans-serif"}}>

        {/* Nav */}
        <nav style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'1.25rem 2rem',borderBottom:`1px solid ${C.border}`,background:'white'}}>
          <Link href="/" style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'1.3rem',color:C.green,textDecoration:'none',fontWeight:'600'}}>The Clarity Institute</Link>
          <Link href="/#mentorship" style={{fontSize:'0.875rem',color:C.muted,textDecoration:'none'}}>← Back to Mentorship</Link>
        </nav>

        {/* Hero */}
        <div style={{textAlign:'center',padding:'4rem 2rem 2.5rem',background:'linear-gradient(to bottom,#fff,#FAF6F0)'}}>
          <div style={{fontSize:'3rem',marginBottom:'1rem'}}>👁</div>
          <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(2.2rem,5vw,3.5rem)',fontWeight:'300',color:C.green,margin:'0 0 0.5rem',letterSpacing:'0.02em'}}>Single Clarity Session</h1>
          <p style={{fontSize:'1.1rem',color:C.muted,margin:'0 0 1.5rem',fontWeight:'300'}}>A powerful 60-minute one-on-one with David</p>
          <div style={{display:'flex',justifyContent:'center',gap:'0.75rem',flexWrap:'wrap'}}>
            {['60 Minutes','One-on-One','One-Time Session',`$${SESSION_PRICE} USD`].map(p=>(
              <span key={p} style={{background:'white',border:`1px solid ${C.border}`,color:C.brown,padding:'0.35rem 1rem',borderRadius:'999px',fontSize:'0.85rem',fontWeight:'500'}}>{p}</span>
            ))}
          </div>
        </div>

        {/* Feature cards */}
        <div style={{maxWidth:'900px',margin:'0 auto',padding:'2rem 2rem 3rem'}}>
          <div className="session-features" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:'1.5rem'}}>
            {[['🔓','Break Through Blocks',"Identify and release what's holding you back from clarity, purpose, or peace."],['🌀','Intuitive Guidance','Receive direct, grounded guidance tailored to your unique situation and energy.'],['🕯','Deepen Your Practice','Get personalised tools, meditations, and practices to take into your daily life.']].map(([icon,title,desc])=>(
              <div key={title} style={{background:'white',border:`1px solid ${C.border}`,borderRadius:'12px',padding:'1.75rem 1.5rem',textAlign:'center'}}>
                <div style={{fontSize:'2rem',marginBottom:'0.75rem'}}>{icon}</div>
                <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'1.25rem',color:C.green,margin:'0 0 0.5rem'}}>{title}</h3>
                <p style={{fontSize:'0.9rem',color:C.muted,margin:0,lineHeight:'1.6'}}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Step bar */}
        {step<4&&(
          <div style={{display:'flex',justifyContent:'center',maxWidth:'500px',margin:'0 auto 2rem',padding:'0 2rem'}}>
            {['Your Details','Payment','Confirm'].map((lbl2,i)=>(
              <div key={i} style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',gap:'0.4rem',fontSize:'0.8rem',color:step===i+1?C.green:C.muted,fontWeight:step===i+1?'500':'400'}}>
                <div style={{width:'32px',height:'32px',borderRadius:'50%',border:`2px solid ${step>=i+1?C.green:C.border}`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'0.85rem',background:step===i+1?C.green:'white',color:step===i+1?'white':C.muted}}>
                  {step>i+1?'✓':i+1}
                </div>
                <span>{lbl2}</span>
              </div>
            ))}
          </div>
        )}

        {/* STEP 1 */}
        {step===1&&(
          <div className="session-card" style={crd}>
            <h2 style={ttl}>Tell us about yourself</h2>
            <p style={sub}>David reads your intention before your session — be as open as you like.</p>
            <div className="grid-session-datetime" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1.25rem'}}>
              <div style={fld}><label style={lbl}>Full Name *</label><input style={inp} name="name" value={form.name} onChange={handle} placeholder="Your name" /></div>
              <div style={fld}><label style={lbl}>Email Address *</label><input style={inp} name="email" type="email" value={form.email} onChange={handle} placeholder="your@email.com" /></div>
              <div style={fld}><label style={lbl}>WhatsApp / Phone</label><input style={inp} name="phone" value={form.phone} onChange={handle} placeholder="+27 81 790 4941" /></div>
              <div style={fld}><label style={lbl}>Preferred Date</label><input style={inp} name="preferredDate" type="date" value={form.preferredDate} onChange={handle} min={new Date(Date.now()+86400000).toISOString().split('T')[0]} /></div>
              <div style={fld}><label style={lbl}>Preferred Time</label><select style={inp} name="preferredTime" value={form.preferredTime} onChange={handle}><option value="">Select a time</option>{TIME_OPTIONS.map(t=><option key={t}>{t}</option>)}</select></div>
              <div style={fld}><label style={lbl}>Your Timezone</label><input style={inp} name="timezone" value={form.timezone} onChange={handle} placeholder="e.g. Africa/Johannesburg" /></div>
            </div>
            <div style={fld}><label style={lbl}>Session Focus *</label><select style={inp} name="sessionFocus" value={form.sessionFocus} onChange={handle}><option value="">What would you like to work on?</option>{SESSION_FOCUS_OPTIONS.map(o=><option key={o}>{o}</option>)}</select></div>
            <div style={fld}><label style={lbl}>Your Intention *</label><textarea style={{...inp,resize:'vertical',lineHeight:'1.6'}} name="intention" value={form.intention} onChange={handle} rows={5} placeholder="Share what's alive for you right now. What are you seeking clarity on? The more openly you share, the better David can prepare." /></div>
            <div style={fld}><label style={lbl}>How did you hear about us?</label><select style={inp} name="howHeard" value={form.howHeard} onChange={handle}><option value="">Select one</option>{['TikTok','Instagram','WhatsApp','Friend / Word of Mouth','Cohort referral','Other'].map(o=><option key={o}>{o}</option>)}</select></div>
            {error&&<p style={errBox}>{error}</p>}
            <button style={btnP} onClick={()=>{const e=validateStep1();if(e){setError(e);return}setStep(2)}}>Continue to Payment →</button>
          </div>
        )}

        {/* STEP 2 */}
        {step===2&&(
          <div className="session-card" style={crd}>
            <h2 style={ttl}>Secure your session</h2>
            <p style={sub}>Complete payment via PayPal, then paste your confirmation below.</p>
            <div style={{background:'linear-gradient(135deg,#f0f4f0,#faf6f0)',border:`1px solid ${C.border}`,borderRadius:'12px',padding:'2rem',textAlign:'center',marginBottom:'1.5rem'}}>
              <div style={{fontSize:'0.8rem',color:C.muted,textTransform:'uppercase',letterSpacing:'0.1em'}}>USD</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'4rem',fontWeight:'300',color:C.green,lineHeight:1,margin:'0.25rem 0'}}>${SESSION_PRICE}</div>
              <div style={{fontSize:'0.9rem',color:C.muted,marginBottom:'1.5rem'}}>Single Clarity Session · 60 minutes</div>
              <a href={paypalLink} target="_blank" rel="noopener noreferrer" style={{display:'inline-flex',alignItems:'center',gap:'0.6rem',background:'#0070BA',color:'white',padding:'0.85rem 2rem',borderRadius:'8px',fontSize:'1rem',fontWeight:'500',textDecoration:'none'}}>
                💳 Pay ${SESSION_PRICE} via PayPal
              </a>
              <p style={{fontSize:'0.875rem',color:C.muted,marginTop:'1rem',lineHeight:'1.6',marginBottom:0}}>After paying, copy your <strong>transaction ID</strong> from your PayPal receipt email and paste it below.</p>
            </div>
            <div style={fld}>
              <label style={lbl}>PayPal Transaction ID *</label>
              <input style={inp} name="paypalConfirmation" value={form.paypalConfirmation} onChange={handle} placeholder="e.g. 3FX29847AB123456C" />
              <small style={{fontSize:'0.8rem',color:C.muted,marginTop:'0.3rem',display:'block'}}>Found in your PayPal receipt email or transaction history.</small>
            </div>
            {error&&<p style={errBox}>{error}</p>}
            <div style={{display:'flex',gap:'1rem'}}>
              <button style={btnS} onClick={()=>setStep(1)}>← Back</button>
              <button style={{...btnP,flex:1,width:'auto'}} onClick={()=>{if(!form.paypalConfirmation.trim()){setError('Please enter your PayPal transaction ID.');return}setStep(3)}}>Review Booking →</button>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step===3&&(
          <div className="session-card" style={crd}>
            <h2 style={ttl}>Review your booking</h2>
            <p style={sub}>Confirm everything looks correct before submitting.</p>
            <div style={{border:`1px solid ${C.border}`,borderRadius:'10px',overflow:'hidden',marginBottom:'1.5rem'}}>
              {[['Name',form.name],['Email',form.email],form.phone&&['Phone',form.phone],form.preferredDate&&['Date',form.preferredDate],form.preferredTime&&['Time',`${form.preferredTime} (${form.timezone})`],['Session Focus',form.sessionFocus],['PayPal Ref',form.paypalConfirmation],['Amount',`$${SESSION_PRICE} USD`]].filter(Boolean).map(([l,v],i,arr)=>(
                <div key={l} style={{display:'flex',justifyContent:'space-between',padding:'0.85rem 1.25rem',borderBottom:i<arr.length-1?`1px solid ${C.border}`:'none',fontSize:'0.9rem'}}>
                  <span style={{color:C.muted,fontSize:'0.85rem'}}>{l}</span>
                  <strong style={{color:C.text,textAlign:'right',maxWidth:'60%'}}>{v}</strong>
                </div>
              ))}
            </div>
            <div style={{background:C.cream,border:`1px solid ${C.border}`,borderRadius:'10px',padding:'1.25rem',marginBottom:'1.5rem'}}>
              <div style={{fontSize:'0.75rem',fontWeight:'500',color:C.brown,textTransform:'uppercase',letterSpacing:'0.05em',marginBottom:'0.5rem'}}>Your Intention</div>
              <p style={{fontSize:'0.9rem',color:C.text,lineHeight:'1.7',margin:0,fontStyle:'italic'}}>{form.intention}</p>
            </div>
            {error&&<p style={errBox}>{error}</p>}
            <div style={{display:'flex',gap:'1rem'}}>
              <button style={btnS} onClick={()=>setStep(2)}>← Back</button>
              <button style={{...btnP,flex:1,width:'auto',opacity:loading?0.6:1}} onClick={submitBooking} disabled={loading}>{loading?'Submitting…':'Confirm Booking ✓'}</button>
            </div>
          </div>
        )}

        {/* STEP 4 SUCCESS */}
        {step===4&&(
          <div className="session-card" style={{...crd,textAlign:'center',maxWidth:'560px'}}>
            <div style={{fontSize:'3.5rem',marginBottom:'1.25rem'}}>👁</div>
            <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'2rem',fontWeight:'400',color:C.green,margin:'0 0 0.75rem'}}>Your session is booked, {form.name.split(' ')[0]}.</h2>
            <p style={{color:C.muted,fontSize:'1rem',lineHeight:'1.7',margin:'0 0 2rem'}}>David has received your intention and will confirm your session time within <strong>24 hours</strong>.</p>
            <div style={{border:`1px solid ${C.border}`,borderRadius:'10px',overflow:'hidden',marginBottom:'2rem',textAlign:'left'}}>
              {[['Booking Reference',bookingId?.slice(0,8).toUpperCase()],['Confirmation sent to',form.email],['Session','Single Clarity Session · 60 min']].map(([l,v],i,arr)=>(
                <div key={l} style={{display:'flex',justifyContent:'space-between',padding:'0.8rem 1.25rem',borderBottom:i<arr.length-1?`1px solid ${C.border}`:'none',fontSize:'0.875rem'}}>
                  <span style={{color:C.muted}}>{l}</span>
                  <strong style={{color:C.green}}>{v}</strong>
                </div>
              ))}
            </div>
            <div style={{background:'linear-gradient(135deg,#f0f4f0,#faf6f0)',borderRadius:'10px',padding:'1.5rem',textAlign:'left',marginBottom:'2rem'}}>
              <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'1.25rem',color:C.green,margin:'0 0 0.75rem'}}>What happens next?</h3>
              <ol style={{paddingLeft:'1.25rem',margin:0}}>
                <li style={{fontSize:'0.9rem',color:C.text,lineHeight:'1.7',marginBottom:'0.4rem'}}>David reviews your intention and prepares for your session.</li>
                <li style={{fontSize:'0.9rem',color:C.text,lineHeight:'1.7',marginBottom:'0.4rem'}}>You will receive a Zoom link and confirmed time via email or WhatsApp within 24 hours.</li>
                <li style={{fontSize:'0.9rem',color:C.text,lineHeight:'1.7'}}>Show up as you are. The session holds space for exactly what you need.</li>
              </ol>
            </div>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'0.6rem',background:'#25D366',color:'white',padding:'0.85rem 1.75rem',borderRadius:'8px',fontSize:'0.95rem',fontWeight:'500',textDecoration:'none',marginBottom:'1.25rem'}}>
              💬 Message David on WhatsApp
            </a>
            <Link href="/" style={{display:'block',color:C.muted,fontSize:'0.875rem',textDecoration:'none'}}>← Return to home</Link>
          </div>
        )}

        <div style={{textAlign:'center',padding:'2rem',borderTop:`1px solid ${C.border}`,fontSize:'0.875rem',color:C.muted}}>
          Questions? Reach David on{' '}
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" style={{color:C.green}}>WhatsApp</a>.
        </div>
      </div>
    </>
  )
}
