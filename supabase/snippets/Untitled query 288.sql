CREATE TABLE public.user(
  user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT not null,
  last_name TEXT not null,
  email TEXT unique not null,
  password TEXT not null,
  created_at timestamp default now(),
  updated_at timestamp default now()
)