
export class NetworkHelper
{
    static get(url)
    {
        const BASE_URl = process.env.REACT_APP_BASE_API_URL;

        return fetch(BASE_URl + url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((page) => page.json())
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}