import { useState, useEffect } from 'react'

export default function SplashScreen({ onComplete }) {
  const [phase, setPhase] = useState('logo')   // logo → tagline → exit
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Phase timeline: logo fades in (0ms) → tagline appears (800ms) → exit (1800ms)
    const t1 = setTimeout(() => setPhase('tagline'), 800)
    const t2 = setTimeout(() => setPhase('exit'), 1800)
    const t3 = setTimeout(() => {
      onComplete()
      localStorage.setItem('ci-splash', '1')
    }, 2300)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  if (!mounted) return null

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: '#080c08',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: '1.5rem',
        transition: 'opacity 0.5s ease',
        opacity: phase === 'exit' ? 0 : 1,
        pointerEvents: phase === 'exit' ? 'none' : 'all',
      }}
    >
      <style>{`
        @keyframes splashGlow {
          0%,100% { filter: drop-shadow(0 0 12px rgba(193,88,26,0.5)) drop-shadow(0 0 30px rgba(255,215,0,0.25)); transform: scale(1); }
          50%      { filter: drop-shadow(0 0 24px rgba(193,88,26,0.8)) drop-shadow(0 0 60px rgba(255,215,0,0.5)); transform: scale(1.04); }
        }
        @keyframes splashFadeUp { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
        @media (prefers-reduced-motion: reduce) {
          .splash-logo { animation: none !important; }
          .splash-tagline { animation: none !important; opacity: 1 !important; }
        }
      `}</style>

      {/* Eye logo */}
      <img
        src="/logo-splash.webp"
        alt=""
        width={120}
        height={120}
        className="splash-logo"
        style={{
          width: 120, height: 120,
          animation: 'splashGlow 2s ease-in-out infinite',
          opacity: phase === 'logo' || phase === 'tagline' ? 1 : 0,
          transition: 'opacity 0.4s ease',
          willChange: 'transform, filter',
        }}
      />

      {/* Divider */}
      <div style={{
        width: phase === 'tagline' ? 48 : 0,
        height: 1,
        background: 'rgba(193,88,26,0.6)',
        transition: 'width 0.5s ease 0.1s',
      }} />

      {/* Tagline */}
      <p
        className="splash-tagline"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(1rem, 3vw, 1.25rem)',
          fontWeight: 300,
          color: 'rgba(232,220,200,0.9)',
          letterSpacing: '0.08em',
          margin: 0,
          opacity: phase === 'tagline' ? 1 : 0,
          animation: phase === 'tagline' ? 'splashFadeUp 0.6s ease forwards' : 'none',
        }}
      >
        See Beyond What You've Been Told
      </p>
    </div>
  )
}
