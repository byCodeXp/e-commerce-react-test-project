import { makeRequestClient } from '../client';

const request = makeRequestClient();

function getProducts() {
    return request.get('products');
}

export const productsApi = { getProducts };
