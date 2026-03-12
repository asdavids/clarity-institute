import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from '../lib/firebase'
import Navbar from '../components/Navbar'
import BookingSection from '../components/BookingSection'
import styles from '../styles/Dashboard.module.css'

const COURSES = [
  {
    id: 1, week: 'Week 1', title: 'Foundation & Stillness', locked: false,
    lessons: [
      { id: 1, title: 'Welcome & Orientation', duration: '12 min', type: 'video' },
      { id: 2, title: 'The Anatomy of Intuition', duration: '24 min', type: 'video' },
      { id: 3, title: 'Your First Meditation Practice', duration: '18 min', type: 'audio' },
      { id: 4, title: 'Week 1 Workbook', duration: 'PDF', type: 'download' },
    ]
  },
  {
    id: 2, week: 'Week 2', title: 'Cultivating Inner Listening', locked: false,
    lessons: [
      { id: 5, title: 'Silencing the Noise', duration: '20 min', type: 'video' },
      { id: 6, title: 'Breathwork for Clarity', duration: '16 min', type: 'audio' },
      { id: 7, title: 'Dream Journal Practice', duration: '10 min', type: 'video' },
    ]
  },
  {
    id: 3, week: 'Week 3', title: 'Third Eye Activation', locked: true,
    lessons: [
      { id: 8, title: 'The Third Eye: Science & Spirit', duration: '28 min', type: 'video' },
      { id: 9, title: 'Activation Meditation', duration: '22 min', type: 'audio' },
      { id: 10, title: 'Energy Clearing Ritual', duration: '15 min', type: 'video' },
    ]
  },
  {
    id: 4, week: 'Weeks 4–5', title: 'Expansion & Perception', locked: true,
    lessons: [
      { id: 11, title: 'Subtle Realms of Perception', duration: '30 min', type: 'video' },
      { id: 12, title: 'Advanced Breathwork', duration: '20 min', type: 'audio' },
    ]
  },
  {
    id: 5, week: 'Weeks 6–8', title: 'Integration & Embodiment', locked: true,
    lessons: [
      { id: 13, title: 'Grounding Your Gifts', duration: '25 min', type: 'video' },
      { id: 14, title: 'Your Clarity Practice Plan', duration: '18 min', type: 'video' },
      { id: 15, title: 'Final Integration Ceremony', duration: '35 min', type: 'audio' },
    ]
  },
]

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeModule, setActiveModule] = useState(0)
  const [activeLesson, setActiveLesson] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (!u) { router.push('/login'); return }
      setUser(u)
      try {
        const snap = await getDoc(doc(db, 'profiles', u.uid))
        if (snap.exists()) setProfile(snap.data())
      } catch (e) {}
      setLoading(false)
    })
    return () => unsub()
  }, [])

  // Check for payment success
  useEffect(() => {
    if (router.query.payment === 'success') {
      alert('🎉 Payment received! Welcome to The Clarity Institute!')
    }
  }, [router.query])

  if (loading) return (
    <div className={styles.loading}>
      <div className={styles.loadingDot}></div>
      <p>Preparing your sacred space...</p>
    </div>
  )

  const userName = user?.displayName || profile?.full_name || user?.email?.split('@')[0] || 'Seeker'
  const progress = profile?.progress || 28

  return (
    <>
      <Navbar />
      <div className={styles.dashboard}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarProfile}>
            <div className={styles.avatar}>{userName[0].toUpperCase()}</div>
            <div>
              <div className={styles.profileName}>{userName}</div>
              <div className={styles.profileProgram}>{profile?.program || 'Clarity Cohort'}</div>
            </div>
          </div>
          <div className={styles.progressSection}>
            <div className={styles.progressLabel}>
              <span>Your Progress</span>
              <span className={styles.progressPct}>{progress}%</span>
            </div>
            <div className={styles.progressBar}>
              <div className={styles.progressFill} style={{width: `${progress}%`}}></div>
            </div>
          </div>
          <nav className={styles.sidebarNav}>
            <div className={styles.sidebarNavLabel}>Course Modules</div>
            {COURSES.map((mod, i) => (
              <button key={mod.id}
                className={`${styles.moduleBtn} ${activeModule === i ? styles.moduleBtnActive : ''} ${mod.locked ? styles.moduleBtnLocked : ''}`}
                onClick={() => !mod.locked && setActiveModule(i)}>
                <span className={styles.moduleBtnWeek}>{mod.week}</span>
                <span className={styles.moduleBtnTitle}>{mod.title}</span>
                {mod.locked && <span className={styles.lockIcon}>🔒</span>}
              </button>
            ))}
          </nav>
          <div className={styles.sidebarLinks}>
            <Link href="/#mentorship" className={styles.sidebarLink}>✨ Upgrade to Mentorship</Link>
            <Link href="/#contact" className={styles.sidebarLink}>💬 Contact Support</Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className={styles.main}>
          {/* Welcome Banner */}
          <div className={styles.welcomeBanner}>
            <div>
              <h1 className={styles.welcomeTitle}>Welcome back, <em>{userName}</em></h1>
              <p className={styles.welcomeSub}>Continue your journey — you're {progress}% through the Clarity Cohort.</p>
            </div>
            <div className={styles.nextSession}>
              <div className={styles.nextSessionLabel}>Next Live Session</div>
              <div className={styles.nextSessionDate}>Saturday, April 5 · 10am EST</div>
            </div>
          </div>

          {/* Zoom + Calendar Booking */}
          <BookingSection />

          {/* Active Module */}
          <div className={styles.moduleSection} style={{marginTop:'2rem'}}>
            <div className={styles.moduleSectionHeader}>
              <div>
                <p className={styles.moduleSectionWeek}>{COURSES[activeModule].week}</p>
                <h2 className={styles.moduleSectionTitle}>{COURSES[activeModule].title}</h2>
              </div>
            </div>
            <div className={styles.lessonsList}>
              {COURSES[activeModule].lessons.map((lesson) => (
                <div key={lesson.id}
                  className={`${styles.lessonItem} ${activeLesson === lesson.id ? styles.lessonActive : ''}`}
                  onClick={() => setActiveLesson(lesson.id)}>
                  <div className={styles.lessonIcon}>
                    {lesson.type === 'video' ? '▶' : lesson.type === 'audio' ? '🎵' : '📄'}
                  </div>
                  <div className={styles.lessonInfo}>
                    <div className={styles.lessonTitle}>{lesson.title}</div>
                    <div className={styles.lessonMeta}>{lesson.type} · {lesson.duration}</div>
                  </div>
                  {activeLesson === lesson.id && <span className={styles.lessonPlayBtn}>Open</span>}
                </div>
              ))}
            </div>
            {activeLesson && (
              <div className={styles.lessonPlayer}>
                <div className={styles.lessonPlayerInner}>
                  <div className={styles.playerEye}>👁</div>
                  <p className={styles.playerTitle}>
                    {COURSES[activeModule].lessons.find(l => l.id === activeLesson)?.title}
                  </p>
                  <p className={styles.playerSub}>Your video/audio content will appear here once you connect your hosting (e.g. Vimeo, S3).</p>
                  <button className="btn-outline" onClick={() => setActiveLesson(null)}>Close Player</button>
                </div>
              </div>
            )}
          </div>

          {/* Stats Row */}
          <div className={styles.statsRow}>
            {[
              { label: 'Lessons Completed', value: '4', icon: '✅' },
              { label: 'Days in Practice', value: '12', icon: '🌱' },
              { label: 'Meditations Done', value: '8', icon: '🧘' },
              { label: 'Sessions Remaining', value: '6', icon: '📅' },
            ].map((s, i) => (
              <div key={i} className={styles.statCard}>
                <div className={styles.statIcon}>{s.icon}</div>
                <div className={styles.statValue}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  )
}
