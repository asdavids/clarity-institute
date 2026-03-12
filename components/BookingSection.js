import styles from './BookingSection.module.css'

// Replace these with your actual links
const ZOOM_LINK = 'https://zoom.us/j/your-personal-zoom-room'
const GOOGLE_CALENDAR_LINK = 'https://calendar.google.com/calendar/appointments/schedules/YOUR_SCHEDULE_ID'

export default function BookingSection() {
  return (
    <div className={styles.booking}>
      <div className={styles.bookingCard}>
        <div className={styles.bookingIcon}>📹</div>
        <h3 className={styles.bookingTitle}>Join a Live Session</h3>
        <p className={styles.bookingDesc}>Click below to join your scheduled Zoom session with your cohort or mentor.</p>
        <a
          href={ZOOM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.zoomBtn}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M4.5 4h10C16.43 4 18 5.57 18 7.5v1.97l3.5-2.47v10L18 14.52V16.5C18 18.43 16.43 20 14.5 20h-10C2.57 20 1 18.43 1 16.5v-9C1 5.57 2.57 4 4.5 4z"/>
          </svg>
          Join Zoom Session
        </a>
      </div>

      <div className={styles.bookingCard}>
        <div className={styles.bookingIcon}>📅</div>
        <h3 className={styles.bookingTitle}>Book a Session</h3>
        <p className={styles.bookingDesc}>Schedule your next mentorship call or cohort session directly in Google Calendar.</p>
        <a
          href={GOOGLE_CALENDAR_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.calendarBtn}
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
