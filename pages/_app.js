import '../styles/globals.css'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import WhatsAppButton from '../components/WhatsAppButton'
import { GoogleAnalytics, CookieConsent } from '../components/Analytics'
import SplashScreen from '../components/SplashScreen'

export default function App({ Component, pageProps }) {
  const [showSplash, setShowSplash] = useState(false)

  useEffect(() => {
    // Only show splash on first-ever visit
    if (!localStorage.getItem('ci-splash')) {
      setShowSplash(true)
    }
  }, [])

  return (
    <>
      <Head>
        <title>The Clarity Institute</title>
        <meta name="description" content="Awaken your third eye. Transform your life." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon-32.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="msvalidate.01" content="0EDA385E3E0ABAA5AF9AB7B10733207D" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GoogleAnalytics />
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <div style={{ opacity: showSplash ? 0 : 1, transition: 'opacity 0.4s ease 0.1s' }}>
        <Component {...pageProps} />
        <WhatsAppButton />
        <CookieConsent />
      </div>
    </>
  )
}
