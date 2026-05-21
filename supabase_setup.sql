-- LAVA Commercial Quoting Simulator Supabase setup
-- Run this in Supabase SQL Editor.
-- Trainer / Team Lead login code configured here: LAVA2026!

create extension if not exists pgcrypto;

create table if not exists public.lava_staff_codes (
  id boolean primary key default true,
  code_hash text not null,
  updated_at timestamptz not null default now(),
  constraint lava_staff_codes_single_row check (id = true)
);

insert into public.lava_staff_codes (id, code_hash, updated_at)
values (true, crypt('LAVA2026!', gen_salt('bf')), now())
on conflict (id) do update
set code_hash = excluded.code_hash,
    updated_at = now();

create table if not exists public.lava_profiles (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null unique,
  role text not null default 'VA' check (role in ('VA','Trainer','Team Lead')),
  first_login_at timestamptz not null default now(),
  last_login_at timestamptz not null default now(),
  login_count integer not null default 1,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint lava_profiles_email_domain check (lower(email) like '%@lavatraining.com')
);

create table if not exists public.lava_quote_attempts (
  id uuid primary key default gen_random_uuid(),
  attempt_id text not null unique,
  profile_email text not null,
  name text not null,
  email text not null,
  role text not null default 'VA',
  line text not null,
  scenario_id text not null,
  scenario_name text not null,
  difficulty text not null,
  score integer not null,
  result text not null,
  time_secs integer not null default 0,
  total_fields integer not null default 0,
  correct_count integer not null default 0,
  field_results jsonb not null default '[]'::jsonb,
  submitted_data jsonb not null default '{}'::jsonb,
  declaration_data jsonb not null default '{}'::jsonb,
  completed_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint lava_attempts_profile_email_domain check (lower(profile_email) like '%@lavatraining.com'),
  constraint lava_attempts_email_domain check (lower(email) like '%@lavatraining.com')
);

create table if not exists public.lava_trainer_reviews (
  id uuid primary key default gen_random_uuid(),
  attempt_id text not null unique references public.lava_quote_attempts(attempt_id) on delete cascade,
  reviewer_name text not null,
  reviewer_email text not null,
  reviewer_role text not null check (reviewer_role in ('Trainer','Team Lead')),
  notes text not null default '',
  status text not null default 'Reviewed' check (status in ('Reviewed','Needs Revision','Great Work')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint lava_reviews_email_domain check (lower(reviewer_email) like '%@lavatraining.com')
);

create index if not exists idx_lava_profiles_last_login on public.lava_profiles (last_login_at desc);
create index if not exists idx_lava_attempts_email on public.lava_quote_attempts (email);
create index if not exists idx_lava_attempts_completed on public.lava_quote_attempts (completed_at desc);
create index if not exists idx_lava_attempts_line on public.lava_quote_attempts (line);

alter table public.lava_staff_codes enable row level security;
alter table public.lava_profiles enable row level security;
alter table public.lava_quote_attempts enable row level security;
alter table public.lava_trainer_reviews enable row level security;

-- Public dashboard can show who has logged in. Quote outputs are retrieved through code-checked functions only.
drop policy if exists "Public can view profile board" on public.lava_profiles;
create policy "Public can view profile board"
on public.lava_profiles
for select
to anon, authenticated
using (true);

-- Required for RPC execution from a static frontend.
grant usage on schema public to anon, authenticated;
grant select on public.lava_profiles to anon, authenticated;
grant execute on all functions in schema public to anon, authenticated;

create or replace function public.lava_validate_staff_code(p_login_code text)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.lava_staff_codes
    where id = true
      and code_hash = crypt(coalesce(p_login_code, ''), code_hash)
  );
$$;

