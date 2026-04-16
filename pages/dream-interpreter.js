import { useState } from "react";
import Head from "next/head";

const moods = ["peaceful", "anxious", "joyful", "confused", "fearful", "melancholic", "awe"];

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
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Dream Interpreter | The Clarity Institute</title>
        <meta name="description" content="Discover the hidden meanings in your dreams through spiritual and psychological insight." />
      </Head>

      <div style={{ minHeight: "100vh", background: "#0f0f1a", color: "#e8e4f0", fontFamily: "Georgia, serif", padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🌙</div>
            <h1 style={{ fontSize: "2rem", fontWeight: "400", color: "#c9b8e8", marginBottom: "0.75rem" }}>
              Dream Interpreter
            </h1>
            <p style={{ color: "#8b7fa8", fontSize: "1rem", lineHeight: "1.6" }}>
              Describe your dream and receive guidance from the depths of your unconscious.
            </p>
          </div>

          {/* Input Card */}
          <div style={{ background: "#1a1a2e", border: "1px solid #2e2a45", borderRadius: "12px", padding: "1.5rem", marginBottom: "1rem" }}>
            <label style={{ fontSize: "0.8rem", color: "#8b7fa8", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "0.75rem" }}>
              Your dream
            </label>
            <textarea
              value={dream}
              onChange={(e) => setDream(e.target.value)}
              placeholder="I was standing in a forest at dusk, and there was a white deer watching me from between the trees…"
              rows={5}
              style={{ width: "100%", background: "#0f0f1a", border: "1px solid #2e2a45", borderRadius: "8px", padding: "0.875rem", color: "#e8e4f0", fontSize: "1rem", lineHeight: "1.6", resize: "vertical", outline: "none", fontFamily: "Georgia, serif", boxSizing: "border-box" }}
            />

            <label style={{ fontSize: "0.8rem", color: "#8b7fa8", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", margin: "1.25rem 0 0.75rem" }}>
              How did it feel?
            </label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {moods.map((m) => (
                <button
                  key={m}
                  onClick={() => setMood(mood === m ? "" : m)}
                  style={{ padding: "5px 14px", borderRadius: "99px", border: `1px solid ${mood === m ? "#7c5cbf" : "#2e2a45"}`, background: mood === m ? "#2d1f4e" : "transparent", color: mood === m ? "#c9b8e8" : "#8b7fa8", fontSize: "0.875rem", cursor: "pointer", fontFamily: "Georgia, serif" }}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={interpret}
            disabled={loading || !dream.trim()}
            style={{ width: "100%", padding: "0.875rem", background: loading ? "#1a1a2e" : "#2d1f4e", border: "1px solid #7c5cbf", borderRadius: "8px", color: "#c9b8e8", fontSize: "1rem", cursor: loading ? "not-allowed" : "pointer", fontFamily: "Georgia, serif", marginBottom: "2rem", transition: "all 0.2s" }}
          >
            {loading ? "Reading your dream…" : "Interpret my dream"}
          </button>

          {error && (
            <p style={{ color: "#e88080", textAlign: "center", marginBottom: "1rem" }}>{error}</p>
          )}

          {/* Result */}
          {result && (
            <div style={{ background: "#1a1a2e", border: "1px solid #2e2a45", borderRadius: "12px", padding: "1.5rem" }}>

              <div style={{ marginBottom: "1.5rem" }}>
                <div style={{ fontSize: "0.75rem", color: "#8b7fa8", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Overall theme</div>
                <p style={{ lineHeight: "1.7", color: "#e8e4f0" }}>{result.overview}</p>
              </div>

              <hr style={{ border: "none", borderTop: "1px solid #2e2a45", margin: "1.25rem 0" }} />

              <div style={{ marginBottom: "1.5rem" }}>
                <div style={{ fontSize: "0.75rem", color: "#8b7fa8", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Key symbols</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "10px" }}>
                  {result.symbols?.map((s, i) => (
                    <div key={i} style={{ background: "#0f0f1a", borderRadius: "8px", padding: "0.875rem" }}>
                      <div style={{ fontSize: "0.9rem", fontWeight: "600", color: "#c9b8e8", marginBottom: "4px" }}>{s.name}</div>
                      <div style={{ fontSize: "0.8rem", color: "#8b7fa8", lineHeight: "1.5" }}>{s.meaning}</div>
                    </div>
                  ))}
                </div>
              </div>

              <hr style={{ border: "none", borderTop: "1px solid #2e2a45", margin: "1.25rem 0" }} />

              <div style={{ marginBottom: "1.5rem" }}>
                <div style={{ fontSize: "0.75rem", color: "#8b7fa8", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Emotional landscape</div>
                <p style={{ lineHeight: "1.7", color: "#e8e4f0" }}>{result.emotional_landscape}</p>
              </div>

              <hr style={{ border: "none", borderTop: "1px solid #2e2a45", margin: "1.25rem 0" }} />

              <div style={{ marginBottom: "1.5rem" }}>
                <div style={{ fontSize: "0.75rem", color: "#8b7fa8", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>What your psyche may be saying</div>
                <p style={{ lineHeight: "1.7", color: "#e8e4f0" }}>{result.guidance}</p>
              </div>

              <hr style={{ border: "none", borderTop: "1px solid #2e2a45", margin: "1.25rem 0" }} />

              <div>
                <div style={{ fontSize: "0.75rem", color: "#8b7fa8", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Poetic reflection</div>
                <p style={{ lineHeight: "1.8", color: "#c9b8e8", fontStyle: "italic", borderLeft: "2px solid #2e2a45", paddingLeft: "1rem" }}>{result.poetic_reflection}</p>
              </div>

            </div>
          )}
        </div>
      </div>
    </>
  );
}
