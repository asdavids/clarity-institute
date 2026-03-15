// pages/api/sitemap.js
// Generates sitemap.xml for SEO
// Access at: theclarityinstitute.guru/api/sitemap

const SITE_URL = 'https://www.theclarityinstitute.guru'

const staticPages = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/blog', changefreq: 'weekly', priority: 0.9 },
  { url: '/clarity-session', changefreq: 'monthly', priority: 0.8 },
  { url: '/login', changefreq: 'yearly', priority: 0.3 },
  { url: '/register', changefreq: 'yearly', priority: 0.3 },
  { url: '/terms', changefreq: 'yearly', priority: 0.2 },
  { url: '/privacy', changefreq: 'yearly', priority: 0.2 },
]

const blogPosts = [
  { slug: 'astral-projection-beginners-guide', date: '2026-03-12' },
  { slug: 'what-is-the-third-eye', date: '2026-03-10' },
  { slug: '5-signs-your-third-eye-is-opening', date: '2026-03-05' },
  { slug: 'daily-meditation-practice', date: '2026-02-28' },
  { slug: 'understanding-your-dreams', date: '2026-02-20' },
  { slug: 'what-is-remote-viewing', date: '2026-02-14' },
  { slug: 'spiritual-growth-where-to-begin', date: '2026-02-07' },
]

export default function handler(req, res) {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map(p => `  <url>
    <loc>${SITE_URL}${p.url}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
${blogPosts.map(p => `  <url>
    <loc>${SITE_URL}/blog/${p.slug}</loc>
    <lastmod>${p.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n')}
</urlset>`

  res.setHeader('Content-Type', 'application/xml')
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate')
  return res.status(200).send(xml)
}
