CREATE TABLE public.profile (
    profile_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL UNIQUE,
    bio TEXT,
    avatar_url TEXT,
    created_at TIMESTAMP DEFAULT NOW(),

    CONSTRAINT fk_profile_user
        FOREIGN KEY (user_id)
        REFERENCES public.users(user_id)
        ON DELETE CASCADE
);