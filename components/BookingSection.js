// components/BookingSection.js
// Replace the placeholder links below with your real ones when ready

const ZOOM_LINK = 'https://zoom.us/j/your-personal-zoom-room'
const GOOGLE_CALENDAR_LINK = 'https://calendar.google.com/calendar/appointments/schedules/YOUR_SCHEDULE_ID'

const C = { green:'#3D5A3E', orange:'#C1581A', cream:'#FAF6F0', text:'#2C1F14', muted:'#7A6A5A', border:'#E0D5C5', white:'#ffffff' }

export default function BookingSection() {
  return (
    <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))', gap:'1.5rem', margin:'2rem 0' }}>

      {/* Zoom Card */}
      <div style={{ background:C.white, border:`1px solid ${C.border}`, borderRadius:14, padding:'2rem', textAlign:'center' }}>
        <div style={{ fontSize:'2.5rem', marginBottom:'0.75rem' }}>📹</div>
        <h3 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'1.4rem', color:C.green, fontWeight:400, margin:'0 0 0.75rem' }}>
          Join a Live Session
        </h3>
        <p style={{ color:C.muted, fontSize:'0.9rem', lineHeight:1.7, margin:'0 0 1.5rem' }}>
          Click below to join your scheduled Zoom session with your cohort or mentor.
        </p>
        <a
          href={ZOOM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display:'inline-flex', alignItems:'center', gap:'0.6rem', background:'#2D8CFF', color:C.white, padding:'0.8rem 1.5rem', borderRadius:8, textDecoration:'none', fontSize:'0.9rem', fontWeight:500, fontFamily:"'Jost', sans-serif" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M4.5 4h10C16.43 4 18 5.57 18 7.5v1.97l3.5-2.47v10L18 14.52V16.5C18 18.43 16.43 20 14.5 20h-10C2.57 20 1 18.43 1 16.5v-9C1 5.57 2.57 4 4.5 4z"/>
          </svg>
          Join Zoom Session
        </a>
      </div>

      {/* Google Calendar Card */}
      <div style={{ background:C.white, border:`1px solid ${C.border}`, borderRadius:14, padding:'2rem', textAlign:'center' }}>
        <div style={{ fontSize:'2.5rem', marginBottom:'0.75rem' }}>📅</div>
        <h3 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'1.4rem', color:C.green, fontWeight:400, margin:'0 0 0.75rem' }}>
          Book a Session
        </h3>
        <p style={{ color:C.muted, fontSize:'0.9rem', lineHeight:1.7, margin:'0 0 1.5rem' }}>
          Schedule your next mentorship call or cohort session directly in Google Calendar.
        </p>
        <a
          href={GOOGLE_CALENDAR_LINK}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display:'inline-flex', alignItems:'center', gap:'0.6rem', background:C.green, color:C.white, padding:'0.8rem 1.5rem', borderRadius:8, textDecoration:'none', fontSize:'0.9rem', fontWeight:500, fontFamily:"'Jost', sans-serif" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z"/>
          </svg>
          Book on Google Calendar
        </a>
      </div>

    </div>
  )
}
