import { makeRequestClient } from '../client';

const request = makeRequestClient();

function getColors() {
    return request.get('colors');
}

export const colorsApi = { getColors };
