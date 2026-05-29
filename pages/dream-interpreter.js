import { useState } from "react";
import Head from "next/head";

const moods = ["fearful", "anxious", "confused", "peaceful", "awe", "joyful", "melancholic"];

export default function DreamInterpreter() {
  const [dream, setDream] = useState("");
  const [mood, setMood] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  return (
    <>
      <Head>
        <title>Prophetic Dream Interpreter | The Clarity Institute</title>
        <meta name="description" content="Receive a prophetic interpretation of your dream. Ancient seer wisdom reveals the spiritual forces, warnings, and blessings moving behind your vision." />
        <meta property="og:title" content="Prophetic Dream Interpreter — The Clarity Institute" />
        <meta property="og:description" content="Your dream is not random. Receive a prophetic reading of what the spiritual realm is revealing." />
        <meta property="og:image" content="https://www.theclarityinstitute.guru/og-image.png" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <style>{`
          @keyframes flicker { 0%,100%{opacity:1} 50%{opacity:0.85} }
          @keyframes fadeIn { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
          @keyframes pulse { 0%,100%{box-shadow:0 0 0 0 rgba(139,97,200,0)} 50%{box-shadow:0 0 24px 4px rgba(139,97,200,0.18)} }
          .flame { animation: flicker 3s ease-in-out infinite; }
          .reveal { animation: fadeIn 0.7s ease forwards; }
          .glow-btn:hover { box-shadow: 0 0 32px rgba(139,97,200,0.35); transform: translateY(-1px); }
          .symbol-card:hover { border-color: #7c5cbf !important; background: #1a1a2e !important; }
          textarea:focus { border-color: #4a3870 !important; box-shadow: 0 0 0 2px rgba(124,92,191,0.15); }
        `}</style>
      </Head>

      <div style={{ minHeight: "100vh", background: "#080810", color: "#e8e4f0", fontFamily: "'Cormorant Garamond', serif" }}>

        {/* Nav */}
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.25rem 2rem", borderBottom: "1px solid #14122a" }}>
          <a href="/" style={{ fontSize: "1.1rem", color: "#9b8ab8", textDecoration: "none", letterSpacing: "0.04em", fontWeight: 400 }}>
            The Clarity Institute
          </a>
          <a href="/clarity-session" style={{ fontSize: "0.85rem", color: "#6b5f7a", textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase", borderBottom: "1px solid #3a3050", paddingBottom: "2px" }}>
            Book a Session
          </a>
        </nav>

        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="flame" style={{ fontSize: "2.5rem", marginBottom: "1.5rem", display: "block" }}>🕯</div>
            <h1 style={{ fontSize: "clamp(2rem,5vw,2.8rem)", fontWeight: 300, color: "#c9b8e8", marginBottom: "1rem", lineHeight: 1.2, letterSpacing: "0.02em" }}>
              Prophetic Dream Interpreter
            </h1>
            <div style={{ width: 40, height: 1, background: "linear-gradient(90deg, transparent, #7c5cbf, transparent)", margin: "0 auto 1.25rem" }} />
            <p style={{ color: "#6b5f7a", fontSize: "1.05rem", lineHeight: 1.7, fontStyle: "italic", maxWidth: "480px", margin: "0 auto" }}>
              What you saw in the night was not random. Something was shown to you. Speak it here — and receive what it means.
            </p>
          </div>

          {/* Input */}
          <div style={{ background: "#0e0d1c", border: "1px solid #1e1a38", borderRadius: "16px", padding: "2rem", marginBottom: "1rem" }}>
            <label style={{ fontSize: "0.7rem", color: "#6b5f7a", letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: "0.75rem" }}>
              Describe your dream
            </label>
            <textarea
              value={dream}
              onChange={(e) => setDream(e.target.value)}
              placeholder="I was in a large house I did not recognise. The rooms kept multiplying. There was a figure standing at the end of a hallway that would not turn around…"
              rows={6}
              style={{ width: "100%", background: "#080810", border: "1px solid #1e1a38", borderRadius: "10px", padding: "1rem", color: "#d4cce8", fontSize: "1rem", lineHeight: 1.75, resize: "vertical", outline: "none", fontFamily: "'Cormorant Garamond', serif", boxSizing: "border-box", transition: "border-color 0.2s, box-shadow 0.2s" }}
            />

            <label style={{ fontSize: "0.7rem", color: "#6b5f7a", letterSpacing: "0.15em", textTransform: "uppercase", display: "block", margin: "1.5rem 0 0.75rem" }}>
              How did you wake?
            </label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {moods.map((m) => (
                <button
                  key={m}
                  onClick={() => setMood(mood === m ? "" : m)}
                  style={{
                    padding: "6px 16px", borderRadius: "99px",
                    border: `1px solid ${mood === m ? "#7c5cbf" : "#1e1a38"}`,
                    background: mood === m ? "#1e1040" : "transparent",
                    color: mood === m ? "#c9b8e8" : "#6b5f7a",
                    fontSize: "0.875rem", cursor: "pointer",
                    fontFamily: "'Cormorant Garamond', serif",
                    transition: "all 0.2s", letterSpacing: "0.03em"
                  }}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={interpret}
            disabled={loading || !dream.trim()}
            className={!loading && dream.trim() ? "glow-btn" : ""}
            style={{
              width: "100%", padding: "1.1rem",
              background: loading ? "#0e0d1c" : "linear-gradient(135deg, #1e1040 0%, #2d1f4e 100%)",
              border: `1px solid ${loading ? "#1e1a38" : "#7c5cbf"}`,
              borderRadius: "10px", color: loading ? "#4a3870" : "#c9b8e8",
              fontSize: "1.1rem", cursor: loading ? "not-allowed" : "pointer",
              fontFamily: "'Cormorant Garamond', serif",
              letterSpacing: "0.06em", marginBottom: "2.5rem",
              transition: "all 0.3s"
            }}
          >
            {loading ? (
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                <span className="flame">🕯</span>
                <span>The seer is reading what was shown to you…</span>
              </span>
            ) : "Reveal the meaning"}
          </button>

          {error && (
            <p style={{ color: "#a05050", textAlign: "center", marginBottom: "1.5rem", fontSize: "0.95rem", fontStyle: "italic" }}>{error}</p>
          )}

          {/* Result */}
          {result && (
            <div className="reveal">

              {/* Prophetic Interpretation */}
              <div style={{ marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.65rem", color: "#7c5cbf", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, #3a2860)" }} />
                  I. Prophetic Interpretation
                  <span style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, #3a2860, transparent)" }} />
                </div>
                <div style={{ background: "#0e0d1c", border: "1px solid #1e1a38", borderRadius: "14px", padding: "1.75rem" }}>
                  <p style={{ lineHeight: 1.85, color: "#d4cce8", fontSize: "1.05rem", margin: 0 }}>{result.prophetic_interpretation}</p>
                </div>
              </div>

              {/* Spiritual Revelation */}
              <div style={{ marginBottom: "0.75rem", marginTop: "1.75rem" }}>
                <div style={{ fontSize: "0.65rem", color: "#7c5cbf", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, #3a2860)" }} />
                  II. Spiritual Revelation
                  <span style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, #3a2860, transparent)" }} />
                </div>
                <div style={{ background: "#0e0d1c", border: "1px solid #1e1a38", borderRadius: "14px", padding: "1.75rem" }}>
                  <p style={{ lineHeight: 1.85, color: "#d4cce8", fontSize: "1.05rem", margin: 0 }}>{result.spiritual_revelation}</p>
                </div>
              </div>

              {/* Symbols */}
              {result.symbols?.length > 0 && (
                <div style={{ marginBottom: "0.75rem", marginTop: "1.75rem" }}>
                  <div style={{ fontSize: "0.65rem", color: "#7c5cbf", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, #3a2860)" }} />
                    Spiritual Symbols
                    <span style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, #3a2860, transparent)" }} />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "10px" }}>
                    {result.symbols.map((s, i) => (
                      <div key={i} className="symbol-card" style={{ background: "#080810", border: "1px solid #1e1a38", borderRadius: "10px", padding: "1.1rem", transition: "all 0.2s", cursor: "default" }}>
                        <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#9b7cd4", marginBottom: "6px", letterSpacing: "0.05em", textTransform: "uppercase", fontFamily: "'Jost', sans-serif" }}>{s.name}</div>
                        <div style={{ fontSize: "0.9rem", color: "#a09ac0", lineHeight: 1.6 }}>{s.verdict}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Warning or Blessing */}
              <div style={{ marginTop: "1.75rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.65rem", color: "#7c5cbf", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, #3a2860)" }} />
                  III. Hidden Warning or Blessing
                  <span style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, #3a2860, transparent)" }} />
                </div>
                <div style={{ background: "#100c20", border: "1px solid #2e1f50", borderRadius: "14px", padding: "1.75rem", borderLeft: "3px solid #7c5cbf" }}>
                  <p style={{ lineHeight: 1.85, color: "#c9b8e8", fontSize: "1.05rem", margin: 0, fontStyle: "italic" }}>{result.warning_or_blessing}</p>
                </div>
              </div>

              {/* Final Declaration */}
              <div style={{ marginTop: "1.75rem" }}>
                <div style={{ fontSize: "0.65rem", color: "#7c5cbf", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, #3a2860)" }} />
                  IV. Final Prophetic Declaration
                  <span style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, #3a2860, transparent)" }} />
                </div>
                <div style={{ background: "linear-gradient(135deg, #100c20, #0e0d1c)", border: "1px solid #3a2860", borderRadius: "14px", padding: "2rem", textAlign: "center", animation: "pulse 4s ease-in-out infinite" }}>
                  <div className="flame" style={{ fontSize: "1.5rem", marginBottom: "1rem", display: "block" }}>🕯</div>
                  <p style={{ lineHeight: 2, color: "#c9b8e8", fontSize: "1.1rem", margin: 0, fontWeight: 400, letterSpacing: "0.02em" }}>{result.final_declaration}</p>
                </div>
              </div>

              {/* CTA */}
              <div style={{ marginTop: "2.5rem", background: "#0e0d1c", border: "1px solid #2e1f50", borderRadius: "16px", padding: "2rem", textAlign: "center" }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>👁</div>
                <h2 style={{ fontSize: "1.3rem", fontWeight: 300, color: "#c9b8e8", margin: "0 0 0.75rem", letterSpacing: "0.02em" }}>
                  The dream revealed. Now what do you do?
                </h2>
                <p style={{ color: "#6b5f7a", fontSize: "0.95rem", lineHeight: 1.8, margin: "0 0 1.5rem", maxWidth: "460px", marginLeft: "auto", marginRight: "auto" }}>
                  A Clarity Session with David takes the revelation further — into what you are to do, what must be broken, and what is being opened for your life.
                </p>
                <a
                  href="/clarity-session"
                  style={{ display: "inline-block", background: "linear-gradient(135deg, #1e1040, #2d1f4e)", border: "1px solid #7c5cbf", color: "#c9b8e8", padding: "0.9rem 2.25rem", borderRadius: "8px", textDecoration: "none", fontSize: "1rem", fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.04em" }}
                >
                  Book a Clarity Session →
                </a>
                <p style={{ color: "#3a2860", fontSize: "0.8rem", marginTop: "1rem", marginBottom: 0, letterSpacing: "0.05em" }}>
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
