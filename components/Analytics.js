// components/Analytics.js
// Google Analytics + Cookie Consent Banner
// Add your Measurement ID in Vercel: NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

import { useEffect, useState } from 'react'
import Script from 'next/script'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Check if user already made a choice
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) {
      // Small delay so it doesn't flash on page load
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted')
    setVisible(false)
    // Enable GA
    if (GA_ID && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
      })
    }
  }

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999,
      background: '#2C1F14', color: 'rgba(255,255,255,0.85)',
      padding: '1rem 1.5rem',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: '1rem',
      fontFamily: "'Jost', sans-serif", fontSize: '0.875rem',
      boxShadow: '0 -4px 20px rgba(0,0,0,0.15)',
    }}>
      <p style={{ margin: 0, maxWidth: 600, lineHeight: 1.6 }}>
        We use cookies to understand how you use our site and improve your experience.{' '}
        <a href="/privacy" style={{ color: '#8FA98F', textDecoration: 'underline' }}>Privacy Policy</a>
      </p>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button onClick={handleDecline} style={{
          background: 'transparent', color: 'rgba(255,255,255,0.6)',
          border: '1px solid rgba(255,255,255,0.2)', padding: '0.5rem 1.25rem',
          borderRadius: 6, cursor: 'pointer', fontFamily: "'Jost', sans-serif",
          fontSize: '0.85rem',
        }}>Decline</button>
        <button onClick={handleAccept} style={{
          background: '#3D5A3E', color: '#ffffff',
          border: 'none', padding: '0.5rem 1.25rem',
          borderRadius: 6, cursor: 'pointer', fontFamily: "'Jost', sans-serif",
          fontSize: '0.85rem', fontWeight: 500,
        }}>Accept</button>
      </div>
    </div>
  )
}

export function GoogleAnalytics() {
  if (!GA_ID) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('consent', 'default', {
            analytics_storage: 'denied',
          });
          // Check if user previously accepted
          if (localStorage.getItem('cookie_consent') === 'accepted') {
            gtag('consent', 'update', {
              analytics_storage: 'granted',
            });
          }
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  )
}
