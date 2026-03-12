-- ═══════════════════════════════════════════════════════
-- THE CLARITY INSTITUTE — SUPABASE DATABASE SETUP
-- Run this in: Supabase Dashboard → SQL Editor → New Query
-- ═══════════════════════════════════════════════════════

-- 1. WAITLIST TABLE
create table if not exists waitlist (
  id uuid default gen_random_uuid() primary key,
  email text unique not null,
  created_at timestamptz default now()
);

-- 2. CONTACT SUBMISSIONS TABLE
create table if not exists contact_submissions (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  message text not null,
  interest text default 'cohort',
  status text default 'new',
  created_at timestamptz default now()
);

-- 3. USER PROFILES TABLE (auto-created on signup)
create table if not exists profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text,
  program text default 'cohort',
  enrolled_at timestamptz default now(),
  progress integer default 0
);

-- Auto-create profile on user signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, program)
  values (
    new.id,
    new.raw_user_meta_data->>'full_name',
    coalesce(new.raw_user_meta_data->>'program', 'waitlist')
  );
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- 4. ROW LEVEL SECURITY
alter table waitlist enable row level security;
alter table contact_submissions enable row level security;
alter table profiles enable row level security;

-- Waitlist: only server-side inserts (service role bypasses RLS)
create policy "Service role only" on waitlist
  for all using (false);

-- Contact: only server-side inserts
create policy "Service role only" on contact_submissions
  for all using (false);

-- Profiles: users can read/update their own
create policy "Users can view own profile" on profiles
  for select using (auth.uid() = id);

create policy "Users can update own profile" on profiles
  for update using (auth.uid() = id);

-- Done!
-- ═══════════════════════════════════════════════════════
