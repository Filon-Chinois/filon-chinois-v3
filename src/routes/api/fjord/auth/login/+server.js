import {supabaseClient} from "../../../../../lib/db.js";

export const POST = async ({ request, url }) => {
    const data = await request.json();

    const email = data.email;
    const password = data.password;

    const headers = { location: '/' };
    const errors = {};
    const values = { email, password };

    const { session, error } = await supabaseClient.auth.signIn({ email, password });

    if (error) {
        errors.form = error.message;
        return new Response({ errors,
            values },{
            status: 400
        })
    }

    if (session) {
        const response = await fetch(`${url.origin}/api/auth/callback`, {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            credentials: 'same-origin',
            body: JSON.stringify({ event: 'SIGNED_IN', session })
        });

        const cookies = response.headers
            .get('set-cookie')
            .split('SameSite=Lax, ')
            .map((cookie) => {
                if (!cookie.includes('SameSite=Lax')) {
                    cookie += 'SameSite=Lax';
                }
                return cookie;
            });
        headers['Set-Cookie'] = cookies;
    }
    return new Response(null, {
        status: 303,
        headers
    })
};