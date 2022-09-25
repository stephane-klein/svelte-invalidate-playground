import { redirect } from '@sveltejs/kit';

export async function load({ cookies }) {
    console.log('logout/+page.server.js');
    cookies.set('test1', '', { path: '/' });
}
