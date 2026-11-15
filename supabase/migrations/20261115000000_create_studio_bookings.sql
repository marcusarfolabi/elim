create table public.studio_bookings (
  id uuid primary key default gen_random_uuid(),
  service text not null check (
    service in (
      'Podcast Studio Setup',
      'Audio & Voice Recording',
      'Photography Sessions',
      'Videography & Video Production',
      'Content Creation & Social Media',
      'Editing & Post-Production',
      'Other'
    )
  ),
  session_duration text not null check (
    session_duration in ('Hourly', 'Half-Day', 'Full-Day')
  ),
  preferred_date date not null,
  preferred_time time,
  name text not null check (char_length(name) between 2 and 120),
  email text not null check (char_length(email) <= 254),
  phone text not null check (char_length(phone) between 10 and 32),
  project_details text not null check (
    char_length(project_details) between 10 and 3000
  ),
  status text not null default 'pending' check (
    status in ('pending', 'confirmed', 'cancelled')
  ),
  created_at timestamptz not null default now()
);

alter table public.studio_bookings enable row level security;

grant insert on public.studio_bookings to anon;

create policy "Allow public studio booking submissions"
  on public.studio_bookings
  for insert
  to anon
  with check (true);
