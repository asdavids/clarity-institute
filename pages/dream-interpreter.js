import { useState, useEffect, useRef } from "react";
import Head from "next/head";

const moods = ["fearful", "anxious", "confused", "peaceful", "awe", "joyful", "melancholic"];
const WHATSAPP = "27817904941";

export default function DreamInterpreter() {
  const [dream, setDream] = useState("");
  const [mood, setMood] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [soundOn, setSoundOn] = useState(false);
  const [revealedSections, setRevealedSections] = useState([]);
  const audioCtxRef = useRef(null);
  const nodesRef = useRef([]);

  // ── Staggered section reveal when result arrives ──
  useEffect(() => {
    if (!result) return;
    setRevealedSections([]);
    const sections = ["interpretation", "revelation", "symbols", "warning", "declaration", "cta"];
    sections.forEach((s, i) => {
      setTimeout(() => setRevealedSections(prev => [...prev, s]), i * 600);
    });
  }, [result]);

  // ── Ambient sound (Web Audio API — tone-based drone) ──
  const startSound = () => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      audioCtxRef.current = ctx;
      const nodes = [];
      // Low drone: two detuned oscillators
      [55, 55.5].forEach(freq => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 2);
        osc.connect(gain); gain.connect(ctx.destination);
        osc.start();
        nodes.push({ osc, gain });
      });
      // High shimmer
      const shimOsc = ctx.createOscillator();
      const shimGain = ctx.createGain();
      shimOsc.type = "sine";
      shimOsc.frequency.value = 432;
      shimGain.gain.setValueAtTime(0, ctx.currentTime);
      shimGain.gain.linearRampToValueAtTime(0.03, ctx.currentTime + 3);
      shimOsc.connect(shimGain); shimGain.connect(ctx.destination);
      shimOsc.start();
      nodes.push({ osc: shimOsc, gain: shimGain });
      nodesRef.current = nodes;
    } catch {}
  };

  const stopSound = () => {
    nodesRef.current.forEach(({ osc, gain }) => {
      try {
        gain.gain.linearRampToValueAtTime(0, audioCtxRef.current.currentTime + 1);
        setTimeout(() => osc.stop(), 1200);
      } catch {}
    });
    nodesRef.current = [];
  };

  const toggleSound = () => {
    if (soundOn) { stopSound(); setSoundOn(false); localStorage.setItem('ci-sound', '0'); }
    else { startSound(); setSoundOn(true); localStorage.setItem('ci-sound', '1'); }
  };

  // ── Restore sound preference ──
  useEffect(() => {
    return () => stopSound();
  }, []);

  const interpret = async () => {
    if (!dream.trim()) return;
    setLoading(true);
    setResult(null);
    setError("");
    try {
      const res = await fetch("/api/dream", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dream, mood }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setResult(data);
    } catch (err) {
      setError("The veil could not be pierced. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const isRevealed = (s) => revealedSections.includes(s);
  const revealStyle = (s, delay = 0) => ({
    opacity: isRevealed(s) ? 1 : 0,
    transform: isRevealed(s) ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
  });

  return (
    <>
      <Head>
        <title>Prophetic Dream Interpreter | The Clarity Institute</title>
        <meta name="description" content="Receive a prophetic interpretation of your dream. Ancient seer wisdom reveals the spiritual forces, warnings, and blessings moving behind your vision." />
        <meta property="og:title" content="Prophetic Dream Interpreter — The Clarity Institute" />
        <meta property="og:description" content="Your dream is not random. Receive a prophetic reading of what the spiritual realm is revealing." />
        <meta property="og:image" content="https://www.theclarityinstitute.guru/og-image.png" />
        <style>{`
          @keyframes flicker1 { 0%,100%{transform:scaleX(1) scaleY(1) rotate(-1deg)} 25%{transform:scaleX(0.95) scaleY(1.05) rotate(1deg)} 50%{transform:scaleX(1.02) scaleY(0.97) rotate(-0.5deg)} 75%{transform:scaleX(0.98) scaleY(1.03) rotate(1deg)} }
          @keyframes flicker2 { 0%,100%{opacity:0.9;transform:scaleX(1) scaleY(1)} 33%{opacity:0.75;transform:scaleX(1.04) scaleY(0.96)} 66%{opacity:0.85;transform:scaleX(0.97) scaleY(1.04)} }
          @keyframes rise { 0%{opacity:0.5;transform:translateY(0) scaleX(1)} 100%{opacity:0;transform:translateY(-30px) scaleX(0.6)} }
          @keyframes candleGlow { 0%,100%{box-shadow:0 0 20px 8px rgba(255,160,40,0.15)} 50%{box-shadow:0 0 35px 15px rgba(255,160,40,0.25)} }
          @keyframes pulse { 0%,100%{box-shadow:0 0 0 0 rgba(139,97,200,0)} 50%{box-shadow:0 0 24px 4px rgba(139,97,200,0.18)} }
          .glow-btn:hover { box-shadow:0 0 32px rgba(139,97,200,0.35); transform:translateY(-1px); }
          .symbol-card:hover { border-color:#7c5cbf !important; background:#1a1a2e !important; }
          textarea:focus { border-color:#4a3870 !important; box-shadow:0 0 0 2px rgba(124,92,191,0.15); }

          /* ── CSS Candle ── */
          .candle-wrap { display:flex; flex-direction:column; align-items:center; }
          .candle-body {
            width:18px; height:50px;
            background:linear-gradient(180deg,#e8d5b0 0%,#d4b896 50%,#c4a87a 100%);
            border-radius:2px 2px 1px 1px;
            position:relative;
            animation:candleGlow 3s ease-in-out infinite;
            box-shadow:0 0 20px 8px rgba(255,160,40,0.15);
          }
          .candle-wick {
            position:absolute; top:-8px; left:50%; transform:translateX(-50%);
            width:2px; height:10px;
            background:#3a2a1a; border-radius:1px;
          }
          .candle-flame-wrap {
            position:absolute; top:-36px; left:50%; transform:translateX(-50%);
            width:16px; height:32px;
          }
          .candle-flame-outer {
            position:absolute; bottom:0; left:50%; transform:translateX(-50%);
            width:14px; height:28px;
            background:linear-gradient(180deg,#fff5c0 0%,#ffb830 40%,#ff6a00 80%,transparent 100%);
            border-radius:50% 50% 30% 30% / 60% 60% 40% 40%;
            animation:flicker1 2.1s ease-in-out infinite;
            transform-origin:bottom center;
          }
          .candle-flame-inner {
            position:absolute; bottom:4px; left:50%; transform:translateX(-50%);
            width:7px; height:16px;
            background:linear-gradient(180deg,#fffbe0 0%,#ffe066 60%,transparent 100%);
            border-radius:50% 50% 30% 30% / 60% 60% 40% 40%;
            animation:flicker2 1.7s ease-in-out infinite;
            transform-origin:bottom center;
          }
          .candle-smoke {
            position:absolute; bottom:100%; left:50%; transform:translateX(-50%);
            width:4px; height:20px;
            background:linear-gradient(180deg,transparent 0%,rgba(200,200,220,0.25) 100%);
            border-radius:2px;
            animation:rise 2s ease-out infinite;
            transform-origin:bottom center;
          }
          .candle-base {
            width:24px; height:6px;
            background:linear-gradient(180deg,#c4a87a,#a08050);
            border-radius:0 0 3px 3px;
            margin-top:-1px;
          }
        `}</style>
      </Head>

      <div style={{ minHeight:"100vh", background:"#080810", color:"#e8e4f0", fontFamily:"'Cormorant Garamond', serif" }}>

        {/* Nav */}
        <nav style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"1.25rem 2rem", borderBottom:"1px solid #14122a" }}>
          <a href="/" style={{ fontSize:"1.1rem", color:"#9b8ab8", textDecoration:"none", letterSpacing:"0.04em" }}>
            The Clarity Institute
          </a>
          <div style={{ display:"flex", alignItems:"center", gap:"1rem" }}>
            {/* Sound toggle */}
            <button
              onClick={toggleSound}
              title={soundOn ? "Mute ambient sound" : "Enable ambient sound"}
              style={{ background:"none", border:"1px solid #2e1f50", borderRadius:"99px", padding:"0.35rem 0.9rem", cursor:"pointer", color: soundOn ? "#c9b8e8" : "#4a3870", fontSize:"0.75rem", fontFamily:"'Jost',sans-serif", letterSpacing:"0.08em", transition:"all 0.2s" }}
            >
              {soundOn ? "♪ ON" : "♪ OFF"}
            </button>
            <a href="/clarity-session" style={{ fontSize:"0.85rem", color:"#6b5f7a", textDecoration:"none", letterSpacing:"0.06em", textTransform:"uppercase", borderBottom:"1px solid #3a3050", paddingBottom:"2px" }}>
              Book a Session
            </a>
          </div>
        </nav>

        <div style={{ maxWidth:"700px", margin:"0 auto", padding:"3rem 1.5rem 5rem" }}>

          {/* Header */}
          <div style={{ textAlign:"center", marginBottom:"3.5rem" }}>
            {/* CSS Candle */}
            <div style={{ display:"flex", justifyContent:"center", marginBottom:"1.75rem" }}>
              <div className="candle-wrap">
                <div className="candle-flame-wrap">
                  <div className="candle-smoke" />
                  <div className="candle-flame-outer" />
                  <div className="candle-flame-inner" />
                </div>
                <div className="candle-body">
                  <div className="candle-wick" />
                </div>
                <div className="candle-base" />
              </div>
            </div>
            <h1 style={{ fontSize:"clamp(2rem,5vw,2.8rem)", fontWeight:300, color:"#c9b8e8", marginBottom:"1rem", lineHeight:1.2, letterSpacing:"0.02em" }}>
              Prophetic Dream Interpreter
            </h1>
            <div style={{ width:40, height:1, background:"linear-gradient(90deg, transparent, #7c5cbf, transparent)", margin:"0 auto 1.25rem" }} />
            <p style={{ color:"#6b5f7a", fontSize:"1.05rem", lineHeight:1.7, fontStyle:"italic", maxWidth:"480px", margin:"0 auto" }}>
              What you saw in the night was not random. Something was shown to you. Speak it here — and receive what it means.
            </p>
          </div>

          {/* Input */}
          <div style={{ background:"#0e0d1c", border:"1px solid #1e1a38", borderRadius:"16px", padding:"2rem", marginBottom:"1rem" }}>
            <label style={{ fontSize:"0.7rem", color:"#6b5f7a", letterSpacing:"0.15em", textTransform:"uppercase", display:"block", marginBottom:"0.75rem" }}>
              Describe your dream
            </label>
            <textarea
              value={dream}
              onChange={(e) => setDream(e.target.value)}
              placeholder="I was in a large house I did not recognise. The rooms kept multiplying. There was a figure standing at the end of a hallway that would not turn around…"
              rows={6}
              style={{ width:"100%", background:"#080810", border:"1px solid #1e1a38", borderRadius:"10px", padding:"1rem", color:"#d4cce8", fontSize:"1rem", lineHeight:1.75, resize:"vertical", outline:"none", fontFamily:"'Cormorant Garamond', serif", boxSizing:"border-box", transition:"border-color 0.2s, box-shadow 0.2s" }}
            />
            <label style={{ fontSize:"0.7rem", color:"#6b5f7a", letterSpacing:"0.15em", textTransform:"uppercase", display:"block", margin:"1.5rem 0 0.75rem" }}>
              How did you wake?
            </label>
            <div style={{ display:"flex", flexWrap:"wrap", gap:"8px" }}>
              {moods.map((m) => (
                <button key={m} onClick={() => setMood(mood === m ? "" : m)} style={{
                  padding:"6px 16px", borderRadius:"99px",
                  border:`1px solid ${mood === m ? "#7c5cbf" : "#1e1a38"}`,
                  background:mood === m ? "#1e1040" : "transparent",
                  color:mood === m ? "#c9b8e8" : "#6b5f7a",
                  fontSize:"0.875rem", cursor:"pointer",
                  fontFamily:"'Cormorant Garamond', serif",
                  transition:"all 0.2s", letterSpacing:"0.03em"
                }}>{m}</button>
              ))}
            </div>
          </div>

          <button
            onClick={interpret}
            disabled={loading || !dream.trim()}
            className={!loading && dream.trim() ? "glow-btn" : ""}
            style={{
              width:"100%", padding:"1.1rem",
              background:loading ? "#0e0d1c" : "linear-gradient(135deg, #1e1040 0%, #2d1f4e 100%)",
              border:`1px solid ${loading ? "#1e1a38" : "#7c5cbf"}`,
              borderRadius:"10px", color:loading ? "#4a3870" : "#c9b8e8",
              fontSize:"1.1rem", cursor:loading ? "not-allowed" : "pointer",
              fontFamily:"'Cormorant Garamond', serif",
              letterSpacing:"0.06em", marginBottom:"2.5rem",
              transition:"all 0.3s"
            }}
          >
            {loading ? (
              <span style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"16px" }}>
                <span style={{ display:"inline-flex", alignItems:"flex-end", gap:"4px" }}>
                  <div className="candle-wrap" style={{ transform:"scale(0.5)", transformOrigin:"bottom center" }}>
                    <div className="candle-flame-wrap"><div className="candle-flame-outer" /><div className="candle-flame-inner" /></div>
                    <div className="candle-body"><div className="candle-wick" /></div>
                    <div className="candle-base" />
                  </div>
                </span>
                <span>The seer is reading what was shown to you…</span>
              </span>
            ) : "Reveal the meaning"}
          </button>

          {error && (
            <p style={{ color:"#a05050", textAlign:"center", marginBottom:"1.5rem", fontSize:"0.95rem", fontStyle:"italic" }}>{error}</p>
          )}

          {/* ── RESULTS — staggered reveal ── */}
          {result && (
            <div>

              {/* I. Prophetic Interpretation */}
              <div style={{ marginBottom:"0.75rem", ...revealStyle("interpretation") }}>
                <div style={{ fontSize:"0.65rem", color:"#7c5cbf", letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:"1rem", display:"flex", alignItems:"center", gap:"10px" }}>
                  <span style={{ flex:1, height:"1px", background:"linear-gradient(90deg, transparent, #3a2860)" }} />
                  I. Prophetic Interpretation
                  <span style={{ flex:1, height:"1px", background:"linear-gradient(90deg, #3a2860, transparent)" }} />
                </div>
                <div style={{ background:"#0e0d1c", border:"1px solid #1e1a38", borderRadius:"14px", padding:"1.75rem" }}>
                  <p style={{ lineHeight:1.85, color:"#d4cce8", fontSize:"1.05rem", margin:0 }}>{result.prophetic_interpretation}</p>
                </div>
              </div>

              {/* II. Spiritual Revelation */}
              <div style={{ marginBottom:"0.75rem", marginTop:"1.75rem", ...revealStyle("revelation") }}>
                <div style={{ fontSize:"0.65rem", color:"#7c5cbf", letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:"1rem", display:"flex", alignItems:"center", gap:"10px" }}>
                  <span style={{ flex:1, height:"1px", background:"linear-gradient(90deg, transparent, #3a2860)" }} />
                  II. Spiritual Revelation
                  <span style={{ flex:1, height:"1px", background:"linear-gradient(90deg, #3a2860, transparent)" }} />
                </div>
                <div style={{ background:"#0e0d1c", border:"1px solid #1e1a38", borderRadius:"14px", padding:"1.75rem" }}>
                  <p style={{ lineHeight:1.85, color:"#d4cce8", fontSize:"1.05rem", margin:0 }}>{result.spiritual_revelation}</p>
                </div>
              </div>

              {/* Symbols */}
              {result.symbols?.length > 0 && (
                <div style={{ marginBottom:"0.75rem", marginTop:"1.75rem", ...revealStyle("symbols") }}>
                  <div style={{ fontSize:"0.65rem", color:"#7c5cbf", letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:"1rem", display:"flex", alignItems:"center", gap:"10px" }}>
                    <span style={{ flex:1, height:"1px", background:"linear-gradient(90deg, transparent, #3a2860)" }} />
                    Spiritual Symbols
                    <span style={{ flex:1, height:"1px", background:"linear-gradient(90deg, #3a2860, transparent)" }} />
                  </div>
                  <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))", gap:"10px" }}>
                    {result.symbols.map((s, i) => (
                      <div key={i} className="symbol-card" style={{ background:"#080810", border:"1px solid #1e1a38", borderRadius:"10px", padding:"1.1rem", transition:"all 0.2s", cursor:"default" }}>
                        <div style={{ fontSize:"0.75rem", fontWeight:600, color:"#9b7cd4", marginBottom:"6px", letterSpacing:"0.05em", textTransform:"uppercase", fontFamily:"'Jost',sans-serif" }}>{s.name}</div>
                        <div style={{ fontSize:"0.9rem", color:"#a09ac0", lineHeight:1.6 }}>{s.verdict}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* III. Warning or Blessing */}
              <div style={{ marginTop:"1.75rem", marginBottom:"0.75rem", ...revealStyle("warning") }}>
                <div style={{ fontSize:"0.65rem", color:"#7c5cbf", letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:"1rem", display:"flex", alignItems:"center", gap:"10px" }}>
                  <span style={{ flex:1, height:"1px", background:"linear-gradient(90deg, transparent, #3a2860)" }} />
                  III. Hidden Warning or Blessing
                  <span style={{ flex:1, height:"1px", background:"linear-gradient(90deg, #3a2860, transparent)" }} />
                </div>
                <div style={{ background:"#100c20", border:"1px solid #2e1f50", borderRadius:"14px", padding:"1.75rem", borderLeft:"3px solid #7c5cbf" }}>
                  <p style={{ lineHeight:1.85, color:"#c9b8e8", fontSize:"1.05rem", margin:0, fontStyle:"italic" }}>{result.warning_or_blessing}</p>
                </div>
              </div>

              {/* IV. Final Declaration */}
              <div style={{ marginTop:"1.75rem", ...revealStyle("declaration") }}>
                <div style={{ fontSize:"0.65rem", color:"#7c5cbf", letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:"1rem", display:"flex", alignItems:"center", gap:"10px" }}>
                  <span style={{ flex:1, height:"1px", background:"linear-gradient(90deg, transparent, #3a2860)" }} />
                  IV. Final Prophetic Declaration
                  <span style={{ flex:1, height:"1px", background:"linear-gradient(90deg, #3a2860, transparent)" }} />
                </div>
                <div style={{ background:"linear-gradient(135deg, #100c20, #0e0d1c)", border:"1px solid #3a2860", borderRadius:"14px", padding:"2rem", textAlign:"center", animation:"pulse 4s ease-in-out infinite" }}>
                  <div style={{ display:"flex", justifyContent:"center", marginBottom:"1rem" }}>
                    <div className="candle-wrap">
                      <div className="candle-flame-wrap" style={{ width:10, height:20 }}>
                        <div className="candle-flame-outer" style={{ width:9, height:18 }} />
                        <div className="candle-flame-inner" style={{ width:5, height:10 }} />
                      </div>
                      <div className="candle-body" style={{ width:12, height:32 }}>
                        <div className="candle-wick" />
                      </div>
                      <div className="candle-base" style={{ width:16, height:4 }} />
                    </div>
                  </div>
                  <p style={{ lineHeight:2, color:"#c9b8e8", fontSize:"1.1rem", margin:0, fontWeight:400, letterSpacing:"0.02em" }}>{result.final_declaration}</p>
                </div>
              </div>

              {/* CTA */}
              <div style={{ marginTop:"2.5rem", background:"#0e0d1c", border:"1px solid #2e1f50", borderRadius:"16px", padding:"2rem", textAlign:"center", ...revealStyle("cta") }}>
                <div style={{ display:"flex", justifyContent:"center", marginBottom:"0.75rem" }}>
                  <div className="candle-wrap" style={{ transform:"scale(0.7)", transformOrigin:"bottom center" }}>
                    <div className="candle-flame-wrap"><div className="candle-flame-outer" /><div className="candle-flame-inner" /></div>
                    <div className="candle-body"><div className="candle-wick" /></div>
                    <div className="candle-base" />
                  </div>
                </div>
                <h2 style={{ fontSize:"1.3rem", fontWeight:300, color:"#c9b8e8", margin:"0 0 0.75rem", letterSpacing:"0.02em" }}>
                  The dream revealed. Now what do you do?
                </h2>
                <p style={{ color:"#6b5f7a", fontSize:"0.95rem", lineHeight:1.8, margin:"0 0 1.5rem", maxWidth:"460px", marginLeft:"auto", marginRight:"auto" }}>
                  A Clarity Session with AS Davids takes the revelation further — into what you are to do, what must be broken, and what is being opened for your life.
                </p>
                <a href="/clarity-session" style={{ display:"inline-block", background:"linear-gradient(135deg, #1e1040, #2d1f4e)", border:"1px solid #7c5cbf", color:"#c9b8e8", padding:"0.9rem 2.25rem", borderRadius:"8px", textDecoration:"none", fontSize:"1rem", fontFamily:"'Cormorant Garamond', serif", letterSpacing:"0.04em" }}>
                  Book a Clarity Session →
                </a>
                <p style={{ color:"#3a2860", fontSize:"0.8rem", marginTop:"1rem", marginBottom:0, letterSpacing:"0.05em" }}>
                  ONE-ON-ONE · 60 MINUTES · $99
                </p>
              </div>

            </div>
          )}
        </div>
      </div>
    </>
  );
}
