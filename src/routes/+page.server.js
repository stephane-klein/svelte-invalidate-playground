export async function load({ cookies }) {
    console.log('+page.server.js');
    return {
        session: cookies.get('test1')
    }
}
