-- ============================================
-- THE CLARITY INSTITUTE — SUPABASE SCHEMA
-- Run this in: Supabase Dashboard → SQL Editor
-- ============================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ─── PROFILES (extends Supabase auth.users) ───
create table public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  full_name text,
  avatar_url text,
  enrolled_cohort boolean default false,
  role text default 'student' check (role in ('student', 'admin')),
  created_at timestamptz default now()
);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ─── WAITLIST ───
create table public.waitlist (
  id uuid default uuid_generate_v4() primary key,
  email text unique not null,
  name text,
  joined_at timestamptz default now()
);

-- ─── CONTACT SUBMISSIONS ───
create table public.contact_submissions (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text not null,
  subject text,
  message text not null,
  submitted_at timestamptz default now(),
  read boolean default false
);

-- ─── PROGRAMS ───
create table public.programs (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text,
  price_cents integer not null default 0,
  duration_weeks integer,
  is_active boolean default true,
  sort_order integer default 0,
  created_at timestamptz default now()
);

-- ─── LESSONS ───
create table public.lessons (
  id uuid default uuid_generate_v4() primary key,
  program_id uuid references public.programs(id) on delete cascade,
  title text not null,
  description text,
  content_url text,
  video_url text,
  duration_minutes integer,
  is_free_preview boolean default false,
  sort_order integer default 0,
  week_number integer default 1,
  created_at timestamptz default now()
);

-- ─── ENROLLMENTS ───
create table public.enrollments (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) on delete cascade,
  program_id uuid references public.programs(id) on delete cascade,
  enrolled_at timestamptz default now(),
  status text default 'active' check (status in ('active', 'paused', 'completed')),
  unique(user_id, program_id)
);

-- ─── LESSON PROGRESS ───
create table public.lesson_progress (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) on delete cascade,
  lesson_id uuid references public.lessons(id) on delete cascade,
  completed_at timestamptz default now(),
  unique(user_id, lesson_id)
);

-- ─── ROW LEVEL SECURITY ───
alter table public.profiles enable row level security;
alter table public.waitlist enable row level security;
alter table public.contact_submissions enable row level security;
alter table public.programs enable row level security;
alter table public.lessons enable row level security;
alter table public.enrollments enable row level security;
alter table public.lesson_progress enable row level security;

-- Profiles: users can only read/edit their own
create policy "Users can view own profile" on public.profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);

-- Waitlist: anyone can insert
create policy "Anyone can join waitlist" on public.waitlist for insert with check (true);

-- Contact: anyone can submit
create policy "Anyone can submit contact" on public.contact_submissions for insert with check (true);

-- Programs: anyone can view active programs
create policy "Anyone can view programs" on public.programs for select using (is_active = true);

-- Lessons: enrolled users can view, free previews are public
create policy "Enrolled users can view lessons" on public.lessons for select using (
  is_free_preview = true or
  exists (
    select 1 from public.enrollments
    where enrollments.user_id = auth.uid()
    and enrollments.program_id = lessons.program_id
    and enrollments.status = 'active'
  )
);

-- Enrollments: users see their own
create policy "Users can view own enrollments" on public.enrollments for select using (auth.uid() = user_id);
create policy "Users can insert own enrollments" on public.enrollments for insert with check (auth.uid() = user_id);

-- Progress: users manage their own
create policy "Users can view own progress" on public.lesson_progress for select using (auth.uid() = user_id);
create policy "Users can upsert own progress" on public.lesson_progress for insert with check (auth.uid() = user_id);
create policy "Users can update own progress" on public.lesson_progress for update using (auth.uid() = user_id);

-- ─── SEED DATA ───
insert into public.programs (title, description, price_cents, duration_weeks, sort_order) values
('The Clarity Cohort', '8-week live group program to open and activate your third eye through community, practice and guided teachings.', 44400, 8, 1),
('Cohort + Mentorship Bundle', 'The full cohort experience combined with 2 private 1:1 mentorship sessions for deeper personal guidance.', 77700, 8, 2),
('90-Day Immersion', 'The most complete offering — a 3-month personal container with bi-weekly 1:1 calls, unlimited messaging, and a custom curriculum.', 144400, 12, 3);

-- Seed lessons for Cohort
with prog as (select id from public.programs where title = 'The Clarity Cohort' limit 1)
insert into public.lessons (program_id, title, description, week_number, sort_order, is_free_preview) values
((select id from prog), 'Welcome to The Clarity Institute', 'An orientation to the program, your community, and what to expect on this journey.', 1, 1, true),
((select id from prog), 'Understanding the Third Eye', 'The anatomy of intuition — what the third eye is, how it works, and why it matters.', 1, 2, true),
((select id from prog), 'Your Daily Practice Foundation', 'Building a sustainable daily practice that will anchor your awakening.', 2, 3, false),
((select id from prog), 'Breathwork for Intuitive Opening', 'Pranayama techniques specifically calibrated to open the ajna chakra.', 2, 4, false),
((select id from prog), 'Third Eye Activation Meditation', 'A 45-minute guided meditation for activating and expanding your inner vision.', 3, 5, false),
((select id from prog), 'Energy Clearing & Protection', 'How to clear your field and maintain energetic boundaries as you open.', 3, 6, false),
((select id from prog), 'Dream Journaling & Symbolism', 'Using the dream space as a portal for intuitive downloads and messages.', 4, 7, false),
((select id from prog), 'Reading the Subtle Body', 'Learning to perceive and interpret subtle energies, sensations and signals.', 4, 8, false),
((select id from prog), 'Grounding Your Gifts', 'How to stay rooted and embodied as your perception expands.', 5, 9, false),
((select id from prog), 'Integration: Living Intuitively', 'Bringing your practice off the cushion and into every area of your life.', 6, 10, false);
