export class NetworkHelper
{
    static get(url)
    {
        const BASE_URl = 'http://127.0.0.1:8000/api/';

        return fetch(BASE_URl + url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((page) =>
                page.json()
            )
    }
}