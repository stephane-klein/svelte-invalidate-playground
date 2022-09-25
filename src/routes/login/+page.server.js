import { redirect } from '@sveltejs/kit';

export async function load({ cookies }) {
    cookies.set('test1', 'foobar', { path: '/'});
    throw redirect(302, '/');
}
