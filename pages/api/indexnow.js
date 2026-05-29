// One-time endpoint to submit all URLs to Bing via IndexNow
// Hit this once at: /api/indexnow

const KEY = '0eda385e3e0abaa5af9ab7b10733207d'
const HOST = 'www.theclarityinstitute.guru'

const urls = [
  `https://${HOST}/`,
  `https://${HOST}/clarity-session`,
  `https://${HOST}/about`,
  `https://${HOST}/blog`,
  `https://${HOST}/dream-interpreter`,
  `https://${HOST}/ebook`,
  `https://${HOST}/immersion`,
  `https://${HOST}/mentorship`,
  `https://${HOST}/waitlist`,
  `https://${HOST}/blog/what-is-spiritual-awakening`,
  `https://${HOST}/blog/what-does-it-mean-to-dream-about-someone`,
  `https://${HOST}/blog/how-to-develop-your-intuition`,
  `https://${HOST}/blog/dark-night-of-the-soul`,
  `https://${HOST}/blog/what-is-a-spiritual-coach`,
  `https://${HOST}/blog/recurring-dreams`,
  `https://${HOST}/blog/african-spirituality-and-the-third-eye`,
  `https://${HOST}/blog/what-is-shadow-work`,
  `https://${HOST}/blog/what-is-the-third-eye`,
  `https://${HOST}/blog/5-signs-your-third-eye-is-opening`,
  `https://${HOST}/blog/astral-projection-beginners-guide`,
  `https://${HOST}/blog/daily-meditation-practice`,
  `https://${HOST}/blog/understanding-your-dreams`,
  `https://${HOST}/blog/what-is-remote-viewing`,
  `https://${HOST}/blog/spiritual-growth-where-to-begin`,
]

export default async function handler(req, res) {
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: `https://${HOST}/${KEY}.txt`,
        urlList: urls,
      }),
    })

    return res.status(200).json({
      success: true,
      status: response.status,
      message: response.status === 200 || response.status === 202
        ? `All ${urls.length} URLs submitted to Bing successfully.`
        : `Bing responded with status ${response.status}`,
    })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}
