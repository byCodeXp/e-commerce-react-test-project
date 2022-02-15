import axios from 'axios';

const BASE_URL = 'http://localhost:4000/';

function makeClient() {
    return axios.create({
        baseURL: BASE_URL,
        timeout: 5000
    });
}

export function makeRequestClient() {
    const client = makeClient();

    return {
        get(url: string) {
            return client.get(url);
        }
    };
}
