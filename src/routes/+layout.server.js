export const load = async ({ locals }) => {
    return locals.user ? {
    session: {
        user: locals.user,
        accessToken: locals.accessToken,
        error: locals.error,
    },}
    : {session: {user: null, accessToken: null, error: null}};
};