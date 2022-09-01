import { handleAuth } from '@supabase/auth-helpers-sveltekit';
import { sequence } from '@sveltejs/kit/hooks';

export const handle = sequence(...handleAuth());

export const getSession = async (event) => {
    const { user, accessToken, error } = event.locals;
    return {user, accessToken, error}
}