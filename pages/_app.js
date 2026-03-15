import '../styles/globals.css'
import Head from 'next/head'
import WhatsAppButton from '../components/WhatsAppButton'
import { GoogleAnalytics, CookieConsent } from '../components/Analytics'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>The Clarity Institute</title>
        <meta name="description" content="Awaken your third eye. Transform your life." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon-32.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>
      <GoogleAnalytics />
      <Component {...pageProps} />
      <WhatsAppButton />
      <CookieConsent />
    </>
  )
}
