// lib/personSchema.js
// One source of truth for who AS Davids is, used in the hidden JSON-LD data on every page.
// Keeping it identical everywhere is what lets Google and AI answer engines treat it as ONE person.

export const SITE = 'https://www.theclarityinstitute.guru'

export const PERSON_ID = `${SITE}/#david`
export const ORG_ID = `${SITE}/#organization`
export const BOOK_PRAYER_WATCHES_ID = `${SITE}/#eight-prophetic-prayer-watches`

export const personSchema = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'AS Davids',
  alternateName: [
    'A.S Davids',
    'A.S. Davids',
    'AS Davids Muyunda',
    'Prophet AS Davids',
    'Prophet A.S Davids',
  ],
  jobTitle: 'Prophet, Author and Spiritual Teacher',
  description:
    'AS Davids is a prophet, author and spiritual teacher. He founded The Clarity Institute and has written more than a dozen books, including The Eight Prophetic Prayer Watches and The Rules of Life, on faith, prayer, prophetic insight and African spiritual wisdom.',
  url: `${SITE}/about`,
  image: `${SITE}/as-davids.jpg`,
  worksFor: { '@id': ORG_ID },
  sameAs: [
    'https://www.tiktok.com/@asdavids1',
    'https://www.amazon.com/stores/author/B0GD8SRT1B',
  ],
  knowsAbout: [
    'Prophetic ministry',
    'Prayer',
    'Biblical interpretation',
    'Spiritual awakening',
    'Dream interpretation',
    'Intuition development',
    'African spirituality',
  ],
}

export const prayerWatchesBook = {
  '@type': 'Book',
  '@id': BOOK_PRAYER_WATCHES_ID,
  name: 'The Eight Prophetic Prayer Watches: Revised & Expanded Edition',
  author: { '@id': PERSON_ID },
  about: 'A 24-hour strategic guide to daily prayer',
}