create or replace function public.lava_record_login(
  p_full_name text,
  p_email text,
  p_role text default 'VA',
  p_login_code text default null
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_profile public.lava_profiles;
  v_role text := coalesce(nullif(trim(p_role), ''), 'VA');
  v_email text := lower(trim(p_email));
begin
  if trim(coalesce(p_full_name, '')) = '' then
    raise exception 'Full name is required';
  end if;

  if v_email not like '%@lavatraining.com' then
    raise exception 'Invalid email domain';
  end if;

  if v_role not in ('VA','Trainer','Team Lead') then
    raise exception 'Invalid role';
  end if;

  if v_role <> 'VA' and not public.lava_validate_staff_code(p_login_code) then
    raise exception 'Invalid staff login code';
  end if;

  insert into public.lava_profiles (full_name, email, role, first_login_at, last_login_at, login_count, updated_at)
  values (trim(p_full_name), v_email, v_role, now(), now(), 1, now())
  on conflict (email) do update
  set full_name = excluded.full_name,
      role = excluded.role,
      last_login_at = now(),
      login_count = public.lava_profiles.login_count + 1,
      updated_at = now()
  returning * into v_profile;

  return to_jsonb(v_profile);
end;
$$;

create or replace function public.lava_attempt_to_json(p_attempt_id text)
returns jsonb
language sql
stable
security definer
set search_path = public
as $$
  select jsonb_build_object(
    'id', a.attempt_id,
    'name', a.name,
    'email', a.email,
    'role', a.role,
    'scenarioId', a.scenario_id,
    'scenarioName', a.scenario_name,
    'line', a.line,
    'difficulty', a.difficulty,
    'score', a.score,
    'result', a.result,
    'date', a.completed_at,
    'timeSecs', a.time_secs,
    'fieldResults', a.field_results,
    'totalFields', a.total_fields,
    'correctCount', a.correct_count,
    'submittedData', a.submitted_data,
    'declaration', a.declaration_data,
    'reviewNotes', coalesce(r.notes, ''),
    'reviewStatus', coalesce(r.status, ''),
    'reviewedBy', coalesce(r.reviewer_name, ''),
    'reviewedAt', r.updated_at
  )
  from public.lava_quote_attempts a
  left join public.lava_trainer_reviews r on r.attempt_id = a.attempt_id
  where a.attempt_id = p_attempt_id;
$$;

create or replace function public.lava_record_attempt(
  p_email text,
  p_attempt jsonb
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_email text := lower(trim(p_email));
  v_attempt public.lava_quote_attempts;
begin
  if v_email not like '%@lavatraining.com' then
    raise exception 'Invalid email domain';
  end if;

  if not exists (select 1 from public.lava_profiles where email = v_email) then
    raise exception 'Login profile not found';
  end if;

  insert into public.lava_quote_attempts (
    attempt_id, profile_email, name, email, role, line, scenario_id, scenario_name,
    difficulty, score, result, time_secs, total_fields, correct_count,
    field_results, submitted_data, declaration_data, completed_at, updated_at
  )
  values (
    p_attempt->>'id',
    v_email,
    coalesce(p_attempt->>'name', ''),
    lower(coalesce(p_attempt->>'email', v_email)),
    coalesce(p_attempt->>'role', 'VA'),
    coalesce(p_attempt->>'line', ''),
    coalesce(p_attempt->>'scenarioId', ''),
    coalesce(p_attempt->>'scenarioName', ''),
    coalesce(p_attempt->>'difficulty', ''),
    coalesce((p_attempt->>'score')::integer, 0),
    coalesce(p_attempt->>'result', ''),
    coalesce((p_attempt->>'timeSecs')::integer, 0),
    coalesce((p_attempt->>'totalFields')::integer, 0),
    coalesce((p_attempt->>'correctCount')::integer, 0),
    coalesce(p_attempt->'fieldResults', '[]'::jsonb),
    coalesce(p_attempt->'submittedData', '{}'::jsonb),
    coalesce(p_attempt->'declaration', '{}'::jsonb),
    coalesce((p_attempt->>'date')::timestamptz, now()),
    now()
  )
  on conflict (attempt_id) do update
  set score = excluded.score,
      result = excluded.result,
      time_secs = excluded.time_secs,
      total_fields = excluded.total_fields,
      correct_count = excluded.correct_count,
      field_results = excluded.field_results,
      submitted_data = excluded.submitted_data,
      declaration_data = excluded.declaration_data,
      completed_at = excluded.completed_at,
      updated_at = now()
  returning * into v_attempt;

  return public.lava_attempt_to_json(v_attempt.attempt_id);
end;
$$;

create or replace function public.lava_my_attempts(p_email text)
returns setof jsonb
language sql
stable
security definer
set search_path = public
as $$
  select public.lava_attempt_to_json(a.attempt_id)
  from public.lava_quote_attempts a
  where lower(a.email) = lower(trim(p_email))
  order by a.completed_at desc;
$$;

create or replace function public.lava_trainer_attempts(p_login_code text)
returns setof jsonb
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.lava_validate_staff_code(p_login_code) then
    raise exception 'Invalid staff login code';
  end if;

  return query
  select public.lava_attempt_to_json(a.attempt_id)
  from public.lava_quote_attempts a
  order by a.completed_at desc;
end;
$$;

create or replace function public.lava_save_review(
  p_login_code text,
  p_attempt_id text,
  p_reviewer_name text,
  p_reviewer_email text,
  p_reviewer_role text,
  p_notes text,
  p_status text default 'Reviewed'
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_review public.lava_trainer_reviews;
begin
  if not public.lava_validate_staff_code(p_login_code) then
    raise exception 'Invalid staff login code';
  end if;

  if p_reviewer_role not in ('Trainer','Team Lead') then
    raise exception 'Invalid reviewer role';
  end if;

  insert into public.lava_trainer_reviews (
    attempt_id, reviewer_name, reviewer_email, reviewer_role, notes, status, updated_at
  )
  values (
    p_attempt_id,
    trim(p_reviewer_name),
    lower(trim(p_reviewer_email)),
    p_reviewer_role,
    coalesce(p_notes, ''),
    coalesce(nullif(p_status, ''), 'Reviewed'),
    now()
  )
  on conflict (attempt_id) do update
  set reviewer_name = excluded.reviewer_name,
      reviewer_email = excluded.reviewer_email,
      reviewer_role = excluded.reviewer_role,
      notes = excluded.notes,
      status = excluded.status,
      updated_at = now()
  returning * into v_review;

  return to_jsonb(v_review);
end;
$$;

create or replace function public.lava_public_dashboard()
returns table (
  full_name text,
  email text,
  role text,
  last_login_at timestamptz,
  attempts_count bigint,
  last_quote_at timestamptz,
  last_line text,
  latest_score integer,
  latest_result text
)
language sql
stable
security definer
set search_path = public
as $$
  select
    p.full_name,
    p.email,
    p.role,
    p.last_login_at,
    count(a.id) as attempts_count,
    max(a.completed_at) as last_quote_at,
    (array_agg(a.line order by a.completed_at desc) filter (where a.id is not null))[1] as last_line,
    (array_agg(a.score order by a.completed_at desc) filter (where a.id is not null))[1] as latest_score,
    (array_agg(a.result order by a.completed_at desc) filter (where a.id is not null))[1] as latest_result
  from public.lava_profiles p
  left join public.lava_quote_attempts a on lower(a.email) = lower(p.email)
  where p.role = 'VA'
  group by p.full_name, p.email, p.role, p.last_login_at
  order by p.last_login_at desc;
$$;

grant execute on function public.lava_validate_staff_code(text) to anon, authenticated;
grant execute on function public.lava_record_login(text, text, text, text) to anon, authenticated;
grant execute on function public.lava_record_attempt(text, jsonb) to anon, authenticated;
grant execute on function public.lava_attempt_to_json(text) to anon, authenticated;
grant execute on function public.lava_my_attempts(text) to anon, authenticated;
grant execute on function public.lava_trainer_attempts(text) to anon, authenticated;
grant execute on function public.lava_save_review(text, text, text, text, text, text, text) to anon, authenticated;
grant execute on function public.lava_public_dashboard() to anon, authenticated;
