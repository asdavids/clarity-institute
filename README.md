# 🌿 The Clarity Institute — Deployment Guide

This is a fully functional multi-page web app with:
- ✅ Landing page (marketing + enrollment)
- ✅ User authentication (sign up / sign in)
- ✅ Email waitlist capture
- ✅ Contact form
- ✅ Student dashboard
- ✅ Course viewer with locked lessons + progress tracking

**Stack:** Vanilla JS + Vite (frontend) · Supabase (backend, auth, database) · Netlify (hosting)

---

## STEP 1 — Create a Supabase project (free, ~5 min)

1. Go to **https://supabase.com** → Sign up (free)
2. Click **"New Project"**
3. Choose a name: `clarity-institute`, set a strong DB password, pick a region near you
4. Wait ~2 min for the project to spin up
5. Go to **SQL Editor** (left sidebar) → click **"New query"**
6. Copy the entire contents of `supabase/migrations/001_schema.sql` and paste it in
7. Click **Run** — this creates all your tables, security rules, and seed data

### Get your API keys
1. Go to **Settings → API** in your Supabase project
2. Copy:
   - **Project URL** (looks like `https://xxxx.supabase.co`)
   - **anon public** key (long string starting with `eyJ`)

---

## STEP 2 — Add your Supabase keys

Open `src/lib/supabase.js` and replace these two lines:

```js
const SUPABASE_URL = 'YOUR_SUPABASE_URL'
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY'
```

With your actual values:

```js
const SUPABASE_URL = 'https://yourproject.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5...'
```

---

## STEP 3 — Deploy to Netlify (free, ~5 min)

### Option A: Drag & Drop (easiest)
1. Run `npm install && npm run build` in this folder
2. Go to **https://netlify.com** → Sign up (free)
3. Drag the `dist/` folder onto the Netlify dashboard
4. Your site is live! You'll get a URL like `https://clarity-institute-abc123.netlify.app`

### Option B: GitHub (recommended for updates)
1. Push this folder to a GitHub repo
2. Go to **https://netlify.com** → "Add new site" → "Import from Git"
3. Connect your GitHub → select the repo
4. Build settings are auto-detected from `netlify.toml`
5. Click **Deploy** — done!

### Set your custom domain (optional)
- In Netlify: Site settings → Domain management → Add custom domain
- Point your domain's DNS to Netlify's nameservers

---

## STEP 4 — Configure Supabase Auth redirect URLs

1. In Supabase → **Authentication → URL Configuration**
2. Set **Site URL** to your Netlify URL (e.g. `https://your-site.netlify.app`)
3. Add to **Redirect URLs**: `https://your-site.netlify.app/**`

---

## STEP 5 — Enable email confirmations (optional but recommended)

1. Supabase → **Authentication → Email Templates**
2. Customize the confirmation email with your branding
3. Under **Settings**, enable "Confirm email" if you want verified users only

---

## Managing your data

### View submissions
- **Supabase Dashboard → Table Editor**
- `waitlist` — email capture signups
- `contact_submissions` — contact form messages (mark `read = true` when handled)
- `profiles` — all registered users
- `enrollments` — who is enrolled in what

### Enroll a student manually
In Supabase SQL Editor:
```sql
INSERT INTO enrollments (user_id, program_id)
VALUES ('user-uuid-here', 'program-uuid-here');
```

### Add a lesson
In Supabase → Table Editor → `lessons` → Insert row
Or via SQL:
```sql
INSERT INTO lessons (program_id, title, description, week_number, sort_order, duration_minutes)
VALUES ('program-uuid', 'Your Lesson Title', 'Description here', 3, 11, 25);
```

### Add video content
Update the `video_url` field in the `lessons` table with your video embed URLs
(YouTube embed, Vimeo, or Loom links work great).

---

## Adding payments (when ready)

The enrollment flow currently works without payment. To add Stripe:
1. Create a Stripe account → get API keys
2. Use **Stripe Checkout** or **Payment Links** for each program
3. Use a **Stripe Webhook** → Supabase Edge Function to auto-enroll on payment
4. Or manually enroll students via SQL after payment

---

## File structure

```
clarity-institute/
├── index.html          ← Landing page (marketing)
├── dashboard.html      ← Student dashboard (auth required)
├── course.html         ← Course lesson viewer (auth required)
├── login.html          ← Standalone login (optional)
├── src/
│   └── lib/
│       └── supabase.js ← All backend calls (edit API keys here)
├── supabase/
│   └── migrations/
│       └── 001_schema.sql ← Run this in Supabase SQL Editor
├── netlify.toml        ← Netlify build config
├── vite.config.js      ← Build config
└── package.json
```

---

## Need help?

- Supabase docs: https://supabase.com/docs
- Netlify docs: https://docs.netlify.com
- Vite docs: https://vitejs.dev

Built with 🌿 for The Clarity Institute
