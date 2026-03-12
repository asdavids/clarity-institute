import { createClient } from '@supabase/supabase-js'

// Replace these with your actual Supabase project values
// Found at: https://app.supabase.com → your project → Settings → API
const SUPABASE_URL = 'YOUR_SUPABASE_URL'
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// Auth helpers
export async function signUp(email, password, fullName) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { full_name: fullName } }
  })
  return { data, error }
}

export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  return { data, error }
}

export async function signOut() {
  return await supabase.auth.signOut()
}

export async function getUser() {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

export async function getProfile(userId) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()
  return { data, error }
}

// Email capture / waitlist
export async function joinWaitlist(email, name) {
  const { data, error } = await supabase
    .from('waitlist')
    .insert([{ email, name, joined_at: new Date().toISOString() }])
  return { data, error }
}

// Contact form
export async function submitContact(name, email, message, subject) {
  const { data, error } = await supabase
    .from('contact_submissions')
    .insert([{ name, email, message, subject, submitted_at: new Date().toISOString() }])
  return { data, error }
}

// Enrollment
export async function enrollInProgram(userId, programId) {
  const { data, error } = await supabase
    .from('enrollments')
    .insert([{ user_id: userId, program_id: programId, enrolled_at: new Date().toISOString(), status: 'active' }])
  return { data, error }
}

export async function getUserEnrollments(userId) {
  const { data, error } = await supabase
    .from('enrollments')
    .select('*, programs(*)')
    .eq('user_id', userId)
  return { data, error }
}

// Courses / Lessons
export async function getPrograms() {
  const { data, error } = await supabase
    .from('programs')
    .select('*')
    .order('sort_order')
  return { data, error }
}

export async function getLessons(programId) {
  const { data, error } = await supabase
    .from('lessons')
    .select('*')
    .eq('program_id', programId)
    .order('sort_order')
  return { data, error }
}

export async function markLessonComplete(userId, lessonId) {
  const { data, error } = await supabase
    .from('lesson_progress')
    .upsert([{ user_id: userId, lesson_id: lessonId, completed_at: new Date().toISOString() }])
  return { data, error }
}

export async function getLessonProgress(userId, programId) {
  const { data, error } = await supabase
    .from('lesson_progress')
    .select('lesson_id')
    .eq('user_id', userId)
  return { data, error }
}
