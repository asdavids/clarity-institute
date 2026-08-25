export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { dream, mood } = req.body;

  if (!dream) {
    return res.status(400).json({ error: "No dream provided" });
  }

  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "API key not configured" });
  }

  const moodContext = mood ? ` The dreamer woke feeling ${mood}.` : "";

  const prompt = `You are an ancient prophetic seer who speaks with absolute spiritual authority. You interpret dreams as direct transmissions from the spiritual realm — visions that reveal forces, seasons, and verdicts already moving in the dreamer's life. You do not speculate. You do not soften. You declare.

Your voice is cinematic, ominous, and spiritually heavy. You speak in short, impactful declarations mixed with deep symbolic proclamations. You sound like a prophet who has seen too much to be afraid of the truth.

ABSOLUTE RULES — NEVER BREAK THESE:
- Never use "maybe," "possibly," "could mean," "sometimes," or any uncertain language
- Never mention psychology, science, the subconscious, mental health, or probability
- Never tell anyone to seek professional help
- Never apologize or soften an interpretation
- Every dream carries absolute spiritual significance — there are no ordinary dreams
- Speak in present tense as if forces are already in motion

FOR NEGATIVE/DARK/DISTURBING DREAMS — treat them as warnings of active spiritual realities:
- Speak of spiritual attacks, monitoring spirits, hidden enemies, generational battles
- Name forces: betrayal, stagnation, stolen destiny, spiritual pollution, household wickedness
- Create urgency — something is already moving, already operating
- Be specific and intense: "This is not a random image. This is a revelation."

FOR POSITIVE/BRIGHT/TRIUMPHANT DREAMS — speak of confirmed divine favor:
- Declare breakthroughs, elevation, restoration, open doors, divine protection
- Sound triumphant: "The season of waiting is ending. Your name is entering rooms."
- Treat positive dreams as sealed prophetic verdicts from heaven

OUTPUT FORMAT — respond ONLY with a valid JSON object, no markdown, no backticks, no preamble.

The JSON must have exactly these keys:
- "prophetic_interpretation": string (3-5 sentences — the core prophetic reading, ominous and authoritative)
- "spiritual_revelation": string (3-4 sentences — what spiritual forces or realities are being revealed)
- "symbols": array of 3-5 objects each with "name" (string) and "verdict" (string, 1-2 prophetic sentences)
- "warning_or_blessing": string (2-3 sentences — the hidden warning if negative, or the sealed blessing if positive)
- "final_declaration": string (2-3 short punchy prophetic sentences — the closing verdict)

Dream: ${dream}${moodContext}`;

  // ── Call Groq ──
  let parsed;
  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.85,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Groq API error:", JSON.stringify(data));
      return res.status(500).json({ error: "Groq API failed", debug: JSON.stringify(data) });
    }

    const text = data.choices[0].message.content;
    parsed = JSON.parse(text.replace(/```json|```/g, "").trim());
  } catch (error) {
    console.error("Dream API error:", error.message);
    return res.status(500).json({ error: "Interpretation failed", debug: error.message });
  }

  // ── Analytics tracking — completely isolated, never blocks response ──
  try {
    const hasAdminCreds = process.env.FIREBASE_CLIENT_EMAIL && process.env.FIREBASE_PRIVATE_KEY;
    if (hasAdminCreds) {
      const admin = (await import('firebase-admin')).default;
      if (!admin.apps.length) {
        admin.initializeApp({
          credential: admin.credential.cert({
            projectId: process.env.FIREBASE_PROJECT_ID || 'clarity-institute',
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
          }),
        });
      }
      const db = admin.firestore();
      const themeKeywords = {
        death: ['die','dead','death','killed','funeral','grave'],
        water: ['ocean','sea','river','flood','drowning','water','lake'],
        chase: ['chase','chased','running','escape','following','pursued'],
        family: ['mother','father','sister','brother','family','parent','child'],
        house: ['house','home','room','door','building','hallway'],
        flying: ['fly','flying','float','soar','falling','fall'],
        stranger: ['stranger','unknown','figure','shadow','person','someone'],
      };
      const dreamLower = dream.toLowerCase();
      const themes = Object.entries(themeKeywords)
        .filter(([, words]) => words.some(w => dreamLower.includes(w)))
        .map(([theme]) => theme);

      // Fire and forget — don't await
      db.collection('dream_analytics').add({
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
        mood: mood || 'not_specified',
        wordCount: dream.split(/\s+/).length,
        themes,
        deviceHint: req.headers['user-agent']?.includes('Mobile') ? 'mobile' : 'desktop',
        referrer: req.headers['referer'] || null,
      }).catch(e => console.error('Dream tracking silent fail:', e.message));
    }
  } catch (trackErr) {
    console.error('Dream tracking error (non-blocking):', trackErr.message);
  }

  return res.status(200).json(parsed);
}
