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
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Groq API error:", JSON.stringify(data));
      return res.status(500).json({ error: "Groq API failed", debug: JSON.stringify(data) });
    }

    const text = data.choices[0].message.content;
    const parsed = JSON.parse(text.replace(/```json|```/g, "").trim());

    return res.status(200).json(parsed);
  } catch (error) {
    console.error("Dream API error:", error.message);
    return res.status(500).json({ error: "Interpretation failed", debug: error.message });
  }
}
