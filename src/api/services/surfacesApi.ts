import { makeRequestClient } from '../client';

const request = makeRequestClient();

function getSurfaces() {
    return request.get('surfaces');
}

export const surfacesApi = { getSurfaces };
