import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { name, email, message, interest } = req.body
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' })
  }

  const { error } = await supabase
    .from('contact_submissions')
    .insert({
      name,
      email,
      message,
      interest,
      created_at: new Date().toISOString(),
      status: 'new'
    })

  if (error) {
    return res.status(500).json({ error: 'Could not submit. Please try again.' })
  }

  return res.status(200).json({ success: true })
}
