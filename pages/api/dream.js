export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { dream, mood } = req.body;

  if (!dream) {
    return res.status(400).json({ error: "No dream provided" });
  }

  const apiKey = process.env.GOOGLE_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "API key not configured", debug: "GOOGLE_API_KEY is missing" });
  }

  const moodContext = mood ? ` The dreamer felt ${mood} during the dream.` : "";

  const prompt = `You are a poetic and insightful dream interpreter drawing on Jungian psychology, mythology, and spiritual traditions. Your interpretations are thoughtful, warm, and never alarmist. Always respond ONLY with a valid JSON object — no markdown, no backticks, no preamble.

The JSON must have exactly these keys:
- "overview": string (2-3 sentences on the core theme)
- "symbols": array of objects with "name" (string) and "meaning" (string, 1 sentence) — 3 to 5 symbols
- "emotional_landscape": string (2 sentences on the emotional undercurrent)
- "guidance": string (2-3 sentences on what the unconscious may be communicating)
- "poetic_reflection": string (a 2-4 line poetic prose reflection, lyrical and atmospheric)

Dream: ${dream}${moodContext}`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Google API error:", JSON.stringify(data));
      return res.status(500).json({ error: "Google API failed", debug: JSON.stringify(data) });
    }

    const text = data.candidates[0].content.parts[0].text;
    const parsed = JSON.parse(text.replace(/```json|```/g, "").trim());

    return res.status(200).json(parsed);
  } catch (error) {
    console.error("Dream API error:", error.message, error.stack);
    return res.status(500).json({ error: "Interpretation failed", debug: error.message });
  }
}
