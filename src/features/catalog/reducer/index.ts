import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../productType';
import { getBrandsAsyncAction, getColorsAsyncAction, getProductsAsyncAction } from './actions';

interface State {
    products: Array<Product>;
    colors: Array<string>;
    brands: Array<string>;

    status: 'idle' | 'loading' | 'failed';
}

const initialState: State = {
    products: [],
    colors: [],
    brands: [],
    status: 'idle'
};

const catalogSlice = createSlice({
    name: 'CATALOG_SLICE',
    initialState,
    reducers: {},
    extraReducers: {
        // Get products
        [getProductsAsyncAction.pending.type]: (state) => {
            state.status = 'loading';
        },
        [getProductsAsyncAction.fulfilled.type]: (state, { payload } : PayloadAction<Product[]>) => {
            state.status = 'idle';
            state.products = payload;
        },
        [getProductsAsyncAction.rejected.type]: (state) => {
            state.status = 'failed';
        },
        // Get brands
        [getBrandsAsyncAction.pending.type]: (state) => {
            state.status = 'loading';
        },
        [getBrandsAsyncAction.fulfilled.type]: (state, { payload } : PayloadAction<string[]>) => {
            state.status = 'idle';
            state.brands = payload;
        },
        [getBrandsAsyncAction.rejected.type]: (state) => {
            state.status = 'failed';
        },
        // Get colors
        [getColorsAsyncAction.pending.type]: (state) => {
            state.status = 'loading';
        },
        [getColorsAsyncAction.fulfilled.type]: (state, { payload } : PayloadAction<string[]>) => {
            state.status = 'idle';
            state.colors = payload;
        },
        [getColorsAsyncAction.rejected.type]: (state) => {
            state.status = 'failed';
        }
    }
});

export const catalogReducer = catalogSlice.reducer;
