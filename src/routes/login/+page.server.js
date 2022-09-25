import { redirect } from '@sveltejs/kit';

export async function load({ cookies }) {
    console.log('login/+page.server.js');
    cookies.set('test1', 'foobar', { path: '/'});
}
