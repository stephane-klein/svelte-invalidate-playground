import { redirect } from '@sveltejs/kit';

export async function load({ cookies }) {
    cookies.set('test1', '', { path: '/' });
    throw redirect(302, '/');
}
