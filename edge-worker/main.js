import { Cookies, SetCookie } from 'cookies';

export function onClientResponse(request, response) {

    let cookies = new Cookies(request.getHeader('Cookie'));
    let offlinePage = (cookies)
        ? cookies.get('offline-page') || 'notActive'
        : 'notActive'

    // Set Cookie if the offline page cookie still not active
    if (offlinePage === 'notActive') {
        let newCookie = new SetCookie({
            name: 'offline-page',
            value: 'active'
        })
        response.setHeader('Set-Cookie', newCookie)
    }
}