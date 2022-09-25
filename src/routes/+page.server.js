export async function load({ cookies }) {
    return {
        session: cookies.get('test1')
    }
}
