import { makeRequestClient } from '../client';

const request = makeRequestClient();

function getBrands() {
    return request.get('brands');
}

export const brandsApi = { getBrands };
